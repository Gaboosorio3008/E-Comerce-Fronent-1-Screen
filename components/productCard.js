import * as React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function ProductCard({ image, category, price, title, description }) {
    const [count, setCount] = useState(1);

    return (
        <View className=" max-w-full bg-white dark:bg-gray-50/5 rounded-3xl mt-3 mr-2 mb-4 ml-1 p-9">

            <View className="bg-white rounded-full">
                <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} className=" rounded-full" />

            </View>

            <View >
            <Text className="text-sm text-black/50 dark:text-white/70 min-w-0 text-left rounded-full mt-1"> {category} </Text>
                <Text className="text-1xl font-bold dark:text-white min-w-0 text-left rounded-full mt-1"> {title} </Text>
                <View className="flex-row justify-between">
                <View className="flex-row gap-2 items-center text-center">
                        <AntDesign
                            name="minuscircleo"
                            size={20}
                            color= "gray"
                            onPress={() => setCount(count - 1)}
                        />
                    <Text className="text-xl font-bold dark:text-white">{count}</Text>

                        <AntDesign
                            name="pluscircleo"
                            size={20}
                            color= "gray"
                            onPress={() => setCount(count + 1)}
                        />
                </View>
                <Text className=" text-xl font-bold dark:text-white  min-w-0 text-right rounded-full">${price * count}</Text>
                </View>
                <Text numberOfLines={2} className=" text-xs  text-black dark:text-white  text-center rounded-full mt-7"> {description}</Text>

                <TouchableOpacity className="bg-black max-w-full rounded-3xl mt-5 mb-1 dark:bg-white"
                onPress={() => alert('Producto añadido al carrito')}>

                    <Text className=" text-center text-lg text-white dark:text-black "> Añadir Al carrito </Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}