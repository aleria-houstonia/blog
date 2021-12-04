import axios from 'axios';

import API from 'lib/api';

function getToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('mytoken');
        return token;
    }
    return (token = null);
}
export function postUser(newUser) {
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
            localStorage.setItem('mytoken', res.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const postNewUser = (newUser) => {
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
            console.log(res);
            localStorage.setItem('mytoken', res.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export async function getPost() {
    const { data } = await axios(`${API}/api/v1/post?page=1&count=7`);
    return data;
}

export function postBlog(blog) {
    const token = getToken();
    axios
        .post(`${API}/api/v1/post`, blog, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => console.log(res));
}
