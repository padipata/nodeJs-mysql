<template>
    <div>
        <container></container> 
    </div>
</template>

<script>
  import container from '../components/container'
  export default{
    data(){
      return{

      }
    },
    components:{
      container
    }

  }
</script>


<style  scoped>
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
