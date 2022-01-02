import axios from 'axios';

import API from 'lib/api';

function getToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('mytoken');
        return token;
    }
    return null;
}
export function postUser(newUser, router) {
    axios
        .post(
            `${API}/api/v1/user/auth`,
            newUser,

            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic Og==',
                },
            }
        )
        .then((res) => {
            if (res.status === 200) {
                router.push('/');
                localStorage.setItem('mytoken', res.data);
            }
        });
}

export const postNewUser = (newUser, router) => {
    axios
        .post(
            `${API}/api/v1/user/reg`,
            newUser,

            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic Og==',
                },
            }
        )
        .then((res) => {
            if (res.status === 200) {
                router.push('/');
                localStorage.setItem('mytoken', res.data);
            }
        });
};

export function checkToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('mytoken');
        const res = token !== null;

        return res;
    }
    return false;
}
export function postBlog(blog) {
    const token = getToken();
    axios.post(`${API}/api/v1/post`, blog, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
}

export function deletePost(id) {
    const token = getToken();
    axios.delete(`${API}/api/v1/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function editBlog(id, editedBlog) {
    console.log(editedBlog);
    const token = getToken();
    axios.put(`${API}/api/v1/post/${id}`, editedBlog, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
}
