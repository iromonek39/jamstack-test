<template>
  <div class="marukame">
    <ul
      class="marukame__wrapper"
      data-col-lg="3"
      data-col-md="3"
      data-col-sm="2"
      data-gap="small">
      <li
        v-for="item in contents"
        :key="item.id"
        class="marukame__item">
        <nuxt-link
          :to="`/marukame/${item.id}`"
          class="marukame__link">
          <div class="marukame__inner">
            <div class="marukame__img">
              <img
                :src="item.image.url"
                :alt="item.name">
            </div>
            <div class="marukame__content">
              <div class="marukame__head">
                <div class="marukame__badge-wrapper">
                  <div
                    v-if="item.cold[0]"
                    class="marukame__temperature"
                    data-type="cold">
                    {{ item.cold[0] }}
                  </div>
                  <div
                    v-if="item.takeoutAvailable[0]"
                    class="marukame__badge"
                    data-type="primary">
                    {{ item.takeoutAvailable[0] }}
                  </div>
                  <div
                    v-if="item.shopExclusive[0]"
                    class="marukame__badge"
                    data-type="secondary">
                    {{ item.shopExclusive[0] }}
                  </div>
                </div>
                <div class="marukame__name">
                  <h3 class="marukame__name-text">{{ item.name }}</h3>
                </div>
              </div>
              <div class="marukame__body">
                <div class="marukame__text">
                  <p>{{ item.lead }}</p>
                </div>
                <div class="marukame__note-list">
                  <small
                    v-if="item.priceNotes"
                    class="marukame__note">
                    {{ item.priceNotes }}
                  </small>
                </div>
                <div class="marukame__price-wrapper">
                  <div
                    v-if="item.sizeUnits"
                    class="marukame__size">
                    <span class="marukame__size-head">サイズ</span>
                    <span
                      v-for="size in item.sizeUnits"
                      :key="size"
                      class="marukame__size-item">
                      {{ size }}
                    </span>
                  </div>
                  <div class="marukame__price">
                    <span class="marukame__unit">{{ item.price.unit }}</span>
                    <span class="marukame__number">{{ item.price.number }}</span>
                    <span class="marukame__currency">{{ item.currency[0] }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="marukame__circle">
            <div class="marukame__circle-badge">{{ item.limited[0] }}</div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Marukame',
  async asyncData ({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'menu'
    })
    return data
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.marukame {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 120px 0 50px;
  .marukame__wrapper {
    display: grid;
    grid-gap: 32px;
    gap: 32px;
  }
  .marukame__wrapper[data-col-lg="3"] {
    grid-template-columns: repeat(auto-fit,calc((100% - 64px) / 3));
  }
  .marukame__wrapper[data-gap=small][data-col-lg="3"] {
    grid-template-columns: repeat(auto-fit,calc((100% - 28px) / 3));
  }
  .marukame__wrapper[data-gap=small] {
    display: grid;
    grid-gap: 14px;
    gap: 14px;
  }
  .marukame__item {
    display: flex;
    flex-direction: column;
    &:first-child  {
      transition: opacity .5s .3s,transform .5s cubic-bezier(.33,0,.24,1) .3s,-webkit-transform .5s cubic-bezier(.33,0,.24,1) .3s;
    }
  }
  [data-in-view=true] {
    .marukame__item {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .marukame__link {
    height: 100%;
    box-shadow: 0 1px 2px rgb(0 0 0 / 16%);
    display: block;
    position: relative;
    overflow: hidden;
    background: #fff;
    border-radius: 6px;
    transition: box-shadow .33s linear;
  }
  .marukame__inner {
    padding: 8px 8px 24px;
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    gap: 16px;
    height: 100%;
  }
  .marukame__img {
    aspect-ratio: 268/238;
    overflow: hidden;
    picture,
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      transition: transform .5s cubic-bezier(.33,0,.24,1),-webkit-transform .5s cubic-bezier(.33,0,.24,1);
    }
  }
  .marukame__content {
    display: flex;
    flex-direction: row-reverse;
    height: 260px;

    .marukame__head {
      display: flex;
      flex-direction: row-reverse;
      padding-right: 8px;
      .marukame__badge-wrapper {
        display: flex;
        flex-direction: column;
        grid-gap: 4px;
        gap: 4px;
        margin-left: 6px;
        padding: 4px 0 0 12px;
        border-left: 1px solid #ddd;
        .marukame__temperature {
          width: 20px;
          height: 20px;
          display: inline-flex;
          font-size: 10px;
          line-height: 1;
          border-radius: 50%;
          padding: 5px;
          background-color: #fecfc6;
          font-family: Shuei ShogoMincho,serif;
          -webkit-font-smoothing: antialiased;
        }
        .marukame__temperature[data-type=cold] {
          border-color: #ddd;
          background-color: #c6edfe;
        }

        .marukame__badge {
          display: inline-flex;
          align-items: center;
          width: 20px;
          border: 1px solid;
          border-radius: 100vh;
          padding: 8px 0;
          font-size: 10px;
          letter-spacing: .06em;
          font-family: Shuei ShogoMincho,serif;
          -webkit-font-smoothing: antialiased;
          writing-mode: vertical-rl;
          text-orientation: upright;
          height: inherit;
        }
        .marukame__badge[data-type=primary] {
          color: #c81432;
        }
        .marukame__badge[data-type=secondary] {
          border-color: #ddd;
        }
      }
      .marukame__name {
        height: 260px;
        padding-top: 4px;
        color: #000;
        transition: color .17s linear;
        display: flex;
        .marukame__name-text {
          writing-mode: vertical-rl;
          text-orientation: upright;
          height: inherit;
          font-family: Shuei ShogoMincho,serif;
          -webkit-font-smoothing: antialiased;
          font-size: 20px;
          letter-spacing: .05em;
        }
      }
    }
    .marukame__body {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
      padding: 14px 4px 0;
      writing-mode: vertical-rl;
      text-orientation: upright;
      height: inherit;

      .marukame__text {
        height: 246px;
        flex: 1 0 auto;
        white-space: pre-wrap;
        p {
          font-size: 12px;
          line-height: 22px;
          letter-spacing: 0;
          white-space: pre-line;
        }
      }

      .marukame__note-list {
        align-self: flex-end;
        line-height: 1;
        .marukame__note {
          font-size: 10px;
          line-height: 1;
          &:before {
            content: "※";
          }
        }
      }

      .marukame__price-wrapper {
        align-self: flex-end;
        display: flex;
        grid-gap: 12px;
        gap: 12px;

        .marukame__size {
          font-size: 10px;
          line-height: 1;
          display: flex;
          align-items: center;
          &:before {
            content: "（";
            padding-bottom: 1px;
          }
          &:after {
            content: "）";
            padding-top: 1px;
          }

          .marukame__size-head {
            margin-bottom: 1em;
          }
          .marukame__size-item {
            &:not(:last-child):after {
              content: "・";
            }
          }
        }
      }
    }
  }
  .marukame__circle {
    position: absolute;
    top: 12px;
    left: 12px;
    .marukame__circle-badge {
      background-color: #c81432;
      display: inline-flex;
      align-items: center;
      width: 44px;
      height: 34px;
      color: #fff;
      font-family: Shuei ShogoMincho,serif;
      -webkit-font-smoothing: antialiased;
      font-size: 13px;
      line-height: 1;
      text-align: center;
      writing-mode: vertical-rl;
      letter-spacing: .06em;
      border-radius: 50%;
      padding: 6px 0 5px;
    }
  }
}
</style>
