import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading1, Subtitle } from '../../../components/Text';
import { PrimaryButton } from '../../../components/Buttons';
import { ReabTextInput } from '../../../components/Inputs';
import { useState } from 'react';
import { cpfMask } from '../../../helpers/mask';

export default function RecoveryAccessStepOne({ navigation }) {
  const [formData, setFormData] = useState({
    cpf: '',
    cpfError: '',
  });

  return (
    <View style={styles.container}>
      <Heading1 text="Adicione  os dados cadastrados" />
      <Subtitle text="Vamos enviar um e-mail de recuperação" />

      <View
        style={{
          marginTop: 32,
          gap: 8,
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <ReabTextInput
          placeholder="Digite seu CPF"
          value={formData.cpf}
          onChangeText={(value) =>
            setFormData({ ...formData, cpf: cpfMask(value) })
          }
          error={formData.cpfError}
        />

        <View style={{ gap: 8, marginBottom: 16 }}>
          <PrimaryButton
            text="Continuar"
            onPress={() => navigation.navigate('RecoveryAccessStepTwo')}
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
            onPress={() => navigation.navigate('RegisterStepOne')}
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
