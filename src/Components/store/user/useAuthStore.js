import { useDispatch, useSelector } from "react-redux"
import { styleApi } from "../../../axios/styleApi";
import { onChecking, onLogin } from "./userSlice";

export const useAuthStore = () => {
  
    const { status, user, errorMsg } = useSelector( (state) => state.auth );
    const dispatch = useDispatch()


    const startLogin = async ({email, password}) => {
        dispatch( onChecking() )
        try {
            const {data} = await styleApi.post('/auth',{email, password} );
            localStorage.setItem('token', data.token );
            dispatch(onLogin({name: data.name, uid: data.uid}))


            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    return {
        //propiedades
        status, 
        user,
        errorMsg,

        //metodos
        startLogin,
    }
}
