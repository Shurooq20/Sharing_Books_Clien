const BASE_URL = `http://localhost:3000/api/v1`

export const Category = {
  all() {
    return fetch(`${BASE_URL}/categories`, {
      credentials: 'include',
    }).then((res) => res.json())
  },
  one(id) {
    return fetch(`${BASE_URL}/categories/${id}`, {
      credentials: 'include',
    }).then((res) => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/categories`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  },

  delete(id) {
    return fetch(`${BASE_URL}/categories/${id}`, {
      method: 'Delete',
      credentials: 'include',
    }).then((res) => res.json())
  },
};

export const Book = {
  all(id) {
    return fetch(`${BASE_URL}/categories/${id}/books`, {
      credentials: 'include',
    }).then((res) => res.json())
  },
  one(id) {
    return fetch(`${BASE_URL}/books/${id}`, {
      credentials: 'include',
    }).then((res) => res.json())
  },
  create(params, id) {
    return fetch(`${BASE_URL}/categories/${id}/books`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  },

  update(id, params) {
    return fetch(`${BASE_URL}/books/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  },

  delete(id) {
    return fetch(`${BASE_URL}/books/${id}`, {
      method: 'Delete',
      credentials: 'include',
    }).then((res) => res.json())
  },

  searchTitle(title) {
    return fetch(`${BASE_URL}/book/${title}`, {
      credentials: 'include',
    }).then((res) => res.json())
  },
};

export const Review = {
  all(id) {
    return fetch(`${BASE_URL}/books/${id}/reviews`, {
      credentials: 'include',
    }).then((res) => res.json())
  },

  create(params, id) {
    return fetch(`${BASE_URL}/books/${id}/reviews`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  },

  delete(id) {
    return fetch(`${BASE_URL}/reviews/${id}`, {
      method: 'Delete',
      credentials: 'include',
    }).then((res) => res.json())
  },
};


export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => {
      return res.json()
    })
  },
  delete() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: 'include',
    }).then((res) => res.json());
  },
};

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: 'GET',
      credentials: 'include',
    }).then((res) => res.json())
  },

  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  },
};


export default {
  Category,
  Book,
  Session,
  User,
  Review,
}
