<template>
  <div class="container">
    <form class="form">
      <div class="form__inner">
        <label for="name">
          名前
        </label>
        <div class="input__wrapper">
          <input
            id="name"
            v-model="form.yourName"
            type="text">
          <span class="input__example">ex: 名前太郎</span>
        </div>
      </div>
      <div class="form__inner">
        <label for="email">
          メールアドレス
        </label>
        <div class="input__wrapper">
          <input
            id="email"
            v-model="form.yourEmail"
            type="text">
          <span class="input__example">ex: example@exmaple.co.jp</span>
        </div>
      </div>
      <div class="form__inner">
        <label for="subject">
          タイトル
        </label>
        <div class="input__wrapper">
          <input
            id="subject"
            v-model="form.subject"
            type="text">
          <span class="input__example">ex: タイトル</span>
        </div>
      </div>
      <div class="form__inner">
        <label for="message">
          本文
        </label>
        <div class="input__wrapper">
          <input
            id="message"
            v-model="form.message"
            type="textarea">
          <span class="input__example">ex: 本文</span>
        </div>
      </div>
      <div
        class="btn"
        @click="submit">
        <span class="btn__inner">
          送信
        </span>
      </div>
    </form>

    <div
      v-if="isVisibleModal"
      class="modal">
      <div class="modal__inner">
        <div class="modal__body">
          <p class="modal__text">
            お問合せを送信しました
          </p>
          <div
            class="btn"
            @click="closeModal()">
            <span class="btn__inner">
              戻る
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ContactUs',
  data () {
    return {
      form: {
        yourName: '',
        yourEmail: '',
        subject: '',
        message: ''
      }
    }
  },
  computed: {
    ...mapState('api', ['isValid']),
    ...mapState('modal', ['isVisibleModal'])
  },
  mounted () {
  },
  methods: {
    ...mapActions('api', ['postForm']),
    ...mapActions('modal', ['updateIsVisibleModal']),
    submit () {
      console.log(1)
      const formData = this.convertJsontoUrlencoded(this.form)
      console.log(formData)
      this.postForm(formData)
    },
    convertJsontoUrlencoded (obj) {
      const str = []
      console.log(obj)
      for (const item in obj) {
        console.log(item)
        if (Object.prototype.hasOwnProperty.call(obj, item)) {
          str.push(encodeURIComponent(item) + '=' + encodeURIComponent(obj[item]))
        }
      }
      return str.join('&')
    },
    postForm (params) {
      console.log(params)
      this.$axios.post(
        'http://localhost/wp-test/nuxt2/wp-json/contact-form-7/v1/contact-forms/2121/feedback',
        params
      )
        .then((res) => {
          console.log('res', res.data.invalid_fields)
          if (res.data.invalid_fields.length === 0) {
            this.updateIsVisibleModal(true)
          }
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    closeModal () {
      this.updateIsVisibleModal(false)
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  display: flex;
  height: 500px;
  align-items: center;
}
.form {
  width: 50%;
  margin: 0 auto;
}
.form__inner {
  display: flex;
  margin-bottom: 16px;
}
label {
  width: 170px;
  color: #2c3345;
}
.input__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.input__example {
  color: #57647e;
  margin-top: 8px;
  font-size: 12px;
}
input {
  padding: 0 16px;
  height: 2.5em;
  background: #fff;
  border: 1px solid #b8bdc9;
  border-radius: 4px;
  color: #2c3345;
}

.modal {
  z-index: 10;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.modal__inner {
  position: absolute;
  top: 50%;
  background: #fff;
  left: 50%;
  width: 550px;
  height: 400px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
.modal__body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}
.modal__text {
  margin-bottom: 24px;
}
.btn {
  width: 50%;
  margin: 40px auto;
  text-align: center;
}
.btn__inner {
  display: flex;
  width: auto;
  min-width: 180px;
  height: 3em;
  background: #18bd5b;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
}
</style>
