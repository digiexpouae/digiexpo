/* PostCSS config enabling PurgeCSS in production to remove unused CSS */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: {
		autoprefixer: {}
	}
};


