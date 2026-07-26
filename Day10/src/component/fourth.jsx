import GlobalContext from "./global"
import { useContext } from "react"


export default function Fourth(props) {

    const data = useContext(GlobalContext);

    return (
        <>
            <h3>{data}</h3>
        </>
    )
}