import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lightTheme } from '../../../theme';
import { Heading1, Subtitle } from '../../../components/Text';
import { Ionicons } from '@expo/vector-icons';

export default function RecoveryAccessStepTwo({ navigation }) {
  function handleEmailRecovery() {
    navigation.navigate('RecoveryAccessStepThree');
  }

  return (
    <View style={styles.container}>
      <Heading1 text="Como você quer recuperar sua conta?" />
      <Subtitle text="Essas são as opções de recuperação da sua conta" />

      <View
        style={{
          marginTop: 32,
          gap: 8,
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{
            gap: 8,
            backgroundColor: lightTheme.colors.white,
            padding: 16,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: lightTheme.colors.dark[4],
          }}
          activeOpacity={0.8}
          onPress={handleEmailRecovery}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Ionicons name="mail-outline" size={18} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: lightTheme.colors.dark[1],
              }}
            >
              E-mail:
            </Text>
          </View>
          <Text style={{ color: lightTheme.colors.dark[3], fontSize: 16 }}>
            seuemail@gmail.com
          </Text>
        </TouchableOpacity>
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
