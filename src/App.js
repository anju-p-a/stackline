import React, { useEffect } from 'react';
import './Styles/App.scss';
import { useDispatch, useSelector } from "react-redux";
import { getStackLineData } from "./actions/stackLineData";
import ProductDetails from "./MainComponents/ProductDetail";
import stackline from "./stacklineLogo.png"
function App() {
  const productOverview = useSelector(state => state)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStackLineData());
  }, [])
  return (
    <div id="mainPage">
      <img src={stackline} style={{ width: "auto", height: "30px" }}></img>
      <ProductDetails productInfo={productOverview} />

    </div>
  );
}

export default App;
