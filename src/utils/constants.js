export const API_URL =
	process.env.NODE_ENV === 'production'
		? 'https://chart-the-crypto-market.now.sh'
		: 'http://localhost:3001'
