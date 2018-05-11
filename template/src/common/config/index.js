export default {
  http: {
    baseUrl: process.env.NODE_ENV == "development" ? "/api/" : "/", //根url
    timeOut: 10000, //超时时间
    ignorePaths: ["health", "beans"] //忽略拦截的路径
  },
  system: {
    name: "{{ name }}"
  }
};
