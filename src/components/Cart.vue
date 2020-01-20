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

    <a-row>
      <a-col :span="12" class="label">Today's top <span class="price">groceries</span> specials</a-col>
    </a-row>

    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>

</template>

<script>

export default {
  name: 'cart',
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
