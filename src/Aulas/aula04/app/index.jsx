import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
    const router = useRouter();

    return (
        <View
            style={{
                flex:1,
                alignItems: "center",
                justifyContent: 'center'
            }}>
            <Text>Edit app/index.tsx to edit this screen</Text>
            <Button title="Afazeres" onPress={() => router.push('afazeres') }/>
        </View>
    )
}