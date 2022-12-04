import {NextPageWithLayout} from "../../_app";
import AdminPanelLayout from "../../../app/components/adminPanelLayout";

const Panel: NextPageWithLayout = () => {
    return (
        <div>
            <h1>usedr panel</h1>
        </div>
    )
}

Panel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default Panel;