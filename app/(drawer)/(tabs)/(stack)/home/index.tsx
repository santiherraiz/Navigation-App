import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const menuItems = [
        { id: 1, label: 'Productos', path: '/products' },
        { id: 2, label: 'Perfil', path: '/profile' },
        { id: 3, label: 'Ajustes', path: '/settings' },
    ]

    const navigation = useNavigation();

    const onToogleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <SafeAreaView>
            <View className="px-10"> 
                {/* <Text className='text-5xl text-primary'>Home</Text>
                {
                    menuItems.map((item) => (
                            <View key={item.id} className='flex-row items-center mb-3'>
                                <Text className='text-2xl font-bold text-gray-600 mr-2'>{item.id}.</Text>
                                <Link href={item.path} className='text-2xl text-blue-600 underline'>{item.label}</Link>
                            </View>
                        )
                    )
                } */}
                <Text className="text-6xl font-extrabold text-black text-center py-8 px-4 uppercase mb-6">HOME</Text>
                
                <CustomButton className='mb-10' variant='contained' onPress={() => router.push('/products')} color="primary"> 
                    Productos 
                </CustomButton>
                
                <Link href="/profile" asChild>
                    <CustomButton className='mb-10' variant='contained' color="secondary"> Perfil </CustomButton>
                </Link>
                
                <Link href="/settings" asChild>
                    <CustomButton className='mb-10' variant='contained' color="terciary"> Ajustes </CustomButton>
                </Link>

                <Link href="/settings" asChild>
                    <CustomButton className='mb-10' variant='text-only' color="terciary"> Ajustes variante</CustomButton>
                </Link>

                <CustomButton 
                    onPress={onToogleDrawer} 
                    className='mb-10' color="primary"
                >
                    Open Menu
                </CustomButton>
                

            </View>
        </SafeAreaView>
        
    )
}

export default HomeScreen