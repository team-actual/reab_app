import { Image, StyleSheet, Text, View } from 'react-native';
import { lightTheme } from '../../theme';

import hug from '../../../assets/gifs/hug.gif';
import { Heading1 } from '../../components/Text';
import {
  RoundedOutlineButton,
  RoundedPrimaryButton,
} from '../../components/Buttons';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 16,
          flex: 1,
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <Image style={styles.gif} source={hug} resizeMode="cover" />
        <Heading1 text="Bem-vindo (a)! 👋" />
        <Text style={styles.bodyText}>
          O App Reability Center é uma ferramenta que conecta o paciente à
          clínica.
        </Text>
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
    width: 40,
    height: 40,
  },
  bodyText: {
    fontSize: 18,
    fontWeight: '400',
    color: lightTheme.colors.dark[1],
  },
  buttonGroup: {
    backgroundColor: lightTheme.colors.light[3],
    padding: 24,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    border: 1,
    elevation: 20,
    shadowRadius: 5,
    gap: 16,
  },
});
