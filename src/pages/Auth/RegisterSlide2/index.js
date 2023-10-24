import { Image, StyleSheet, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading2 } from '../../../components/Text';
import { CircularButton } from '../../../components/Buttons';
import zippedMouth from '../../../../assets/gifs/zipped-mouth.gif';

export default function RegisterSlide2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.gif} source={zippedMouth} resizeMode="cover" />
      </View>

      <Heading2
        style={{ textAlign: 'center' }}
        text="Fique tranquilo garantimos a segurança dos seus dados"
      />

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <CircularButton
          iconName="arrow-forward-outline"
          onPress={() => navigation.navigate('RegisterStepOne')}
        />
      </View>
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
