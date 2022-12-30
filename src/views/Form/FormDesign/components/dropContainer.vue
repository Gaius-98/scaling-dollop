<template>
  <el-form>
    <draggable
      v-model="list"
      item-key="compId"
      group="comp"
      class="drop_container"
      @change="getChange"
    >
      <template
        #item="{element,index}"
      >
        <div>
          <el-form-item
            :prop="element.field"
            :label="element.form_config.label"
          >
            <el-input
              v-if="element.comp == 'input'"
              :key="element.compId"
              v-model="formData[element.field]"
              v-bind="element.prop"
            >
            </el-input>
            <el-select
              v-if="element.comp == 'select'"
              v-bind="element.prop"
              :key="element.compId"
              v-model="formData[element.field]"
            >
              <el-option
                v-for="item in element.prop.options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-row
            v-if="element.comp == 'row'"
            style="height:200px"
          >
            <el-col :span="12">
              <draggable
                v-model="element.row.one"
                item-key="compId"
                group="comp"
                style="height:200px"
                @change="getChange"
              >
                <template
                  #item="{element,index}"
                >
                  <div>
                    <el-form-item
                      :prop="'field' + index"
                      :label="element.name"
                    >
                      <el-input v-if="element.comp == 'el-input'">
                      </el-input>
                      <el-select v-if="element.comp == 'el-select'">
                      </el-select>
                    </el-form-item>
                  </div>
                </template>
              </draggable>
            </el-col>
            <el-col :span="12">
              <draggable
                v-model="element.row.two"
                item-key="compId"
                group="comp"
                style="height:200px"
                @change="getChange"
              >
                <template
                  #item="{element,index}"
                >
                  <div>
                    <el-form-item
                      :prop="'field' + index"
                      :label="element.name"
                    >
                      <el-input v-if="element.comp == 'el-input'">
                      </el-input>
                      <el-select v-if="element.comp == 'el-select'">
                      </el-select>
                    </el-form-item>
                  </div>
                </template>
              </draggable>
            </el-col>
          </el-row>
        </div>
      </template>
    </draggable>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import draggable from 'vuedraggable'

const list = ref([])
const rowList = ref([])
const rowList2 = ref([])
const formData = reactive<COMMON.obj>({})
const getChange = (val:any) => {
  console.log(val)
}
</script>
<style scoped lang='scss'>
.drop_container{
  width: 800px;
  height: calc(100vh - 120px);
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
}
</style>