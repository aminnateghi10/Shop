import {Form, FormikProps, withFormik} from "formik";
import Input from "../../components/shared/form/input";
import * as yup from 'yup'
import {RegisterFormValuesInterface} from "../../contracts/auth";



const registerFormValidationSchema = yup.object().shape({
    name : yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

const InnerRegisterForm = (Props : FormikProps<RegisterFormValuesInterface>)=>{


    return(
        <Form className="space-y-6">
            <Input name='name' label='Name' type='text'/>
            <Input name='email' label='Email address' type='text'/>
            <Input name='password' label='Password' type='Password'/>
            <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Register
                </button>
            </div>
        </Form>
    )
}

interface RegisterFormProps{
}
const RegisterForm = withFormik<RegisterFormProps , RegisterFormValuesInterface>({
    mapPropsToValues:props=>({
        name:'',
        email:'',
        password:'',
        label:''
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit:(values)=>{
        console.log(values)
    }
})(InnerRegisterForm)
export default RegisterForm;