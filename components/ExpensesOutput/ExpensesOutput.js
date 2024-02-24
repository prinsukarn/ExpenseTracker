import { View, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesList";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
