<template>
  <div class="hide">
    <template v-for="artical in articals">
      <div class="artical">
        <h1 v-text="artical.name"></h1>
        <h2 v-text="artical.auther"></h2>
        <p v-text="artical.content"></p>
        <p v-text="hideArticals.content"></p>
      </div>
    </template>
    <template v-for="artical in hideArticals">
      <div class="artical">
        <h1 v-text="artical.name"></h1>
        <h2 v-text="artical.auther"></h2>
        <p v-text="artical.content"></p>
        <p v-text="hideArticals.content"></p>
      </div>
    </template>
  </div>
</template>

<script>
import articals from './../assets/articals/artical.json'
console.log(articals)
export default {
  // el: '#hide',
  name: 'hide',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      articals: articals.articals
    }
  },
  computed: {
    hideArticals: function () {
      let result = []
      console.log(this.articals.length)
      for (let i = 0; i < this.articals.length; i++) {
        let item = []
        let odd = true
        item.name = this.articals[i].name
        item.auther = this.articals[i].auther
        item.content = ''
        for (let j = 0; j < this.articals[i].content.length; j++) {
          // if (j % 2 === 0) {
          //   let reg = /[\u4e00-\u9fa5]/gm
          //   console.log(reg.test(this.articals[i].content[j]))
          //   console.log(123123)
          //   // let a = true
          //   console.log(this.articals[i].content[j]);
          //   if (!reg.test(this.articals[i].content[j])) {
          //     console.log(123133333)
          //     item.content += this.articals[i].content[j]
          //   } else {
          //     console.log(44444)
          //     j++
          //   }
          // } else {
          //   item.content += '✘'
          // }
          // let reg = /[\u4e00-\u9fa5]/gm
          // item.content += this.articals[i].content[j]
          // if (j + 1 < this.articals[i].content.length) {
          //   while (reg.test(this.articals[i].content[j])) {

          //   }
          // }
          let reg = /[\u4e00-\u9fa5]/gm
          if (odd) {
            item.content += this.articals[i].content[j]
            odd = false
          } else {
            if (reg.test(this.articals[i].content[j])) {
              item.content += '  ✘  '
              odd = true
            } else {
              item.content += this.articals[i].content[j]
              odd = false
            }
          }
          // if ()
        }
        console.log(item)
        result.push(item)
      }
      console.log(result)
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">
.hide {
  .artical {
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 18px;
      margin-left: 50px;
    }
    p {
      font-size: 15px;
    }
  }
}
</style>
