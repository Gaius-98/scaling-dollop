import { getUpperCase } from 'gaius-utils'

export const formComp:COMMON.Obj = {
  input: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-input
      v-model="formData.${element.prop.field}"
      placeholder="${element.prop.placeholder}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
      :clearable="${element.prop.clearable}"
      :showPassword="${element.prop.showPassword}"
    >
    </el-input>
  </el-form-item>
    `,
  textarea: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-input
      v-model="formData.${element.prop.field}"
      placeholder="${element.prop.placeholder}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
      type="textarea"
      :rows="${element.prop.rows}"
    >
    </el-input>
  </el-form-item>
    `,
  select: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-select
      v-model="formData.${element.prop.field}"
      placeholder="${element.prop.placeholder}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
      :filterable="${element.prop.filterable}"
      :clearable="${element.prop.clearable}"
    >
      <el-option 
      v-for="item in options${getUpperCase(element.prop.field)}"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      >
      </el-option>
    </el-select>
  </el-form-item>
    `,
  checkbox: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-checkbox-group
      v-model="formData.${element.prop.field}"
      placeholder="${element.prop.placeholder}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
    >
      <el-checkbox 
      v-for="item in options${getUpperCase(element.prop.field)}"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      >
      {{item.label}}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
    `,
  color: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-color-picker
      v-model="formData.${element.prop.field}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
    >
    </el-color-picker>
  </el-form-item>
  `,
  date: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-date-picker
      v-model="formData.${element.prop.field}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
      value-format="${element.prop.valueFormat}"
      format="${element.prop.format}"
      type="${element.prop.type}"
      placeholder="${element.prop.placeholder}"
    >
    </el-date-picker>
  </el-form-item>
  `,
  number: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-input-number
      v-model="formData.${element.prop.field}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
      :step="${element.prop.step}"
      :min="${element.prop.min}"
      :max="${element.prop.max}"
      placeholder="${element.prop.placeholder}"
      controls-position="${element.prop.controlsPosition}"
    >
    </el-input-number>
  </el-form-item>
  `,
  switch: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-switch
      v-model="formData.${element.prop.field}"
      :disabled="${element.prop.disabled}"
      activeText="${element.prop.activeText}"
      inactiveText="${element.prop.inactiveText}"
    >
    </el-switch>
  </el-form-item>
  `,
  time: (element:COMMON.Obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-time-picker
      v-model="formData.${element.prop.field}"
      :disabled="${element.prop.disabled}"
      :readonly="${element.prop.readonly}"
      :arrowControl="${element.prop.arrowControl}"
      :clearable="${element.prop.clearable}"
      :isRange="${element.prop.isRange}"
      format="${element.prop.format}"
      inactiveText="${element.prop.inactiveText}"
      placeholder="${element.prop.placeholder}"
    >
    </el-time-picker>
  </el-form-item>
    `,   
  button: (element:COMMON.Obj) => `
  <el-form-item>
    <el-button
    :round="${element.prop.round}"
    :link="${element.prop.link}"
    :bg="${element.prop.bg}"
    :text="${element.prop.text}"
    :plain="${element.prop.plain}"
    :disabled="${element.prop.disabled}"
    size="${element.prop.size}"
    type="${element.prop.type}"
    @click="onClick${getUpperCase(element.prop.field)}"
    >
    ${element.prop.name}
    </el-button>
  </el-form-item>
  `, 
  grid: (element:COMMON.Obj) => {
    let col = ''
    const { prop: { cols, gutter } } = element
    cols.forEach((item:COMMON.Obj) => {
      if (item.list instanceof Array) {
        item.list.forEach((com:COMMON.Obj) => {
          col += `
          <el-col :span='${item.span}'>
              ${formComp[com.comp](com)}
          </el-col>`
        })
      } else {
        col += ''
      }
    })
    const rowTemplate = `
    <el-row :gutter='${gutter}'>
    ${col}
    </el-row>`
    return rowTemplate
  },
  card(element:COMMON.Obj) {
    const { header, card: { list }, shadow } = element.prop
    let formStr = ''
    list.forEach((com:COMMON.Obj) => {
      formStr += `
      ${formComp[com.comp](com)}
      `
    })
    const cardTemplate = `
    <el-card header='${header}' shadow='${shadow}'>
      ${formStr}
    </el-card>
    `
    return cardTemplate
  },
  collapse(element:COMMON.Obj) {
    const { title, collapse: { list } } = element.prop
    let formStr = ''
    list.forEach((com:COMMON.Obj) => {
      formStr += `
      ${formComp[com.comp](com)}
      `
    })
    const cardTemplate = `
    <el-collapse>
      <el-collapse-item 
      title="${title}"
      name="${title}"
      >
      ${formStr}
      </el-collapse-item>
    </el-collapse>
    `
    return cardTemplate
  },
  createOptions: (element:COMMON.Obj) => {
    let optionsObj = ''
    const { prop: { options, field } } = element
    options.forEach((item:COMMON.Obj) => {
      const objStr = `
        {
          label:'${item.label}',
          value:'${item.value}'
        },
      `
      optionsObj += objStr
    })
   
    const optionSfc = `
      const options${getUpperCase(field)} = reactive([${optionsObj}])
    `
    return optionSfc
  },
  createRuleFunc: (element:COMMON.Obj) => {
    const { prop: { field }, form_config: { rules: { required, regular, message }, label } } = element
    if (required && regular) {
      const fnSfc = `
        const check_${field} = (rule: any, value: any, callback: any) =>{
          if(!value){
            callback(new Error('请填写${label}(${field})'))
          }else if(!/${regular}/.test(value)) {
            callback(new Error('${message}'))
          }else {
            callback()
          }
        }
      ` 
      return fnSfc
    }
    return ''
  },
  createRules: (element:COMMON.Obj) => {
    const { prop: { field }, form_config: { rules: { required, regular, message, trigger } } } = element
    if (required) {
      const ruleListSfc = `${field}:[{
        required:true,
        trigger:'${trigger}',
        message:'${message}',
        ${ regular ? 'validator:check_' + field : ''}
      }],`
      return ruleListSfc
    }
    return ''
  },
  createFunction: (element:COMMON.Obj) => {
    const { prop: { field, clickEvent } } = element
    if (clickEvent) {
      return `
      const onClick${getUpperCase(field)} = () =>{
        ${clickEvent}
      }
      `
    }
  },
  createRulesV2: (element:COMMON.Obj) => {
    const { prop: { field }, form_config: { rules: { required, regular, message, trigger } } } = element
    if (required) {
      const ruleListSfc = `${field}:[{
        required:true,
        trigger:'${trigger}',
        message:'${message}',
        ${ regular ? 'validator:this.check_' + field : ''}
      }],`
      return ruleListSfc
    }
    return ''
  },
  createFunctionV2: (element:COMMON.Obj) => {
    const { prop: { field, clickEvent } } = element
    if (clickEvent) {
      return `
      onClick${getUpperCase(field)}(){
        ${clickEvent}
      },
      `
    }
  },
  createRuleFuncV2: (element:COMMON.Obj) => {
    const { prop: { field }, form_config: { rules: { required, regular, message }, label } } = element
    if (required && regular) {
      const fnSfc = `
        check_${field}(rule, value, callback){
          if(!value){
            callback(new Error('请填写${label}(${field})'))
          }else if(!/${regular}/.test(value)) {
            callback(new Error('${message}'))
          }else {
            callback()
          }
        },
      ` 
      return fnSfc
    }
    return ''
  },
  createOptionsV2: (element:COMMON.Obj) => {
    let optionsObj = ''
    const { prop: { options, field } } = element
    options.forEach((item:COMMON.Obj) => {
      const objStr = `
        {
          label:'${item.label}',
          value:'${item.value}'
        },
      `
      optionsObj += objStr
    })
   
    const optionSfc = `
      options${getUpperCase(field)}: [${optionsObj}],
    `
    return optionSfc
  },
}