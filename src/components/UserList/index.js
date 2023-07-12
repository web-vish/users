import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/users').then(({ data }) => {
            setUsers(data.users);
        })

    }, [])

    return (
        <section>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <div className='image-container'>
                                <img src={user.image} />
                            </div>
                            <section className='user-container'>
                                <h2>
                                    {user.firstName + user.lastName}
                                </h2>
                                <p>{user.email}</p>
                                <div className='user-footer'>
                                    <button>See Profile</button>
                                </div>
                            </section>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
