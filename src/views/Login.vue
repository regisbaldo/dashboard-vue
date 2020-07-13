
<template >
  <el-container class="login nuvem">
    <el-card style="z-index: 1001">
      <el-container >
        <el-aside width="50px">
          <router-link :to="{ name: 'Home'}">
            <el-avatar
              :size="50"
              src="https://scontent.fpoo1-1.fna.fbcdn.net/v/t1.0-9/75007802_2484823931736436_8133225722706657280_n.png?_nc_cat=101&_nc_sid=85a577&_nc_ohc=6tXCIt6KLL0AX9rvHdB&_nc_ht=scontent.fpoo1-1.fna&oh=a164c0cdd11285c9394925651a0b409d&oe=5F2BEC13"
            ></el-avatar>
          </router-link>
          <router-link :to="{ name: 'Home'}">
            <el-avatar :size="50" src="https://leveduca.com.br/images/favicon.ico"></el-avatar>
          </router-link>
        </el-aside>
        <el-main>
          <h2>Login Crm</h2>
          <el-form class="login-form" ref="form">
            <el-form-item prop="username">
              <el-input placeholder="Username" prefix-icon="fas fa-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="Password" type="password" prefix-icon="fas fa-lock"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-button" type="primary" native-type="submit" block>Login</el-button>
            </el-form-item>
            <a class="forgot-password" href="https://oxfordinformatics.com/">Esqueceu a senha?</a>
          </el-form>
        </el-main>
        
      </el-container>
    </el-card>
    <div id="background-wrap">
          <div class="x1">
            <div class="cloud"></div>
          </div>

          <div class="x2">
            <div class="cloud"></div>
          </div>

          <div class="x3">
            <div class="cloud"></div>
          </div>

          <div class="x4">
            <div class="cloud"></div>
          </div>

          <div class="x5">
            <div class="cloud"></div>
          </div>
        </div>
  </el-container>
</template>

<script>
export default {};
</script>

<style escoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}

/* --- */
</style>

<style >
.nuvem {
  background: #00b4ff;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#background-wrap {
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
}

/* KEYFRAMES */

@-webkit-keyframes animateCloud {
  0% {
    margin-left: -1000px;
  }
  100% {
    margin-left: 100%;
  }
}

@-moz-keyframes animateCloud {
  0% {
    margin-left: -1000px;
  }
  100% {
    margin-left: 100%;
  }
}

@keyframes animateCloud {
  0% {
    margin-left: -1000px;
  }
  100% {
    margin-left: 100%;
  }
}

/* ANIMATIONS */

.x1 {
  -webkit-animation: animateCloud 35s linear infinite;
  -moz-animation: animateCloud 35s linear infinite;
  animation: animateCloud 35s linear infinite;

  -webkit-transform: scale(0.65);
  -moz-transform: scale(0.65);
  transform: scale(0.65);
}

.x2 {
  -webkit-animation: animateCloud 20s linear infinite;
  -moz-animation: animateCloud 20s linear infinite;
  animation: animateCloud 20s linear infinite;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x3 {
  -webkit-animation: animateCloud 30s linear infinite;
  -moz-animation: animateCloud 30s linear infinite;
  animation: animateCloud 30s linear infinite;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x4 {
  -webkit-animation: animateCloud 18s linear infinite;
  -moz-animation: animateCloud 18s linear infinite;
  animation: animateCloud 18s linear infinite;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x5 {
  -webkit-animation: animateCloud 25s linear infinite;
  -moz-animation: animateCloud 25s linear infinite;
  animation: animateCloud 25s linear infinite;

  -webkit-transform: scale(0.55);
  -moz-transform: scale(0.55);
  transform: scale(0.55);
}

/* OBJECTS */

.cloud {
  background: #fff;
  background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(5%, #fff),
    color-stop(100%, #f1f1f1)
  );
  background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: linear-gradient(top, #fff 5%, #f1f1f1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

  height: 120px;
  position: relative;
  width: 350px;
}

.cloud:after,
.cloud:before {
  background: #fff;
  content: "";
  position: absolute;
  z-index: -1;
}

.cloud:after {
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  height: 100px;
  left: 50px;
  top: -50px;
  width: 100px;
}

.cloud:before {
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;

  width: 180px;
  height: 180px;
  right: 50px;
  top: -90px;
}
</style>