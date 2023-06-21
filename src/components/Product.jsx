import React from "react";
import { styled } from "styled-components";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Info = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 3;
	transition: all 0.5s ease;
	opacity: 0;
`;
const Container = styled.div`
	margin: 5px;
	aspect-ration: 1/1;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	background-color: #fffaf4;
	&:hover ${Info} {
		opacity: 1;
	}
`;
const Circle = styled.div`
	position: absolute;
	width: 210px;
	height: 210px;
	background-color: white;
	border-radius: 50%;
	z-index: 1;
`;
const Image = styled.img`
	min-width: 200px;
	min-height: 300px;
	object-fit: contain;
	z-index: 2;
`;

const Icon = styled.div`
	margin: 10px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		background-color: #f7f7f7;
		transform: scale(1.1);
	}
`;
const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartIcon />
				</Icon>

				<Icon>
					<SearchIcon />
				</Icon>

				<Icon>
					<FavoriteBorderIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
