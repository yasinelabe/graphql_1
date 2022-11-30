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
        newUser: (parent,args) => {
            const newUser = args.input
            newUser.id = UserList[UserList.length-1].id + 1
            UserList.push(newUser)
            return newUser
        }
    }
}

module.exports = { resolvers }