import styled from 'styled-components';
import pix from '../../../assets/hero4.png'

export const WhoWeAreContainer = styled.div`
	/* padding-top: 90px; */
`;
export const WhoWeAreWrapper = styled.div``;
export const WhoWeAreTextContainer = styled.div`
	padding: 20px;

	h2 {
		font-size: 2rem;
		color: var(--color-medium-blue);
		border-bottom: 4px solid var(--color-medium-blue);
		font-weight: normal;

		span {
			font-weight: bold;
		}
	}

	p {
		padding: 10px 0;
		font-size: 1.2rem;
		line-height: 1.5rem;
		color: #000;
		opacity: 0.8;
	}
`;

export const MissionVissionWrapper = styled.div``;

export const MissionVissionImg = styled.div`
	margin: 0 auto;
	margin-bottom: 50px;
	width: 400px;
  padding-top: 100px;

	img {
		width: 100%;
	}

	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;
export const MissionVissionBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 50px;
	flex-wrap: wrap;
`;
export const MissionBox = styled.div`
	width: 400px;
	height: 220px;
	/* border: 2px solid red; */
	box-shadow: 1px 3px 10px var(--color-dark-blue);
	padding: 10px;
	position: relative;
	padding-left: 30px;

	::before {
		content: '';
		position: absolute;
		left: 0;
		top: 80px;
		height: 40px;
		width: 10px;
		background-color: var(--color-dark-blue);
	}

	h4 {
		color: var(--color-dark-blue);
		font-size: 2rem;
		padding-bottom: 10px;
	}

	p {
		color: #fff;
		color:#000;
		font-size: 1.1rem;
		line-height: 1.5rem;
	}

	@media screen and (max-width: 450px) {
		width: 100%;
		height: 100%;
	}
`;
export const VissionBox = styled.div`
	width: 400px;
	height: 220px;
	/* border: 2px solid red; */
	box-shadow: 1px 3px 10px var(--crimson);
	padding: 10px;
	position: relative;
	padding-left: 30px;

	::before {
		content: '';
		position: absolute;
		left: 0;
		top: 80px;
		height: 40px;
		width: 10px;
		background-color: var(--crimson);
	}

	h4 {
		color: var(--crimson);
		font-size: 2rem;
		padding-bottom: 10px;
		text-transform: capitalize;
	}

	p {
		color: #fff;
		color: #000;
		font-size: 1.1rem;
		line-height: 1.5rem;
	}

	@media screen and (max-width: 450px){
		width: 100%;
	}
`;

export const WhoWeAreCoreContainer = styled.div`
	margin-top: 150px;

	width: 100%;
	background: url(${pix});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	padding-top: 40.2%;
	position: relative;
	/* margin-bottom: 50px; */

	@media screen and (max-width: 1120px) {
		padding-top: 50.2%;
	}

	@media screen and (max-width: 900px) {
		padding-top: 60.2%;
	}

	@media screen and (max-width: 590px) {
		padding-top: 70.2%;
	}

	@media screen and (max-width: 420px) {
		padding-top: 90.2%;
	}
`;
export const CoreContainer = styled.div`
	max-width: 500px;
	width: 100%;
	position: absolute;
	/* top: -50px; */
	/* right: 100px; */
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	h2 {
		background-color: var(--brown);
		color: #fff;
		padding: 10px 30px;
		text-transform: capitalize;
		font-weight: normal;
		font-size: 18px;

		span {
			display: block;
			font-size: 50px !important;
			font-weight: bold;
		}
	}

	ul {
		width: 100%;
		background-color: #fff;
		color: #000;
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;

		li {
			display: flex;
			align-items: center;
			gap: 10px;
			text-transform: capitalize;
			font-size: 20px;

			&:nth-child(1) svg {
				color: var(--color-light-blue);
			}
			&:nth-child(2) svg {
				color: var(--crimson);
			}
			&:nth-child(3) svg {
				color: var(--brown);
			}
			&:nth-child(4) svg {
				color: green;
			}
			&:nth-child(5) svg {
				color: var(--color-light-blue);
			}
			&:nth-child(6) svg {
				color: var(--crimson);
			}
		}
	}

	@media screen and (max-width: 900px) {
		max-width: 300px;
	}

	@media screen and (max-width: 750px) {
		ul {
			gap: 10px;
		}
	}

	@media screen and (max-width: 590px) {
		h2 {

			font-size: 18px;

			span {

				font-size: 30px !important;

			}
		}

		ul {
			li {
				font-size: 16px;
			}
		}
	}
`;
// export const WhoWeAreContainer = styled.div``;
