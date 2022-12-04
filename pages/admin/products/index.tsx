import {NextPageWithLayout} from "../../_app";
import AdminPanelLayout from "../../../app/components/adminPanelLayout";

const Panel: NextPageWithLayout = () => {
    return (
        <div style={{overflowY:'scroll'}}>
            <h1 style={{width:'1500px', background:'red'}}>produsosdf panel</h1>
        </div>
    )
}

Panel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default Panel;