import Cookies from "universal-cookie";
import useSWR from "swr";
import callApi from "../helpers/callApi";

const useAuth = ()=>{
const cookies = new Cookies();
    const {data , error} = useSWR('user-me',()=>{
        return callApi().get('/user',{
            headers:{
                authorization:cookies.get('shopy-token')
            }
        })
    })
    return {user:data?.data?.user , error , loading: !data && !error}
}


export {useAuth}