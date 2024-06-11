import { createApp } from 'vue'
import App from './App.vue'
//整体导入 ElementPlus 组件库
import ElementPlus from 'element-plus' //导入 ElementPlus 组件库的所有模块和功能 
import 'element-plus/dist/index.css' //导入 ElementPlus 组件库所需的全局 CSS 样式

//createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
