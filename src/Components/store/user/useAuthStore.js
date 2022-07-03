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

    const startRegister = async ({email, firstName, lastName, password}) => {
        dispatch(onChecking);
        console.log('register')
        try {
            const {data} = await styleApi.post('/auth/new', {email, firstName, lastName, password} );
            localStorage.setItem('token', data.token );
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || ''));
            setTimeout(() => {
                dispatch(clearErrorMsg());
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch( onLogout() );

        try {
            const {data} = await styleApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            dispatch( onLogin({name: data.name, uid: data.uid}) )
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );

    }


    return {
        //propiedades
        status, 
        user,
        errorMsg,

        //metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}
