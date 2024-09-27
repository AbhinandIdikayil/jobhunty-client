import { CLOUDINARY_INSTANCE } from "src/constants/axiosInstance"




export const uploadToCloudinary = async (imageFile: any ) => {
    const formData = new FormData()
    formData.append('file',imageFile)
    formData.append('upload_preset','jobhunty')
    try {
        const {data} = await CLOUDINARY_INSTANCE.post('',formData,{withCredentials:false})
        console.log(data);
        return data.secure_url
    } catch (error) {
        console.log(error)
    }
}