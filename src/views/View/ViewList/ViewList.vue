<template>
  <div class="view-list">
    <div class="opt">
      <el-row>
        <el-col
          :offset="22"
          :span="2"
        >
          <el-button
            type="primary"
            @click="onAdd"
          >
            新增
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="filter">
      <el-row align="middle">
        <e-col :span="4">
          页面名称
        </e-col>
        <el-col
          :span="4"
          :offset="1"
        >
          <el-input
            v-model="params.keyword"
          >
          </el-input>
        </el-col>
        <el-col
          :span="4"
          :offset="10"
        >
          <el-button @click="getList">
            搜索
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="page-list">
      <div
        v-for="item in list"
        :key="item.id"
        class="page-item"
      >
        <div class="header">
          <div class="title">
            {{ item.name }}
          </div>
          <div class="opt">
            <el-icon
              :size="16"
              title="编辑"
              @click="onEdit(item)"
            >
              <Edit />
            </el-icon>
            <el-divider direction="vertical" />
            <el-icon
              :size="16"
              title="预览"
              color="#409EFF"
              @click="onPreview(item)"
            >
              <View />
            </el-icon>
            <el-divider direction="vertical" />
            <el-popconfirm
              title="确定要删除吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
              @confirm="onDel(item)"
            >
              <template #reference>
                <el-icon
                  :size="16"
                  color="red"
                  title="删除"
                >
                  <Delete />
                </el-icon>
              </template>
            </el-popconfirm>
          </div>
        </div>
        <img
          :src="item.img"
          alt=""
        >
      </div>
    </div>
    <ev-pager></ev-pager>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import api from '@/views/View/service/api'
import { useRouter } from 'vue-router'
import { Edit, Delete, View } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const list = ref<ViewData[]>()
const params = ref({
  pageSize: 10,
  pageNumber: 1,
  keyword: '',
  pageSizes: [10, 20, 30],
  total: 0,
})
const getList = () => {
  api.getList(params.value)
  .then(res => {
    const { code, data } = res
    if (code == 0) {
      list.value = data.rows
      params.value.total = data.count
    }
  })
}
getList()
const router = useRouter()
const onAdd = () => {
  router.push({
    name: 'viewDesign',
    query: {
      type: 'add',
    },
  })
}
const onEdit = (row:ViewData) => {
  router.push({
    name: 'viewDesign',
    query: {
      id: row.id,  
      type: 'edit',   
    },
  })
}
const onPreview = (row:ViewData) => {
  router.push({
    name: 'viewPre',
    query: {
      id: row.id,
    },
  })
}
const onDel = (row:ViewData) => {
  api.deletePage({
    id: row.id,
  }).then(res => {
    const { code, msg } = res
    if (code == 0) {
      ElMessage.success(msg)
      getList()
    }
  })
}
</script>
<style scoped lang='scss'>
.view-list{
    margin: 10px;
    .page-list{
        display: grid;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 250px;
        margin-top: 10px;
        .page-item{
            width: 100%;
            height: 100%;
            border-radius: 4px;
            overflow: hidden;
            .header{
                display: flex;
                justify-content: space-between;
                background-color: var(--ev-border);
                align-items: center;
                padding: 0 10px;
                .title{
                    height: 30px;
                    line-height: 30px;
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--ev-text-color);
                }
                .opt{
                    display: flex;
                    color: var(--ev-text-color);
                    cursor: pointer;
                }
            }

            img{
                width: 100%;
                height: calc(100% - 30px);
            }
        }
    }
}
</style>