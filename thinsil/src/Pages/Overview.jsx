import React from 'react'
import { useParams } from 'react-router-dom'

const Overview = () => {
  const {id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>this is overview page</h1>
    </div>
  )
}

export default Overview
