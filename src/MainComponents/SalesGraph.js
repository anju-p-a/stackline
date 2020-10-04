import React from "react";
const SalesGraph = (props) => {
    // displaying sales table view
    const keyFields = [
        "WEEK ENDING",
        "RETAIL SALES",
        "WHOLESALE SALES",
        "UNITS SOLD",
        "RETAILER MARGIN"];
    return (
        
        <div id="salesData">
            { keyFields.map((element) => {
                return <h4 className="salesItem">{element}</h4>
            })}
            { props.salesData.map((element, index) => {
                return <div className="rowItem"> 
                {Object.keys(element).map((item, index) => {
                    return <p key={index} className="salesItem">
                        {element[item]}</p>
                })}
                </div>
            })}
        </div>
       
    )
  
}



export default SalesGraph;