import { css } from 'emotion'
import { primary, button, active, secondary } from './utils/colors'

export const duration = 300
export const startPosition = '-100vh'
export const endPosition = '0'

export default {
	defaultStyle: css`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: ${primary};
		transition: transform ${duration}ms ease-in-out;
		transform: translateY(${startPosition});
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		color: white;
		justify-items: center;
		align-items: center;
		grid-gap: 45px;
		grid-row-gap: 45px;
		padding: 35px;
	`,
	currencyItemWrapper: css`
		background-color: ${button};
		height: 100%;
		width: 100%;
		border-radius: 80%;
		transition: background-color 300ms ease-in-out;
		padding: 7px;

		&:hover {
			background-color: ${active};
			cursor: pointer;
		}
	`,
	currencyItemInnerWrapper: css`
		background-color: ${secondary};
		height: 100%;
		width: 100%;
		border-radius: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`,
	buttonWrapper: css`
		grid-column: 1 / span 5;
	`,
}
