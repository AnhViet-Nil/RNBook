import React from 'react';
import { Image } from 'react-native';

import PropTypes from 'prop-types';

export default class Icon extends React.Component {
	render() {
		const { style, size, source, resizeMode } = this.props;
		return (
			<Image
				resizeMode={resizeMode}
				style={[style, { width: size, height: size }]}
				source={source}
			/>
		);
	}
}

Icon.propTypes = {
	size: PropTypes.number,
	source: PropTypes.node.isRequired,
	resizeMode: PropTypes.string,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Icon.defaultProps = {
	size: 24,
	resizeMode: 'contain',
	style: {},
};
