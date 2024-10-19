import { FlatList, StyleSheet, View } from "react-native";
import Products from "../assets/products.json";
import ProductItem from "@/components/ProductItem";

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          data={Products}
          renderItem={({ item, index }) => <ProductItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
