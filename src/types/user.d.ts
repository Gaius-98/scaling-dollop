/**
 * 登录方式：密码登录，邮箱登录
 */
declare type loginType = 'password'|'email'

/**
 * 密码登录参数
 */
declare interface loginParamsPwd {
  username:string,
  password:string,
  captcha:number|string
}

/**
 * 邮箱登录参数
 */
declare interface loginParamsEml {
  email:string,
  emailCode:string,
}

/**
 * 登录参数
 */
declare interface loginParams extends loginParamsEml, loginParamsPwd{
  
}