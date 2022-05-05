import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType } from '../Widget';
import { styles } from './styles';

interface IForm {
	feedbackType: FeedbackType;
}

export const Form = ({ feedbackType }: IForm) => {
	const feedbackInfo = feedbackTypes[feedbackType];
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity>
					<ArrowLeft
						size={24}
						weight="bold"
						color={theme.colors.text_secondary}
					/>
				</TouchableOpacity>
				<View style={styles.titleContainer}>
					<Image source={feedbackInfo.image} style={styles.image} />
					<Text style={styles.titleText}>{feedbackInfo.title}</Text>
				</View>
			</View>

			<TextInput
				multiline
				style={styles.input}
				placeholder="Conte com detalhes o que está acontecendo..."
				placeholderTextColor={theme.colors.text_secondary}
			/>

			<View style={styles.footer}>
				<ScreenshotButton
					screenshot="http://github.com/leomssilva.png"
					onTakeShot={() => {}}
					onRemoveShot={() => {}}
				/>
				<Button isLoading={false} />
			</View>
		</View>
	);
};
