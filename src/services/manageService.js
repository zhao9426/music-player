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

export function deleteUser(id) {
    return fetch(`${apiPath}/users/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}


export function fetchSongList() {
    return fetch(`${apiPath}/song-list`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
}

export function addSong(data) {
    return fetch(`${apiPath}/song-list`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export default {
    fetchUserList,
    addUser,
    deleteUser,
    fetchSongList,
    addSong
}