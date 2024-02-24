import { View, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesList";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
