import PropTypes from 'prop-types'

export const top20Props = PropTypes.arrayOf(
	PropTypes.shape({
		image_url: PropTypes.string,
		name: PropTypes.string,
		symbol: PropTypes.string,
	}),
)
