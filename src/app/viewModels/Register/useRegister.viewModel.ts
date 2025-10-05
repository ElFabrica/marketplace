import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation"

export const useRegisterViewModel = () => {

    const userRegisterMutation = useRegisterMutation()

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: yupResolver(registerScheme),
        defaultValues: {
            confirmPassword: "123123123",
            email: "testesssss@gmail.com",
            name: "arthur",
            password: "123123123",
            phone: "86999208959"
        }
    })

    const onSubmit = handleSubmit(async (userData) => {
        const { confirmPassword, ...registerData } = userData;
        await userRegisterMutation.mutateAsync(registerData)

    })

    return {
        control,
        errors,
        onSubmit
    }
}