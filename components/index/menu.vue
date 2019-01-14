<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd 
        v-for="(item, idx) in $store.state.home.menu" 
        :key="idx" 
        @mouseenter="mouseIn"
        @mouseleave="mouseOut">
        <i :class="item.type"/>{{ item.name }}
        <span class="arrow"/>      
      </dd>
    </dl>
    <div 
      v-if="kind" 
      class="detail" 
      @mouseenter="sover" 
      @mouseleave="sout">
      <template v-for="(list,idx) in curdetail.child">
        <h4 :key="idx">{{ list.title }}</h4>
        <span 
          v-for="v in list.child" 
          :key="v">{{ v }}</span>
      </template>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: '',
      menu: []
    }
  },
  computed: {
    curdetail: function() {
      return this.$store.state.home.menu.filter(
        item => item.type === this.kind
      )[0]
    }
  },
  methods: {
    mouseIn(e) {
      this.sover()
      this.kind = e.target.querySelector('i').className
    },
    mouseOut() {
      let self = this
      self._timer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    sover() {
      clearTimeout(this._timer)
    },
    sout() {
      this.kind = ''
    }
  }
}
</script>
