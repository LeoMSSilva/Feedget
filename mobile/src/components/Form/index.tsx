import * as FileSystem from 'expo-file-system';
import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType } from '../Widget';
import { styles } from './styles';

interface IForm {
	feedbackType: FeedbackType;
	onFeedbackTypeRemove: () => void;
	onFeedbackSend: () => void;
}

export const Form = ({
	feedbackType,
	onFeedbackTypeRemove,
	onFeedbackSend,
}: IForm) => {
	const feedbackInfo = feedbackTypes[feedbackType];
	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [isSendFeedback, setIsSendFeedback] = useState(false);
	const [comment, setComment] = useState('');

	const handleScreenshot = async () => {
		try {
			const uri = await captureScreen({ format: 'png', quality: 0.8 });
			setScreenshot(uri);
		} catch (e) {
			console.log(e);
		}
	};

	const parse64 = async (screenshot: string) => {
		const prefix64 = 'data:image/png;base64';
		const suffix64 = await FileSystem.readAsStringAsync(screenshot, {
			encoding: 'base64',
		});
		return prefix64 + suffix64;
	};

	const handleSendFeedback = async () => {
		if (isSendFeedback) {
			return;
		}
		setIsSendFeedback(true);
		try {
			const screenshotBase64 = screenshot && (await parse64(screenshot));
			console.warn(screenshotBase64);
			setComment('');
			comment !== ''
				? onFeedbackSend()
				: console.warn('O comentário é obrigatório!');
		} catch (e) {
			console.log(e);
		} finally {
			setIsSendFeedback(false);
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
				<Button onPress={handleSendFeedback} isLoading={isSendFeedback} />
			</View>
		</View>
	);
};
