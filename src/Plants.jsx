import React, { useEffect, useState } from 'react'
import {getAllPlants} from './api.js' 

const Plants = () => {
  const [data, setPlants] = useState({plants: []})

  useEffect(async () => {
    const plants = await getAllPlants()
    setPlants({plants: plants.data})
  }, [setPlants])

  return (
    <div>
    {data.plants.map(plant => <div> plant.scientific_name </div>)}
    </div>
  )
}

export default Plants
