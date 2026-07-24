import { useEffect, useState } from "react"

function Body(){

    const [profile, setProfile] = useState([]);
    const [numberOfProfile, setNumberOfProfile] = useState("");

    async function generateProfile(count) {

        let randomNumber =  Math.floor(Math.random()*10000);
        const response = await fetch(`https://api.github.com/users?since=${randomNumber}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);
    }

    useEffect(() => {
        generateProfile(10);
    }, []);

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