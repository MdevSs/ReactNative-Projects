import React, { useState } from 'react';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native-web';

const API = "http://localhost/api.php"
const CHAVE = "juiyoit35tigy23hb"; 

export default function myAPI() {
    const [load, setLoad] = useState(false);
    const [dados, setDados] = useState(null);

    const loadData = async () => {
        setLoad(true);

        try{
            const response = await fetch(
                API,
                {
                    method: 'GET',
                    headers: {
                        "X-API-KEY": CHAVE,
                    }
                }
            );
            
            const json = await response.json();
            setDados(json);
        }catch(e) {
            console.error(e)
        }finally{
            setLoad(true)
        }
    };
    return(
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height:'45%', gap: 10}}>
            <Text>Carrega dados em PHP</Text>
            <Button title='Carregar' onPress={loadData}/>
            
            {
                load && <ActivityIndicator />
            }

            {
                dados 
                &&
                <View>
                    <Text>
                        Reposta
                    </Text>
                    <Text>
                        {JSON.stringify(dados)}
                    </Text>
                </View>
            }

        </View>
    );
}