import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ActivityIndicator } from "react-native-web";

export default function App() {

    const { cep, setCep } = useState("");
    const { load, setLoad } = useState(false);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20}}>
            <Text>Digite o CEP</Text>
            <TextInput
                style={{backgroundColor: '#cecece', color: '#414141', padding: 10, borderRadius: '10px 10px 0 0', borderBottomWidth: 2, borderColor: 'black', outline: '0px'}}
                value={cep}
                placeholder="CEP"
                onChangeText={setCep}
                keyboardType="numeric"
                maxLength={8}
            />

            {load && <ActivityIndicator />}
        </View>
    );
}
