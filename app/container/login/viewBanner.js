import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { BoxShadow } from 'react-native-shadow';

import { Photo, Mixins, Color } from 'styles';

const WIDTH_IMAGE = Mixins.scaleSizeWidth(320);
const HEIGHT_IMAGE = Mixins.scaleSizeWidth(150);

const styles = StyleSheet.create({
	view_container: {
		flex: 0.9,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	img_banner: {
		width: WIDTH_IMAGE,
		height: HEIGHT_IMAGE,
	},
});

export default class ViewBanner extends Component {
	render() {
		return (
			<View style={styles.view_container}>
				<BoxShadow
					setting={{
						width: WIDTH_IMAGE,
						height: HEIGHT_IMAGE,
						color: Color.ORANGE,
						border: 15,
						radius: 8,
						opacity: 0.2,
						x: 0,
						y: 3,
						style: { marginTop: 10 },
					}}>
					<Image
						onLayout={this.setLayoutViewImage}
						resizeMode={'contain'}
						source={Photo.BANNER_LOGIN}
						style={styles.img_banner}
					/>
				</BoxShadow>
			</View>
		);
	}
}
