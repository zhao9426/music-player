import qs from "qs";
import base from './base';
import { get, post, put, deleta } from '../utils/request';



// 获取歌曲列表
export function fetchSongs(query){
  return get(`${base}/songs`, query);
}

export default {
  fetchSongs
};