<template>
  <div class="f-articals">
    <Row type="flex" v-show="!showDetail">
      <template v-for="artical(artical, key) in articals">
        <Col span="7" order="4" class="f-artical">
          <Card :bordered="false" @click="showArtical(artical)">
            <span class="f-close" @click="deleteArtical(key)"><Icon type="trash-a"></Icon></span>
            <p slot="title" v-text="artical.title" @click="showArtical(artical)"></p>
            <p slot="title" class="f-artical-author" v-text="artical.author" @click="showArtical(artical)"></p>
            <p class="f-artical-thumbnail" v-text="artical.content" @click="showArtical(artical)"></p>
          </Card>
        </Col>
      </template>
      <Col span="7" order="4" class="f-artical">
        <Card :bordered="false" @click="showArtical(artical)">
          <p class="f-artical-add" @click="addArtical"><Icon type="plus-round"></Icon></p>
        </Card>
      </Col>
      
      <Modal v-model="modal1" title="新建文章" @on-ok="ok" @on-cancel="cancel" width="40" :styles="{top: '60px'}">
        <Row type="flex">
          <Col span="7" order="4" class="f-artical">
            <p class="f-title">标题：</p>
          </Col>
          <Col span="17" order="4" class="f-artical">
             <Input v-model="editArtical.title" placeholder="请输入文章标题..." style="width: 300px"></Input>
          </Col>
          <Col span="7" order="4" class="f-artical">
            <p class="f-title">作者：</p>
          </Col>
          <Col span="17" order="4" class="f-artical">
             <Input v-model="editArtical.author" placeholder="请输入文章作者..." style="width: 300px"></Input>
          </Col>
          <Col span="7" order="4" class="f-artical">
            <p class="f-title">内容：</p>
          </Col>
          <Col span="17" order="4" class="f-artical">
             <Input v-model="editArtical.content" type="textarea" placeholder="请输入文章内容..." :rows="4" style="width: 300px"></Input>
          </Col>
        </Row>
      </Modal>
    </Row>
    <artical v-show="showDetail" :artical="selectArtical" v-on:close="closeDetail"></artical>
  </div>
</template>
<script>
import Artical from '@/components/Artical'
export default {
  name: 'f-articals',
  data () {
    return {
      articals: [],
      modal1: false,
      editArtical: {'title': '', 'author': '', 'content': ''},
      selectArtical: null,
      showDetail: false
    }
  },
  computed: {
  },
  components: {
    'artical': Artical
  },
  mounted: function () {
    if (localStorage.articals) {
      this.articals = JSON.parse(localStorage.articals)
      console.log(this.articals)
    }
  },
  watch: {
  },
  methods: {
    showArtical: function (artical) {
      console.log(artical.title)
      this.selectArtical = artical
      this.showDetail = true
    },
    addArtical: function () {
      console.log(this)
      this.modal1 = true
      // console.log(this.modal1)
      // console.log(2123111)
    },
    ok: function () {
      console.log(this.editArtical)
      this.articals.push(this.editArtical)
      this.editArtical = {'title': '', 'author': '', 'content': ''}
      localStorage.articals = JSON.stringify(this.articals)
        // this.$Message.info('点击了确定');
    },
    cancel: () => {
        // this.$Message.info('点击了取消');
    },
    closeDetail: function () {
      this.showDetail = false
    },
    deleteArtical: function (key) {
      console.log(key)
      this.$Modal.confirm({
        // title: '确认对话框标题',
        content: '确定要删除该文章？',
        onOk: () => {
          this.articals.splice(key, 1)
          localStorage.articals = JSON.stringify(this.articals)
        },
        onCancel: () => {
        }
      })
        // this.$Message.info('点击了取消');
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
    color: gray;
    // vertical-align: middle;
    // padding-top: 200x;
  }
  .f-artical-add:hover {
    font-size: 70px;
    text-align: center;
    height: 115px;
    color:#2d8cf0;
    // vertical-align: middle;
    // padding-top: 200x;
  }
  .ivu-modal{
    top: 0;
    height: 100vh;
  }
  .f-close {
    position: absolute;
    right: 10px;
    bottom: 0px;
    font-size: 20px;
    color: gray;
    -webkit-transition:opacity 0.5s;
    opacity:0; 
    pointer-events:none;
  }
  .f-artical:hover .f-close{
    -webkit-transition:opacity 0.2s;
    opacity:1; 
    pointer-events:auto;
  }
  .f-close:hover {
    color: red;
  }

}
.f-title {
  text-align: right;
  padding-top: 6px;
}

</style>
