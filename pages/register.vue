<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a 
          class="site-logo" 
          href="/">美团</a>
        <span class="login"><em class="bold">已有美团账号？</em>
          <a href="/login">
            <el-button 
              type="primary" 
              size="small">登录</el-button>
        </a></span>
      </header>
    </article>
    <section>
      <el-form 
        ref="ruleForm" 
        :model="ruleForm" 
        :rules="rules" 
        label-width="100px" 
        class="demo-ruleForm">
        <el-form-item
          label="昵称"
          prop="name">
          <el-input v-model="ruleForm.name"/>
        </el-form-item>
        <el-form-item 
          label="邮箱" 
          prop="email">
          <el-input v-model="ruleForm.email"/>
          <!-- <em>注册成功后，全美团通用</em> -->
          <el-button 
            size="mini" 
            round
            @click="sendMsg">获取邮箱验证码</el-button>
          <span class="status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item 
          label="邮箱动态码" 
          prop="emailCode">
          <el-input 
            v-model="ruleForm.emailCode" 
            maxlength="4"/>
        </el-form-item>
        <el-form-item 
          label="创建密码" 
          prop="pwd">
          <el-input 
            v-model="ruleForm.pwd" 
            type="password"/>
        </el-form-item>
        <el-form-item 
          label="确认密码" 
          prop="rpwd">
          <el-input 
            v-model="ruleForm.rpwd" 
            type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary" 
            @click="register('ruleForm')">同意以下协议并注册</el-button>
        </el-form-item>
        <el-form-item>
          <a 
            class="f1" 
            href="http://www.meituan.com/about/terms" 
            target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  layout: 'blank',
  data() {
    return {
      statusMsg: '',
      ruleForm: {
        name: '',
        email: '',
        emailCode: '',
        pwd: '',
        rpwd: ''
      },
      rules: {
        name: [
          {
            required: true,
            type: 'string',
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: '请输入正确的邮箱',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ],
        rpwd: [
          {
            required: true,
            message: '请输入确认密码'
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error('两次密码输入不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    sendMsg() {
      const self = this
      console.log(self)
      let namePass
      let emailPass
      if (self.timerid) {
        console.log('self.timerid' + self.timerid)
        // self.statusMsg = data.msg
        this.$message('验证请求过于频繁，1分钟内1次')
        return false
      }
      this.$refs['ruleForm'].validateField('name', valid => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        console.log('0')
        return false
      }
      this.$refs['ruleForm'].validateField('email', valid => {
        emailPass = valid
      })
      if (!namePass && !emailPass) {
        console.log('444' + encodeURIComponent(self.ruleForm.email))
        self.$axios
          .post('/users/verify', {
            username: encodeURIComponent(self.ruleForm.name),
            email: self.ruleForm.email
          })
          .then(({ status, data }) => {
            console.log('777')
            if (status === 200 && data && data.code === 0) {
              let count = 60
              self.statusMsg = `验证码已发送，剩余${count--}秒`
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送，剩余${count--}秒`
                if (count === 0) {
                  self.statusMsg = ''
                  clearInterval(self.timerid)
                  self.timerid = null
                }
                // self.timerid = null
              }, 1000)
              // self.timerid = null
            } else {
              console.log('666')
              self.$message(`${data.msg}`)
            }
          })
      }
    },
    register(formName) {
      let self = this
      self.$refs[formName].validate(valid => {
        if (valid) {
          self.$axios
            .post('/users/signup', {
              username: encodeURIComponent(self.ruleForm.name),
              password: CryptoJS.MD5(self.ruleForm.pwd).toString(),
              email: self.ruleForm.email,
              code: self.ruleForm.emailCode
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = '/login'
                } else {
                  self.error = data.msg
                  // self.$self.error)
                  self.$message({
                    message: `${data.msg}`,
                    type: 'warning'
                  })
                }
              } else {
                self.error = `服务器出错，错误码${status}`
              }
              setTimeout(() => {
                self.error = ''
              }, 1500)
            })
        } else {
          console.log('error!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/register/index.scss';
</style>
