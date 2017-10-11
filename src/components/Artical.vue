<template>
  <div class="f-artical">
    <p class="f-menu">
      <!-- <span>
        <Icon type="android-menu"></Icon>
      </span> -->
      <span class="f-switch">
        <i-switch  size="large" v-model="hide" @on-change="hideArtical">
          <span slot="open">显示</span>
          <span slot="close">隐藏</span>
        </i-switch >
        <i-switch v-if="!hide"  size="large" v-model="odd" @on-change="hideArtical">
          <span slot="open">奇数</span>
          <span slot="close">偶数</span>
        </i-switch >
      </span>   
      <span class="f-close" @click="close">
        <Icon type="close-round" ></Icon>
      </span>
    </p>
    <p class="f-artical-title" v-text="editedArtical.title"></p>
    <p class="f-artical-author" v-text="editedArtical.author"></p>
    <p class="f-artical-content" v-html="content"></p>
  </div>
</template>
<script>
export default {
  name: 'f-artical',
  data () {
    return {
      hide: true,
      odd: true,
      content: ''
    }
  },
  props: ['artical'],
  computed: {
    editedArtical: function () {
      if (this.artical) {
        return this.artical
      } else {
        return {'title': '', 'author': '', 'content': ''}
      }
    }
  },
  mounted: function () {
    console.log(this.artical)
    // this.content = this.editedArtical.content
    console.log(this.editedArtical.content)
    // this.content = this.getHideArtical(this.editedArtical.content)
  },
  watch: {
    hide: function () {
      console.log(this.hide)
      if (!this.hide) {
        this.content = this.getHideArtical1(this.editedArtical.content)
      } else {
        // this.content = this.editedArtical.content
        this.content = this.getHideArtical1(this.editedArtical.content)
      }
    },
    odd: function () {
      console.log(this.odd)
      this.content = this.getHideArtical1(this.editedArtical.content)
    },
    artical: function () {
      console.log(this.artical)
      this.content = this.getHideArtical1(this.editedArtical.content)
      this.getHideArtical1(this.editedArtical.content)
    }
  },
  methods: {
    close: function () {
      this.$emit('close')
    },
    hideArtical: function (status) {
      console.log(status)
    },
    getHideArtical: function (artical) {
      let result = ''
      let odd = false
      odd = this.odd
      for (let i = 0; i < artical.length; i++) {
        let reg = /[\u4e00-\u9fa5]/gm
        if (artical[i] !== ' ') {
          if (odd) {
            result += artical[i]
            odd = false
          } else {
            if (reg.test(artical[i])) {
              if (this.hide) {
                result += artical[i]
              } else {
                result += ' ✘ '
              }
              odd = true
            } else {
              result += artical[i]
              odd = this.odd
            }
          }
          if (artical[i] === '。' || artical[i] === '！' || artical[i] === '!' || artical[i] === '.' || artical[i] === ',') {
            result += '</br>'
            odd = this.odd
          }
        }
      }
      return result
    },
    getHideArtical1: function (artical) {
      let result = ''
      let temp = []
      let odd = this.odd
      let regCN = /[\u4e00-\u9fa5]/gm
      let regEN = /^[a-z0-9A-Z"' ,]+$/i
      let regEN1 = /^[a-z0-9A-Z"']+$/i
      let regSig = /^[ ？?.。，,']+$/i
      console.log(artical)
      for (let i = 0; i < artical.length; i++) {
        if (regCN.test(artical[i])) {
          temp.push(artical[i])
        } else if (regEN.test(artical[i])) {
          // console.log(temp[temp.length - 1])
          // console.log(regEN.test(temp[temp.length - 1]))
          console.log(temp.length > 1)
          if (temp.length > 0) {
            if (!regEN1.test(temp[temp.length - 1])) {
              temp.push('')
            }
            temp[temp.length - 1] += artical[i]
          } else {
            temp.push(artical[i])
          }
        } else {
          temp.push(artical[i])
        }
        // console.log(temp[temp.length - 1])
      }
      // console.log(temp)

      for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== ' ') {
          console.log(i + ' ' + odd)
          if (odd) {
            result += temp[i]
            odd = false
          } else {
            if (regCN.test(temp[i])) {
              console.log(this.hide)
              if (this.hide) {
                result += temp[i]
              } else {
                result += ' ✘ '
              }
              odd = true
            } else {
              result += temp[i]
              odd = this.odd
            }
          }
          if (regSig.test(temp[i])) {
            console.log(temp[i])
            result += '</br>'
            odd = this.odd
          }
        }
      }
      console.log(result)
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">
.f-artical{
  overflow: scroll;
  padding-right: 80px;
  .f-menu {
    margin-bottom: 5%; 
    font-size: 30px;
    color: gray;
    .f-close {
      float: right;
    }
    .f-switch {
      height: 40px;
      width: 40px;
    }
    .f-close:hover {
      color: #ed3f14;
    }
  }
  .f-artical-title {
    font-size: 40px;
    text-align: center;
  }
  .f-artical-author {
    font-size: 30px;
    text-align: center;
    color: gray;
    padding-left: 20%;
  }
  .f-artical-content {
    font-size: 25px;
    text-align: center;
    padding: 40px 20%;
    overflow: scroll;
  }
}
</style>
