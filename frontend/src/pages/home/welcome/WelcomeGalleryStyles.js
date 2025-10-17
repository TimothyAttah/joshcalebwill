import styled from 'styled-components';

export const GallerryContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 50px auto;
	z-index: 999999 !important;
`;

export const GallerryPixWrapper = styled.div`
	width: 100%;
	position: relative;
	height: 100%;
	padding: 45px 0;
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-gap: 2vh;
	grid-auto-flow: dense;

	.pix {
		position: relative;
		height: 100%;
		width: 100%;
		/* width: 350px;
		height: 350px; */
		overflow: hidden !important;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
		border-radius: 20px;

		&:hover {
			img {
				filter: brightness(1) grayscale(0);
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			/* filter: brightness(0.5) grayscale(100); */
			transition: 0.3s ease-in all;
		}

		&:nth-child(2n + 3) {
			grid-row-start: span 2;

		}

		&:nth-child(4n + 5) {
			grid-column-start: span 1;
			grid-row-start: span 2;
		}

		&:nth-child(6n + 7) {
			grid-column-start: span 2;
			grid-row-start: span 2;
		}

		/*

		&:nth-child(4n + 5) {
			grid-column-start: span 2;
			grid-row-start: span 2;
		}

		&:nth-child(6n + 7) {
			grid-row-start: span 1;
		}

		&:nth-child(8n + 9) {
			grid-column-start: span 1;
			grid-row-start: span 1;
		} */
	}

	.pix1 {
		grid-column-start: span 1;
		grid-row-start: span 2;
		/* width: 600px;
    height: 600px; */
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: auto auto;

    /* .pix1 {
      width: 300px;
      height: 300px;
    } */
	}

	@media screen and (max-width: 430px) {
		/* grid-template-columns: auto; */
		display: block;
    padding: 20px;

    .pix {
      margin: 20px 0;
    }
	}
`;
