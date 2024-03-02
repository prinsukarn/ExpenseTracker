import { TextInput, View, StyleSheet } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}
  function dateChangedHandler() {}
  function descriptionChangedHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: dateChangedHandler,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          autoCorrect: false,
          multiline: true,
          onChangeText: descriptionChangedHandler,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ExpenseForm;
