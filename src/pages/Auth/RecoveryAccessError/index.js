import { Image, StyleSheet, Text, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading1, Heading2, Subtitle } from '../../../components/Text';
import {
  RoundedOutlineButton,
  RoundedPrimaryButton,
} from '../../../components/Buttons';
import faceInClouds from '../../../../assets/gifs/face-in-clouds.gif';

export default function RecoveryAccessError({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 16,
          flex: 1,
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <View>
          <Heading1
            text="Opss!"
            style={{ color: lightTheme.colors.feedback.error }}
          />
          <Subtitle text="Não existe dados associados a esse CPF" />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.gif} source={faceInClouds} resizeMode="cover" />
        </View>
        <View></View>
      </View>
      <View style={styles.buttonGroup}>
        <RoundedPrimaryButton
          text="Não tenho uma conta"
          onPress={() => navigation.navigate('Terms')}
        />

        <RoundedOutlineButton
          text="Já tenho uma conta"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.light[4],
    justifyContent: 'flex-end',
  },
  gif: {
    width: 150,
    height: 150,
  },
  buttonGroup: {
    backgroundColor: lightTheme.colors.white,
    padding: 24,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    border: 1,
    elevation: 20,
    shadowRadius: 5,
    gap: 16,
  },
});
