import React from 'react'

export default async function Product ({params}:{params:{product:string}}) {
  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`);
  const res = await fetchData.json();
  console.log(res)
  console.log(params.product)
  return (
    <div>
      <h3 className='text-xl px-5'>Product Details</h3>
      <p className='text-xl font-semibold px-10'> {res.id} </p>
      <p className='text-xl font-semibold px-10 my-5'> {res.title} </p>
      <p className='text-xl font-semibold px-10'> {res.body} </p>
    </div>
  )
}
