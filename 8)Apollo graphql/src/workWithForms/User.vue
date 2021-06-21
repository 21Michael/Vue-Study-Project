<template>
  <ul class="list">
    <li class="item" v-if="dataList.length" v-for="(item, i) in dataList" :key="item.id">
      <div class="item_number">
        <span>№: {{ ++i }}</span>
      </div>
      <div class="item_wrapper">
        <div>
          <span>Name: </span>{{ item.name }}
        </div>
        <div>
          <span>Age: </span>{{ item.age }}
        </div>
        <div>
          <span>Reffer: </span>{{ item.reffer }}
        </div>
        <div>
          <span>Interests: </span>
          <ul>
            <li class="item_interests" v-for="(item, index) in item.interests" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div>
          <span>How: </span>{{ item.how }}
        </div>
        <div>
          <span>Rating: </span>{{ item.rating }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { GET_DATA } from '../graphQL/queries';

export default {
 data() {
   return {
     dataList: [],
   }
 },
  apollo: {
    getData: {
      query: GET_DATA,
      update({ getData }) {
        this.dataList = getData;
      },
      fetchPolicy: 'network-only'
    }
  }
}
</script>

<style scoped>
  .list {
    display: flex;
    flex-direction: column;
  }
  .item {
    position: relative;
    display: flex;
    justify-content: center;
  }
  span {
    font-weight: bold;
  }
  .item_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .item_number {
    position: absolute;
    top: 25px;
    left: 25px;
  }
  .item_wrapper div {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
  .item_interests {
    border: none;
    box-shadow: none;
    margin: 0;
    width: auto;
    padding: 5px 0;
  }
</style>