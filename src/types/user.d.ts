/**
 * 密码登录参数
 */
declare interface LoginParamsPwd {
  username:string,
  password:string,
  captcha:number|string
}

/**
 * 邮箱登录参数
 */
declare interface LoginParamsEml {
  email:string,
  emailCode:string,
}

/**
 * 登录参数
 */
declare interface LoginParams extends LoginParamsEml, LoginParamsPwd{
  
}

/**
 * 用户信息
 */
declare interface UserInfo {
  id:number,
  userId:string,
  name:string,
  username:string,
  age:number,
  sex:number,
  phoneNumber:number,
  email:string
}