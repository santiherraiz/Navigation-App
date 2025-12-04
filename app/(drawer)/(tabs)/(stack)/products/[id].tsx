import { products } from '@/store/products.store';
import { Badge } from '@react-navigation/elements';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductoScreen = () => {
    const params = useLocalSearchParams();    
    const product = products.find(p => p.id === params.id);

    const navigation = useNavigation();

    useEffect(() => {
        if(product) {
            navigation.setOptions({
                title: product.title,
                headerStyle: { backgroundColor: "#f9f9f9"}
            })
        }
    }, [navigation, product]);

    if(!product){
        return <Redirect href='/products'/>
    }

    return (
        <View className='px-5 mt-2'>
            <View className='space-y-2'>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-2xl font-work-black flex-1'>
                        {product.title}
                    </Text>

                    <Badge style={{
                            backgroundColor: "black",
                            borderRadius: 100, 
                            width: 100, 
                            height: 30, 
                            fontSize: 20,
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                        }} 
                        visible>
                        {product.price+"€"}
                    </Badge>
                </View>

                <Text className='text-base text-neutral-700'>
                    {product.description}
                </Text>
            </View>
            
        </View>
    )
}

export default ProductoScreen