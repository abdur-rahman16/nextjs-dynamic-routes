import React from "react";
import Link from "next/link";

export default async function Products() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetchData.json();
  console.log(res)
  return (
    <div>
      <h3 className="text-xl px-5">Products Page</h3>
      <ol>
        {
          res.map((item:any, i:number)=>{
            return(
              <li className="px-10 font-semibold text-xl list-decimal"><Link href={`products/${item.id}`}>{item.title}</Link></li>
            )
          })
        }
      </ol>
    </div>
  );
}
