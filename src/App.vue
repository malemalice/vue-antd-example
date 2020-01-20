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
        <a-layout-content>
          <a-breadcrumb style="margin: 16px 5px">
            <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
          </a-breadcrumb>
          <div class="tab-container">
            <van-tabs v-model="active" :border='false'>
              <van-tab>
                <div slot="title">
                  <van-icon name="chart-trending-o" />
                </div>
                <div class="tab-content">
                  <Score/>
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <van-icon name="fire-o" />
                </div>
                <div class="tab-content">
                  <Fuel/>
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <van-icon name="shopping-cart-o" />
                </div>
                <div class="tab-content">

                </div>
              </van-tab>
            </van-tabs>
            <!-- <a-tabs defaultActiveKey="1" type="card">
              <a-tab-pane key="1">
                <span slot="tab">
                  <a-icon type="stock" />
                </span>
                <Score/>
              </a-tab-pane>
              <a-tab-pane key="2">
                <span slot="tab">
                  <a-icon type="fire" />
                </span>
                <Fuel/>
              </a-tab-pane>
              <a-tab-pane key="3">
                <span slot="tab">
                  <a-icon type="shopping-cart" />
                </span>
              </a-tab-pane>
            </a-tabs> -->
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
import Score from './components/Score'
import Fuel from './components/Fuel'

export default {
  name: 'app',
  components: {
    Score,
    Fuel
  },
  data () {
    return {
      active: '1'
    }
  }
}
</script>

<style>
/* body {
  margin: 0;
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*
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
} */

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

/* .tab-container {
  overflow: hidden;
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
} */

/* // evenly tabs
.ant-tabs-nav {
	 display: flex !important;
}
 .ant-tabs-nav .ant-tabs-tab {
	 flex-grow: 1 !important;
	 margin-right: 0px !important;
   width: 100% !important;
	 text-align: center;
} */

.van-tab--active {
    color: #37ac70;
    font-weight: 500;
    background-color: #fff !important;
    border-width: 3px 0 0 0;
    border-style: solid;
    border-color: #37ac70;
}

.van-tabs__nav--card .van-tab {
    border: none;
}

.van-tabs__line {
  background-color: transparent;
}

.tab-content {
    background-color: #fff;
    padding: 15px;
}

.van-tab {
  background-color: #f0f2f5;
}


/* @media screen and (max-width:350px) {
  .tab-label{
    display: none;
  }
} */
</style>
