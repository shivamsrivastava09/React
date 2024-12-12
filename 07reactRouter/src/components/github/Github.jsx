import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    const data = useLoaderData()
//     const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('http://api.github.com/users/shivamsrivastava09')
//     .then(response => response.json())
//     .then(data => {
//         setData(data)
//     })
//   },[])
    return (

    <div className='text-center m-5 bg-gray-600 text-white p-4 text-4xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
  )
}


export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/shivamsrivastava09')
    return response.json();
}




