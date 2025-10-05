import { Text, View } from "react-native";
import { useRegisterViewModel } from "./viewModels/Register/useRegister.viewModel";
import { RegisterView } from "./viewModels/Register/Register.view";


export default function Register() {

    const props = useRegisterViewModel()

    return (
        <View className="flex-1 items-center justify-center">
            <RegisterView {...props} />
        </View>
    )
}