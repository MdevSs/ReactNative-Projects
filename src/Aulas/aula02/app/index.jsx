import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const Styles = AmazonasPaulo();
  
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.titulo}>Ola imundo!</Text>
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
    }
  });
}