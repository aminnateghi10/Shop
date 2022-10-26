import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/userPanelLayout";
import {useAuth} from "../../app/hooks/useAuth";
import UserInfo from "../../app/components/panel/userInfo";
import {removeLoginToken} from "../../app/helpers/auth";

const Panel: NextPageWithLayout = () => {
        const {user} = useAuth();
    return (
        <div>
            <UserInfo/>
            <div onClick={removeLoginToken}>log out</div>
        </div>
    )
}

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel;