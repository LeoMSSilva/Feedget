import React from 'react';
import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

interface IButton extends TouchableOpacityProps {
	isLoading: boolean;
}

export const Button = ({ isLoading, ...rest }: IButton) => {
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			{isLoading ? (
				<ActivityIndicator color={theme.colors.text_on_brand_color} />
			) : (
				<Text style={styles.title}>Enviar Feedback</Text>
			)}
		</TouchableOpacity>
	);
};
