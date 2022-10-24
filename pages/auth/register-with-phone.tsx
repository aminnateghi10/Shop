import type { NextPage } from 'next'
import RegisterWithPhoneForm from "../../app/forms/auth/registerWithPhoneForm";
import LogoAuth from "../../app/components/auth/logoAuth";

const Register: NextPage = () => {
    return (
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <LogoAuth title='Rigeter on Shopy with Phone Number'/>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <RegisterWithPhoneForm />
                    </div>
                </div>
            </div>
    )
}

export default Register;
