<template>
  <div>
    <div class="filter">
      <div
        class="filter-btn"
        @click="doFilter('all')">
        all
      </div>
      <div
        class="filter-btn"
        @click="doFilter('guest')">
        guest
      </div>
      <div
        class="filter-btn"
        @click="doFilter('partner')">
        partner
      </div>
      <div
        class="filter-btn"
        @click="doFilter('test')">
        test
      </div>
    </div>
    <div class="grid-wrapper">
      <div
        v-for="(item, index) in filterGridItem"
        :key="index"
        :class="item.type">
        <p class="tags">{{ item.tags }}</p>
        <img
          :src="item.imgUrl"
          alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Masonry',
  data () {
    return {
      gridItem: [
        {
          id: 1,
          imgUrl: 'https://source.unsplash.com/EMmCc9xRBbw',
          type: 'big',
          tags: 'partner'
        },
        {
          id: 1,
          imgUrl: 'https://source.unsplash.com/EMmCc9xRBbw',
          type: 'tall',
          tags: 'guest'
        },
        {
          id: 1,
          imgUrl: 'https://source.unsplash.com/k8oM2_ZT1kQ',
          type: 'wide',
          tags: 'guest'
        },
        {
          id: 2,
          imgUrl: 'https://source.unsplash.com/Gp34PCSEbt8',
          type: 'tall',
          tags: 'partner'
        },
        {
          id: 3,
          imgUrl: 'https://source.unsplash.com/9Ts7SGQmIuQ',
          type: '',
          tags: 'test'
        },
        {
          id: 4,
          imgUrl: 'https://source.unsplash.com/FGtKPfiiVJI',
          type: 'big',
          tags: 'test'
        },
        {
          id: 5,
          imgUrl: 'https://source.unsplash.com/4W_PYGedTXw',
          type: 'big',
          tags: 'guest'
        },
        {
          id: 6,
          imgUrl: 'https://source.unsplash.com/TZX7ZAXiTA0',
          type: '',
          tags: 'test'
        },
        {
          id: 7,
          imgUrl: 'https://source.unsplash.com/sTYMA8wI2Ik',
          type: 'tall',
          tags: 'partner'
        },
        {
          id: 8,
          imgUrl: 'https://source.unsplash.com/GjiGMxRuZ3A',
          type: 'wide',
          tags: 'guest'
        },
        {
          id: 1,
          imgUrl: 'https://source.unsplash.com/k8oM2_ZT1kQ',
          type: 'wide',
          tags: 'guest'
        },
        {
          id: 2,
          imgUrl: 'https://source.unsplash.com/Gp34PCSEbt8',
          type: 'tall',
          tags: 'partner'
        },
        {
          id: 3,
          imgUrl: 'https://source.unsplash.com/9Ts7SGQmIuQ',
          type: '',
          tags: 'test'
        },
        {
          id: 4,
          imgUrl: 'https://source.unsplash.com/FGtKPfiiVJI',
          type: 'big',
          tags: 'test'
        },
        {
          id: 5,
          imgUrl: 'https://source.unsplash.com/4W_PYGedTXw',
          type: 'big',
          tags: 'guest'
        },
        {
          id: 6,
          imgUrl: 'https://source.unsplash.com/TZX7ZAXiTA0',
          type: '',
          tags: 'test'
        },
        {
          id: 7,
          imgUrl: 'https://source.unsplash.com/sTYMA8wI2Ik',
          type: 'tall',
          tags: 'partner'
        },
        {
          id: 8,
          imgUrl: 'https://source.unsplash.com/GjiGMxRuZ3A',
          type: 'wide',
          tags: 'guest'
        },
        {
          id: 8,
          imgUrl: 'https://source.unsplash.com/H8B0UcMzDCA',
          type: 'wide',
          tags: 'partner'
        }
      ],
      filterGrid: []
    }
  },
  computed: {
    filterGridItem () {
      return this.filterGrid.length === 0 ? this.gridItem : this.filterGrid
    }
  },
  methods: {
    doFilter (filterItem) {
      this.filterGrid = this.gridItem.filter(item => {
        return item === 'all' ? this.gridItem : item.tags === filterItem
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  max-width: 200px;
  margin: 0 auto 100px;
  justify-content: center;
  gap: 50px;
}
.filter-btn {
  padding: 20px;
  background: gray;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, .3);
  cursor: pointer;
}
.grid-wrapper > div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-wrapper > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  // object-fit: contain;
  // background: #000;
  border-radius: 5px;
}

.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}
.grid-wrapper .wide {
  grid-column: span 2;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
.tags {
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  background: yellow;
  color: #000;
  font-size: 16px;
}
</style>
