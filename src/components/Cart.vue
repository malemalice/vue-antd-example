<template>
  <div class="cart">
    <a-row class="top-header" style="margin-bottom:10px">
      <a-col :span="12" class="label">My Shopping List</a-col>
    </a-row>
    <a-row>
      <a-col :sm="{span:8,offset:8}" :xs="{span:24}">
        <div class="cart-item label" v-for="item in shoppingList">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="4">
              <img :src=item.imgUrl>
            </a-col>
            <a-col :span="18">
              <p><img src="../assets/coles_save.png"></p>
              <p>{{item.name}}</p>
              <a-row>
                <a-col :span="12">
                  <span class="discount">Discount</span></br>{{item.discount ? item.discount: '0'}}%
                </a-col>
                <a-col :span="12" class="price" style="text-align:center">
                  <span class="class-heigh-100">${{item.latestPrice}}</span>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="2" style="text-align:center;color:red;" >
              <a-icon type="delete" class="class-height-100"/>
            </a-col>
          </a-row>
        </div>

      </a-col>
    </a-row>

    <a-row>
      <a-col :sm="{span:8,offset:8}" :xs="{span:24}">
        <a-row style="background-color: #f0f2f5;">
          <a-col class="left label" :span="12">Total:</a-col>
          <a-col class="right price label" style="text-align:right" :span="12">$90</a-col>
        </a-row>
      </a-col>
    </a-row>

    <a-row class="sub-header">
      <a-col :span="24" class="label">Today's top <span class="price">groceries</span> specials</a-col>
    </a-row>

    <div class="scrolling-wrapper">
      <div class="card" v-for="item in todaySpecial">
        <a-row>
          <a-col :span="12">
            <img src="../assets/coles_save.png">
          </a-col>
          <a-col :span="12" style="text-align:right">
            <a-icon type="heart" />
          </a-col>
          <a-row>
            <a-col :span="24">
              <img :src=item.imgUrl>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24" class="text-wrap">
              {{item.name}}
            </a-col>
          </a-row>
          <a-col :span="12" class="price" style="text-align:center">
            ${{item.latestPrice}}
          </a-col>
          <a-col :span="12">
            <span class="discount">Discount</span></br>{{item.discount ? item.discount: '0'}}%
          </a-col>
        </a-row>
      </div>
    </div>

  </div>

</template>



<script>
import carts from '../assets/data/shopping_list.json'
import specials from '../assets/data/specials.json'

export default {
  name: 'cart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  computed: {
    shoppingList () {
      return carts.shoppingList
    },
    todaySpecial () {
      return specials.todaySpecial
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
  height: 250px;
  margin: 0 5px;
  padding: 5px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.scrolling-wrapper, .scrolling-wrapper-flexbox {
  height: 250px;
  margin-bottom: 20px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}

.sub-header {
  border-bottom: 2px solid #f0f2f5;
  border-top: 2px solid #f0f2f5;
  margin: 20px 0;
  padding: 10px 0;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-item{
  border: 2px solid #f0f2f5;
  padding: 5px;
  margin-bottom: 10px;
}
.cart-item img {
  max-width: 100%;
  max-height: 100%;
}
.price{
  color: #37ac70;
  font-size: large;
}
.discount{
  font-size: smaller;
  font-weight: 100;
}
.text-wrap{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
