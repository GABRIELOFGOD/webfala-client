import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const Context = createContext()

export const CreateUserContext = ({children}) => {
    const [url, setUrl] = useState('')

    const [reportLoad, setReportLoad] = useState(false)

    const urlPoster = async (e) => {
        const baseUrl = 'http://127.0.0.1:5000/detect-nudity'
        e.preventDefault();
        setReportLoad(true)

        const res = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({'url': url}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await res.json();

        console.log(response)
        
        if(!res.ok){
            setReportLoad(false)
            toast.error('Something Went wrong, check your url and try again', {
                position: 'top-right',
                duration:5000,
                className: 'text-[12px]'
            })
            console.log(response)
        }

        if(res.ok){
            setReportLoad(false)
            response?.data.map(info => {
                if(info.isExplicit == true){
                    toast.success('This website Contain Explicit Content For testing though', {
                        position: 'top-right',
                        duration:5000,
                        className: 'text-[12px]'
                    })
                } else {
                    toast.success('This website do not Contain Explicit Content For testing though', {
                        position: 'top-right',
                        duration:5000,
                        className: 'text-[12px]'
                    })
                }
                console.log(response)
                setUrl('')
            })
        }
    }

    return(
        <Context.Provider
            value={{
                reportLoad, setReportLoad,
                urlPoster, url, setUrl
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const ContextUser = () => {
    const context = useContext(Context)
    return context;
}