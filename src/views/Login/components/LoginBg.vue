<template>
  <div
    id="container"
    ref="container"
    v-load="load"
  ></div>
</template>
  
<script setup lang="ts">
import { onBeforeMount, reactive, toRefs, ref, onMounted, watch, watchEffect } from 'vue'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Camera, Renderer } from 'three'

interface Props {
    loading:boolean,
}
const props = withDefaults(defineProps<Props>(), {
})
const container = ref('')
const { loading } = toRefs(props)
watch(() => loading.value, () => {
  if (loading.value) {
    enterAnimate()
  }
})
let scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000) // 设置为黑色

let renderer:Renderer
let camera:Camera 
const timer = ref(0)
const load = ref(false)
// 初始化
const init = () => {
  renderer = new THREE.WebGLRenderer({
    alpha: true,
  })
  renderer.setSize(
        document.getElementById('container')!.clientWidth,
    document.getElementById('container')!.clientHeight,
  ) // 设置渲染区域尺寸
  initModel()
  animate()
    // 挂载到dom中
    document.getElementById('container')!.appendChild(renderer.domElement)
    renderer.render(scene, camera)

    // 
    window.requestAnimationFrame(() => {
      renderer.render(scene, camera)
    })
    let controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', () => {
      renderer.render(scene, camera)
    }) // 监听鼠标、键盘事件
}
const initModel = () => {
  for (let index = 0; index < 40; index++) {
    let cube = createCube()
    scene.add(cube)
  }
}
const createCube = () => {
  let size = Math.random() * 3 + 1
  let geometry = new THREE.BoxGeometry(size, size, size)
  let color = new THREE.Color(Math.random(), Math.random(), Math.random())
  let material = new THREE.MeshBasicMaterial({ color })
  let cube = new THREE.Mesh(geometry, material)
  cube.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10)
  return cube
}
const animate = () => {
  timer.value = requestAnimationFrame(animate)
  camera.rotation.z += 0.01
  // 渲染场景
  renderer.render(scene, camera)
}
const enterAnimate = () => {
  if (timer.value) {
    cancelAnimationFrame(timer.value)
    timer.value = 0
  }
  camera.position.z -= 0.01
  requestAnimationFrame(enterAnimate)
  renderer.render(scene, camera)
}
onMounted(() => {
  let width = Number(document.getElementById('container')!.clientWidth)
  let height = Number(document.getElementById('container')!.clientHeight)
  camera = new THREE.PerspectiveCamera(
    75, 
    width / height,
    0.1,
    1000,
  )
  camera.position.z = 5
  scene.add(camera)
  init()
  window.addEventListener('resize', (e) => {
    renderer.setSize(
    document.getElementById('container')!.clientWidth,
    document.getElementById('container')!.clientHeight,
    ) // 设置渲染区域尺寸
    renderer.render(scene, camera)
    let controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', () => {
      renderer.render(scene, camera)
    }) // 监听鼠标、键盘事件
  })
})
  
</script>
<style scoped lang='scss'>
#container{
    width: 100%;
    height: 100%;
}
</style>