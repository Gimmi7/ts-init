import fs from 'fs';

const files: string[] = fs.readdirSync(__dirname)
files.forEach(f => {
  if (!f.startsWith('index.')) {
    // 动态require时需要去掉文件后缀，因为webpack生成的map中只有无文件后缀的key,以及.ts后缀的key
    const suffix = /.ts$|.js$/
    require(`./${f.replace(suffix, '')}`);
  }
})