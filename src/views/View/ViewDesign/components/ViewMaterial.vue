<template>
  <div>
    <ev-title>
      组件
    </ev-title>
    <ul class="material-container">
      <li
        v-for="item in componentData"
        :key="item.id"
        class="material f-ca"
        draggable="true"
        :data-component="JSON.stringify(item)"
        @dragstart="onDrag"
      >
        <div
          class="iconfont"
          :class="item.icon"
        >
        </div>
        <div class="label">
          {{ item.label }}
        </div>
      </li> 
    </ul>
  </div>
</template>

<script lang='ts' setup>
import componentData from '@/assets/view/viewComponent'
import { reactive, toRefs, ref } from 'vue'

const onDrag = (ev:any) => {
  if (ev && ev.target && ev.dataTransfer) {
    ev.dataTransfer.setData('componentData', ev.target.getAttribute('data-component'))
  }
}
</script>
<style scoped lang='scss'>
.material-container{
    padding:5px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
    list-style: none;
    .material{
        align-items: center;
        height: 90px;
        box-shadow: 2px 2px 6px var(--ev-box-shadow-color);
        padding:10px;
        cursor: move;
        .iconfont{
          color:var(--ev-active-color);
          font-size: 30px;
        }
        .label{
          color:var(--ev-active-color);
          font-size: 18px;
        }
    }
}
</style>