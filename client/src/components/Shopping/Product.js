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
        <SingleItemLink to={`/shop/${_id}`}>
          <ItemImage src={imageSrc} alt="productImage" />
          <ItemName>{name}</ItemName>
          <ItemPrice>{price}</ItemPrice>
          <ItemInStock>{numInStock} available</ItemInStock>
        </SingleItemLink>
      </div>
      <Button
        onClick={() => {
          dispatch(addItem({ _id, name, price, numInStock }));
        }}
        disabled={numInStock > 0 ? false : true}
      >
        Add to cart
      </Button>
    </Wrapper>
  ) : (
    <LoadingIcon />
  );
};

const Wrapper = styled.div``;
const Button = styled.button``;
const ItemPrice = styled.p``;
const ItemInStock = styled.p``;
const SingleItemLink = styled(Link)``;
const ItemName = styled.p``;
const ItemImage = styled.img``;

export default Product;
