import React from 'react'

const Home = () => {
    const fetchdata = async ()=>{
        await fetch('./Data.json').then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.log(error)
        })
    }
    fetchdata();
    return (
    <div>
    
    </div>
    )
}

export default Home
