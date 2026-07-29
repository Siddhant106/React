import { useEffect, useState } from "react"
import useFetch from "./useFetch";


function Body(){

    const {generateProfile, numberOfProfile, setNumberOfProfile, profile} = useFetch();

    return (
    
        <div className="butt">
            <input type="text" className="search" placeholder="Search here" value={numberOfProfile} onChange={(e) => setNumberOfProfile(e.target.value)}></input>
            <button onClick={() => generateProfile(Number(numberOfProfile))}>Search Profile</button>
            <div className="profile">
                {
                    profile.map((value) => {
                        return (    <div key={value.id} className="cards">
                                        <img src={value.avatar_url}></img>
                                        <h2>{value.login}</h2>
                                        <a href={value.html_url} target="_blank">Profile</a>
                                    </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Body;