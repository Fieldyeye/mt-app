<template>
  <div/>
</template>

<script>
export default {
  layout: 'blank',
  // 没有交互行为，所以使用中间件来做这件事
  middleware: async ctx => {
    let { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>
