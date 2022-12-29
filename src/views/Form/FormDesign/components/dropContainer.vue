<template>
  <el-form>
    <draggable
      v-model="list"
      item-key="id"
      group="comp"
      class="drop_container"
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
          <el-row
            v-if="element.comp == 'el-row'"
            style="height:200px"
          >
            <el-col :span="12">
              <draggable
                v-model="element.list"
                item-key="id"
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
                v-model="element.list"
                item-key="id"
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