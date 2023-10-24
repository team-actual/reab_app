import { Image, StyleSheet, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading2 } from '../../../components/Text';
import { RoundedPrimaryButton } from '../../../components/Buttons';
import smilingFace from '../../../../assets/gifs/smiling-face.gif';

export default function RecoveryPasswordSuccess({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.gif} source={smilingFace} resizeMode="cover" />
      </View>

      <Heading2
        style={{ textAlign: 'center' }}
        text="Parabéns sua conta foi recuperada com sucesso!"
      />

      <RoundedPrimaryButton
        text="Voltar para login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.light[4],
    justifyContent: 'center',
    padding: 16,
    gap: 32,
  },
  gif: {
    width: 150,
    height: 150,
  },
});
