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
            <a-breadcrumb-item><span class="label">Ali's</span> Dashboard</a-breadcrumb-item>
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
                  <Cart/>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Vue Example
        </a-layout-footer>
      </a-layout>
</div>
</template>

<script>
import Score from './components/Score'
import Fuel from './components/Fuel'
import Cart from './components/Cart'

export default {
  name: 'app',
  components: {
    Score,
    Fuel,
    Cart
  },
  data () {
    return {
      active: '1'
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
</style>
