<template>
  <div class="score">
    <a-row style="border-bottom: 1px solid #f0f2f5;">
      <a-col :span="12" class="label">My Credit Score</a-col>
      <a-col class="label report" style="text-align:right" :span="12">View Report</a-col>
    </a-row>
    <a-row>
      <a-col :offset="9" :span="6">
        <vue-speedometer
          :needleHeightRatio="0.4"
          :maxSegmentLabels="0"
          :segments="10"
          :value=score
          :fluidwidth="true"
          :height="160"
        />
      </a-col>
    </a-row>
    <a-row class="info">
      <a-col class="left" :offset="9" :span="3">{{score}}</a-col>
      <a-col class="right" :span="3">Very Good</a-col>
    </a-row>

    <a-row>
      <a-col style="text-align:center" :offset="9" :span="6">Last Updated {{fetch_date}}</a-col>
    </a-row>
  </div>

</template>

<script>
import VueSpeedometer from 'vue-speedometer'
import response from '../assets/data/score.json'
import * as moment from 'moment/moment'

export default {
  name: 'score',
  components: {
    VueSpeedometer
  },
  data () {
    return {
      fetch_date: null,
      score: null
    }
  },
  methods: {
    fetch (res) {
      // find latest data by sorting fetch date
      // response data has been change for giving example on sorting by fetch date
      const sorted = res.response.sort(this.sortFunc)
      this.fetch_date = moment(sorted[0].option_value.fetch_date).format('DD MMMM YYYY')
      this.score = parseInt(sorted[0].option_value.creditscore)
    },
    sortFunc (a, b) {
      return new Date(b.option_value.fetch_date) - new Date(a.option_value.fetch_date)
    }
  },
  mounted () {
    // imitating get response from API
    this.fetch(response)
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

.label {
  font-weight: bolder;
}

.report {
  color: #f6961e;
}

.pointer {
  fill:#000 !important;
}
.current-value{
  display:none;
}
</style>
