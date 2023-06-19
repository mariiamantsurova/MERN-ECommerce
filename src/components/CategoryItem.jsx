import React from "react";

import styled from "styled-components";

const Container = styled.div``;
const Button = styled.button``;
const Info = styled.div``;
const Title = styled.h1``;
const Image = styled.img``;
const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Button>{item.title}</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
