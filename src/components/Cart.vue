<template>
  <div class="cart">
    <a-row>
      <a-col :span="12" class="label">My Shopping List</a-col>
    </a-row>
    <a-row>
      <a-col :span="6" :offset="9">
        <div class="cart-item label">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="4">
              IMAGE
            </a-col>
            <a-col :span="12">
              <p>IMAGE BRAND</p>
              <p>Title</p>
              <a-row>
                <a-col :span="12">
                  <span class="discount">Discount</span></br>0%
                </a-col>
                <a-col :span="12" class="price" style="text-align:center">$8.00</a-col>
              </a-row>
            </a-col>
            <a-col :span="2" style="text-align:center;" >
              <a-icon type="delete" class="class-height-100"/>
            </a-col>
          </a-row>
        </div>

        <div class="cart-item label">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="4">
              IMAGE
            </a-col>
            <a-col :span="12">
              <p>IMAGE BRAND</p>
              <p>Title</p>
              <a-row>
                <a-col :span="12">
                  <span class="discount">Discount</span></br>0%
                </a-col>
                <a-col :span="12" class="price" style="text-align:center">$8.00</a-col>
              </a-row>
            </a-col>
            <a-col :span="2" style="text-align:center;" >
              <a-icon type="delete" class="class-height-100"/>
            </a-col>
          </a-row>
        </div>

      </a-col>
    </a-row>

    <a-row>
      <a-col :span="6" :offset="9">
        <a-row style="background-color: #f0f2f5;">
          <a-col class="left label" :span="12">Total:</a-col>
          <a-col class="right price label" style="text-align:right" :span="12">$90</a-col>
        </a-row>
      </a-col>
    </a-row>

    <a-row class="sub-header">
      <a-col :span="12" class="label">Today's top <span class="price">groceries</span> specials</a-col>
    </a-row>

    <div class="scrolling-wrapper">
      <div class="card" v-for="item in listData">
        <a-row>
          <a-col :span="12">
            Brand {{item}}
          </a-col>
          <a-col :span="12">
            <a-icon type="heart" />
          </a-col>
          <a-row>
            <a-col :span="24">
              IMG
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              Title
            </a-col>
          </a-row>
          <a-col :span="12" class="price" style="text-align:center">
            $8.00
          </a-col>
          <a-col :span="12">
            <span class="discount">Discount</span></br>0%
          </a-col>
        </a-row>
      </div>
    </div>

  </div>

</template>



<script>
export default {
  name: 'cart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      listData: [1, 2, 3, 4, 5, 6, 7, 8]
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

<style lang="scss" scoped>
h2 {
  color: #fff;
}

.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  .card {
    display: inline-block;
  }
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  .card {
    flex: 0 0 auto;
    margin-right: 3px;
  }
}

.card {
  border: 2px solid #f0f2f5;
  width: 150px;
  height: 175px;
  margin: 0 5px;
  padding: 2px;
}

.scrolling-wrapper, .scrolling-wrapper-flexbox {
  height: 200px;
  margin-bottom: 20px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}

.sub-header {
  border-bottom: 2px solid #f0f2f5;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-item{
  border: 2px solid #f0f2f5;
  padding: 5px;
  margin-bottom: 10px;
}
.price{
  color: #37ac70;
  font-size: large;
}
.discount{
  font-size: smaller;
  font-weight: 100;
}

</style>
