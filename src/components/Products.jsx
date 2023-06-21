import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { popularProducts } from "../data";

const Container = styled.div`
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 400px));
	place-content: center;
	gap: 20px;
`;
const Products = () => {
	return (
		<Container>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
