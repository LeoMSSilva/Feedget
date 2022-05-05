import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		width: 36,
		height: 36,
		marginTop: 42,
		marginBottom: 10,
	},
	title: {
		marginBottom: 24,
		fontSize: 20,
		fontFamily: theme.fonts.medium,
		color: theme.colors.text_primary,
	},
	button: {
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 24,
		marginBottom: 56,
		borderRadius: 4,
		backgroundColor: theme.colors.surface_secondary,
	},
	buttonTitle: {
		fontSize: 14,
		fontFamily: theme.fonts.medium,
		color: theme.colors.text_primary,
	},
});
