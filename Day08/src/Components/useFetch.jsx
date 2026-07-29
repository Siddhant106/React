import { useState, useEffect } from "react";


export default function useFetch(){
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

    return {generateProfile, numberOfProfile, setNumberOfProfile, profile};
}