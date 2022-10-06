import {withFormik} from "formik";
import * as yup from 'yup'
import InnerLoginForm from "../../components/auth/innerLoginForm";
import {LoginFormValuesInterface} from "../../contracts/auth";

const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

interface LoginFormProps{
}
const LoginForm = withFormik<LoginFormProps , LoginFormValuesInterface>({
    mapPropsToValues: props =>({
        name:'',
        email:'',
        password:'',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit:(values)=>{
        console.log(values)
    }
})(InnerLoginForm)

export default LoginForm;