//react
import React from "react";
//components
import CategoryItem from "./CategoryItem";
//styles
import styled from "styled-components";
//data
import categories from "../data";
const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;

const Categories = () => {
	return (
		<Container>
			{categories.map((item) => (
				<CategoryItem item={item} />
			))}
		</Container>
	);
};

export default Categories;