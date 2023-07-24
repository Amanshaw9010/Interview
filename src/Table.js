import React from 'react'
import "./table.css"

const Table = ({ apiData }) => {

    console.log(apiData.name);



    return (
        <div>

            <table>

                <thead>
                    <tr>
                        <th>
                            ID
                        </th>

                        <th>
                            Name
                        </th>

                        <th>
                            Phone
                        </th>
                    </tr>
                </thead>

                <tbody>

                    {
                        apiData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.phone}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>

            </table>

        </div>
    )
}

export default Table