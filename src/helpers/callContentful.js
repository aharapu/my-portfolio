const contentful = require('contentful');
console.log(process.env.REACT_APP_CMS_TOKEN);
const client = contentful.createClient({
	space: process.env.REACT_APP_CMS_SPACE,
	accessToken: process.env.REACT_APP_CMS_TOKEN,
});

function callContentful(content){
    return client
	.getEntries({
		content_type: `${content}`,
	})
}

export default callContentful;
