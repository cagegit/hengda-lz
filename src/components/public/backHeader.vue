<template>
     <mt-header :title="title">
          <mt-button slot="left" @click.native="back" icon="back"></mt-button>
          <mt-button slot="right" @click.native="add" v-if="right">
            <img id="add" src="@/assets/images/icon/add.png" slot="icon" alt="">
          </mt-button>
    </mt-header>
</template>
<script>
export default {
  name: "backHeader",
  props: ["title","right","link"],
  methods: {
    back() {
      this.$router.back();
    },
    add(){
      this.$router.push(this.link);
    }
  }
};
</script>
<style>
.mint-button-icon > .mintui {
  font-size: 0.4rem;
}
#add{
  width: .613333rem;
  height: .613333rem;
}
.is-right>button{
  margin-right: .36rem;
}
</style>
