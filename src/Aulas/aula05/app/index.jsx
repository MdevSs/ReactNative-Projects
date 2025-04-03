import { useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function App() {
    const router = useRouter();

    function goToCep(){
        router.push('/pages/cep')
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20}}>
            <Text style={{fontSize: 20}}>API do CEP</Text>
            <Button title="Abrir CEP" onPress={goToCep}/>
        </View>
    );
}
