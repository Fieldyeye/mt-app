import Router from 'koa-router'
import axios from './utils/axios'
import sign from './utils/sign'

let router = new Router({
  prefix: '/search'
})

router.get('/top',async ctx=>{
    let {status,data:{top}} = await axios.get(`http://cp-tools.cn/search/top`, {
        params: {
            input: ctx.query.input,
            city: ctx.query.city,
            sign
        }
    })
    
    ctx.body = {
        top: status === 200 ? top.slice(0,8): []
    }
})

router.get('/hotPlace',async ctx=>{
    let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
    let {status,data:{result}} = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
        params: {
            sign,
            city
        }
    })
    ctx.body = {
        result: status === 200 ? result : []
    }
})

router.get('/resultsByKeywords', async (ctx) => {
    const {city, keyword} = ctx.query;
    let {
      status,
      data: {
        count,
        pois
      }
    } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
      params: {
        city,
        keyword,
        sign
      }
    })
    ctx.body = {
      count: status === 200 ? count : 0,
      pois: status === 200
        ? pois
        : []
    }
  })

  router.get('/products', async (ctx) => {
    let keyword = ctx.query.keyword || '旅游'
    global.console.log('ctx.query.city'+ctx.query.city)
    let city = ctx.query.city || '上海'
    let {
      status,
      data: {
        product,
        more
      }
    } = await axios.get('http://cp-tools.cn/search/products', {
      params: {
        keyword,
        city,
        sign
      }
    })
    global.console.log('product'+product)
    global.console.log('more'+more)
    if (status === 200) {
      ctx.body = {
        product,
        more: ctx.isAuthenticated() ? more: [],
        login: ctx.isAuthenticated()
      }
    }else{
      ctx.body = {
        product: {},
        more: ctx.isAuthenticated() ? more: [],
        login: ctx.isAuthenticated()
      }
    }
  })

export default router
