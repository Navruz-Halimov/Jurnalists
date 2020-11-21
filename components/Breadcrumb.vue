<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Asosiy
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
      <b-breadcrumb-item active>Baz</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .breadcrumb {
    background-color: #fff;
    padding: 25px 0;
    margin-bottom: 0;
  }
</style>