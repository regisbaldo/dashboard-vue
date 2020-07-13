<template>
      <transition name="fade">
        <router-view></router-view>
      </transition>
</template>

<script>

// import Menu from './components/Menu'

export default {
  name: 'App',
  components:{
        // Menu
      }
}
</script>

<style>

.scroll1::-webkit-scrollbar {
  width: 5px;
}
 
.scroll1::-webkit-scrollbar-track {
  background: #ddd;
}
 
.scroll1::-webkit-scrollbar-thumb {
  background: #666; 
}


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .20s;
}

.fade-enter-active {
  transition-delay: .20s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
