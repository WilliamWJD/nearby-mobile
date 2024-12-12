import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40,
  },
});
