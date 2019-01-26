const apiPath = "http://localhost:7001/api";

export function login(){
    return fetch(`${apiPath}/users`).then(res => res.json());
}