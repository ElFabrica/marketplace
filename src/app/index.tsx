import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router"

export default function App() {
    return (
        <View>
            <Text>
                Olá mundo
            </Text>
            <TouchableOpacity onPress={() => router.push("login")}>
                <Text className="size-4 text-6xl">Ir para login</Text>
            </TouchableOpacity>
        </View>
    )
}