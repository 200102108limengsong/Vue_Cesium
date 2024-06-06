<template>
  <div id="cesiumContainer">

  </div>
</template>

<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue';
import 'cesium/Build/Cesium/Widgets/widgets.css';

onMounted(() => {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0Y2Q4MzVkNi1lM2JiLTRjYjItYjhkNi02ZGQ1MDc3ZDFlZjAiLCJpZCI6MTYwMjY5LCJpYXQiOjE3MTEyNjA5ODV9.y62hzpo7Asf7GG5dfhII6vRBTsRua6MeAmGqtSq6Sv4';
  const viewer = new Cesium.Viewer("cesiumContainer", {
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 2 }),
    geocoder: false, //位置查找工具,改为false会隐藏        
    animation: false,
    timeline: false,
    shouldAnimate: true,
    sceneModePicker: true,//视角模式切换工具
    navigationHelpButton: true,//导航帮助工具
    terrain: Cesium.Terrain.fromWorldTerrain({
      requestVertexNormals: true, //地形
    }),
  })

  // Add Cesium OSM Buildings, a global 3D buildings layer.
  //viewer.scene.primitives.add(Cesium.createOsmBuildings());

  //矢量注记
  // 添加天地图标注图层
  const tdtAnnotation = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://t0.tianditu.gov.cn/cia_w/wmts?service=WMTS&request=GetTile&version=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&tk=522719ca5560c61f39ce58153cf29bc4',
    layer: 'cia',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'w',
    maximumLevel: 18,
  });

  viewer.imageryLayers.addImageryProvider(tdtAnnotation);

  // 隐藏logo信息
  viewer._cesiumWidget._creditContainer.style.display = 'none'

  // 设置视图到指定的经纬度和高度
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(118.25, 39.56, 1000000), // 1000000 米高度
  });
})
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100vh;
}
</style>