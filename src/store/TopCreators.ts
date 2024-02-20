import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from 'axios';
import { URL } from '@/constants/Index'

export const useCreatorsStore = defineStore('creators', () => {
  const creatorsList = ref([])

  const getCreatorsList = async () => {
    const url = `${URL}/topCreators`
    try {
      const res =await  axios.get(url)
      creatorsList.value = await  res.data
    } catch (error) {
      console.log(error);
    }
  }
  return {
    creatorsList,
    getCreatorsList
  }
})