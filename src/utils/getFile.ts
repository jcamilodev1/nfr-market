const getFile = (url = '') => {
  return new URL(url, import.meta.url).href
}

export default getFile
