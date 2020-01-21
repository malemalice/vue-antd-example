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
        <a href="#">e10</a>
        <a href="#">lpg</a>
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

          <div>
            <div class="item-fuel">
              <a-row>
                <div>
                  <p class="label" style="margin: 20px;"><a-icon type="fire" /> BP - Bankstown</p>
                </div>
                <a-row class="diagonal-split-background">
                    <a-col :span="6" :offset="6" >
                      <div>e10</div>
                    </a-col>
                    <a-col :span="6" :offset="6">
                      <div>180.1</div>
                    </a-col>
                </a-row>
              </a-row>
              <a-row class="fuel-detail">
                <a-col>
                  <p class="label">Get Directions</p>
                </a-col>
              </a-row>
            </div>

            <div class="item-fuel">
              <a-row>
                <div>
                  <p class="label" style="margin: 20px;"><a-icon type="fire" /> BP - Bankstown</p>
                </div>
                <a-row class="diagonal-split-background">
                    <a-col :span="6" :offset="6" >
                      <div>e10</div>
                    </a-col>
                    <a-col :span="6" :offset="6">
                      <div>180.1</div>
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

          <div></div>
          <div></div>
          <div></div>


        </a-carousel>
      </a-col>
    </a-row>

  </div>

</template>

<script>

export default {
  name: 'fuel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    changeOpt (value) {
      console.log(value)
    },
    changePage (x) {
      console.log(x)
    }
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
