import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })
    const {data, isLoading, errors} = state
    const getFetch = async () => {
        try {
            const response = await fetch(`https://tools.texoit.com/backend-java/api/movies?${url}`)
            const data = await response.json()
            console.log(data)
            setState({
                data,
                isLoading: false,
                errors: null,
            })
        }
        catch (error) {
            console.log(error)
            setState({
                data,
                isLoading: false,
                errors: error,
            })
        }
    }

    useEffect(() => {
        if (!url) return
        getFetch()
    }, [url])

    return {
        data,
        isLoading,
        errors,
    }
}