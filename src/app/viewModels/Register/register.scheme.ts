import * as yup from "yup"

export const registerScheme = yup.object({
    name: yup.
        string().
        required("Nome é obrigatório.")
        .min(4, "Nome dever ter pelo menos 4 caracteres."),
    email: yup
        .string()
        .email("Email inválido.")
        .required("Email é obrigatório."),
    password: yup
        .string()
        .required("Senha é obrigatória.")
        .min(6, "Senha deve ter pelo menos 6 caracteres."),
    confirmPassword: yup.
        string()
        .required("Senha é obrigatória")
        .oneOf([yup.ref("password")], "Senhas não coincidem."),
    phone: yup
        .string()
        .required("Telefone é obrigatório.")
        .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + núumero)")
})

export type RegisterFormData = yup.InferType<typeof registerScheme>