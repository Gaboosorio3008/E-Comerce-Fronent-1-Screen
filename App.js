import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductList from './components/productList';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (

    <SafeAreaView className=" flex-2 justify-center max-w-full items-center  bg-gray-200 dark:bg-black p-12 mb-5"  >
      <View className="flex-row max-w-full gap-10 mt-10">
        <Text className="text-2xl font-bold dark:text-white">
          New Collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <View className="max-w-full gap-3 mb-10">

      <ProductList className="max-w-full gap-3"/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView> 
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */