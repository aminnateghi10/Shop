import {Form, FormikProps} from "formik";

import Input from "../shared/form/input";
import {RegisterFormValuesInterface} from "../../contracts/auth";
import Link from "next/link";

const InnerRegisterForm = (Props : FormikProps<RegisterFormValuesInterface>)=>{
    return(
        <Form className="space-y-6">
            <Input name='name' label='Name'/>
            <Input name='email' label='Email address'/>
            <Input name='password' label='Password' type='Password'/>
            <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Register
                </button>
                <div className="mt-4 flex justify-between">
                    <Link href='/auth/register-with-phone'>Register with phone</Link>
                    <Link href='/auth/login'>Login</Link>
                </div>
            </div>

        </Form>
    )
}

export default InnerRegisterForm;