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
                target: 'http://uzw23m.natappfree.cc',
                changeOrigin: true
            },
            '/api': {
                target: 'http://uzw23m.natappfree.cc',
                changeOrigin: true
            },
            '/common': {
                target: 'http://uzw23m.natappfree.cc',
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
