class userService {
    async createUser({ userName, password }) {
        return '我收到了用户名密码并写入了数据库!///'
    }
};
module.exports =new userService()