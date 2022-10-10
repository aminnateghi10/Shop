import {withFormik} from "formik";
import * as yup from 'yup';
import InnerLoginPhoneForm from "../../components/auth/innerLoginPhoneForm";
import {LoginPhoneFormValuesInterface} from "../../contracts/auth";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";

const PhoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1.3]\d|2[0-2]|98)\d{7}$/
const loginFormValidationSchema = yup.object().shape({
    number: yup.string().min(11).max(11).required().matches(PhoneRegExp , 'the phone format is not correct'),
    password: yup.string().required().min(8)
})

interface LoginFormProps{
    setCookie:any
}
const LoginPhoneForm = withFormik<LoginFormProps , LoginPhoneFormValuesInterface>({
    mapPropsToValues: props =>({
        number:'',
        password:'',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit:async(values , {props,setFieldError})=>{
        try {
            console.log(values)
        let res = await callApi().post('/auth/login' , values)
        console.log(res)
        console.log(values)
        props.setCookie('shopy-token' ,res.data.token ,{
            maxAge:36000 * 24 * 30 ,
            domain:'localhost',
            path:'/',
            sameSite:'lax'
        })
        }catch (error : any){
                Object.entries(error.massage.errors).forEach(([key , value])=>{
                    console.log(key , value)
                setFieldError(key , value as string)
                })
        }
    }
})(InnerLoginPhoneForm)

export default LoginPhoneForm;