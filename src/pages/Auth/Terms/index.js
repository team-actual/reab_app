import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { PrimaryButton } from '../../../components/Buttons';
import temsImage from '../../../../assets/terms.png';
import { Heading1 } from '../../../components/Text';

export default function Terms({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View></View>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Image source={temsImage} style={{ marginBottom: 32 }} />
          <Heading1 text="Aceite os termos" style={{ marginBottom: 8 }} />
          <Text>
            Por favor, leia atentamente e aceite os termos antes de prosseguir.
          </Text>
        </View>
        <View style={{ gap: 8, marginBottom: 16 }}>
          <PrimaryButton
            text="Continuar"
            onPress={() => navigation.navigate('RegisterSlide1')}
          />

          <TouchableOpacity
            style={{
              backgroundColor: lightTheme.colors.transparent,
              paddingVertical: 8,
              borderRadius: 8,
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
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
              Ao clicar em “Continuar”, você concorda com os
            </Text>
            <Text style={{ color: lightTheme.colors.primary.base }}>
              Termos de Uso
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
