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
    }
}

module.exports = { resolvers }