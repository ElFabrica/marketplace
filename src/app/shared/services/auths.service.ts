import { RegisterHttpParams, RegisterHttpResponse } from "../interfaces/http/register";
import { marketpaleceApiClient } from "../api/market-place"

export const register = async (userData: RegisterHttpParams) => {
    const { data } = await marketpaleceApiClient.post<RegisterHttpResponse>
        ("/auth/register",
            userData)
    return data
}