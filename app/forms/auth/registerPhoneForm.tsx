import {withFormik} from "formik";
import * as yup from 'yup';
import Router from "next/router";
import { RegisterPhoneFormValuesInterface} from "../../contracts/auth";
import callApi from "../../helpers/callApi";
import InnerRegisterPhoneForm from "../../components/auth/innerRegisterPhoneForm";

const registerPhoneFormValidationSchema = yup.object().shape({
    name : yup.string().required().min(4),
    phone: yup.string().required()
})

interface RegisterPhoneFormProps{
}

const RegisterPhoneForm = withFormik<RegisterPhoneFormProps , RegisterPhoneFormValuesInterface>({
    mapPropsToValues:props=>({
        name:'',
        phone:'',
    }),
    validationSchema: registerPhoneFormValidationSchema,
    handleSubmit:async(values)=>{
        console.log(values)
        let res = await callApi().post('/auth/register' , values)
            console.log(res)
        if(res.status == 201){
            console.log(res)
        // Router.push('/')
        }
    }
})(InnerRegisterPhoneForm)

export default RegisterPhoneForm;