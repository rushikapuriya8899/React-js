import React from "react";

function Like() {
  const data =  JSON.parse(localStorage.getItem('likedProducts'));
  console.log(data);
  return (
    <section className="text-black-600 body-font bg-blue-200">
      <div className="container px-5 py-24 mx-auto">
      <header>
        <h2 className="text-3xl font-medium mb-4">Favorite Products :</h2>
      </header>
        <div className="flex flex-wrap ">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div key={index} className="border border-solid border-black rounded p-4 bg-red-200 m-2">
                <a className="block relative h-20  w-20 bg-red-200 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center block"
                    src={item.url}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium text-center">
                    {item.Product}
                  </h2>
                  <p className="mt-1 text-center">₹ {parseFloat(item.Price).toFixed(2)}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )};

  export default Like;