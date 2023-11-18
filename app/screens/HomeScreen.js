import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from './../context/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Bem-vindo!</Text>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;