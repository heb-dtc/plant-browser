import axios from 'axios'

//const token = 'SVJ0RFJUWVhVaFFrcXJhWVB5OEphZz09'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjo1Njg1LCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJhdWQiOiJKb2tlbiIsImV4cCI6MTU5MzUxOTQ0OSwiaWF0IjoxNTkzNTEyMjQ5LCJpc3MiOiJKb2tlbiIsImp0aSI6IjJvZWtsc2xsanN2dm1ndTBrZzAwMDNxMSIsIm5iZiI6MTU5MzUxMjI0OX0.aQbXI9ZYjB1eMfY9glpTV2WDAcAIfr2uGpz52ACDttg'

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
