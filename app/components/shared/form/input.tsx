import {FC} from "react";
import {ErrorMessage, Field} from "formik";

interface InputProps {
    name: string,
    label: string,
    type?: string,
    inputClassName?: string,
    labelClassName?: string,
    errClassName?: string
}

const Input: FC<InputProps> = ({name, label, type = 'text', inputClassName, errClassName, labelClassName}) => {
    return (
        <div>
            <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}>{label}</label>
            <Field id={name} name={name} type={type} autoComplete="name" className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${inputClassName ?? ''}`}/>
            <ErrorMessage name={name} className={`text-red-500 text-sm ${errClassName ?? ''}`}/>
        </div>
    )
}
export default Input;