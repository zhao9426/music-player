const apiPath = "http://localhost:7001/api";
const base = 'http://localhost:7001'
import Cookies from 'js-cookie'

export default function login(data) {
    let csrfToken = Cookies.get('csrfToken');
    console.log(csrfToken);
    
    if(!csrfToken){
        return fetch(`${base}/token`).then(res=> {
            return res.json();
        }).then((t) => {   
            return fetch(`${base}/login`, {
                method: "POST",
                withCredentials: true,
            //   credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                  //  'x-csrf-token': t.token,
                //    'Cookie': `csrfToken=${t.token}`
                },
                body: JSON.stringify(data)
            }).then(res => res.json());
        });
    } else {
        return fetch(`${base}/login`, {
            method: "POST",
           // withCredentials: true,
          //  credentials: "include",
            headers: {
                'Content-Type': 'application/json',
             //   'x-csrf-token': Cookies.get('csrfToken'),
             //   'Cookie': `csrfToken=${Cookies.get('csrfToken')}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }
    
}