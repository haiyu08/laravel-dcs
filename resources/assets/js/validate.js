import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN';//引入中文文件
import VueI18n from 'vue-i18n';

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN',
})

// 配置中文
//Validator.addLocale(zh_CN);

Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});

/*
// 自定义validate TM版本不兼容了
const dictionary = {
   zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        required: ( field )=> "请输入" + field
      },
      attributes:{
        email:'邮箱',
        password:'密码',
        name: '账号',
        phone: '手机'
      }
  }
};

//Validator.updateDictionary(dictionary);

Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});*/