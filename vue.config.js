module.exports = {
    devServer: {
        proxy: {
        '/api': {
            target: 'http://testweixin.51vip.biz',
            changeOrigin: true
        }
        }
    }
}
