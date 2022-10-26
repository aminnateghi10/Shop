import {useAuth} from "../../hooks/useAuth";
import {useAppSelector} from "../../hooks";
import {selectUser} from "../../store/auth";

const UserInfo = ()=>{

    // const {user} = useAuth();
    const user = useAppSelector(selectUser)

    return(
        <div>
            <span>name:</span>
            <span>{user?.name}</span>
        </div>
    )
}

export default UserInfo;