import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import SalesGraph from "./SalesGraph";
import OverView from "./OverView";

const ProductDetails = (props) => {
    // displaying products and sales details
    const productInfo = props?.productInfo?.stackLineInfo?.length >0 &&
                        props.productInfo.stackLineInfo[0];
    const salesData = productInfo?.sales;
    const [defaultScreen, setDefaultScreen] = useState(false);
    const [color1, setColor1] = useState("black");
    const [color2, setColor2] = useState("slategray");

    const toggleState = () => { // providing two views on click
        setDefaultScreen(value => !value);
        if(color1 === "black"){
            setColor1("slategray");
            setColor2("black")
        }else{
            setColor1("black");
            setColor2("slategray")
        }
        
    }

    return (<div id="productPage">
        <div className="productSide">
            <img src={productInfo?.image}></img>
            <h3>{productInfo?.brand}</h3>
            <p className="brand">{productInfo?.subtitle}</p>
            <p className="tagLine">{
                productInfo?.tags?.map((item) => 
                    { return <span className="tagSpan">{item}</span> })}
                </p>
            <label style = {{color:`${color2}`}} 
                onClick={() => { toggleState() }}>
                    OVERVIEW
            </label>
            <label style = {{color:`${color1}`}} 
                onClick={() => { toggleState() }}>
                SALES
            </label>
        </div>
        {/*  //side View on click */} 
        {defaultScreen ? <OverView /> : <SalesGraph salesData={salesData || []} />}
    </div>

    )

}

export default ProductDetails;