import {ReactNode} from "react";
import {useAuth} from "../hooks/useAuth";
import Router from "next/router";

interface Props {
    children: ReactNode
}

const GuestLayout = ({children}: Props) => {
    const {user, error, loading} = useAuth();
    if (user) {
        Router.push('/panel')
        return null
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default GuestLayout;