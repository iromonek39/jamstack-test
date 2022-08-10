<template>
  <div class="wrapper">
    <div class="menu">
      <div class="menu__nav">
        <label
          v-for="(item, key, index) in menuFilters"
          :key="index"
          class="menu__nav-item">
          <input
            v-model="defaultKey"
            type="radio"
            name="filter"
            :value="key"
            :checked="key === defaultKey">
          <span class="menu__nav-item-label">{{ item.label }}</span>
        </label>
      </div>
      <ul class="menu__list">
        <li
          v-for="item in defaultKey === 'shop' ? shop : takeout"
          :key="item.id"
          class="menu__item"
          @click="onChangeFilter(item.id)">
          <span :data-js-current="item.id === navFilterItem ? 'true' : 'false'">
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <h1 class="heading">{{ setDescription[0].name }}</h1>
    <div class="description">
      <div>
        <p class="description__text">{{ setDescription[0].description }}</p>
        <div class="category">
          <ul class="category__list">
            <li
              v-for="(item, index) in setDescription[0].notes"
              :key="index"
              class="category__item">
              {{ item.note }}
            </li>
          </ul>
        </div>
      </div>
    </div>
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
  data () {
    return {
      defaultKey: 'shop',
      navFilterItem: 'udon',
      menuFilters: {
        shop: {
          label: '店内メニュー'
        },
        takeout: {
          label: 'お持ち帰りメニュー'
        }
      },
      shop: [
        {
          id: 'udon',
          createdAt: '2022-04-26T02:56:09.414Z',
          updatedAt: '2022-06-30T10:05:35.331Z',
          publishedAt: '2022-05-02T08:05:04.982Z',
          revisedAt: '2022-06-20T07:29:51.350Z',
          meta: '{description: \'丸亀製麺は全店に製麺機を置いて、打ち立て、茹でたての味を実現。 国産小麦…}',
          name: 'うどん',
          description: '丸亀製麺は全店に製麺機を置いて、打ち立て、茹でたての味を実現。\n国産小麦100％にこだわった讃岐うどんのおいしさを、心ゆくまでご堪能ください。',
          notes: [
            {
              fieldId: 'note',
              note: 'お持ち帰りの場合には、表示価格に加えて容器代30円を頂戴します。'
            },
            {
              fieldId: 'note',
              note: '得サイズはお持ち帰り対象外です。'
            }
          ],
          price_notes: [
            {
              fieldId: 'note',
              note: '得サイズはお持ち帰り対象外です。'
            }
          ],
          link: '/menu/udon/',
          relation: null,
          howto: '{contents: Array(0), fieldId: \'howto\', notes: Array…}',
          concept: '{contents: Array(7), fieldId: \'concept\', link: \'/co…}'
        },
        {
          id: 'tempura',
          createdAt: '2022-04-26T03:00:22.300Z',
          updatedAt: '2022-07-04T01:52:32.713Z',
          publishedAt: '2022-05-02T08:04:18.296Z',
          revisedAt: '2022-06-14T08:35:45.980Z',
          meta: '{description: \'丸亀製麺は、天ぷらもすべての店で、手作り、揚げたて。おいしい天ぷらが食べ…}',
          name: '天ぷら',
          description: 'だしとの相性にこだわった天ぷらは、うどんのおいしさを引き立てる最高の相棒。\nアツアツ、サクサクの揚げたてをどうぞ。',
          notes: null,
          price_notes: null,
          link: '/menu/tempura/',
          relation: '{fieldId: \'relation\', label: \'お持ち帰り方法はこちら\', link: \'…}',
          howto: '{contents: Array(6), fieldId: \'howto\', notes: Array…}',
          concept: '{contents: Array(3), fieldId: \'concept\', link: \'/co…}'
        },
        {
          id: 'gohanmono',
          createdAt: '2022-04-26T03:01:01.586Z',
          updatedAt: '2022-07-03T23:57:33.071Z',
          publishedAt: '2022-05-02T08:04:00.702Z',
          revisedAt: '2022-07-03T23:57:33.071Z',
          meta: '{description: \'国産米をふっくら炊きあげました。讃岐といえばうどんといなり。のりの風味が…}',
          name: 'ご飯もの',
          description: '国産米をふっくら炊きあげました。\nのりの風味が香るおむすびは、4種類の味をお楽しみいただけます。',
          notes: '[{…}, {…}]',
          price_notes: '[]',
          link: '/menu/gohanmono/',
          relation: null,
          howto: '{contents: Array(0), fieldId: \'howto\', notes: Array…}',
          concept: null
        },
        {
          id: 'topping',
          createdAt: '2022-04-26T03:10:01.031Z',
          updatedAt: '2022-07-18T01:49:55.966Z',
          publishedAt: '2022-05-02T08:03:39.024Z',
          revisedAt: '2022-07-18T01:49:55.966Z',
          meta: '{description: \'讃岐うどんの醍醐味は、カスタマイズ。無料の薬味やお好みのトッピングで自由…}',
          name: '薬味・\nトッピング',
          description: 'お好みの味にカスタマイズ。\n自由なアレンジで、自分だけの味を見つけてください。',
          notes: '[{…}]',
          price_notes: '[]',
          link: '/menu/topping/',
          relation: null,
          howto: '{contents: Array(0), fieldId: \'howto\', notes: Array…}',
          concept: null
        }
      ],
      takeout: [
        {
          id: 'udonbento',
          createdAt: '2022-04-26T02:59:14.614Z',
          updatedAt: '2022-06-14T08:35:16.114Z',
          publishedAt: '2022-05-02T08:04:43.219Z',
          revisedAt: '2022-06-14T08:35:16.114Z',
          meta: '{description: \'丸亀製麺独自のもちもちとした食感と、つるんとしたのど越しのあるうどんを、…}',
          name: 'うどん弁当',
          description: '丸亀製麺独自のもちもちとした食感と、つるんとしたのど越しのあるうどんを、お弁当でも味わえます。ご注文ごとにつくるできたてのおいしさをぜひ。',
          notes: null,
          price_notes: null,
          link: '/menu/udonbento/',
          relation: '{fieldId: \'relation\', label: \'うどん・天ぷらのお持ち帰り方法\', lin…}',
          howto: '{contents: Array(0), fieldId: \'howto\', notes: Array…}',
          concept: null
        },
        {
          id: 'udon',
          createdAt: '2022-04-26T02:56:09.414Z',
          updatedAt: '2022-06-30T10:05:35.331Z',
          publishedAt: '2022-05-02T08:05:04.982Z',
          revisedAt: '2022-06-20T07:29:51.350Z',
          meta: '{description: \'丸亀製麺は全店に製麺機を置いて、打ち立て、茹でたての味を実現。 国産小麦…}',
          name: 'うどん',
          description: '丸亀製麺は全店に製麺機を置いて、打ち立て、茹でたての味を実現。\n国産小麦100％にこだわった讃岐うどんのおいしさを、心ゆくまでご堪能ください。',
          notes: '[{…}, {…}]',
          price_notes: '[{…}]',
          link: '/menu/udon/',
          relation: null,
          howto: '{contents: Array(0), fieldId: \'howto\', notes: Array…}',
          concept: '{contents: Array(7), fieldId: \'concept\', link: \'/co…}'
        },
        {
          id: 'tempura',
          createdAt: '2022-04-26T03:00:22.300Z',
          updatedAt: '2022-07-04T01:52:32.713Z',
          publishedAt: '2022-05-02T08:04:18.296Z',
          revisedAt: '2022-06-14T08:35:45.980Z',
          meta: '{description: \'丸亀製麺は、天ぷらもすべての店で、手作り、揚げたて。おいしい天ぷらが食べ…}',
          name: '天ぷら',
          description: 'だしとの相性にこだわった天ぷらは、うどんのおいしさを引き立てる最高の相棒。\nアツアツ、サクサクの揚げたてをどうぞ。',
          notes: null,
          price_notes: null,
          link: '/menu/tempura/',
          relation: '{fieldId: \'relation\', label: \'お持ち帰り方法はこちら\', link: \'…}',
          howto: '{contents: Array(6), fieldId: \'howto\', notes: Array…}',
          concept: '{contents: Array(3), fieldId: \'concept\', link: \'/co…}'
        },
        {
          id: 'gohanmono',
          createdAt: '2022-04-26T03:01:01.586Z',
          updatedAt: '2022-07-03T23:57:33.071Z',
          publishedAt: '2022-05-02T08:04:00.702Z',
          revisedAt: '2022-07-03T23:57:33.071Z',
          meta: '{description: \'国産米をふっくら炊きあげました。讃岐といえばうどんといなり。のりの風味が…}',
          name: 'ご飯もの',
          description: '国産米をふっくら炊きあげました。\nのりの風味が香るおむすびは、4種類の味をお楽しみいただけます。',
          notes: '[{…}, {…}]',
          price_notes: '[]',
          link: '/menu/gohanmono/',
          relation: null,
          howto: '{contents: Array(0), fieldId: \'howto\', notes: Array…}',
          concept: null
        },
        {
          id: 'topping',
          createdAt: '2022-04-26T03:10:01.031Z',
          updatedAt: '2022-07-18T01:49:55.966Z',
          publishedAt: '2022-05-02T08:03:39.024Z',
          revisedAt: '2022-07-18T01:49:55.966Z',
          meta: '{description: \'讃岐うどんの醍醐味は、カスタマイズ。無料の薬味やお好みのトッピングで自由…}',
          name: '薬味・\nトッピング',
          description: 'お好みの味にカスタマイズ。\n自由なアレンジで、自分だけの味を見つけてください。',
          notes: '[{…}]',
          price_notes: '[]',
          link: '/menu/topping/',
          relation: null,
          howto: '{contents: Array(0), fieldId: \'howto\', notes: Array…}',
          concept: null
        }
      ]
    }
  },
  computed: {
    setDescription () {
      if (this.defaultKey === 'shop') {
        return this.shop.filter(item => item.id === this.navFilterItem)
      } else {
        return this.takeout.filter(item => item.id === this.navFilterItem)
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onChangeFilter (item) {
      this.navFilterItem = item
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  font-size: 38px;
  line-height: 56px;
}
input[type="radio"] {
  display: none;
}
.wrapper {
  padding-top: 250px;
  padding-bottom: 60px;
  background-color: #f2eee6;
}
.menu {
  position: absolute;
  top: 0;
  width: calc(100% - 240px);
  top: 60px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Yu Mincho Pr6N D,serif;
  transition: -webkit-transform .17s linear;
  transition: transform .17s linear;
  transition: transform .17s linear,-webkit-transform .17s linear;

  .menu__nav {
    background-color: #fbf7ef;
    display: flex;
    justify-content: center;
    grid-gap: 2px;
    gap: 2px;
    padding-top: 4px;
    width: 100%;

    .menu__nav-item {
      flex: 0 0 280px;
      :checked+.menu__nav-item-label {
        color: #c81432;
        border-color: #c81432;
      }

      .menu__nav-item-label {
        display: flex;
        font-size: 20px;
        height: 60px;
        border-bottom: 4px solid #ddd;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: color .17s linear,border-color .17s linear;
      }
    }
  }

  .menu__list {
    display: flex;
    justify-content: center;
    grid-gap: 8px;
    gap: 8px;
    width: 100%;
    overflow: auto;
    white-space: normal;
    padding: 15px 0;
    background-color: #f2eee6;

    .menu__item {
      flex: 0 0 auto;
      cursor: pointer;

      span {
        display: block;
        font-size: 14px;
        line-height: 1;
        height: 30px;
        padding: 0 12px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color .17s linear,background-color .17s linear;

        &[data-js-current=true] {
          color: #fff;
          background-color: #c81432;
        }
      }
    }
  }
}

.description {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 28px 56px;
  grid-gap: 60px;
  gap: 60px;
  white-space: pre-wrap;

  .description__text {
    font-size: 14px;
    line-height: 2;
  }
}

.category {
  margin-top: 12px;

  .category__list {
    font-family: Yu Gothic Pr6N M,sans-serif;
    line-height: 18px;
    font-size: 10px;
    color: #666;

    .category__item {
      margin-left: calc(1em + 5px);
      text-indent: calc((1em + 5px)*-1);

      &:before {
        margin-right: 5px;
        content: "※";
      }
    }
  }
}

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
