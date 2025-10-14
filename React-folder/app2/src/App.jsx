import React, { useState } from 'react'
import LanugageGrid from './components/LanugageGrid.jsx';
import AddLanuage from './components/AddLanuage.jsx';
import {fetchData} from '../api/test.js';

import { languages } from './components/Dataset.js';

const App = () => {

  let [dataSetLanguages, setDataSetLanguages] = useState(languages)

  let [responseData, setResponseData] = useState(null)

 {/*} async function fetchData() {
    try {
      
      let result = await axios({
        method: "GET",
        url: "http://localhost:5004/test/hello"
      })

      console.log(result.data)
      
      setResponseData(result.data)

    } catch (err) {
      console.log("error while connecting to backend : ", err)
    }
  }*/}

   useEffect(() => {
    // alert("page has been mounted !")

    async function getTestData() {
      try {
        let response = await fetchData()
        setResponseData(response.data)
      } catch (err) {
        console.log("error while getting data : ", err)
      }
    }

    getTestData()
  }, [])


  return (
    <>
      <div className='flex justify-center items-center gap-20'>
        <button onClick={fetchData} className='text-white bg-black p-2 my-10 rounded-lg'>fetch data</button>
        {responseData ? <div>
          <h1>
            message: {responseData.message}
          </h1>
          <h1>
            checkCode: {responseData.checkCode}
          </h1>
          <div>
            userData:
            <ul>
              <li>{responseData.userData.name}</li>
              <li>{responseData.userData.phone}</li>
            </ul>
          </div>
        </div> : null
        }
      </div>
       <AddLanuage dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages} />
      <LanugageGrid dataSetLanguages={dataSetLanguages} /> 
    </>
  )
}

export default App