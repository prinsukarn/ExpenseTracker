import { Text, View, StyleSheet } from "react-native";

function ManageExpense() {
  return (
    <View style={styles.container}>
      <Text>Manage Expenses Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ManageExpense;
