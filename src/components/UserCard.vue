<template>
  <div class="wrapper">
    <div v-for="item in dataUser" :key="item.id" class="card">
      <img :src=item.picture alt=""/>
      <span>
        <div class="title">{{ item.title }}. {{ item.firstName }} {{ item.lastName }}</div>
      </span>
      <span>
        <div>Email: {{ item.email }}</div>
        <div>Phone: {{ item.phone }}</div>
        <div>Date of birthday: {{ new Date(item.dateOfBirth).toUTCString().slice(5, 16) }}</div>
        <div class="parentLocation">Address:
            <div class="location">
              <div>Country: {{ item.location.country }}</div>
              <div>City: {{ item.location.city }}</div>
              <div>Street: {{ item.location.street }}</div>
            </div>
        </div>
      </span>
    </div>
    <button class="backButton" @click="backToList">Back to list users</button>
    <div v-if="isLoaded">
      <Preloader/>
    </div>
  </div>
</template>

<script>
import {instance} from "@/api/api";
import Preloader from "@/common/preloader";

export default {
  name: "UserCard",
  components: {Preloader},
  props: ["userClick"],
  data() {
    return {
      dataUser: null,
      id: null,
      isLoaded: true
    }
  },
  methods: {
    async getUser(userId) {
      this.dataUser = [await instance.get(userId)
          .then(response => {
            this.isLoaded = false
            return response.data
          }).catch(error => console.log(error))]
    },
    getUserId() {
      return this.$router.history.current.path
    },
    backToList() {
      return this.$router.push("/")
    }
  },
  mounted() {
    this.id = this.getUserId()
    this.getUser(this.id)
  },
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: solid 2px #ded8d8;
  height: 50%;
  width: 50%;
}

.title {
  font-size: 32px;
  font-weight: bold;

}

.location {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.parentLocation {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.backButton {
  height: 30px;
  border: solid 1px black;
  opacity: 0.8;
  margin: 5px;
  border-radius: 3px;
  background: #cccccc;
}

.backButton:hover {
  background: #1aac1a;
  transition: 0.5s;
  border-radius: 3px;
}

@media (max-width: 321px) {
  .card {
    width: 80%;
  }
}

@media (max-width: 376px) {
  .card {
    width: 80%;
  }
}

@media (max-width: 426px) {
  .card {
    width: 80%;
  }
}


</style>
