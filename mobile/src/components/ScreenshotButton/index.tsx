import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

interface IScreenshotButton {
	screenshot: string | null;
	onTakeShot: () => void;
	onRemoveShot: () => void;
}

export const ScreenshotButton = ({
	screenshot,
	onTakeShot,
	onRemoveShot,
}: IScreenshotButton) => {
	return (
		<TouchableOpacity
			onPress={screenshot ? onRemoveShot : onTakeShot}
			style={styles.container}
		>
			{screenshot ? (
				<View>
					<Image source={{ uri: screenshot }} style={styles.image} />
					<Trash
						size={24}
						weight="fill"
						color={theme.colors.text_secondary}
						style={styles.removeIcon}
					/>
				</View>
			) : (
				<Camera size={24} weight="bold" color={theme.colors.text_secondary} />
			)}
		</TouchableOpacity>
	);
};
