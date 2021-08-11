import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CharacterPage.css'
function CharacterPage() {
    let {id}=useParams()
    const [characterData,setCharacterData]=useState({})
    const [quotes,setQuotes]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const fetchDetails=async()=>{
            const result=await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
            const quoteResult=await axios.get(`https://www.breakingbadapi.com/api/quote?author=${result.data[0].name}`)
            console.log(result.data)
            console.log(quoteResult)
            setCharacterData(result.data[0])
            setQuotes(quoteResult.data)
            setLoading(false)
        }
        fetchDetails()
    },[])

    if(loading){
        return <p>Loading...</p>
    }else{
        return (
            <div className="container">
                <img className="image" src={characterData.img} />
                <p>Name: {characterData.name}</p>
                <p>Birthaday: {characterData.birthday}</p>
                <p>NickName: {characterData.name}</p>
                <p>Occupation: {characterData.occupation}</p>
                <p>Portrayed: {characterData.portrayed}</p>
                <p>status: {characterData.status}</p>
                <p>Quotes: {quotes[0].quote}</p>
                <p>Series: {quotes[0].series}</p>
               
            </div>
        )
    }
}

export default CharacterPage
