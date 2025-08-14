import styled from "styled-components";

export const GalleryContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
	grid-auto-rows: 12.5rem;
	grid-auto-flow: dense;
	gap: 0.75rem;

	div {

		overflow: hidden;
		display: grid;
		/* grid-template-columns: 1fr;
		grid-template-rows: 1fr; */

		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: minmax(0, 1fr);

		img {
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
			grid-area: 1/1/-1/-1;
			transition: scale 1s ease-in-out;
		}

		h3 {
			font-size: 1.0625rem;
		}

		p {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		&:hover > img {
			scale: 1.125;
		}


	}

	@media screen and (width > 600px) {
		div {
			&:nth-child(1) {
				grid-area: span 2 / span 2;
			}

			&:nth-child(4n + 1) {
				grid-area: span 2;
			}
			&:nth-child(4n + 2) {
				grid-area: span 2;
			}
		}
	}

  @container div (width > 20rem){

  }
`;
export const GalleryImg = styled.div``;
// export const GalleryContainer = styled.div``;
// export const GalleryContainer = styled.div``;
