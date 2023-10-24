import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { lightTheme } from '../../theme';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
        <View style={styles.content}>
          <Text>Perfil</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.light[4],
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 25,
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '98%',
    height: 120,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
