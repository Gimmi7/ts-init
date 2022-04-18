// 注册tsconfig-paths,在IDE本地运行时需要,webpack打包时通过alias来实现
// if (process.env.NODE_ENV !== 'production') {
//   require('tsconfig-paths/register')
// }
// 初始化环境变量
import '@/resources/application';
// 启动 express server
import '@/config/expressConfig';



