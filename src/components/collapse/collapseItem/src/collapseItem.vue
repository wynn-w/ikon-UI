<template>

  <div class="ik-collapse-item" :data-itemName="name" :key="name">
    <div class="ik-collapse-item__title" @click="onClick">
        <div class="title-content">
            <slot name="title">{{ title }}</slot>
        </div>
      <div class="image-wrapper" ref="icon">
          <ik-icon name="ik-icon-right"  class="image-content" ></ik-icon>
      </div>
    </div>
  <transition name="slide-fade">
    <div class="ik-collapse-item__content" ref="collapseItemContent" v-if="visibale">
      <slot></slot>
    </div>
  </transition>
   
  </div> 
</template>

<script>
import Icon from '../../../icon/src/icon'
export default {
  name: "ik-collapse-item",
  components:{
    [Icon.name]: Icon
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    name:{
      type: String,
      required: true,
    }
  },
  data() {
    return {
      visibale: false,
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected",(names)=>{
      if(names.includes(this.name)){
         this.visibale === false && this.onOpen() 
        }else{ 
          this.visibale !== false && this.onClose() 
        } 
    })
  },
  methods:{
    onClick(){
      if(this.visibale){
       this.eventBus.$emit('update:removeSelected',this.name)
      }else{
        this.eventBus.$emit('update:addSelected',this.name)
      }  
    },
    onOpen(){
      this.visibale = true
      this.$refs.icon.style.transform='rotate(90deg)'
      this.$nextTick(()=>{
        let content = this.$refs.collapseItemContent
        content.style.setProperty('max-height',`${content.scrollHeight}px`)
      })
    },
    onClose(){
      this.visibale = false
      this.$refs.icon.style.setProperty('transform',`rotate(0)`)
      this.$refs.collapseItemContent.style.setProperty('max-height',`0px`)  
    },
  }
};
</script>

<style lang="scss" scopde>

$border-color: #ddd;
$border-radius: 4px;
.ik-collapse-item {
  width: 100%;
  border-bottom: 1px solid $border-color;
  
  > .ik-collapse-item__title {
    display: flex;
    flex-direction: row;
    min-height: 32px;
    align-items: center;
    cursor: pointer;
    >.title-content{
        flex:1
    }
    >.image-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease;
        margin-right: 8px;
        >.image-content {
          color: #373133;
        transform: scale(.7);   
        }
    }
  }
  &:last-child {
    margin-bottom: -1px;
  }
  > .ik-collapse-item__content{
    max-height: 0;
    overflow: hidden;
    transition: all .3s ease;
  }
}
.slide-fade-enter-active ,.slide-fade-leave-active{
  transition: all 3s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
  opacity: 0; 
}
</style>
