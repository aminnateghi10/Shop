import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/userPanelLayout";

const Panel: NextPageWithLayout = () => {
    return (
        <div>
            <h1>panel</h1>
        </div>
    )
}

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel;