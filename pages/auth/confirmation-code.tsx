import {useEffect} from "react";
import type { NextPage } from 'next'
import Router from "next/router";

import ConfirmationCodeForm from "../../app/forms/auth/confirmationCodeForm";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectloginToken, updateLoginToken} from "../../app/store/auth";
import LogoAuth from "../../app/components/auth/logoAuth";

const Login: NextPage = () => {

    useEffect(()=>{
        Router.beforePopState(()=>{
            clearLoginToken()
            return true
        })

        if (token == undefined){
            Router.push('/auth/login-with-code')
        }
    },[])
    const dispatch = useAppDispatch();
    const clearLoginToken = ()=> dispatch(updateLoginToken(undefined))

    const token = useAppSelector(selectloginToken)

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <LogoAuth title='Confirm the code'/>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <ConfirmationCodeForm loginToken={token} clearLoginToken={clearLoginToken} />
                </div>
            </div>
        </div>
    )
}

export default Login