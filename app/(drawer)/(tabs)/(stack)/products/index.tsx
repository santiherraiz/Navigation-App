import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {

  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-1 border border-neutral-500 p-4 rounded-xl flex-row items-center">
            <View className="mr-4">
            </View>

            <View className="flex-1">
              <Text className="text-2xl font-work-black" numberOfLines={1}>{item.title}</Text>
              <Text className="text-base text-neutral-700" numberOfLines={2}>{item.description}</Text>

              <View className="flex-row justify-between items-center mt-2">
                <Text className="font-work-black">{item.price}€</Text>
                <Link href={`/products/${item.id}`} className="text-primary font-semibold underline">
                  Ver detalles
                </Link>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsScreen
