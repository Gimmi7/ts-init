import fs from 'fs';
import path, { relative } from 'path';

/**
 * 注册本路径下所有非 index 开头的文件，支持文件夹递归处理
 * @param dirpath 
 */
function registerController(dirpath: string) {
  const files: string[] = fs.readdirSync(dirpath)
  files.forEach(filename => {
    const absolutePath: string = dirpath + path.sep + filename
    const isDir: boolean = fs.lstatSync(absolutePath).isDirectory()
    if (isDir) {
      registerController(absolutePath)
    } else if (!filename.startsWith('index.')) {
      // 动态require时需要去掉文件后缀，因为webpack生成的map中只有无文件后缀的key,以及.ts后缀的key
      const suffix = /.ts$|.js$/
      console.log(filename)
      let relative: string = path.relative(__dirname, absolutePath)
      // windows的path.sep='\',webpack生成的path.sep='/'
      relative = relative.replace(/\\/g, '/')
      import("@/controller/" + relative.replace(suffix, ''))
    }
  })
}


registerController(__dirname)