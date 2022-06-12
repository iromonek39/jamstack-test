<template>
  <div>
    <div class="open_pulldown_contents">
      <span
        v-for="item in newsData"
        :key="item.prefecture"
        @click="doSearchFilter(item.prefecture)">
        {{ item.prefecture }}
      </span>
    </div>
    <div class="shop_page_container_inner_contents_left_searchArea_checkArea">
      <p>ブランド</p>
      <div
        v-for="brand in createBrandList"
        :key="brand"
        class="checkbox">
        <input
          :id="brand"
          v-model="brandCheckboxArr"
          type="checkbox"
          :value="brand"
          @change="checkItem(brand)">
        <label :for="brand">
          {{ brand }}
        </label>
      </div>
    </div>
    <div class="shop_page_container_inner_contents_left_searchArea_checkArea">
      <p>取扱アイテム</p>
      <div
        v-for="product in createItemList"
        :key="product"
        class="checkbox">
        <input
          :id="product"
          v-model="productCheckArr"
          type="checkbox"
          :value="product"
          @change="checkItem(product)">
        <label :for="product">
          {{ product }}
        </label>
      </div>
    </div>
    <h3>{{ brandCheckboxArr }}</h3>
    <div
      v-for="item in listArr"
      :key="item.prefecture"
      class="area_wrap">
      <p class="prefecture">{{ item.prefecture }}</p>
      <ul
        id="北海道"
        class="shop_up">
        <li
          v-for="(data, dataIndex) in item.data"
          v-show="data.display"
          :key="dataIndex">
          <p class="shop_name">
            {{ data.shop_name }}
          </p>
          <p class="shop_adress">
            {{ data.shop_address }}
          </p>
          <p class="shop_tel">
            TEL：{{ data.shop_tel }}
          </p>
          <span>取扱ブランド：</span>
          <div v-if="data.brand.length !== 0">
            <p
              v-for="brand in data.brand"
              :key="brand"
              class="shop_brand">
              {{ brand }}
            </p>
          </div>
          <span>取扱アイテム：</span>
          <div v-if="data.products.length !== 0">
            <p
              v-for="product in data.products"
              :key="product"
              class="shop_brand">
              {{ product }}
            </p>
          </div>
          <a
            id="popUpMapBtn"
            class="shop_map pc_contents">
            Google Map >
          </a>
          <a
            id="popUpMapBtn"
            class="shop_map sp_contents">
            <img src="<?php echo get_template_directory_uri(); ?>/images/shop/sp_map_icon.svg" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      test: [
        ['1', '2'],
        ['1', '2', '3']
      ],
      newsData: [
        {
          id: 1,
          prefecture: '北海道',
          data: [
            {
              id: 1,
              shop_name: '北海道 name 111',
              shop_adress: '北海道 title 111',
              shop_tel: '000-0000-0000',
              brand: [
                'ブランド3'
              ],
              products: [
                'アイテム1'
              ],
              display: true
            },
            {
              id: 2,
              shop_name: '北海道 name 222',
              shop_adress: '北海道 title 222',
              shop_tel: '000-0000-0000',
              brand: [
                'ブランド1'
              ],
              products: [
                'アイテム2'
              ],
              display: true
            },
            {
              id: 3,
              shop_name: '北海道 name 333',
              shop_adress: '北海道 title 333',
              shop_tel: '000-0000-0000',
              brand: [
                'ブランド1',
                'ブランド2'
              ],
              products: [
                'アイテム3'
              ],
              display: true
            }
          ]
        },
        {
          id: 2,
          prefecture: '東北',
          data: [
            {
              id: 1,
              shop_name: '東北 name 111',
              shop_adress: '東北 title 111',
              shop_tel: '000-0000-0000',
              brand: [
                'ブランド2',
                'ブランド4'
              ],
              products: [
              ],
              display: true
            },
            {
              id: 2,
              shop_name: '東北 name 222',
              shop_adress: '東北 title 222',
              shop_tel: '000-0000-0000',
              brand: [
                'ブランド3'
              ],
              products: [
                'アイテム2'
              ],
              display: true
            }
          ]
        }
      ],
      brandList: [],
      productList: [],
      filterArr: [],
      checkList: [],
      afterCheckListArr: [],
      brandCheckboxArr: [],
      productCheckArr: []
    }
  },
  computed: {
    listArr () {
      if (this.filterArr.length === 0) {
        return this.newsData
      } else {
        return this.filterArr
      }
    },
    createBrandList () {
      this.newsData.forEach(item => {
        item.data.forEach(brand => {
          this.brandList.push(...brand.brand)
        })
      })
      return [...new Set(this.brandList)]
    },
    createItemList () {
      this.newsData.forEach(items => {
        // console.log(items)
        items.data.forEach(item => {
          // console.log(item)
          this.productList.push(...item.products)
        })
      })
      return [...new Set(this.productList)]
    }
  },
  watch: {
  },
  methods: {
    doSearchFilter (keywords) {
      this.filterArr = this.newsData.filter(item => {
        return item.prefecture === keywords
      })
      this.checkItem()
    },
    checkItem () {
      console.log(this.brandCheckboxArr)
      if (this.brandCheckboxArr.length > 0 || this.productCheckArr.length > 0) {
        this.listArr.forEach(listData => {
          listData.data.forEach(item => {
            if (this.brandCheckboxArr.length > 0 && this.productCheckArr.length > 0) {
              if (item.brand.filter(item => this.brandCheckboxArr.includes(item)).length !== 0 && item.products.filter(item => this.productCheckArr.includes(item)).length !== 0) {
                console.log('1')
                item.display = true
              } else {
                console.log('2')
                item.display = false
              }
            } else if (item.brand.filter(item => this.brandCheckboxArr.includes(item)).length !== 0 || item.products.filter(item => this.productCheckArr.includes(item)).length !== 0) {
              console.log('3')
              item.display = true
            } else {
              console.log('4')
              item.display = false
            }
          })
        })
      } else {
        this.listArr.forEach(listData => {
          listData.data.forEach(item => {
            item.display = true
          })
        })
      }
    }
  }
}
</script>
