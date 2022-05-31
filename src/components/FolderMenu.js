import axios from 'axios'
import { toInteger } from 'lodash'
// import { sample } from 'lodash'
import { useState, useEffect } from 'react'
import { Folder } from './Folder'

const SERVERURL = 'https://dev21.becollective.com/api/v2/coding-challenges/dirs'

export const FolderMenu = () => {

    const [data, setData] = useState([])

    const fetchData = () => {
        axios(SERVERURL)
            .then( (response) => {
                setData(response.data)
            })
            .catch( (error) => {
                if (error.response){
                    console.log(error.response)
                }
            })
    }

    useEffect(() => {
        fetchData();
    }, []) // the [] is a list of dependencies, if it's an empty array it's the same as using componentdidmount, rendering once when the page is loaded, otherwise, renders upon whatever in the [] is changed

    return (
        <>
            <Folder folder={data} />
        </>
    )
}





