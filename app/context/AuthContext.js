import axios from 'axios';
import React, { createContext, useState } from 'react';
import {setStorageItemAsync} from '../storage/useStorage';
import { Platform } from 'react-native';

export const AuthContext = createContext();

const BASE_URL = 'http://54.145.186.96/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const signIn = async (email, password) => {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email: email,
      password: password,
    }, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.status == 200) {
      setUser({ email });
      setToken(response.data.token);

      setStorageItemAsync('token', response.data.token);
      setStorageItemAsync('user', {'email': email});
    }
  };

  const signOut = () => {
    setUser(null);
    setToken(null);

    // set items null
    setStorageItemAsync('token');
    setStorageItemAsync('user');
  };

  const isAuthenticated = () => {
    React.useEffect(() => {
      if (Platform.OS === 'web') {
        try {
          if (typeof localStorage !== 'undefined') {
            setToken(localStorage.getItem('token'));
            setUser(localStorage.getItem('user'));
          }
        } catch (e) {
          console.error('Local storage is unavailable:', e);
        }
      } else {
        SecureStore.getItemAsync('token').then(value => {
          setToken(value);
        });
        
        SecureStore.getItemAsync('user').then(value => {;
          setUser(value);
        });
      }
    }, []);

    return token == 'undefined' || !token || token == null ? false : true;
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};