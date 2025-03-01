import { View, Text, Image, } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import icons from '../../constants/icons'


const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
             source={icon}
             resizeMode="contain"
             tintColor={color}
             className="w-6 h-6"
            />
            <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{color: color}}>
                {name}
            </Text>
        </View>
    );
};

const _layout = () => {
  return (
   <>

    <Tabs
     screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '232533',
            height: 84,

        }
    }}
    >
        <Tabs.Screen
            name="home"
            options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}
                    />
                )
            }}
        />

            <Tabs.Screen
            name="notification"
            options={{
            title: 'Notification',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={icons.notification}
                    color={color}
                    name="Notification"
                    focused={focused}
                />
                )
               }}
             />

                        <Tabs.Screen
                        name="profile"
                        options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                            )
                        }}
                        />
    </Tabs>        
   </>
   
  )
}

export default _layout