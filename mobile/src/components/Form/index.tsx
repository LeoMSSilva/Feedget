import * as FileSystem from 'expo-file-system';
import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../service/api';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType } from '../Widget';
import { styles } from './styles';

interface IForm {
	feedbackType: FeedbackType;
	onFeedbackTypeRemove: () => void;
	onFeedbackSent: () => void;
}

export const Form = ({
	feedbackType,
	onFeedbackTypeRemove,
	onFeedbackSent,
}: IForm) => {
	const feedbackInfo = feedbackTypes[feedbackType];
	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [isSendingFeedback, setIsSendingFeedback] = useState(false);
	const [comment, setComment] = useState('');

	const handleScreenshot = async () => {
		try {
			const uri = await captureScreen({ format: 'png', quality: 0.8 });
			setScreenshot(uri);
		} catch (e) {
			console.log(e);
		}
	};

	const handleSendFeedback = async () => {
		if (isSendingFeedback) {
			return;
		} else if (comment === '') {
			console.warn('O comentário é obrigatório!');
			return;
		}
		setIsSendingFeedback(true);
		try {
			const screenshotBase64 =
				screenshot &&
				(await FileSystem.readAsStringAsync(screenshot, {
					encoding: 'base64',
				}));
			await api.post('/feedbacks', {
				type: feedbackType,
				screenshot: `data:image/png;base64, ${screenshotBase64}`,
				comment,
			});
			setComment('');
			onFeedbackSent();
		} catch (e) {
			console.log(e);
			setIsSendingFeedback(false);
		}
	};

	const handleScreenshotRemove = () => setScreenshot(null);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={onFeedbackTypeRemove}>
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
				onChangeText={setComment}
			/>

			<View style={styles.footer}>
				<ScreenshotButton
					screenshot={screenshot}
					onTakeShot={handleScreenshot}
					onRemoveShot={handleScreenshotRemove}
				/>
				<Button onPress={handleSendFeedback} isLoading={isSendingFeedback} />
			</View>
		</View>
	);
};
