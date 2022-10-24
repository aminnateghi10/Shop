import Cookies from 'universal-cookie';

const storeLoginToken = (token : string ,days = 10 )=>{
    const cookies = new Cookies();

    cookies.set('shopy-token', token, {
        path: '/' ,
        maxAge: days * 24 * 36000
    });
}
const removeLoginToken = ()=>{

}

export {storeLoginToken , removeLoginToken}