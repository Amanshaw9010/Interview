import React, { useEffect, useState } from 'react'
import Table from './Table';


const Api = () => {

    const [apiData, setApiData] = useState([]);


    const apihandler = async () => {

        const url = "https://jsonplaceholder.typicode.com/users";

        const response = await fetch(url);
        const data = await response.json();

        setApiData(data);
    }

    useEffect(() => {
        apihandler()
    }, [])

    // console.log(apiData);

    return (
        <div className='container'>

            <Table key={apiData.id} apiData={apiData} />

        </div>
    )
}

export default Api