import {useCookies} from "react-cookie";

import {NextPageWithLayout} from "../_app";
import {useAppDispatch} from "../../app/hooks";
import {updateLoginToken} from "../../app/store/auth";
import LoginWithCodeForm from "../../app/forms/auth/loginWithCodeForm";
import LogoAuth from "../../app/components/auth/logoAuth";
import GuestLayout from "../../app/components/guestLayout";

const LoginWithCode: NextPageWithLayout = () => {
    const dispatch = useAppDispatch();

    const setLoginToken = (token: string) => {
        dispatch(updateLoginToken(token))
    }

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <LogoAuth title='Login on Shopy With Phone Number'/>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginWithCodeForm setToken={setLoginToken}/>
                </div>
            </div>
        </div>
    )
}

LoginWithCode.getLayout = page => <GuestLayout>{page}</GuestLayout>

export default LoginWithCode;