<template>
  <div class="parallax">
    <div class="test">
        <div class="test-text">
            <div v-rellax>ぱららっくす</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallax',
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.test {
  height: 200vh;
  margin-top: 50vh;
}
.test-text {
  width: 100%;
  background-color: #f8f8f8;
}
</style>
