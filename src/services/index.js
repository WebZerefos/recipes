import axios from 'axios'

export const getRecipesList = async (tags = null, size) => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/list',
		params: { from: '0', size: size || '20', tags },
		headers: {
			'X-RapidAPI-Key': '30fb8416f0msh07538b8e6b6b128p1fb774jsnb570e0bebe33',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		},
	}
	return await axios.request(options)
}
