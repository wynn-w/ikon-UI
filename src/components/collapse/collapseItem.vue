<template>
  <div class="ik-collapse-item" :data-itemName="name">
    <div class="ik-collapse-item__title" @click="onClick">
        <div class="title-content">
            <slot name="title">{{ title }}</slot>
        </div>
      
      <div class="image-wrapper" ref="icon">
          <ik-icon name="right"  class="image-content" color="#373133"><ik-icon>
      </div>
    </div>
    <div class="ik-collapse-item__content" v-if="visibale">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: "ikCollapsItem",
  components: {
    "ik-icon": Icon,
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
    },
    onClose(){
      this.visibale = false
      this.$refs.icon.style.transform='rotate(0)'
    }
  }
};
</script>

<style lang="scss">
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
        >.image-content {
        transform: scale(.5);   
        }
    }
  }
  &:last-child {
    margin-bottom: -1px;
  }
  
}
</style>
