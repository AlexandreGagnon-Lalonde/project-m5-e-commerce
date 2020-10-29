import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// allows us to use dispatch for the reducers action
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoadingIcon from "../LoadingIcon/index";

import { addItem } from "../action";
// item property
const Product = ({ imageSrc, name, price, _id, numInStock }) => {
  const dispatch = useDispatch();

  return name ? (
    <Wrapper>
      <Link to={`/shop/${_id}`}>
        <ItemInfo>
          <Img src={imageSrc} alt="productImage" />
          <ItemName>{name}</ItemName>
          <h4>{price}</h4>
        </ItemInfo>
      </Link>
      {numInStock > 0 ? (
        <>
          <Stock>{numInStock} available</Stock>
          <Button
            onClick={(ev) => {
    
              dispatch(addItem({ _id, name, price, numInStock }));
            }}
            disabled={numInStock > 0 ? false : true}
          >
            Add to cart
          </Button>
        </>
      ) : (
        <OutOfStock>Out Of Stock</OutOfStock>
      )}
    </Wrapper>
  ) : (
    <LoadingIcon size={100} />
  );
};

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  border-radius: 20px;
  box-shadow: 6px 2px 18px 1px rgba(150, 150, 150, 1);
  font-family: "Montserrat", sans-serif;
  padding: 20px;
`;
const Stock = styled.p``;
const OutOfStock = styled.p`
  color: #a181f5;
  font-weight: bold;
`;
const ItemName = styled.p`
`
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff882e;
  background-color: #ff882e;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #fafafa;
  width: 90px;
  height: 40px;
  align-items: center;
  display: block;
`;
const Img = styled.img`
  border-radius: 10%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

export default Product;
