import CustomDrawer from '@/components/shared/CustomDrawer'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}
    > 

      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name='albums-outline'/>
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule',
          drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name='calendar-outline'/>
        }}
      />
      
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'User',
          drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name='person-add-outline'/>
        }}
      />

    </Drawer>
  )
}

export default DrawerLayout