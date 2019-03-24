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

// 获取歌手列表
export function fetchSingerList() {
  return fetch(`${apiPath}/singer`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

// 创建歌手
export function addSinger(data) {
  return fetch(`${apiPath}/singer`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

// 更新歌手信息
export function updateSinger(id, data) {
  return fetch(`${apiPath}/singer/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  }).then(res => res.json());
}

// 删除歌手
export function deleteSinger(id) {
  return fetch(`${apiPath}/song/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

// 获取歌单列表
export function fetchSongListList() {
  return fetch(`${apiPath}/song-list`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

// 创建歌单
export function addSongList(data) {
  return fetch(`${apiPath}/song-list`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

// 更新歌单信息
export function updateSongList(id, data) {
  return fetch(`${apiPath}/song-list/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  }).then(res => res.json());
}

// 删除歌单
export function deleteSongList(id) {
  return fetch(`${apiPath}/song-list/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

// 获取歌曲列表
export function fetchSongList() {
  return fetch(`${apiPath}/song`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

// 创建歌曲
export function addSong(data) {
  return fetch(`${apiPath}/song`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

// 更新歌曲信息
export function updateSong(id, data) {
  return fetch(`${apiPath}/song/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  }).then(res => res.json());
}

// 删除歌曲
export function deleteSong(id) {
  return fetch(`${apiPath}/song/${id}`, {
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
  fetchSingerList,
  addSinger,
  updateSinger,
  deleteSinger,
  fetchSongListList,
  updateSongList,
  addSongList,
  deleteSongList,
  fetchSongList,
  addSong,
  updateSong,
  deleteSong
};
