import axios from 'axios'

//const token = 'SVJ0RFJUWVhVaFFrcXJhWVB5OEphZz09'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjo1Njg1LCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJhdWQiOiJKb2tlbiIsImV4cCI6MTU5MjU5MDIwMywiaWF0IjoxNTkyNTgzMDAzLCJpc3MiOiJKb2tlbiIsImp0aSI6IjJvY3ZyamVmb2FsNW4zYzNwczAwMnM3aCIsIm5iZiI6MTU5MjU4MzAwM30.OuNItb7D7aUdjXRTekTK-zBrxR5LeqOru30FLkhC8pI'

const appendToken = url => `${url}?token=${token}`

export const getAllPlants = () => {
  const url = appendToken('https://trefle.io/api/plants')
  axios
    .get(url)
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(error => {
      console.log(error)
      return null
    })
}
