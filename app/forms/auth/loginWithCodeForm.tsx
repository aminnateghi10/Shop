import Router from "next/router";
import {withFormik} from "formik";
import * as yup from 'yup';

import InnerLoginWithCodeForm from "../../components/auth/innerLoginWithCodeForm";
import { LoginWithCodeFormValuesInterface} from "../../contracts/auth";
import callApi from "../../helpers/callApi";

const PhoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1.3]\d|2[0-2]|98)\d{7}$/;

const loginWithCodeFormValidationSchema = yup.object().shape({
    phone: yup.string().min(11).max(11).required().matches(PhoneRegExp , 'the phone format is not correct')
})

interface ConfirmationCodeFormProps{
    setToken:(token:string)=> void
}
const LoginWithCodeForm = withFormik<ConfirmationCodeFormProps , LoginWithCodeFormValuesInterface>({
    mapPropsToValues: props =>({
        phone:''
    }) ,
    validationSchema: loginWithCodeFormValidationSchema ,
    handleSubmit:async(values , {props ,setFieldError})=>{
        try {
            let res = await callApi().post('/auth/login' , values)
            props.setToken(res.data.token)
            Router.push('/auth/confirmation-code')
        }catch (error : any){
            Object.entries(error.massage.errors).forEach(([key , value])=>{
            setFieldError(key , value as string)
            })
        }
    }
})(InnerLoginWithCodeForm)

export default LoginWithCodeForm;