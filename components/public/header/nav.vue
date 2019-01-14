<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/#">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/#">我的优惠券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/#">返现</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/#">我的设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
          <dd><nuxt-link to="/#">我想干嘛</nuxt-link></dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link to="/center">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>酒店</dd>
            <dd>客房</dd>
            <dd>如家</dd>
            <dd>在线预订</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烧烤</dd>
            <dd>小吃</dd>
            <dd>烤鱼</dd>
            <dd>羊肉串</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>生死极速</dd>
            <dd>生死极速</dd>
            <dd>生死极速</dd>
            <dd>生死极速</dd>
            <dd>生死极速</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd><img 
              class="appicon"
              src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
              title="美团app"
              alt="美团app"></dd>
            <dd><img 
              class="appicon"
              src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
              title="美团app"
              alt="美团app"></dd>
            <dd><img 
              class="appicon"
              src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
              title="美团app"
              alt="美团app"></dd>
            <dd><img 
              class="appicon"
              src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
              title="美团app"
              alt="美团app"></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style>
</style>
