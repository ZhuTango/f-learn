<template>
  <div class="f-layout">
    <div class="layout">
      <Row type="flex">
        <Col :span="spanLeft" class="f-left">
          
        </Col>
        <Col :span="spanRight" class="f-right">
          <articals></articals>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import Articals from '@/components/Articals'
console.log(Articals)
export default {
  name: 'f-layout',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  components: {
    'articals': Articals
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  mounted: function () {
  },
  watch: {

  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
.f-left {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
.f-right {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}

</style>
