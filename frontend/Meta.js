import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: 'Welcome to Gokart',
	description: 'We sell best quality products in cheap price',
	keywords: 'electronics, cheap electronics, buy electronics',
}

export default Meta
