import {withFormik} from "formik";
import * as yup from 'yup';

import {ConfirmationCodeFormValuesInterface} from "../../contracts/auth";
import callApi from "../../helpers/callApi";
import InnerConfirmationCodeForm from "../../components/auth/innerConfirmationCodeForm";
import Router from "next/router";
import {storeLoginToken} from "../../helpers/auth";
// import ValidationError from "../../exceptions/validationError";

const confirmationCodeFormValidationSchema = yup.object().shape({
    code: yup.string().required().matches(/^[0-9]+$/,'').length(6)
})

interface ConfirmationCodeFormProps{
    loginToken ?:string ,
    clearLoginToken : ()=> void
}

const ConfirmationCodeForm = withFormik<ConfirmationCodeFormProps , ConfirmationCodeFormValuesInterface>({
    mapPropsToValues: props =>({
        code:'' ,
        token : props.loginToken || ""
    }),
    validationSchema: confirmationCodeFormValidationSchema,
    handleSubmit:async(values , {props , setFieldError})=>{
        try {
            // let token = localStorage.getItem('login-token')
            let res = await callApi().post('/auth/login/verify-phone' ,values )
            // console.log()
            if (res.status == 200){
                // await Router.push('/')
            storeLoginToken(res.data.user.token)
            //    celar login token
            //     props.clearLoginToken()
            }
        }catch (error : any){
            Object.entries(error.massage.errors).forEach(([key , value])=>{
            console.log(key , value)
            setFieldError(key , value as string)
            })
        }
    }
})(InnerConfirmationCodeForm)

export default ConfirmationCodeForm;