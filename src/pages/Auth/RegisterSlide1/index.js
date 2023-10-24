import { Image, StyleSheet, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading2 } from '../../../components/Text';
import { CircularButton } from '../../../components/Buttons';
import sunglasses from '../../../../assets/gifs/sunglasses.gif';

export default function RegisterSlide1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.gif} source={sunglasses} resizeMode="cover" />
      </View>

      <Heading2
        style={{ textAlign: 'center' }}
        text="Acompanhe o andamento do seu tratamento com segurança"
      />

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <CircularButton
          iconName="arrow-forward-outline"
          onPress={() =>
            navigation.navigate('RegisterSlide2')
          }
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
