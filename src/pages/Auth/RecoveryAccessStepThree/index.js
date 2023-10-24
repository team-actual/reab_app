import { Image, StyleSheet, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading2, Subtitle } from '../../../components/Text';
import { RoundedPrimaryButton } from '../../../components/Buttons';
import starStruck from '../../../../assets/gifs/star-struck.gif';

export default function RecoveryAccessStepThree({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.gif} source={starStruck} resizeMode="cover" />
      </View>

      <Heading2
        style={{ textAlign: 'center' }}
        text="E-mail de recuperação enviado, confira seu e-mail."
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
