<template>
  <div class="score">
    <a-row>
      <a-col :span="12">My Credit Score</a-col>
      <a-col style="text-align:right" :span="12">View Report</a-col>
    </a-row>
    <a-row>
      <a-col :offset="9" :span="6">
        <vue-speedometer
          :needleHeightRatio="0.4"
          :maxSegmentLabels="0"
          :segments="10"
          :value="1000"
          :fluidwidth="true"
          :height="160"
        />
      </a-col>
    </a-row>
    <a-row class="info">
      <a-col class="left" :offset="9" :span="3">700</a-col>
      <a-col class="right" :span="3">Very Good</a-col>
    </a-row>

    <a-row>
      <a-col style="text-align:center" :offset="9" :span="6">Last Updated 19 January 2019</a-col>
    </a-row>
  </div>

</template>

<script>
import VueSpeedometer from 'vue-speedometer'

export default {
  name: 'score',
  components: {
    VueSpeedometer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.info{
  text-align: center;
  margin-bottom: 10px;
}

.left, .right {
  padding: 5px;
}

.info .left{
  background-color: #f0f2f5;
  font-weight: bolder;
  color: #000;
}

.info .right{
  background-color: #AAD31E;
  color: #fff;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.pointer {
  fill:#000 !important;
}
.current-value{
  display:none;
}
</style>
