export const API_URL =
	process.env.ENVIRONMENT === 'production'
		? 'https://chart-the-crypto-market.now.sh'
		: 'http://localhost:3001'
