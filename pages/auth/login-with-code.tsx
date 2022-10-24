import type { NextPage } from 'next'
import {useCookies} from "react-cookie";

import {useAppDispatch} from "../../app/hooks";
import {updateLoginToken} from "../../app/store/auth";
import LoginWithCodeForm from "../../app/forms/auth/loginWithCodeForm";
import LogoAuth from "../../app/components/auth/logoAuth";

const Login: NextPage = () => {
    const dispatch = useAppDispatch();

    const setLoginToken = (token:string)=>{
        dispatch(updateLoginToken(token))
    }

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <LogoAuth title='Login on Shopy With Phone Number'/>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginWithCodeForm  setToken={setLoginToken}/>
                </div>
            </div>
        </div>
    )
}

export default Login;