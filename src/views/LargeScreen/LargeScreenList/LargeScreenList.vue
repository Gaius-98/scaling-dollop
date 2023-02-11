<template>
  <div class="screen-header">
    <div class="screen-opts">
      <el-button
        type="primary"
        @click="onAdd"
      >
        创建大屏
      </el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../service/api'
import {
  Delete,
  Edit,
  View,
  DocumentCopy,
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const router = useRouter()
const onAdd = () => {
  const url = router.resolve({
    name: 'largeScreenConfig',
    query: {
      opType: 'add',
    },
  })
  window.open(url.href, '_blank')
}
</script>
<style scoped lang='scss'>
.screen-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:40px;
  margin: 5px 0 ;
  padding: 0 15px;
  border-bottom: 2px solid var(--ev-border);
  .screen-search{
      cursor: pointer;
  }
}
.screen-data-container{
  display: grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  place-items:center center;
  width: 100%;
  height: 760px;
  margin-bottom: 10px;
  overflow-y: auto;
  .chart{
    position: relative;
    width: 460px;
    height: 240px;
    border-radius: 2px;
    border: 1px solid var(--ev-border);
    overflow: hidden;
    cursor: pointer;
    .screen-title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      color:var(--ev-bg-color);
      text-align: center;
      padding: 10px 5px;
      background-color: var(--ev-active-shallow-color);
      .screen-title-name{
        font-size: 16px;
      }
      .screen-title-creator{
        justify-self: flex-end;
        color:var(--ev-active-color);
        font-size: 12px;
      }
    }
    &:hover{
      .screen-opt-btns{
        position: absolute;
        display: flex;
        width: 100%;
        height: calc(100% - 40px);
        z-index: 99;
        background: var(--ev-tint-color);
        .btns{
          display: flex;
          width: 100%;
          height: 26px;
          align-self:center;
          justify-content: space-around;
        }
      }
    }
    .screen-opt-btns{
      display: none;
    }
  }
}
.screen-container{
  display: flex;
  width: 100%;
  height: 500px;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  .screen-item{
    box-sizing: border-box;
    position: relative;
    padding: 10px;
    border: 2px solid var(--ev-active-shallow-color);
    border-radius: 3px;
    width: 300px;
    height: 220px;
    margin: 5px 10px;
    cursor: pointer;
    .screen-item-title{
      text-align: center;
      color:var(--ev-active-color);
      font-size: 18px;
      font-weight: 700;
      background: var(--ev-tint-color);
    }
    .screen-item-img{
      position:absolute;
      top:30px;
      left:0;
      width: calc(100% - 20px);
      height: calc(100% - 50px);
      padding:10px;
    }
    &.selected{
      border: 2px solid var(--ev-active-color);
      background:var(--ev-active-shallow-color) ;
      .screen-item-title{
        color:var(--ev-text-color);
        background:var(--ev-active-shallow-color) ;
      }
    }
  }
}
</style>