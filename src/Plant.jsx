import React, { useEffect, useState } from 'react'
import { getPlant } from './api.js'

const Plant = props => {
  const [plant, setPlant] = useState(undefined)

  useEffect(() => {
    async function fetchPlant() {
      const res = await getPlant(props.id)
      setPlant(res)
    }
    fetchPlant()
  }, [props.id])

  if (!plant) {
    return null
  }

  return (
    <div className="plant">
      <img className="plant-img" src={plant.images[0] ? plant.images[0].url : null} alt="plant_image" />
      <div className="plant-details">{plant.scientific_name}</div>
    </div>
  )
}

export default Plant
