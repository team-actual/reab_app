import { TouchableOpacity } from 'react-native-gesture-handler';
import { lightTheme } from '../theme';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function RoundedPrimaryButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: lightTheme.colors.primary.base,
        alignItems: 'center',
        borderRadius: 50,
        padding: 16,
        border: 1,
        borderColor: lightTheme.colors.primary.base,
      }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        style={{
          color: lightTheme.colors.white,
          fontSize: 16,
          fontWeight: '500',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export function RoundedOutlineButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: lightTheme.colors.transparent,
        alignItems: 'center',
        borderRadius: 50,
        padding: 16,
        borderWidth: 1,
        borderColor: lightTheme.colors.light[1],
      }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        style={{
          color: lightTheme.colors.dark[1],
          fontSize: 16,
          fontWeight: '500',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export function PrimaryButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: lightTheme.colors.primary.base,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={{
          color: lightTheme.colors.white,
          fontWeight: '500',
          fontSize: 16,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export function CircularButton({ iconName, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: lightTheme.colors.transparent,
        borderWidth: 1,
        borderColor: lightTheme.colors.primary.base,
        padding: 8,
        borderRadius: 100,
        alignItems: 'center',
        width: 50,
        height: 50,
      }}
      activeOpacity={0.8}
    >
      <Ionicons
        name={iconName}
        onPress={onPress}
        size={28}
        color={lightTheme.colors.primary.base}
      />
    </TouchableOpacity>
  );
}
