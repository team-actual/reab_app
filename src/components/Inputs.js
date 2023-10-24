import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { lightTheme } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';

export function ReabTextInput({ placeholder, value, onChangeText, error }) {
  return (
    <View>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export function ReabPasswordInput({ placeholder, value, onChangeText, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View style={[styles.input, error && styles.inputError]}>
        <TextInput
          style={{ fontSize: 16, width: '90%' }}
          placeholder={placeholder}
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={onChangeText}
          selectionColor={lightTheme.colors.primary.base}
        />

        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={[styles.iconContainer]}
        >
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={18}
            color={lightTheme.colors.dark[3]}
          />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export function ReabSelectInput({ items, label, setItem }) {
  return (
    <View>
      <SelectDropdown
        data={items}
        buttonStyle={styles.select_button}
        buttonTextStyle={styles.select_button_text}
        renderDropdownIcon={() => <Ionicons name="chevron-down" />}
        defaultButtonText={label}
        dropdownIconPosition="right"
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setItem(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  select_button: {
    backgroundColor: lightTheme.colors.light[3],
    borderWidth: 1,
    borderColor: lightTheme.colors.dark[4],
    borderRadius: 8,
    width: '100%',
  },
  select_button_text: {
    fontSize: 16,
    textAlign: 'left',
    color: lightTheme.colors.dark[1],
  },
  input: {
    borderWidth: 1,
    borderColor: lightTheme.colors.dark[4],
    backgroundColor: lightTheme.colors.light[3],
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: lightTheme.colors.dark[1],
  },
  inputError: {
    borderColor: 'red',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
