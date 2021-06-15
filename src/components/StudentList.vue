<template>
  <div class="container">
    <table class="table table-borderless mt-5">
      <thead class="text-muted">
        <tr>
          <th>Sr No</th>
          <th>Student Name</th>
          <th>Class</th>
          <th>Pin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id" class="shadow-sm">
          <td class="text-center">{{ index }}</td>
          <td class="d-flex align-items-top">
            <b-avatar class="m-0 bg-secondary"></b-avatar>
            <div class="d-flex flex-column align-items-start px-5">
              <strong class="text-muted">{{ item.name }}</strong>
              <span class="text-muted small">{{ item.id }}</span>
            </div>
          </td>
          <td class="text-muted">
            <strong>{{ item.class }}</strong>
          </td>
          <td class="text-muted">
            <strong>{{ item.pin }}</strong>
          </td>
          <td><b-icon icon="three-dots-vertical"></b-icon></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>