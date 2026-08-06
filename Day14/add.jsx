import { useState } from "react"

export default function Add({value}) {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{value}: {count}</h1>
            <button style={{padding: "0 20px"}} onClick={() => setCount(count+1)}>Vote</button>
        </>
    )
}