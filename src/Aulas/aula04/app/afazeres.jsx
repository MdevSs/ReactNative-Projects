import React, { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { dados } from "@/dados/afazeres";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';



export default function App() {

    const [ lista, setLista] = useState(
        dados.sort(
            (a, b) => b.id - a.id
        )
    );
    const [tarefa, setTarefa] = useState('');

    const layoutDoItem = ({item, index}) => {
        console.log(item)
        return(
             <Text>{index+1}. {item.title}</Text>
        );
    };

    const adicionarAfazeres = () => {
        if(tarefa.trim())
        {
            const newID = lista.length > 0 ? lista[0].id + 1: 0
            setLista([{id: newID, title: tarefa, completed: false}, ...lista])
        }
        console.log(lista)
        setTarefa('')
    };

    return (
        <View
            style={{
                flex:1,
                // justifyContent: 'center',
                // alignItems: 'center',
                padding: 30
            }}>

            <Text style={{fontSize: 20}}>Digite uma terafa</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 20}}>
                <TextInput 
                    style={{borderWidth: 2, height: 28, width: '100%', padding: 15, borderRadius: 10}}
                    placeholder="Tarefa"
                    placeholderTextColor='gray'
                    value={tarefa}
                    onChangeText={setTarefa}
                />
                <Pressable onPress={adicionarAfazeres}> <AntDesign name="pluscircle" size={30} color="black" /> </Pressable>
            </View>
            
            <Text style={{fontSize: 20}}>Afazeres: </Text>
            <View style={{
                paddingTop: 10,
                paddingLeft: 20
            }}>
                <FlatList data={lista}
                          keyExtractor={tarefa => tarefa.id}
                          contentContainerStyle={{flexGrow: 1}}
                          renderItem={layoutDoItem}
                />

            </View>
        </View>
    );
}
