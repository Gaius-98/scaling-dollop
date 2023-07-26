<template>
  <ul class="material-container">
    <li
      v-for="item in componentData"
      :key="item.id"
      class="material"
      draggable="true"
      :data-component="JSON.stringify(item)"
      @dragstart="onDrag"
    >
      {{ item.label }}
    </li> 
  </ul>
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
        height: 150px;
        color: var(--ev-text-color);
        background: var(--ev-active-shallow-color);
    }
}
</style>