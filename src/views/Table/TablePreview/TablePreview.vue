<template>
  <div class="table-preview">
    <ev-auto-table
      v-if="show"
      :global-cfg="globalCfg"
      :data-setting="dataSetting"
      :table-config="tableConfig"
    >
    </ev-auto-table>
  </div>
</template>

<script lang='ts' setup name="TablePreView">
import { reactive, toRefs, ref } from 'vue'
import EvAutoTable from '@/components/common/EvAutoTable/EvAutoTable.vue'
import api from '../service/api'
import { useRoute } from 'vue-router'

const route = useRoute()
const globalCfg = ref({})
const dataSetting = ref({})
const tableConfig = ref({})
const show = ref(false)
if (route.query.id) {
  let id = route.query.id as string
  show.value = false
  api.getDetail({ id: Number(id) }).then(res => {
    const { code, data, msg } = res
    if (code == 0) {
      globalCfg.value = data.globalCfg
      dataSetting.value = data.dataSetting
      tableConfig.value = data.tableCfg
    }
    show.value = true
  })
}

</script>
<style scoped lang='scss'>
.table-preview{
    width: 100%;
    height: 100%;
}
</style>