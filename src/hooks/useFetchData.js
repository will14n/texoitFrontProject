import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData.js"


export const useFetchData = (endPoint, loading) => {
    // console.log(loadingObject)
    // this.setState({[loadingObject]: true})
    // console.log(this.setState)
    const [isLoading, setIsLoading] = useState('true')
    const [data, setData] = useState([])

    const getData = async () => {
        const { data, isLoading } = await fetchData(endPoint)
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        getData()
    }, [endPoint])

    return {
        data,
        isLoading,
    }
}
