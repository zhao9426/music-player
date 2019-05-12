import qs from "qs";
import base from './base';
import { get, post, put, deleta } from '../utils/request';

// 获取精选歌单
export function fetchHomeSongList() {
  return get(`${base}/song-list`);
}
//获取评论 query中必传topicId, topicType字段
export function fetchCommentList(query) {
  return get(`${base}/api/comments`, query);
}

// 发表评论 data中需要fromId, fromName, topicId, topicType，content三个必传字段
export function createComment(data) {
  return post(`${base}/api/comments`, data);
}

// 删除评论 data中需要fromId, topicId, topicType三个必传字段
export function deleteComment(id, data) {
  return deleta(`${base}/api/comments/${id}`, data);
}


// 获取新歌列表
export function fetchHomeNewSong(){
  return get(`${base}/new-songs`);
}

//获取某一首歌曲
export function fetchSong(songId){
  return get(`${base}/api/song/${songId}`);
}
// 获取歌手列表
export function fetchHomeSinger(){
  return get(`${base}/singers`)
}
// 获取歌手信息
export function fetchSingerInfo(id){
  return get(`${base}/api/singer/${id}`);
}
// 歌曲类别
export function fetchCategories(){
  return get(`${base}/category`);
}
// 歌曲排行榜
export function fetchRankList(query){
  return get(`${base}/rank`, query);
}

export default {
  fetchHomeSongList,
  fetchHomeNewSong,
  fetchSong,
  fetchHomeSinger,
  fetchCategories,
  fetchRankList,
  fetchCommentList,
  fetchSingerInfo,
  createComment,
  deleteComment
};