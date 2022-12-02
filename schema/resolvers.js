const { UserList } = require('../fakeData')

const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (_, args) => {
            const id = args.id
            return UserList.filter((user) => {
                return user.id == id
            })[0]
        }
    },

    Mutation: {
        newUser: (parent, args) => {
            const newUser = args.input
            newUser.id = UserList[UserList.length - 1].id + 1
            UserList.push(newUser)
            return newUser
        },

        updateUser: (parent, args) => {
            const newUserData = args.input
            let user = UserList.filter((user) => {
                return user.id == newUserData.id
            })[0]
            user.age = newUserData.age
            user.name = newUserData.name
            user.username = newUserData.username
            user.nationality = newUserData.nationality

            return user

        },

        deleteUser: (parent,args) => {
            return  UserList.filter((user) => {
                return user.id != args.id
            })
        }
    }
}

module.exports = { resolvers }