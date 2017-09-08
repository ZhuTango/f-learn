<template>
  <div class="hide-learn">
    <Row type="flex" justify="center">
      <Col span="12">

      <h1>请输入文章:</h1>
      <div>
        <Input v-model="artical" type="textarea" placeholder="请输入..."></Input>
      </div>
      <RadioGroup v-model="type">
        <Radio label="odd">
          <Icon type="odd"></Icon>
          <span>显示奇数</span>
        </Radio>
        <Radio label="even">
          <Icon type="even"></Icon>
          <span>显示偶数</span>
        </Radio>
      </RadioGroup>
      <div class="artical" v-html="hidedArtical"></div>
      </Col>
    </Row>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hide-learn',
  data () {
    return {
      type: 'odd',
      hidedArtical: '',
      artical: '噫吁嚱，危乎高哉！蜀道之难，难于上青天！ 蚕丛及鱼凫，开国何茫然！ 尔来四万八千岁，不与秦塞通人烟。 西当太白有鸟道，可以横绝峨眉巅。 地崩山摧壮士死，然后天梯石栈相钩连。 上有六龙回日之高标，下有冲波逆折之回川。 黄鹤之飞尚不得过，猿猱欲度愁攀援。青泥何盘盘，百步九折萦岩峦。 扪参历井仰胁息，以手抚膺坐长叹。 问君西游何时还？畏途巉岩不可攀。 但见悲鸟号古木，雄飞雌从绕林间。 又闻子规啼夜月，愁空山。 蜀道之难,难于上青天，使人听此凋朱颜！ 连峰去天不盈尺，枯松倒挂倚绝壁。 飞湍瀑流争喧豗，砯崖转石万壑雷。 其险也如此，嗟尔远道之人胡为乎来哉！剑阁峥嵘而崔嵬，一夫当关，万夫莫开。 所守或匪亲，化为狼与豺。 朝避猛虎，夕避长蛇；磨牙吮血，杀人如麻。 锦城虽云乐，不如早还家。 蜀道之难,难于上青天，侧身西望长咨嗟！'
    }
  },
  computed: {
  },
  mounted: function () {
    this.hidedArtical = this.hideArtical()
  },
  watch: {
    type: function () {
      console.log(this.type)
      this.hidedArtical = this.hideArtical()
    },
    artical: function () {
      this.hidedArtical = this.hideArtical()
    }
  },
  methods: {
    hideArtical: function () {
      let result = ''
      let odd = false
      odd = this.type === 'odd'
      for (let i = 0; i < this.artical.length; i++) {
        let reg = /[\u4e00-\u9fa5]/gm
        if (this.artical[i] !== ' ') {
          if (odd) {
            result += this.artical[i]
            odd = false
          } else {
            if (reg.test(this.artical[i])) {
              result += '  ✘  '
              odd = true
            } else {
              result += this.artical[i]
              odd = this.type === 'odd'
            }
          }
          if (this.artical[i] === '。' || this.artical[i] === '！') {
            result += '</br>'
            odd = this.type === 'odd'
          }
        }
      }
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">
.hide-learn {
  .artical {
    margin-top: 40px;
    font-size: 30px;
    color: #495060;
  }
}
</style>
