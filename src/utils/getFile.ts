const getFile = (url = '') => {
  return new URL(`/src/assets/images/${url}`, import.meta.url).href
}

export default getFile
