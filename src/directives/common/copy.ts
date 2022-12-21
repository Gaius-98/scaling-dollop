const copyText = (text:string) => {
  const inputDom = document.createElement('input') as HTMLInputElement
  inputDom.value = text
  document.body.appendChild(inputDom)
  inputDom.select()
  document.execCommand('Copy')
  document.body.removeChild(inputDom)
}

const copy = {
  name: 'copy',
  options: {
    mounted(el:HTMLElement, binding:any) {
      el.addEventListener('click', () => {
        console.log(123)
        let text = binding.value 
        copyText(text)
      })
    },
  },
}
export default copy