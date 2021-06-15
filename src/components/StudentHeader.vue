<template>
  <div class="container shadow rounded d-flex align-items-center py-2">
    <div class="flex flex-column w-75 px-5">
      <h1 class="text-left">Students</h1>
      <p class="lead" v-if="isuploaded">{{ count }} students</p>
    </div>
    <a
      v-if="isuploaded"
      type="button"
      class="btn btn-primary btn-sm mx-auto"
      href="http://localhost:3000/students.xlsx"
      download
    >
      Export Students
    </a>
  </div>
</template>

<script>
export default {
  props: ["isuploaded", "count"],
  methods: {},
};
</script>

<style scoped>
h1,
p {
  text-align: left;
}
</style>