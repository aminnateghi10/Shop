import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/userPanelLayout";
import AdminPanelLayout from "../../app/components/adminPanelLayout";

const Panel: NextPageWithLayout = () => {
    return (
        <div>
            <h1>Admin panel</h1>
        </div>
    )
}

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>
Panel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default Panel;