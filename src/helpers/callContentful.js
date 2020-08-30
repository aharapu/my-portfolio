const contentful = require('contentful');
const client = contentful.createClient({
	space: process.env.REACT_APP_CMS_SPACE,
	accessToken: process.env.REACT_APP_CMS_TOKEN,
});

function callContentful(content, order = ''){
    return client
	.getEntries({
		content_type: `${content}`,
		order: order
	})
}

export default callContentful;
