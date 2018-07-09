import Api from 'axios'

export default Api.create({
    baseURL:'/apiex/',
    timeout:5000,
    //headers: 'application/x-www-form-urlencoded'
})


export function get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        console.log(res);
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  





// axios拦截响应
Api.interceptors.response.use(response => {
    // 后端的checkLogin返回的json数据作为跳转依据
    if (!response.data.session) 
    {
        router.replace({
            path: 'login',
            query: {
                redirect: router.currentRoute.fullPath
            }
        })
    }
    return response
}, err => {
    return Promise.reject(err)
})

