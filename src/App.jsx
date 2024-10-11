import React, { useEffect, useState } from 'react'
import Olxcard from './components/Olxcard'

const App = () => {
  const [showCard , setshowCard] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(()=>{
         
           fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products))
            .catch(err => console.log(err))
              
          
        } , [])
        console.log("data: ", products);

  return (
    <>
    <div className="py-5 text-center">
    <h1 className='display-1 fw-bold'>Onilne Shopping</h1>
    </div>
    <div className="container">
      <div className="row g-5">
      <div className="col-12 text-center">

      <button className='btn btn-primary' onClick={()=> setshowCard(!showCard)}>{showCard ? 'Hide Cards' : 'Show Cards'}</button> <br /><br />
      </div>
      

                  
                  {showCard &&  products.map((item, index) =>( <div className="col-4"><Olxcard key={index} 
                  image={item.images}
                  category={item.category}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  warrantyInfo={item.warrantyInformation} /> </div>))
                  
                }
                    
    
      
    </div>
    </div>
    
    </>
  )
}

export default App
