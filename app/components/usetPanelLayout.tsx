import {ReactNode} from "react";

interface Props {
    children : ReactNode
}
const UsetPanelLayout  = ({children} : Props)=>{
    return(
        <div>
            {children}
        </div>
    )
}

export default UsetPanelLayout;