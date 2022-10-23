import {NextPageWithLayout} from "../_app";
import UsetPanelLayout from "../../app/components/usetPanelLayout";
import {useEffect, useState} from "react";

const Panel: NextPageWithLayout = ()=>{
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    })
    if (loading)return <div>loading...</div>
    return (
        <div>
            <h1>amin</h1>
        </div>
    )
}

Panel.getLayout = (page)=> <UsetPanelLayout>{page}</UsetPanelLayout>

export default Panel;