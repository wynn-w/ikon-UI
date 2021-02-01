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
    this.eventBus && this.eventBus.$on("update:selected",(name)=>{
      (name !== this.name) && this.onClose()    
    })
  },
  methods:{
    onClick(){
      if(this.visibale){
        this.onClose()
        
      }else{
        this.onOpen()
        this.eventBus && this.eventBus.$emit('update:selected',this.name)
      }  
    },
    onOpen(){
      this.visibale = true
      this.$refs.icon.style.transform='rotate(0)'
    },
    onClose(){
      this.visibale = false
      this.$refs.icon.style.transform='rotate(90deg)'
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
    // > .ik-collapse-item__title:last-child {
    //   border-bottom-left-radius: $border-radius;
    //   border-bottom-right-radius: $border-radius;
    // }
  }
  
}
</style>
