const contentful = require('contentful');
const client = contentful.createClient({
	space: 'al1ikk93hxev',
	accessToken: 'MGR6ZpY44sfKOtgk33ias_3tZmj0yip5rv2zJfA0kHw',
});

function callContentful(content){
    return client
	.getEntries({
		content_type: `${content}`,
	})
}

export default callContentful;
