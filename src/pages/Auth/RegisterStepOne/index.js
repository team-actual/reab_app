import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading1 } from '../../../components/Text';
import { PrimaryButton } from '../../../components/Buttons';
import { ReabSelectInput, ReabTextInput } from '../../../components/Inputs';
import { useEffect, useState } from 'react';
import { cpfMask } from '../../../helpers/mask';

export default function RegisterStepOne({ navigation }) {
  const [formData, setFormData] = useState({
    cpf: '',
    clinica: '',
  });

  const [clinica, setClinica] = useState('');

  useEffect(() => {
    setFormData({ ...formData, clinica: clinica });

    console.log(formData);
  }, [clinica]);

  return (
    <View style={styles.container}>
      <Heading1 text="Bem-vindo(a)! Vamos começar?" />

      <View style={{ marginTop: 32, gap: 8 }}>
        <ReabTextInput
          placeholder="Digite seu CPF"
          value={formData.cpf}
          onChangeText={(value) =>
            setFormData({ ...formData, cpf: cpfMask(value) })
          }
          error={formData.cpfError}
        />

        <ReabSelectInput
          label="Selecione uma clínica"
          items={['clínica 1', 'clínica 2']}
          setItem={setClinica}
        />

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              backgroundColor: lightTheme.colors.transparent,
              paddingVertical: 8,
              borderRadius: 8,
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
              Li e concordo com os termos de uso
            </Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton
          text="Continuar"
          onPress={() => navigation.navigate('RegisterStepTwo')}
        />

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
