function Card(props) {
    return(
        <div className="card" style={{border:"5px solid rgb(250, 132, 89)"}}>
            <img src="https://5.imimg.com/data5/ECOM/Default/2023/3/293703871/EW/XC/NV/154352518/tshirt46b-500x500.jpg" height="200px" width="200px"/>
            <div style={{textAlign:"center"}}>
                <h2 style={{margin:"1px"}}>{props.cloth}</h2>
                <h1 style={{margin:"1.5px"}}>{props.offer}</h1>
                <h2 style={{margin:"1px"}}>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;