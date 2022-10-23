import Cookies from 'universal-cookie';

const storeLoginToken = (token : string ,days = 10 )=>{
    const cookies = new Cookies();

    cookies.set('shopy-token', 'Pacman',
        {
            path: '/' ,
            domain:'.a-nateghi.ir' ,
            maxAge:(days * 24 * 3600)
        });
    console.log(cookies.get('myCat')); // Pacman
}
const removeLoginToken = ()=>{

}

export {storeLoginToken , removeLoginToken}