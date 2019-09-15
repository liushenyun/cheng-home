# cheng-home

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 缺切图
1. 公益项目向右箭头
2. 我的公益 =》我的证书右箭头
2. 我的公益 =》 证书关闭按钮


import { beforeRouteLeave } from '@/common/js/mixin.js'
// @ is an alias to /src
export default {
  name: 'BindPhone',
  mixins: [beforeRouteLeave],