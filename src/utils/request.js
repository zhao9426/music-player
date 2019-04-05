import qs from "qs";

export default function request(url, options = {}) {
  return fetch(`${url}`, options).then(res => res.json());
}

export function get(url, query) {
  let urlWithQuery = `${url}${query ? "?=" + qs.stringify(query) : ""}`;
  return request(urlWithQuery);
}

export function post(url, data) {
  return request(`${url}`, {
    method: "POST",
    mode: "cors",
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

export function deleta(url) {
  return fetch(`${url}`, {
    method: "DELETE",
    mode: "cors"
  }).then(res => res.json());
}
