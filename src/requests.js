const BASE_URL = `http://localhost:3000/api/v1`;

export const Category = {
    all() {
        return fetch(`${BASE_URL}/categories`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    one(id) {
        return fetch(`${BASE_URL}/categories/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/categories`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },

    delete(id) {
        return fetch(`${BASE_URL}/categories/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },

};

export const Book = {
    all(id) {

        return fetch(`${BASE_URL}/categories/${id}/books`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    one(categoryId, id) {
        return fetch(`${BASE_URL}/categories/${categoryId}/books/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params, id) {
        return fetch(`${BASE_URL}//categories/${id}/books`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }

};

export const Session = {
    create(params) {

        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((res) => {
            return res.json();
        })
    }
}

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            method: 'GET',
            credentials: 'include'
        }).then(res => res.json());
    },

    create(params) {
        return fetch(`${BASE_URL}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((res) => res.json())
    }
}

export default {
  Category,
  Book,
  Session,
  User
}