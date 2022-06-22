<template>
  <div id="main">
    <h1>カテゴリでフィルタリングするUI DEMO</h1>
    <div>
      <ul class="category_list">
        <li
          v-for="(category, index) in category_lists"
          :key="index">
          <input
            :id="category"
            v-model="preview"
            type="checkbox"
            :value="category">
          <label :for="category">{{ category }}</label>
        </li>
      </ul>
    </div>
    <p>選択しているカテゴリ：{{ preview }}</p>
    <ul class="entry_list">
      <li
        v-for="(post, index) in posts"
        v-show="post.display"
        :key="index">
        <p><a :href="post.url">{{ post.name }}</a></p>
        <ul>
          <li
            v-for="category in post.categories"
            :key="category">{{ category }}</li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      posts: [
        {
          name: 'title1',
          url: '//www.example.com',
          categories: ['php'],
          display: true
        },
        {
          name: 'title2',
          url: '//www.example.com',
          categories: ['js'],
          display: true
        },
        {
          name: 'title3',
          url: '//www.example.com',
          categories: ['css'],
          display: true
        },
        {
          name: 'title4',
          url: '//www.example.com',
          categories: ['html', 'php'],
          display: true
        },
        {
          name: 'title5',
          url: '//www.example.com',
          categories: ['html'],
          display: true
        },
        {
          name: 'title6',
          url: '//www.example.com',
          categories: ['php'],
          display: true
        },
        {
          name: 'title7',
          url: '//www.example.com',
          categories: ['js'],
          display: true
        },
        {
          name: 'title8',
          url: '//www.example.com',
          categories: ['css'],
          display: true
        },
        {
          name: 'title9',
          url: '//www.example.com',
          categories: ['js', 'css'],
          display: true
        },
        {
          name: 'title10',
          url: '//www.example.com',
          categories: ['html'],
          display: true
        }
      ],
      category_lists: ['html', 'js', 'css', 'php'],
      preview: []
    }
  },
  computed: {
  },
  watch: {
    preview (val) {
      const posts = this.posts
      const preview = this.preview
      if (val.length > 0) {
        for (let i = 0; i < posts.length; i++) {
          const categories = posts[i].categories
          console.log(categories)
          for (let j = 0; j < preview.length; j++) {
            if (categories.indexOf(preview[j]) >= 0) {
              posts[i].display = true
              break
            } else {
              posts[i].display = false
            }
          }
        }
      } else {
        for (let i = 0; i < posts.length; i++) {
          posts[i].display = true
        }
      }
    }
  },
  methods: {
  }
}
</script>
