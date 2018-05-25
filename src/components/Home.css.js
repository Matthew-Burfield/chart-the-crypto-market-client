import { css } from 'emotion'
import { primary } from '../utils/colors'

export default {
	app: css`
		text-align: center;
	`,
	appHeader: css`
		background-color: ${primary};
		height: 150px;
		padding: 20px;
		color: white;
	`,
	appTitle: css`
		font-size: 2.5em;
	`,
	chartContainer: css`
		position: absolute;
		top: 220px;
		bottom: 20px;
		left: 0;
		right: 0;
	`,
}
