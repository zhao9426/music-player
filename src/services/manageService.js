const apiPath = "http://localhost:7001/api";

// 获取用户列表
export function fetchUserList() {
  return fetch(`${apiPath}/users`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}
// 添加用户
export function addUser(data) {
  return fetch(`${apiPath}/users`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
// 更新用户信息
export function updateUser(id, data) {
    return fetch(`${apiPath}/users/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

// 删除用户
export function deleteUser(id) {
  return fetch(`${apiPath}/users/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

// 获取歌单列表
export function fetchSongList() {
  return fetch(`${apiPath}/song-list`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

// 创建歌单
export function addSong(data) {
  return fetch(`${apiPath}/song-list`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

// 删除歌单
export function deleteSong(id) {
  return fetch(`${apiPath}/song-list/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export default {
  fetchUserList,
  addUser,
  updateUser,
  deleteUser,
  fetchSongList,
  addSong,
  deleteSong
};
