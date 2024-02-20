import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from 'axios';
import { URL } from '@/constants/Index'
export const useTrendingStore = defineStore('trending', () => {
  const trendingList = ref([])

  const getTrendingList = async () => {
    const url = `${URL}/trendingList`
    try {
      const res =await  axios.get(url)
      trendingList.value = await res.data
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return {
    trendingList,
    getTrendingList
  }
})