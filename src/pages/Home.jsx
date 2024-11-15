// rafce
import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'

const Home = () => {
  const [addResponseFromHome,setAddResponseFromHome] = useState("")

  return (
    <div style={{paddingTop:'50px'}}>
      <div className="container mb-5 d-flex justify-content-between ">
        <Add setAddResponseFromHome={setAddResponseFromHome} />
      </div>
      <div className="container-fluid row mx-auto my-5">
        <div className="col-lg w-100">
          <View addResponseFromHome={addResponseFromHome} />
        </div>
      </div>
    </div>
  )
}

export default Home