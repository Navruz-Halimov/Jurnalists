<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item v-for="i in crumbs" :key="i.id" :to="i.url" :active="i.disabled">
        {{ i.title }}
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    crumbs: {
      type: Array
    }
  }
}
</script>
<style>
  .breadcrumb {
    background-color: #fff;
    padding: 25px 0;
    margin-bottom: 0;
  }
</style>