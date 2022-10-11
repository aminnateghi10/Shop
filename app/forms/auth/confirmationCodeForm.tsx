import Router from "next/router";
import {withFormik} from "formik";
import * as yup from 'yup';

import {ConfirmationCodeFormValuesInterface} from "../../contracts/auth";
import callApi from "../../helpers/callApi";
import InnerConfirmationCodeForm from "../../components/auth/innerConfirmationCodeForm";
// import ValidationError from "../../exceptions/validationError";

const confirmationCodeFormValidationSchema = yup.object().shape({
    code: yup.string().required().matches(/^[0-9]+$/,'').length(6)
})

interface ConfirmationCodeFormProps{
}

const ConfirmationCodeForm = withFormik<ConfirmationCodeFormProps , ConfirmationCodeFormValuesInterface>({
    mapPropsToValues: props =>({
        code:''
    }),
    validationSchema: confirmationCodeFormValidationSchema,
    handleSubmit:async(values , {setFieldError})=>{
        try {
            let token = localStorage.getItem('login-token')
            let res = await callApi().post('/auth/login/verify-phone' , {code:values.code , token })
            console.log(res)
        }catch (error : any){
            Object.entries(error.massage.errors).forEach(([key , value])=>{
                console.log(key , value)
            setFieldError(key , value as string)
            })
        }
    }
})(InnerConfirmationCodeForm)

export default ConfirmationCodeForm;