<template>
  <div class="view-list">
    <div class="opt">
      <el-row>
        <el-col
          :offset="22"
          :span="2"
        >
        </el-col>
      </el-row>
    </div>
    <div class="filter">
      <el-row align="middle">
        <el-col :span="1">
          页面名称
        </el-col>
        <el-col
          :span="3"
        >
          <el-input
            v-model="params.keyword"
          >
          </el-input>
        </el-col>
        <el-col
          :span="2"
          :offset="1"
        >
          <el-button @click="getList">
            搜索
          </el-button>
        </el-col>
        <el-col
          :span="1"
          :offset="16"
        >
          <el-button
            :icon="Plus"
            type="primary"
            @click="onAdd"
          >
            新增
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div
      v-loading="loading"
      class="page-list"
    >
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
            <span
              class="iconfont icon-bianji"
              title="编辑"
              :style="{
                color:'#67C23A'
              }"
              @click="onEdit(item)"
            >

            </span>
            <el-divider direction="vertical" />
            <span
              title="预览"
              class="iconfont icon-play-circle"
              :style="{
                color:'#409eff'
              }"
              @click="onPreview(item)"
            >
            </span>
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
                  class="iconfont "
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
    <ev-pager
      :pag-config="params"
      style="margin-top: 20px;"
      @on-page-change="getList"
    ></ev-pager>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import api from '@/views/View/service/api'
import { useRouter } from 'vue-router'
import { Plus, Delete } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const list = ref<ViewData[]>()
const params = ref({
  pageSize: 15,
  pageNumber: 1,
  keyword: '',
  pageSizes: [15, 30, 60],
  total: 0,
  show: true,
})
const loading = ref(true)
const getList = () => {
  loading.value = true
  api.getList(params.value)
  .then(res => {
    const { code, data } = res
    loading.value = false
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
    .page-list{
        display: grid;
        column-gap: 10px;
        row-gap: 20px;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(3,230px);
        margin-top: 15px;
        height: 750px;
        .page-item{
            width: 100%;
            height: 100%;
            border-radius: 8px;
            border:1px solid var(--ev-active-tint-color);
            background: var(--ev-active-fusco-color);
            overflow: hidden;
            .header{
                display: flex;
                justify-content: space-between;
                background-color: var(--ev-active-fusco-color);
                align-items: center;
                padding: 0 10px;
                .title{
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--ev-bg-color);
                }
                .opt{
                    display: flex;
                    // color: var(--ev-text-color);
                    cursor: pointer;
                }
            }

            img{
                width: 100%;
                height: calc(100% - 40px);
            }
        }
    }
}
</style>