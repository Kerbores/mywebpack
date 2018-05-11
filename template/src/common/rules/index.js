var validateMobile = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入手机号"));
  } else if (!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(value)) {
    callback(new Error("请输入正确的手机号码"));
  } else {
    callback();
  }
};
var validateEmail = (rule, value, callback) => {
  if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的邮箱地址"));
  }
};
export default {
  user:{}
};
