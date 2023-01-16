export const formComp:COMMON.obj = {
  input: (element:COMMON.obj) => `
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
  textarea: (element:COMMON.obj) => `
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
  select: (element:COMMON.obj) => `
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
      v-for="item in options_${element.prop.field}"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      >
      </el-option>
    </el-select>
  </el-form-item>
    `,
  checkbox: (element:COMMON.obj) => `
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
      v-for="item in options_${element.prop.field}"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      >
      {{item.label}}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
    `,
  color: (element:COMMON.obj) => `
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
  date: (element:COMMON.obj) => `
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
  number: (element:COMMON.obj) => `
  <el-form-item
    prop="${element.prop.field}"
    label="${element.form_config.label}"
  >
    <el-input-number
      v-model="formData.${element.prop.field}"
      :readonly="${element.prop.readonly}"
      :disabled="${element.prop.disabled}"
      :step="${element.prop.valueFormat}"
      :min="${element.prop.format}"
      :max="${element.prop.type}"
      placeholder="${element.prop.placeholder}"
      controls-position="${element.prop.controlsPosition}"
    >
    </el-input-number>
  </el-form-item>
  `,
  switch: (element:COMMON.obj) => `
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
  time: (element:COMMON.obj) => `
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
  grid: (element:COMMON.obj) => {
    let col = ''
    element.prop.cols.forEach((item:COMMON.obj) => {
      item.list.forEach((com:COMMON.obj) => {
        col += `
        <el-col :span='${item.span}'>
          ${formComp[com.comp](com)}
        </el-col>`
      })
    })
    const rowTemplate = `
    <el-row :gutter='${element.prop.gutter}'>
    ${col}
    </el-row>`
    return rowTemplate
  },
  createOptions: (element:COMMON.obj) => {
    let optionsObj = ''
    element.prop.options.forEach((item:COMMON.obj) => {
      const objStr = `
      {
        label:'${item.label}',
        value:'${item.value}'
      },`
      optionsObj += objStr
    })
   
    const optionSfc = `
    const options_${element.prop.field} = reactive([${optionsObj}])`
    return optionSfc
  },

}