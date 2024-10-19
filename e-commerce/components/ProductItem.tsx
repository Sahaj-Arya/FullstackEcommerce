import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ProductItemType {
  readonly id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
interface ProductItemProps {
  item: ProductItemType;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <View>
      <Text style={styles.title}>{item?.name}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({ title: { fontSize: 30 } });
