import {ReactNode} from "react";
import {useAuth} from "../hooks/useAuth";
import Router from "next/router";

interface Props {
    children : ReactNode
}
const UsetPanelLayout  = ({children} : Props)=>{
    const {user , error , loading} = useAuth();
    console.log(user , error , loading)
    if (loading) return <h1>loading...</h1>
    if (error) {
        Router.push('/auth/login')
        return null
    }
    return(
        <div>
            {children}
            <h1>{user.name}</h1>
        </div>
    )
}

export default UsetPanelLayout;