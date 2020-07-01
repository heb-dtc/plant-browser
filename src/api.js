import axios from 'axios'

//const token = 'SVJ0RFJUWVhVaFFrcXJhWVB5OEphZz09'
const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjo1Njg1LCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJhdWQiOiJKb2tlbiIsImV4cCI6MTU5MzU0MzYyNiwiaWF0IjoxNTkzNTM2NDI2LCJpc3MiOiJKb2tlbiIsImp0aSI6IjJvZW0xcnZhdnJkaWo1YTBuazAwMDVyMSIsIm5iZiI6MTU5MzUzNjQyNn0.Ov0M7uScaprenaHOvk7NV5vZAXkP4a5d6UqSOkX2qnE"

const appendToken = url => `${url}?token=${token}`

export const getAllPlants = async () => {
  const url = appendToken('https://trefle.io/api/plants') 
  const res = await axios.get(`${url}&complete_data=true&page_size=1000`)

  return res.data
}

export const getPlant = async (id) => {
  const url = appendToken(`https://trefle.io/api/plants/${id}`)
  const res = await axios.get(url)

  return res.data
}
