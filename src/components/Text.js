import { Text } from 'react-native';
import { lightTheme } from '../theme';

export function Heading1({ text, style }) {
  return (
    <Text
      style={{
        fontSize: 21,
        fontWeight: '600',
        color: lightTheme.colors.dark[1],
        ...style,
      }}
    >
      {text}
    </Text>
  );
}

export function Heading2({ text, style }) {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: '600',
        color: lightTheme.colors.dark[1],
        ...style,
      }}
    >
      {text}
    </Text>
  );
}

export function Subtitle({ text, style }) {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: '500',
        color: lightTheme.colors.dark[3],
        ...style,
      }}
    >
      {text}
    </Text>
  );
}
