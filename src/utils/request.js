import qs from "qs";
import { message } from 'antd'

export default function request(url, options = {}) {
  return fetch(`${url}`, options).then(res => res.json()).catch((error)=> {
    message.error(error.message);
  });/* 浏览器增加的发送ajax请求的fetch API */
}

export function get(url, query) {
  let urlWithQuery = `${url}${query ? "?" + qs.stringify(query) : ""}`;
  return request(urlWithQuery);
}

export function post(url, data) {
  return request(`${url}`, {
    method: "POST",
    mode: "cors",/* 跨域 */
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export function put(url, data) {
  return request(`${url}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export function deleta(url, data = {}) {
  return fetch(`${url}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
