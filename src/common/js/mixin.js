// 头部查询按钮事件
export const beforeRouteLeave = {
    beforeRouteLeave (to, from, next) {
        console.log(to, from, next)
        history.pushState(null, null, location.search.replace(/code/g, 'XX'))
        next()
    }
}
