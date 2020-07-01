<template>
<div>
  <Menu>
    <transition name="fade">
      <router-view/>
    </transition>
  </Menu>

</div>
</template>

<script>

import Menu from './components/Menu'

export default {
  name: 'App',
  components:{
        Menu
      }
}
</script>

<style>
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
