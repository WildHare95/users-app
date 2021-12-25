<template>
  <div v-if="id" class="wrapper" @click="closeCard()">
    <div v-for="item in dataUser" :key="item.id" class="card">
      <img :src=item.picture alt=""/>
      <span>
        <div class="title">{{ item.title }} {{ item.firstName }} {{ item.lastName }}</div>
      </span>
      <span>
        <div>Email: {{ item.email }}</div>
        <div>Phone: {{ item.phone }}</div>
        <div>Date of birthday: {{ new Date(item.dateOfBirth).toUTCString().slice(5, 16) }}</div>
        <div>Address:
            <div class="location">
              <div>Country: {{ item.location.country }}</div>
              <div>City: {{ item.location.city }}</div>
              <div>Street: {{ item.location.street }}</div>
            </div>
        </div>
      </span>
    </div>
    <div v-if="isLoaded"><Preloader/></div>
  </div>
</template>

<script>
import {instance} from "@/api/api";
import Preloader from "@/common/preloader";

export default {
  name: "UserCard",
  components: {Preloader},
  props: ["id", "userClick"],
  data() {
    return {
      dataUser: null,
      isLoaded: true
    }
  },
  methods: {
    async getUser(userId) {
      this.dataUser = [await instance.get(userId)
          .then(response => {
            this.isLoaded = false
            return response.data
          })]
    },
    closeCard() {
      this.$emit("userClick", null)
      this.$router.push({query: {}})
    }
  },
  mounted() {
    this.getUser(this.id)
  }
}
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: opacity 0.3s ease;
  margin: 0;
  padding: 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  width: 50%;
  height: 50%;
}

.title {
  font-weight: bold;
  font-size: 24px;
}

.location {
  margin-left: 5px;
}

@media (max-width: 321px) {
  .card {
    width: 100%;
  }
}
@media (max-width: 376px) {
  .card {
    width: 100%;
  }
}
@media (max-width: 426px) {
  .card {
    width: 100%;
  }
}

</style>
