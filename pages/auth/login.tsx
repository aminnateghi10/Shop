import {NextPageWithLayout} from "../_app";
import LoginForm from "../../app/forms/auth/loginForm";
import LogoAuth from "../../app/components/auth/logoAuth";
import GuestLayout from "../../app/components/guestLayout";

const Login: NextPageWithLayout = () => {


    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <LogoAuth title='Login on Shopy'/>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}

Login.getLayout = page => <GuestLayout>{page}</GuestLayout>

export default Login;
