import styled from 'styled-components';

export const HomeServicesContainer = styled.div`
	padding: 80px 0;
	background-color: hsl(128, 47%, 26%);
	background-color: var(--main-color-p);
	position: relative !important;
`;
export const HomeServicesTitle = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	small {
		font-size: 2rem;
		line-height: 2.4rem;
		color: var(--base-color-gold);
		padding-bottom: 10px;
		text-align: center !important;
	}

	h1 {
		font-size: 9.6rem;
		line-height: 10rem;
		letter-spacing: -0.02em;
		color: var(--base-color-gold);
		padding-bottom: 32px;
		text-align: center !important;
	}

	p {
		font-size: 1.6rem;
		line-height: 2.5rem;
		text-align: center !important;
		color: var(--color-offwhite);
	}

	@media screen and (max-width: 900px) {
		h1 {
			font-size: 6rem;
		}
	}

	@media screen and (max-width: 450px) {
		h1 {
			font-size: 4rem;
		}
	}

	@media screen and (max-width: 320px) {
		h1 {
			font-size: 2.5rem;
		}
	}
`;

export const ServicesListContainerWrapper = styled.div`
	max-width: 1500px;
	width: 100%;
	margin: 80px auto;
`;

export const ServicesListContainer = styled.div`
	width: 100%;
	flex-wrap: wrap;
	display: flex;
	gap: 50px;
	justify-content: space-around;
`;
export const ServicesListItems = styled.div`
	width: 350px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	overflow: hidden;
	position: relative;

	&:hover > a div {
		top: 0;
	}

	h4 {
		text-transform: capitalize;
		padding: 10px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--main-color-g);
		color: #fff;
		text-align: center !important;
	}
`;
export const ServiceItemImg = styled.div`
	width: 100%;
	height: 300px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ServiceItemDropdown = styled.div`
	background-color: var(--base-color-gold);
	background-color: var(--main-color-g);

	color: #fff;
	width: 100%;
	height: 100%;
	position: absolute;
	top: -500px;
	/* top: 0; */
	left: 0;
	transition: all 0.5s ease-in-out;
	text-align: center;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 10px;
	/* opacity: 0.9; */

	h2 {
		color: #fff;
		font-size: 20px !important;
		text-align: center !important;
		margin-bottom: 10px;
		/* border-bottom: 5px solid var(--base-color-gold-neg); */
	}

	p {
		font-size: 1.1rem;
		line-height: 1.6;
		text-align: center !important;
		color: var(--color-offwhite);
	}

	button {
		width: 200px;
		height: 40px;
		background-color: var(--color2);
		border-radius: 10px;
		color: #fff;
		font-weight: bold;
		text-transform: capitalize;
		background-color: var(--base-color-gold-neg);
		margin-top: 20px;
	}
`;
// export const HomeServicesContainer = styled.div``;
// export const HomeServicesContainer = styled.div``;
// export const HomeServicesContainer = styled.div``;
// export const HomeServicesContainer = styled.div``;
// export const HomeServicesContainer = styled.div``;
