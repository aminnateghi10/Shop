import {NextPageWithLayout} from "../_app";
import UsetPanelLayout from "../../app/components/usetPanelLayout";

const Panel: NextPageWithLayout = ()=>{
    return (
        <div>
            <h1>panel</h1>
        </div>
    )
}

Panel.getLayout = (page)=> <UsetPanelLayout>{page}</UsetPanelLayout>

export default Panel;