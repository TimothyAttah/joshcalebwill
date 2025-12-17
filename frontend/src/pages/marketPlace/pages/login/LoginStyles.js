import styled from "styled-components";

export const Container = styled.div`
	max-width: 400px;
	width: 100%;
	margin: 20px auto;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Back = styled.div`
	width: 200px;
	height: 50px;

	a {
		width: 100%;
		height: 100%;
		text-align: center;
	}
`;
export const Form = styled.form`
	width: 100% !important;
	padding-top: 20px;

	div {
		width: 100%;
		margin-bottom: 15px;

		label {
			text-transform: uppercase;
			font-weight: bold;
		}

		input {
			width: 100%;
			padding: 10px;
			border: 1px solid #ccc;
		}
	}

	button {
		width: 100%;
		height: 50px;
	}
`;
