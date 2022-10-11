import {withFormik} from "formik";
import * as yup from 'yup';
import Router from "next/router";

import { RegisterWithCodeFormValuesInterface} from "../../contracts/auth";
import callApi from "../../helpers/callApi";
import InnerRegisterWithPhoneForm from "../../components/auth/innerRegisterWithPhoneForm";

const registerWithPhoneFormValidationSchema = yup.object().shape({
    name : yup.string().required().min(4),
    phone: yup.string().required()
})

interface RegisterWithCodeFormProps{
}

const RegisterWithPhoneForm = withFormik<RegisterWithCodeFormProps , RegisterWithCodeFormValuesInterface>({
    mapPropsToValues:props=>({
        name:'',
        phone:'',
    }),
    validationSchema: registerWithPhoneFormValidationSchema,
    handleSubmit:async(values)=>{
        console.log(values)
        let res = await callApi().post('/auth/register' , values);
        console.log(res)
        if(res.status == 201){
            localStorage.setItem('token-login' , res.data.token)
            Router.push('/auth/login-with-code')
        }
    }
})(InnerRegisterWithPhoneForm)

export default RegisterWithPhoneForm;