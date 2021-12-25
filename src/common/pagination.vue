<template>
  <div class="pagination">
      <span v-for="item in totalPages" v-bind:key="item">
        <button class="page" :class="{isActive: currentPage === item}" @click="changePage(item)">{{ item }}</button>
      </span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["totalPage", "pageSize"],
  data() {
    return {
      currentPage: 1,
      active: true
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalPage / this.pageSize)
    }
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber--
      this.$emit("pageChanged", pageNumber--, this.pageSize)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: 5vh 0 1vh 0;
}

.isActive {
  background: #1aac1a;
  color: white;
  border-radius: 3px;
  text-align: center;
}

.page {
  border: solid 1px darkgray;
  border-radius: 3px;
}

.page:hover {
  background: #1aac1a;
  color: white;
  border-radius: 3px;
  text-align: center;
}
</style>