<template>
  <div class="f-artical">
    <p class="f-menu">
      <Icon type="android-menu"></Icon>
      <span>
        <Switch size="large" v-model="hide" @on-change="hideArtical">
          <span slot="open">显示1</span>
          <span slot="close">隐藏</span>
        </Switch>
      </span>   
      <span class="f-close" @click="close">
        <Icon type="close-round" ></Icon>
      </span>
    </p>
    <p class="f-artical-title" v-text="editedArtical.title"></p>
    <p class="f-artical-author" v-text="editedArtical.author"></p>
    <p class="f-artical-content" v-text="editedArtical.content"></p>
  </div>
</template>
<script>
export default {
  name: 'f-artical',
  data () {
    return {
      hide: true
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
  },
  watch: {
  },
  methods: {
    close: function () {
      this.$emit('close')
    },
    hideArtical: function (status) {
      console.log(statusbar)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">
  .f-menu {
    font-size: 30px;
    color: gray;
    .f-close {
      float: right;
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
    font-size: 20px;
    text-align: center;
  }
</style>
