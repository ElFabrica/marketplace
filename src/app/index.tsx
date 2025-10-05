import { Redirect } from "expo-router"
import { router } from "expo-router"

export default function App() {
    return (
        <Redirect href={"/login"} />
    )
}