<template>
  <div id="app">
    <a-layout id="components-layout-demo-top" class="layout" theme="light">
        <a-layout-header>
          <div class="logo">
            <img src="./assets/CC-logo.svg" alt="Compare Club">
          </div>
          <div class="top-menus">
            <a-icon type="user" />
            <a-icon type="bars" />
          </div>
        </a-layout-header>
        <a-layout-content style="padding: 0 50px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
          </a-breadcrumb>
          <div class="tab-container">
            <a-tabs defaultActiveKey="1" type="card">
              <a-tab-pane key="1">
                <span slot="tab">
                  <a-icon type="stock" />
                  Credit Score
                </span>
                Tab 1
              </a-tab-pane>
              <a-tab-pane key="2">
                <span slot="tab">
                  <a-icon type="fire" />
                  Fuel
                </span>
                Tab 2
              </a-tab-pane>
              <a-tab-pane key="3">
                <span slot="tab">
                  <a-icon type="shopping-cart" />
                  Groceries
                </span>
                <!-- <Hello></Hello> -->
              </a-tab-pane>
            </a-tabs>
          </div>
          <!-- <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
            <main>
              <router-view></router-view>
            </main>
          </div> -->
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Vue using Ant Design
        </a-layout-footer>
      </a-layout>
</div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.ant-layout-header {
  background: #ffffff;
  border-width: 0px 0px 3px 0px;
  border-color: #70C298;
  border-style: solid;
}

#components-layout-demo-top .logo {
    width: 120px;
    float: left;
  }

#components-layout-demo-top .top-menus {
    float: right;
  }

.tab-container {
  /* background: #f5f5f5; */
  overflow: hidden;
  /* padding: 24px; */
}
.tab-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.tab-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.tab-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.tab-container > .ant-tabs-card > .ant-tabs-tab:hover {
  color: #37ac70 !important;
}

a:hover {
  color: #37ac70 !important;
}

.tab-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.tab-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  color: #37ac70;
  background-color: #fff;
  border-width: 3px 0 0 0;
  border-style: solid;
  border-color: #37ac70;
}

  /* .ant-tabs-nav .ant-tabs-tab-active {
    color: #37ac70;
    background-color: white;
    border-width: 3px 0 0 0;
    border-style: solid;
  } */
</style>
