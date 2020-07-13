<template>
  <el-container style="height: 97vh; border: 1px solid #eee">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo scroll1"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <span class="menu-retrail">
        <el-switch v-model="isCollapse"></el-switch>
      </span>
      <el-menu-item index="1">
        <i class="el-icon-user"></i>
        <span slot="title">Usuários</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-money"></i>
        <span slot="title">Vendas</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">Indicadores</span>
      </el-menu-item>
      <el-menu-item index="4" @click="drawer = true">
        <i class="el-icon-setting" ></i>
        <span slot="title">Configurações</span>
      </el-menu-item>
     
    </el-menu>
    <el-container>
      <el-main class="scroll1">
        <slot></slot>
      </el-main>
    </el-container>
    <el-drawer title="Configurações" :visible.sync="drawer" direction="ltr">
      <p>Trocar de Sistema</p>
      <el-button type="danger">Deslogar</el-button>
    </el-drawer>
  </el-container>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isCollapse: false,
      drawer: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.menu-retrail {
  padding-left: 15px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;

  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  display: block;
}
</style>
