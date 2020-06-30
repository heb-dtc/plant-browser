
import React, { useEffect, useState } from 'react'
import { getPlant } from './api.js'

const Plant = (props) => {
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
    <div>
      {plant.scientific_name}
    </div>
  )
}

export default Plant
