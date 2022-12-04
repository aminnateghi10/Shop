import {ReactNode} from "react";
import {useAuth} from "../hooks/useAuth";
import Router from "next/router";

interface Props {
    children: ReactNode
}

const UserPanelLayout = ({children}: Props) => {
    const {user, error, loading} = useAuth();
    console.log(user, error, loading)
    if (loading) return <h1>loading...</h1>
    if (error) {
        return <></>
        Router.push('/auth/login')
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default UserPanelLayout;