import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading1 } from '../../../components/Text';
import { PrimaryButton } from '../../../components/Buttons';
import { ReabPasswordInput, ReabTextInput } from '../../../components/Inputs';
import { useState } from 'react';
import { cpfMask } from '../../../helpers/mask';

export default function Login({ navigation }) {
  const [formData, setFormData] = useState({
    cpf: '',
    password: '',
    cpfError: '',
    passwordError: '',
  });

  function handleSignIn() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainNavigation' }],
    });
    console.log('login');
  }

  return (
    <View style={styles.container}>
      <Heading1 text="Bem vindo (a) de volta!" />

      <View style={{ marginTop: 32, gap: 8 }}>
        <ReabTextInput
          placeholder="Digite seu CPF"
          value={formData.cpf}
          onChangeText={(value) =>
            setFormData({ ...formData, cpf: cpfMask(value) })
          }
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

        <TouchableOpacity
          style={{
            backgroundColor: lightTheme.colors.transparent,
            paddingVertical: 8,
            borderRadius: 8,
            width: '50%',
          }}
          onPress={() => navigation.navigate('RecoveryAccessStepOne')}
          activeOpacity={0.8}
        >
          <Text
            style={{
              color: lightTheme.colors.dark[3],
              fontWeight: '500',
              fontSize: 14,
            }}
          >
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <PrimaryButton text="Continuar" onPress={handleSignIn} />

        <TouchableOpacity
          style={{
            backgroundColor: lightTheme.colors.transparent,
            paddingVertical: 8,
            borderRadius: 8,
            width: '100%',
            flexDirection: 'row',
            gap: 4,
          }}
          onPress={() => navigation.navigate('Terms')}
          activeOpacity={0.8}
        >
          <Text
            style={{
              color: lightTheme.colors.dark[3],
              fontWeight: '500',
              fontSize: 14,
            }}
          >
            Não tem uma conta?
          </Text>
          <Text style={{ color: lightTheme.colors.primary.base }}>
            Criar conta
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
