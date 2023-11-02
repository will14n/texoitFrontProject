export const fetchData = async (endPoint) => {
  try {
    const response = await fetch(`https://tools.texoit.com/backend-java/api/movies?${endPoint}`)
    const data = await response.json()
    return data
  }
  catch (error) {
    console.log(error)
  }
}