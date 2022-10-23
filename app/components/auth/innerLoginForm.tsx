import {Form, FormikProps} from "formik";

import Input from "../shared/form/input";
import {LoginFormValuesInterface} from "../../contracts/auth";
import Link from "next/link";

const InnerConfirmationCodeForm = (Props : FormikProps<LoginFormValuesInterface>)=>{
    return(
        <Form className="space-y-6">
            <Input name='email' label='Email address'/>
            <Input name='password' label='Password' type='Password'/>
            <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
                </button>

                <div className="mt-4 flex justify-between">
                    <Link href='/auth/register'>Register</Link>
                    <Link href='/auth/login-with-code'>Login whit Code</Link>
                </div>
            </div>
        </Form>
    )
}

export default InnerConfirmationCodeForm;