import axios from 'axios';

import API from 'lib/api';

// /api/v1/user/reg
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
