import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading1, Subtitle } from '../../../components/Text';
import { PrimaryButton } from '../../../components/Buttons';
import { ReabPasswordInput, ReabTextInput } from '../../../components/Inputs';
import { useState } from 'react';
import { cpfMask } from '../../../helpers/mask';

export default function RecoveryPassword({ navigation }) {
  const [formData, setFormData] = useState({
    password: '',
    passwordError: '',
  });

  return (
    <View style={styles.container}>
      <Heading1 text="Crie uma nova senha" />
      <Subtitle text="não ultilize senhas já cadastradas" />

      <View style={{ gap: 16, marginTop: 32 }}>
        <ReabPasswordInput
          placeholder="Digite sua Senha"
          value={formData.password}
          onChangeText={(value) =>
            setFormData({ ...formData, password: value })
          }
          error={formData.passwordError}
        />

        <PrimaryButton
          text="Continuar"
          onPress={() => navigation.navigate('RecoveryPasswordSuccess')}
        />
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
