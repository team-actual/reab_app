import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading1 } from '../../../components/Text';
import { PrimaryButton } from '../../../components/Buttons';
import { ReabPasswordInput, ReabTextInput } from '../../../components/Inputs';
import { useState } from 'react';

export default function RegisterStepTwo({ navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    emailError: '',
    name: '',
    nameError: '',
    password: '',
    passwordError: '',
  });

  function handleRegisterAccount() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainNavigation' }],
    });

    console.log('Criou a conta');
  }

  return (
    <View style={styles.container}>
      <Heading1 text="Bem-vindo(a)! Vamos começar?" />

      <View style={{ marginTop: 32, gap: 8 }}>
        <ReabTextInput
          placeholder="Digite seu E-mail"
          value={formData.email}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
          error={formData.cpfError}
        />

        <ReabTextInput
          placeholder="Como devemos te chamar?"
          value={formData.name}
          onChangeText={(value) => setFormData({ ...formData, name: value })}
          error={formData.cpfError}
        />

        <ReabPasswordInput
          placeholder="Digite sua Senha"
          value={formData.password}
          onChangeText={(value) =>
            setFormData({ ...formData, password: value })
          }
          error={formData.passwordError}
        />

        <PrimaryButton text="Continuar" onPress={handleRegisterAccount} />

        <TouchableOpacity
          style={{
            backgroundColor: lightTheme.colors.transparent,
            paddingVertical: 8,
            borderRadius: 8,
            width: '100%',
            flexDirection: 'row',
            gap: 4,
          }}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.8}
        >
          <Text
            style={{
              color: lightTheme.colors.dark[3],
              fontWeight: '500',
              fontSize: 14,
            }}
          >
            Já tem uma conta?
          </Text>
          <Text style={{ color: lightTheme.colors.primary.base }}>
            Fazer login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.light[4],
    padding: 16,
  },
});
