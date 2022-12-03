import React from 'react'
import { useQuery, gql } from '@apollo/client'

const ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            username
            age
            nationality
        }
    }
`

function Users() {

    const { data, loading, error } = useQuery(ALL_USERS)

    if (data) {
        console.log(data)
    }
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.log(error)
    }

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Nationality</th>
                </tr>
            </thead>
            <tbody>
                {data && data.users.map((user) => {
                    return (<tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.nationality}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}


export default Users