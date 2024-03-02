import { TextInput, Text, View, StyleSheet } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Input;
