<template>
  <div class="userWrapper">
    <div class="main">
      <div v-for="item in data" :key=item.id class="user_card" @click="userClick(item.id)">
        <img :src=item.picture alt="icon">
        <div>{{ item.title }}. {{ item.lastName }} {{ item.firstName }}</div>
      </div>
    </div>
    <Pagination :totalPage="totalPage" :pageSize="pageSize" @pageChanged="getUsersData"/>
  </div>
</template>

<script>
import {instance} from "@/api/api";
import Pagination from "@/common/pagination";

export default {
  components: {Pagination},
  data() {
    return {
      data: null,
      totalPage: null,
      pageSize: 10,
    }
  },
  methods: {
    async getUsersData(currentPage = 0, pageSize = 10) {
      this.data = await instance.get(`user/?page=${currentPage}&limit=${pageSize}`)
          .then(response => {
            this.totalPage = response.data.total
            return response.data.data
          })
    },
    userClick(item) {
      if (item) {
        this.$router.push(`/user/${item}`)
      }
    }
  },
  mounted() {
    this.getUsersData(this.currentPage, this.pageSize)
  }
}

</script>

<style>
.userWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.main {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  justify-content: center;
  grid-gap: 5px;
  width: 70%;
  height: 100%;
}

.user_card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid 2px #b1abab;
}

@media (max-width: 321px) {
  .user_card {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 376px) {
  .user_card {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 426px) {
  .user_card {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}

</style>