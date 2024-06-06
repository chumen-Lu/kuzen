<template>
  <h1>love</h1>
  <div>这里是主页</div>
  <router-view></router-view>
  <div>
    <Router-link to="/">首页</Router-link>| <Router-link to="/about">关于页面</Router-link>|
    <Router-link to="/login">登陆界面</Router-link>|
    <!-- <Router-link to="/about/love">爱人</Router-link> -->
  </div>
</template>

<script setup lang="ts"></script>
