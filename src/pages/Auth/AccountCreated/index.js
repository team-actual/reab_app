import { Image, StyleSheet, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading2 } from '../../../components/Text';
import { CircularButton } from '../../../components/Buttons';
import partyingFace from '../../../../assets/gifs/partying-face.gif';

export default function AccountCreated({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.gif} source={partyingFace} resizeMode="cover" />
      </View>

      <Heading2
        style={{ textAlign: 'center' }}
        text="Parabéns! Sua conta foi criada com sucesso."
      />

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <CircularButton
          iconName="arrow-forward-outline"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainNavigation' }],
            })
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
