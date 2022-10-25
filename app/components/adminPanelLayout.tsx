import {ReactNode} from "react";
import {useAuth} from "../hooks/useAuth";
import Router from "next/router";

interface Props {
    children: ReactNode
}

const AdminPanelLayout = ({children}: Props) => {
    const {user, error, loading} = useAuth();
    console.log(user, error, loading)
    if (!user?.is_admin) {
        Router.push('/auth/login')
        return null
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default AdminPanelLayout;