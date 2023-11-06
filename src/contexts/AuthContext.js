import { createContext, useEffect, useState } from 'react';
import authService from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ token, setToken ] = useState('');

  const navigation = useNavigation();

  const login = async (cpf, password) => {
    const { user, token } = await authService.handleLogin(cpf, password);
    
    if (user) {
      setUser(user);
      await AsyncStorage.setItem('reab_api_token', token);
      await AsyncStorage.setItem('user_id', user.id);
      setToken(token);
    }
    
    setIsLoading(false);
  }

  const logout = async () => {
    setUser(null);
    setToken(null);
    setIsLoading(false);
    await AsyncStorage.setItem('reab_api_token', null);
    await AsyncStorage.setItem('user_id', null);

    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  useEffect(async () => {
    const token = await AsyncStorage.getItem('reab_api_token');
    const user_id = await AsyncStorage.getItem('user_id');

    if (token) {
      
      setToken(token);

      if (user_id) {
        const user = authService.getUser(user_id);
  
        setUser(user);
      }
    } else {
      logout();
    }

    setIsLoading(false);
  });

  return (
    <AuthContext.Provider value={{ user, token, login, logout}}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  )
}
