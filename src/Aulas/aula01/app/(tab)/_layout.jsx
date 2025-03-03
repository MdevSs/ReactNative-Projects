import { Tabs } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout () {
    return (
        <Tabs screenOptions={
                { 
                    tabBarButton: (props) => (<TouchableOpacity {...props} />),
                    tabBarInativeTintColor: 'gray',
                    tabBarActiveTintColor: 'blue', 
                    headerShown: false
                }
            }>
            <Tabs.Screen name="index" options={
                    {
                        title: "Home" ,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ), 
                    }
                }/>
            
            <Tabs.Screen name="profile" options=
            {
                {
                    title: "Profile" , 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ), 
                }
            }/>
        </Tabs>
    );
}