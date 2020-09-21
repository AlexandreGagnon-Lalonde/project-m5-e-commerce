import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// goal is to display details of a specific product
// information : the id of the product(from params)
// we will fetch the data from the server

// useState to store the info of the product
// useEffect to get data about the product
// use params to get the id from the url

const ProductDetails = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  React.useEffect(() => {
    fetch(`/item/${itemId}`)
      .then((res) => res.json())
      .then((res) => setItem(res[0]));
  }, [itemId]);
  console.log(item);

  if (!item) return <>loading</>;
  return (
    <>
      <Wrapper>
        <img src={item.imageSrc} alt="productImage" />
        <Div1>
          {item.name}
          <Div2>
            {item.numInStock}
            {item.price}
          </Div2>
          {item.body_location}
          {item.category}
          {item._id}
          {item.numInStock}
          {item.companyId}
        </Div1>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
  background-color: white;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: white;
`;

export default ProductDetails;
