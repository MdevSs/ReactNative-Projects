import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { Button, TextInput, View } from 'react-native-web';

export default function HomeScreen() {
  
  const roteador = useRouter();

  function vaiPraBatata(){
    roteador.setParams(value1);
    roteador.push('/BatataFrita');
  }

  const [value1, setValue1] = useState(0);
  const Styles = AmazonasPaulo();
  
  const somar = () => {
    setValue1(value1+1);
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Pressable onPress={vaiPraBatata}>
        <Text style={Styles.titulo}>Ola imundo!</Text>
      </Pressable>

      <TouchableOpacity><Button title='Vai pra batata' onPress={vaiPraBatata}/></TouchableOpacity>


      <View>

          <TextInput style={Styles.campoNumero} placeholder='Primeiro número' value={value1} onChangeText={setValue1} keyboardType='numeric'/>

      </View>
      
      <Text>{value1}</Text>
    </SafeAreaView>
  );
}

//const style = StyleSheet.create();

function AmazonasPaulo() {
  return StyleSheet.create({
    titulo: {
      color: "#342863",
      backgroundColor: "#CCCCCC"
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    campoNumero: {
      width: '80%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 18
    }
  });
}