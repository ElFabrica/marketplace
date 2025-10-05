import { Redirect } from "expo-router"

export default function App() {

    const userData = {
        token: "123321123321",
        name: "User teste"
    }
    if (!userData) {
        return <Redirect href={"/(private)/home"} />
    }

    return (
        <Redirect href={"/login"} />
    )
}