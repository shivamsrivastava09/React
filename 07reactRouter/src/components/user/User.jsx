import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-300 text-3xl text-gray-600 p-4'>
      user: {userid}
    </div>
  )
}

export default User
