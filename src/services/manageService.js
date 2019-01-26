const apiPath = "http://localhost:7001/api";

export function fetchUserList() {
    return fetch(`${apiPath}/users`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
}

export function addUser(data) {
    return fetch(`${apiPath}/users`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then( res => res.json());
}

export function deleteUser(data) {
    return fetch(`${apiPath}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export default {
    fetchUserList,
    addUser
}