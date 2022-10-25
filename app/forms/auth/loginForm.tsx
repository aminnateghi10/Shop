import Router from "next/router";
import {withFormik} from "formik";
import * as yup from 'yup';

import InnerLoginForm from "../../components/auth/innerLoginForm";
import {LoginFormValuesInterface} from "../../contracts/auth";
import callApi from "../../helpers/callApi";

const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

interface LoginFormProps {

}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        email: '',
        password: '',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values, {props, setFieldError}) => {
        try {
            let res = await callApi().post('/auth/login', values)


            Router.push('/')
            // ('shopy-token' ,res.data.token ,{
            //     maxAge:36000 * 24 * 30 ,
            //     domain:'localhost',
            //     path:'/',
            //     sameSite:'lax'
            // })

        } catch (error: any) {
            Object.entries(error.massage.errors).forEach(([key, value]) => {
                console.log(key, value)
                setFieldError(key, value as string)
            })
        }
    }
})(InnerLoginForm)

export default LoginForm;