<template>
  <div class="f-articals">
    <Row type="flex">
      <template v-for="artical in articals">
        <Col span="7" order="4" class="f-artical">
          <Card :bordered="false" @click="showArtical(artical)">
            <p slot="title" v-text="artical.title" @click="showArtical(artical)"></p>
            <p slot="title" class="f-artical-author" v-text="artical.author" @click="showArtical(artical)"></p>
            <p class="f-artical-thumbnail" v-text="artical.content" @click="showArtical(artical)"></p>
          </Card>
        </Col>
      </template>
      <Col span="7" order="4" class="f-artical">
          <Card :bordered="false" @click="showArtical(artical)">
            <p class="f-artical-add"><Icon type="plus-round"></Icon></p>
          </Card>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'f-articals',
  data () {
    return {
      articals: [
        {
          title: '望庐山瀑布',
          author: '李白',
          content: '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天'
        }, {
          title: '早发白帝城',
          author: '李白',
          content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。'
        }, {
          title: '早发白帝城',
          author: '李白',
          content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。'
        }, {
          title: '早发白帝城',
          author: '李白',
          content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。'
        }, {
          title: '早发白帝城',
          author: '李白',
          content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。'
        }, {
          title: '早发白帝城',
          author: '李白',
          content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。'
        }, {
          title: '早发白帝城',
          author: '李白',
          content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。'
        }
      ]
    }
  },
  computed: {
  },
  mounted: function () {

  },
  watch: {
  },
  methods: {
    showArtical: function (artical) {
      console.log(artical.title)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">
.f-articals {
  margin: 20px 30px;
  .f-artical {
    margin: 10px;
    .f-artical-author {
      padding-right: 10px;
      text-align: right;
      font-size: 12px;
      color: #80848f;
    }
    .f-artical-thumbnail {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      min-height: 42px;
    }
  }
  .f-artical-add {
    font-size: 70px;
    text-align: center;
    height: 115px;
    color: #2d8cf0;
    // vertical-align: middle;
    // padding-top: 200x;
  }

}
</style>
