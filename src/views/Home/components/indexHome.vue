<template>
  <header class="index-header">
    <a href="mine.html?cpid=0">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
      <div class="header-search"></div>
    </a>
  </header>
</template>

<script>
export default {
  name: 'indexHome'
}
</script>

<style lang="scss">
.index-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  height: 44px;
  .user-btn {
    width: 25px;
    height: 25px;
    background: url("~@/assets/images/user-btn.png");
  }
  .header-logo {
    width: 92px;
    height: 28px;
    background: url("~@/assets/images/header-logo.png");
  }
  .header-search {
    width: 25px;
    height: 25px;
    background: url("~@/assets/images/header-search.png");
  }
  .user-btn,
  .header-logo,
  .header-search {
    background-size: 100%;
  }
}
</style>
