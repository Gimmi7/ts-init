let env: string = process.argv[2];

if (!env) {
  console.log("env is empty use dev");
  env = 'dev';
}

let config: { [key: string]: any } = {
  server: { name: "ts-init", port: 8848, contextPath: '' },
  env,
};

const res = require(`./application-${env}`);
let envConfig: { [key: string]: any } = res.default;
const configKeySet: Set<string> = new Set(Object.keys(config));
Object.keys(envConfig).forEach(k => {
  if (!configKeySet.has(k)) {
    config[k] = envConfig[k];
  }
});

export default config;