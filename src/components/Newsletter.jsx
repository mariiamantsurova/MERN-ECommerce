import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div``;
const Button = styled.button``;
const Input = styled.input``;
const InputContainer = styled.div``;
const Title = styled.h1``;
const Description = styled.h1``;

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description></Description>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<SendIcon />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
