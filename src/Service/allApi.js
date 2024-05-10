import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";




export const registerApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/signup`,body,"")
}

export const loginApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/signin`,body,"")
}
export const bookingApi = async (headers,body, id) => {
    return await commonApi('POST', `${BASE_URL}/add-booking/${id}`, body,headers);
};

