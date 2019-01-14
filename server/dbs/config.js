// 配置数据库
export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    // 只读
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get port() {
      return 587
    },
    get user() {
      return '@qq.com'
    },
    get pass() {
      return ''
    },
    //验证码生成
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6).toUpperCase()
      }
    },
    // 验证码有效时间
    get expire() {
      return () => {
        return new Date().getTime() + 1 * 60 * 1000
      }
    }
  }
}
