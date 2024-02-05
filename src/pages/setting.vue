<template>
  <f7-page name="設定">
    <f7-navbar title="設定" back-link="返回"></f7-navbar>
    <f7-list strong inset dividersIos>
      <f7-list-item title="App版本號">{{ appVersion }}</f7-list-item>
      <f7-list-item title="刷新App" @click="refreshApp()"></f7-list-item>
      <f7-list-item title="分享App給好友" @click="shareApp()"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script setup >
import { ref } from 'vue';

const appVersion = ref('1.0.0');

function refreshApp(){
  window.location.reload(true);
}

function shareApp(){
  window.Capacitor.Plugins.Share.share({
    title: '推薦給你',
    text: '品味無限美味，食趣 App 帶您探索世界美食！無論您廚藝新手還是大廚，我們提供多樣食譜，從甜點到主菜應有盡有。透過逐步指南和圖片，輕鬆學習烹飪。省時購物清單，社群分享心得。立即下載，開啟美食之旅！',
    url: 'https://app-ui-recipe-32jl.vercel.app'
  })
}

window.Capacitor.Plugins.App.getInfo().then(result =>{
  if ( result && result.version ){
    appVersion.value = result.version;
  }
})

</script>
<style lang="scss">
.recipe-category {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}
h1 {
    text-align: center;
    color: #333;
}
h2 {
    color: #555;
}
ul {
    list-style-type: disc;
    padding-left: 20px;
}
</style>
