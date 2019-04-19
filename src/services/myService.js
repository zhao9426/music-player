import qs from "qs";
import base from './base';
import { get, post, put, deleta } from '../utils/request';

// 获取我的歌单列表
export function fetchMySongList() {
  return get(`${base}/my/song-list`);
}

// 获取我收藏的歌单列表
export function fetchMyFavoriteSongList(){
  return get(`${base}/my/collect-song-list`);
}
// 获取我关注的歌手列表
export function fetchMyFlowSinger(){
  return get(`${base}/my/like-singer`);
}
// 歌曲类别
export function fetchMyFavoriteSong(){
  return get(`${base}/my/like-song`);
}


export default {
  fetchMySongList,
  fetchMyFavoriteSongList,
  fetchMyFlowSinger,
  fetchMyFavoriteSong
};