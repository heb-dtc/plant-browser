import React, { useEffect, useState } from 'react'
import { getAllPlants } from './api.js'
import Plant from './Plant.jsx'

const Plants = () => {
  const [plants, setPlants] = useState(undefined)
  const [plant, showPlant] = useState(undefined)

  useEffect(() => {
    async function getPlants() {
      const res = await getAllPlants()
      setPlants(res)
    }
    getPlants()
  }, [])

  if (!plants) {
    return null
  }

  return (
    <div>
      {plant && <section className="container"><Plant id={plant} /></section>}

      <div>
        {plants.map(plant => (
          <div onClick={() => showPlant(plant.id)}>
            {plant.scientific_name} - {plant.common_name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plants
