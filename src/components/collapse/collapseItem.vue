<template>
<div class="ik-collapse-item">
    <div class="ik-collapse-item__title">
        {{title}}
    </div>
    <div class="ik-collapse-item__content"></div>
    <slot></slot>
</div>
  
</template>

<script>
export default {
    name:"ikCollapsItem",
    props:{
        title:{
            type: String,
            required:true
        }
    }
}
</script>

<style lang="scss">
$border-color: #ddd;
$border-radius: 4px;
.ik-collapse-item{
    > .title{
        display: flex;
        min-height: 32px;
        margin:  -1px;
        padding:  0 8px;
        border: 1px solid $border-color;
        align-items: center;
    }
    &:first-child{
        >.title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:last-child{
        >.title:last-child{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
}
</style>