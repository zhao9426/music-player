import qs from "qs";
import base from './base';
import { get, post, put, deleta } from '../utils/request';

// 获取精选歌单
export function fetchHomeSongList() {
  return get(`${base}/song-list`);
}

// 获取新歌列表
export function fetchHomeNewSong(){
  return get(`${base}/new-songs`);
}
// 获取歌手列表
export function fetchHomeSinger(){
  return get(`${base}/singers`)
}

export default {
  fetchHomeSongList,
  fetchHomeNewSong,
  fetchHomeSinger
};