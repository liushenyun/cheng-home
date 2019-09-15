// let d = 'http://hndn7e.natappfree.cc'
// let d = 'http://192.168.7.200:8088'
let d = 'http://m.chengmall.cn'
module.exports = {
    devServer: {
        proxy: {
            // '/api': {
            //     target: 'http://testweixin.51vip.biz',
            //     changeOrigin: true
            // },
            // '/api': {
            //     target: 'http://192.168.7.155:8088',
            //     changeOrigin: true
            // },
            '/wx': {
                target: d,
                changeOrigin: true
            },
            '/api': {
                target: d,
                changeOrigin: true
            },
            '/common': {
                target: d,
                changeOrigin: true
            }
            // '/wx': {
            //     target: 'http://m.chengmall.cn',
            //     changeOrigin: true
            // },
            // '/api': {
            //     target: 'http://m.chengmall.cn',
            //     changeOrigin: true
            // },
            // '/common': {
            //     target: 'http://m.chengmall.cn',
            //     changeOrigin: true
            // }
        },
        disableHostCheck: true
    }
}
