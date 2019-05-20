const apiPath = "http://localhost:7001/api";
import qs from "qs";
import { get, post, put, deleta } from "../utils/request";

// 获取用户列表
export function fetchUserList(query) {
  return get(`${apiPath}/users`, query);
}
// 添加用户
export function addUser(data) {
  return post(`${apiPath}/users`, data);
}
// 更新用户信息
export function updateUser(id, data) {
  return put(`${apiPath}/users/${id}`, data);
}

// 删除用户
export function deleteUser(id) {
  return deleta(`${apiPath}/users/${id}`);
}

// 获取歌手列表
export function fetchSingerList(query) {
  return get(`${apiPath}/singer`,query);
}

// 创建歌手
export function addSinger(data) {
  return post(`${apiPath}/singer`, data);
}

// 更新歌手信息
export function updateSinger(id, data) {
  return put(`${apiPath}/singer/${id}`, data);
}

// 删除歌手
export function deleteSinger(id) {
  return deleta(`${apiPath}/singer/${id}`);
}

// 获取歌单列表
export function fetchSongListList(query) {
  return get(`${apiPath}/song-list`, query);
}

// 创建歌单
export function addSongList(data) {
  return post(`${apiPath}/song-list`, data);
}

// 更新歌单信息
export function updateSongList(id, data) {
  return put(`${apiPath}/song-list/${id}`, data);
}

// 删除歌单
export function deleteSongList(id) {
  return deleta(`${apiPath}/song-list/${id}`);
}

// 获取歌曲列表
export function fetchSongList(query) {
  return get(`${apiPath}/song`, query);
}

// 创建歌曲
export function addSong(data) {
  return post(`${apiPath}/song`, data);
}

// 更新歌曲信息
export function updateSong(id, data) {
  return put(`${apiPath}/song/${id}`, data);
}

// 删除歌曲
export function deleteSong(id) {
  return deleta(`${apiPath}/song/${id}`);
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