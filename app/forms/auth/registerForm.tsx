import {withFormik} from "formik";
import * as yup from 'yup'
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import {RegisterFormValuesInterface} from "../../contracts/auth";

const registerFormValidationSchema = yup.object().shape({
    name : yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

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