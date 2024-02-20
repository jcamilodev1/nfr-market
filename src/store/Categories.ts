import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from 'axios';
import { URL } from '@/constants/Index'

export const useCategoriesStore = defineStore('categories', () => {
  const categoriesList = ref([])

  const getCategoriesList = async () => {
    const url = `${URL}/categories`
    try {
      const res =await  axios.get(url)
      categoriesList.value = await  res.data
    } catch (error) {
      console.log(error);
    }
  }
  return {
    categoriesList,
    getCategoriesList
  }
})