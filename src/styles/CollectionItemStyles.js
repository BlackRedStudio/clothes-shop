import styled from 'styled-components';

export const ImageContainer = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
    margin-bottom: 5px;
    background-image: ${ ({imageUrl}) => `url( ${imageUrl} )` };
`;
export const AddButtonContainer = styled.button`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
	@media screen and (max-width: 800px) {
		display: block;
		opacity: .9;
		min-width: unset !important;
		padding: 0 10px 0 10px !important;
	}
`;
export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;
export const NameContainer = styled.span`
	width: 90%;
	margin-bottom: 15px;
	@media screen and (max-width: 800px) {
		width: 80%;
		padding-right: 5px;
		font-size: 16px;
	}
`;
export const PriceContainer = styled.span`
	width: 10%;
	@media screen and (max-width: 800px) {
		width: 20%;
		font-size: 16px;
	}
`;

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover {
		${ImageContainer} {
			opacity: 0.8;
		}
		${AddButtonContainer} {
			opacity: 0.85;
			display: flex;
		}
	}
	@media screen and (max-width: 800px) {
		width: 40vw;
		margin-bottom: 20px;
		&:hover {
			${ImageContainer} {
				opacity: unset;
			}
			${AddButtonContainer} {
				opacity: unset;
			}
		}
	}
`;
