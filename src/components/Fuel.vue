<template>
  <div class="score">
    <a-row>
      <a-col :span="12" class="label">Show Fuel Price for</a-col>
      <a-col :span="12">
        <a-select defaultValue="bp" style="width: 120px" @change="changeOpt">
          <a-select-option value="syd">Haystack, AUD, 102</a-select-option>
          <a-select-option value="bp">Bankstown, NSW, 220</a-select-option>
        </a-select>
        <a-icon type="setting" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12" :offset="6">
        <a-radio-group defaultValue="e10" v-model="petrolType" buttonStyle="solid">
          <a-radio-button value="e10">e10</a-radio-button>
          <a-radio-button value="lpg">lpg</a-radio-button>
        </a-radio-group>

        <a-carousel :afterChange="changePage" arrows>
          <div
            slot="prevArrow"
            slot-scope="props"
            class="custom-slick-arrow"
            style="left: -50px;zIndex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div
            slot="nextArrow"
            slot-scope="props"
            class="custom-slick-arrow"
            style="right: -50px">
            <a-icon type="right-circle" />
          </div>

          <div v-for="page in results">
            <div class="item-fuel" v-for="item in page">
              <a-row>
                <div>
                  <p class="label" style="margin: 20px;"><a-icon type="fire" /> {{item.stations.name}}</p>
                </div>
                <a-row class="diagonal-split-background">
                    <a-col :span="6" :offset="6" >
                      <div>{{petrolType}}</div>
                    </a-col>
                    <a-col :span="6" :offset="6">
                      <div>{{item.price || '-'}}</div>
                    </a-col>
                </a-row>
              </a-row>
              <a-row class="fuel-detail">
                <a-col>
                  <p class="label">Get Directions</p>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-carousel>
      </a-col>
    </a-row>

  </div>

</template>

<script>
import petrol from '../assets/data/petrol.json'
import * as moment from 'moment/moment'

export default {
  name: 'fuel',
  data () {
    return {
      petrolType: 'e10',
      results: []
    }
  },
  watch: {
    petrolType (nw, old) {
      console.log(nw)
      this.fetch(petrol)
    }
  },
  methods: {
    changeOpt (value) {
      console.log(value)
    },
    changePage (x) {
      console.log(x)
    },
    splitArray (arr, n) {
      return arr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / n)
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }
        resultArray[chunkIndex].push(item)
        return resultArray
      }, [])
    },
    sortPrice (obj) {
      var arr = []
      for (var key in obj) {
        arr.push(Object.assign(obj[key], {date: key}))
      }
      const sorted = arr.sort(this.sortByDate)
      return sorted[0].daily_prices[this.petrolType]
    },
    sortByDate (a, b) {
      return moment(b.date, 'YYYYMMDD').unix() - moment(a.date, 'YYYYMMDD').unix()
    },
    fetch (res) {
      // filter by selected petrol type
      const filtered = this.filter(res)
      this.results = filtered
    },
    filter (arr) {
      const results = arr.petrolStations.filter(item => {
        return item.fuel_type === this.petrolType
      })
      const temps = results[0].stations.map(x => {
        // sorted price by latest date
        return {
          stations: x,
          price: this.sortPrice(x.price)
        }
      })
      // split result for pagination on carousel
      return this.splitArray(temps, 2)
    }
  },
  mounted () {
    // imitating get response from API
    this.fetch(petrol)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.pointer {
  fill:#000 !important;
}

.current-value{
  display:none;
}

.item-fuel {
  border: 1px solid #f0f2f5;
  margin-bottom: 10px;
}

.fuel-detail{
  background-color: #f0f2f5;
  padding: 10px 0 0;
  text-align: center;
  color: #70c298;
}

.diagonal-split-background{
  background-color: #ffffff !important;
  background-image: -webkit-linear-gradient(150deg, #37ac70 50%, #ffffff 50%) !important;
  border: 1px solid #37ac70;
  margin: 20px;
  padding: 10px;
}

.ant-carousel .slick-dots li.slick-active button {
    background: #37ac70;
}

.ant-carousel .slick-dots li button{
  background-color: #c8c9cc;
  opacity: 2;
}

.ant-carousel .slick-dots {
  bottom: -12px;
}

.ant-carousel .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #37ac70;
  /* background-color: rgba(31, 45, 61, 0.11); */
  opacity: 0.3;
}
.ant-carousel .custom-slick-arrow:before {
  display: none;
}
.ant-carousel .custom-slick-arrow:hover {
  opacity: 0.5;
}
.ant-carousel .slick-prev:hover,
.ant-carousel .slick-next:hover,
.ant-carousel .slick-prev:focus,
.ant-carousel .slick-next:focus {
  color: #c8c9cc !important;
  background: none !important;
  opacity: 1 !important;
}

</style>
