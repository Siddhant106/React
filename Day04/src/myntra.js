import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import clothesWithOffers from "./utils/dummy_data";
// import { greet as neet, meet} from "./utils/dummy_data";

// In export default:- no need of {}
// In export:- need of {}


function App(){
    return(<>
        <Header></Header>

        <div className="middle" style={{display:"flex", gap:"15px", flexWrap:"wrap"}}>
                {/* <Card cloth="T-Shirt" offer="40-80% off"/>
                <Card cloth="Jeans" offer="30-60% off"/>
                <Card cloth="Jacket" offer="25-50% off"/>
                <Card cloth="Shoes" offer="20-40% off"/>
                <Card cloth="Dress" offer="35-70% off"/>
                <Card cloth="Sweater" offer="25-55% off"/>
                <Card cloth="Shorts" offer="20-45% off"/>
                <Card cloth="Skirt" offer="30-65% off"/>
                <Card cloth="Saree" offer="30-50% off"/>
                <Card cloth="Kurta" offer="25-45% off"/>
                <Card cloth="Hoodie" offer="20-60% off"/>  */}
            {
                clothesWithOffers.map((value, index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
            }
        </div>

        <Footer/>
    </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);