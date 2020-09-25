import React from "react";
import { useHistory, Link } from "react-router-dom";
// allows us to use dispatch for the reducers action
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoadingIcon from "../LoadingIcon/index";

import { addItem } from "../action";
// item property
const Product = ({ imageSrc, name, price, _id, numInStock }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  function handleClick(ev) {
    ev.preventDefault();
    history.push(`/Shopping/`);
  }
  return name ? (
    <Wrapper>
      <div>
        <div>
          <a href={`/shop/${_id}`}>
            <Img src={imageSrc} alt="productImage" />
          </a>
          <div>
            <a href={`/shop/${_id}`}>{name}</a>
            <h4>{price}</h4>
            {/* <Button
              onClick={() => {
                dispatch(addItem({ _id, name, price }));
              }}
              // disabled={numInStock > 0 ? false : true}
            >
              Add to cart
            </Button> */}
          </div>
        </div>
      </div>
      <Button2
        onClick={() => {
          dispatch(addItem({ _id, name, price, numInStock }));
        }}
        disabled={numInStock > 0 ? false : true}
      >
        Add to cart
      </Button2>
    </Wrapper>
  ) : (
    <LoadingIcon />
  );
};

// const WrapperNathalie = styled.div``;
// const ButtonNathalie = styled.button``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  border-radius: 20px;
  box-shadow: 5px 8px lightgrey;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 20px;
`;

const Button2 = styled.button`
  border-radius: 20%;
  background-color: black;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: white;
  width: 90px;
  height: 40px;
  align-items: center;
  display: block;
`;
const Img = styled.img`
  border-radius: 10%;
  width: 100px;
  height: 100px;
`;

export default Product;
