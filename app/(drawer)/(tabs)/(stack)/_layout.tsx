import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean|undefined) => {
        if (canGoBack) {
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return ( 
        <Stack
            screenOptions={{
                // headerShown: true,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                },
                headerLeft: ({tintColor, canGoBack}) => (
                    <Ionicons 
                        color={tintColor}
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                        className='mr-5'
                        size={20}
                        onPress={() => onHeaderLeftClick(canGoBack)}
                    />
                ),
            }}
        >
            <Stack.Screen 
                name="home/index"
                options={{
                    title: 'Home Screen',
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen 
                name="products/index"
                options={{
                    title: 'Products Screen',
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen 
                name="profile/index"
                options={{
                    title: 'Profile Screen',
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen 
                name="settings/index"
                options={{
                    title: 'Settings Screen',
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen 
                name="products/[id]"
                options={{
                    title: 'Product Details',
                    animation: 'slide_from_right',
                }}
            />
        </Stack>
    )
}

export default StackLayout;