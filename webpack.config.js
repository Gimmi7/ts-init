const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path")
const glob = require('glob')

module.exports = {

  entry: _getEntries(), //"./src/index.ts",
  target: 'node',
  externalsPresets: { node: true }, //  in order to ignore built-in modules like path, fs, etc.
  externals: {
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate",
  },

  optimization: {
    minimize: false
  },

  output: {
    path: path.resolve(__dirname, "dist/src"),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },

  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  node: {
    // console: true,
    global: true,
    // process: true,
    __filename: true,
    __dirname: true,
    // setImmediate: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin()
  ]

}

// function _externals() {
//   let manifest = require('./package.json')
//   let dependencies = manifest.dependencies
//   let externals = {}
//   for (let p in dependencies) {
//     externals[p] = 'commonjs' + p
//   }
//   return externals
// }


function _getEntries() {
  let map = {}

  const srcpath = path.resolve(__dirname, 'src')
  const entryFiles = glob.sync(srcpath + "/**/*.ts")
  entryFiles.forEach(filepath => {
    if (filepath.endsWith('.d.ts')) {
      return
    }
    let fileDir = /\/src\/(.*?)\.ts/.exec(filepath)
    map[fileDir[1]] = filepath
  })

  return map
}