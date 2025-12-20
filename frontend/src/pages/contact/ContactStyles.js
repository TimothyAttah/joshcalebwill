import styled from "styled-components";

export const ContactContainer = styled.div`
	padding-top: 200px;
	background: var(--main-color);
  color: aliceblue;

	h2 {
		color: crimson;
	}

	@media screen and (max-width: 650px) {
		padding-top: 50px;
	}
`;

export const ContactHero = styled.div`
	max-width: 800px;
	width: 100%;
	margin: auto;
	text-align: center;

	h1 {
		font-size: 40px;
		padding-bottom: 20px;
	}

	p {
		font-size: 20px;
		line-height: 30px;
		padding-bottom: 15px;
	}

	@media screen and (max-width: 650px) {
		padding: 20px;

		h1 {
			font-size: 30px;
			padding-bottom: 20px;
		}

		p {
			font-size: 15px;
			line-height: 25px;
			padding-bottom: 15px;
		}
	}
`;

export const ContactSubLinks = styled.div`
	max-width: 800px;
	width: 100%;
	margin: auto;
	text-align: center;
  padding-top: 30px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      color: #fff;

      a {
        font-weight: bold;
        color: green;
        padding: 0 5px;
      }
    }
  }
`;

export const ContactWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	gap: 20px;
	padding: 50px 0;

	@media screen and (max-width: 650px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 20px;
	}
`;

export const ContactInfo = styled.div`
	max-width: 600px;
	width: 100%;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
	padding: 20px;

	h2 {
		font-size: 30px;
		padding-bottom: 20px;
		text-align: center;
		color: crimson;
	}
`;

export const ContactInfoList = styled.div`
  width: 100%;
  padding: 10px;
  h4 {
    padding-bottom: 5px;
  }

  p {
    padding-bottom: 5px;
  }
`

export const ContactInfoLinks = styled.div`
	max-width: 600px;
	width: 100%;
  padding-top: 20px;


  p {
    text-align: center;
  }
`;

export const ContactInfoLinksWrapper = styled.div`
	width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 50px 0;

  a {
    font-size: 25px;
    color: #fff;
  }
`;
export const ContactForm = styled.div`
	max-width: 600px;
	width: 100%;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  padding: 20px;

	h2 {
		font-size: 30px;
		padding-bottom: 20px;
		text-align: center;
	}

	p {
		text-align: center;
		font-size: 20px;
	}

	form {
		width: 100%;
		padding-top: 20px;

		div {
			margin-bottom: 30px;

			label {
				display: block;
				margin-top: 10px;
				margin-bottom: 5px;
				font-weight: bold;
			}

			input,
			textarea {
				width: 100%;
				padding: 15px 20px;
				border: none;
				border: 2px solid #fff;
				border-radius: 5px;
				outline: none;
			}

			textarea {
				height: 200px;
			}
		}

		button {
			width: 250px;
			height: 50px;
			background-color: crimson;
			color: #fff;
			border-radius: 10px;
		}
	}
`;
