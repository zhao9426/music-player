import qs from "qs";
import base from './base';
import { get, post, put, deleta } from '../utils/request';

// 获取我的歌单列表
export function fetchMySongList(query) {
  return get(`${base}/my/csl`, query);
}

// 获取我收藏的歌单列表
export function fetchMyFavoriteSongList(query){
  return get(`${base}/my/collect-song-list`, query);
}
// 获取我关注的歌手列表
export function fetchMyFlowSinger(query){
  return get(`${base}/my/like-singer`, query);
}
// 歌曲类别
export function fetchMyFavoriteSong(query){
  return get(`${base}/my/like-song`, query);
}


export default {
  fetchMySongList,
  fetchMyFavoriteSongList,
  fetchMyFlowSinger,
  fetchMyFavoriteSong
};