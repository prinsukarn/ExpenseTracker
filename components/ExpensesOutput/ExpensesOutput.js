import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-19"),
  },
  {
    id: "e2",
    description: "Data Cable",
    amount: 10.99,
    date: new Date("2023-11-19"),
  },
  {
    id: "e3",
    description: "A pair of trousers",
    amount: 50.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e4",
    description: "Sunglasses",
    amount: 25.0,
    date: new Date("2024-1-19"),
  },
  {
    id: "e5",
    description: "Flowers",
    amount: 36.12,
    date: new Date("2024-2-9"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default ExpensesOutput;
