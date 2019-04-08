import base from './base';
import Cookies from 'js-cookie';

import { get, post } from '.././utils/request'

export default function login(data) {
    let csrfToken = Cookies.get('csrfToken');
    console.log(csrfToken);
    if(!csrfToken){
        return get(`${base}/token`).then(res=> {
            return res;
        }).then((t) => {   
            return post(`${base}/login`, data);
        });
    } else {
        return post(`${base}/login`, data);
    }  
}