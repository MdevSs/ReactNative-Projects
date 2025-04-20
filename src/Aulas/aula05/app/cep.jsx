import { router, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, ActivityIndicator } from "react-native-web";

export default function App() {
    const [ numCEP, setNumCEP ] = useState("");
    const [ load, setLoad ] = useState(false);
    const [ dado, setDado ] = useState(null);
    const router = useRouter();

    async function loadingDataCEP() {
        if(numCEP.length !== 8){
            setNumCEP("CEP inválido")
            return;
        }

        setLoad(true);

        await fetch(`https://viacep.com.br/ws/${numCEP}/json/`)
        .then(response => response.json()) // transforma response (resposta da API) em JSON 
        .then(
            JSON => {
                if(JSON.erro){
                    setNumCEP("CEP não existe")
                }else {
                    setDado(JSON);
                    setLoad(false);
                }
            }
        )
    }

    const goBack = () => {
        router.push('/');
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20}}>
            <Text>Digite o CEP</Text>
            <TextInput
                style={{ minWidth: 50, backgroundColor: '#cecece', color: '#414141', padding: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomWidth: 2, borderColor: 'black', outline: '0px'}}
                value={numCEP}
                onChangeText={setNumCEP}
                keyboardType="numeric"
                maxLength={8}    
            />
            <TouchableOpacity onPress={loadingDataCEP}>
                <Text>OK</Text>
            </TouchableOpacity>

            {load && <ActivityIndicator />}

            {dado && 

                <View>
                    <Text>Endreço: {dado.logradouro}</Text>
                    <Text>Bairro: {dado.bairro}</Text>
                    <Text>Estado: {dado.estado}</Text>
                </View>    
            }

            {
                typeof(dado) === "object"  ? console.log(dado) : console.log('null')
            }

            <Button title="← Back" onPress={goBack}/>
        </View>
    );
}
