// import { useState } from 'react'
// import Card from './components/Card'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Olx Card</h1>
//       <Card />

//     </>
//   )
// }

// export default App


import React, { useState } from 'react'
import Olxcard from './components/Olxcard'

const App = () => {
  // const [showCard , setShowCard] = useState(false);

  return (
    <>
    <div className="py-5 text-center">
    <h1 className='display-1 fw-bold'>Olx Cards</h1>
    </div>
    <div className="container">
      <div className="row">
      <div className="col-12">
      {/* price, title, location, day */}
    <Olxcard image="https://via.placeholder.com/200" price="Rs 430,000" title="IPhone 16 Pro Max 256 On Easy Installments" location="DHA Phase 1, Lahore" day="2 days ago" />
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
