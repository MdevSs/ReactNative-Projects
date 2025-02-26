import { StyleSheet, Text } from "react-native-web";

export default function topadaNoDedao() {
const style = Style();
    return(
        <Text style={style.title}>Batata Frita</Text>
    );
}
function Style() {
return StyleSheet.create({
    title: {
        color: "#ff0000"
    }
});}