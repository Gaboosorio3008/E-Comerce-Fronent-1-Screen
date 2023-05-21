import React from "react";
import { FlatList, View, Text } from "react-native"; // Se agrega la importación de "View"
import { products } from "../products";
import ProductCard from "./productCard";

export default function ProductList() {
  return (
    <FlatList 
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
}
