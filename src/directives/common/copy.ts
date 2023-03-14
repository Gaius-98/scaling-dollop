import { ElMessage } from 'element-plus'

const copyText = (text:string) => {
  const inputDom = document.createElement('input') as HTMLInputElement
  inputDom.value = text
  document.body.appendChild(inputDom)
  inputDom.select()
  try {
    document.execCommand('Copy')
    ElMessage.success('复制成功')
  } catch (error) {
    ElMessage.error(`复制失败:${error}`)
  }
  document.body.removeChild(inputDom)
}
const copy = {
  name: 'copy',
  options: {
    mounted(el:HTMLElement, binding:any) {
      el.addEventListener('click', () => {
        let text = binding.value 
        copyText(text)
      })
    },
  },
}
export default copy