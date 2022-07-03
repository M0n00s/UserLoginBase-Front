import { useDispatch, useSelector } from "react-redux"
import { styleApi } from "../../../axios/styleApi";
import { clearErrorMsg, onChecking, onLogin, onLogout } from "./userSlice";

export const useAuthStore = () => {
  
    const { status, user, errorMsg } = useSelector( (state) => state.auth );
    const dispatch = useDispatch()


    const startLogin = async ({email, password}) => {
        dispatch( onChecking() )
        try {
            const {data} = await styleApi.post('/auth',{email, password} );
            localStorage.setItem('token', data.token );
            dispatch(onLogin({name: data.name, uid: data.uid}))

        } catch (error) {
            dispatch(onLogout('credencilales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMsg());
            }, 10);
            
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
