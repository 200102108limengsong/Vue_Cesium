<script setup>

import LeafletMap from './components/LeafletViewer.vue';
import CesiumViewer from './components/CesiumViewer.vue';
import { ref, reactive } from 'vue'

//默认选中的标签名称
const selectedName = ref("b")

</script>

<template>
   <el-tabs v-model="selectedName" @tab-click="tabClick" type="card">
      <el-tab-pane label="Cesium" name="a"><cesium-viewer></cesium-viewer></el-tab-pane>
      <el-tab-pane label="Leaflet" name="b"><leaflet-map></leaflet-map></el-tab-pane>
      
   </el-tabs>

</template>

<style></style>
