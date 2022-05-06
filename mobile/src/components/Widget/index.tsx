import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Options } from '../Options';
import { Success } from '../Success';
import { styles } from './styles';

export type FeedbackType = keyof typeof feedbackTypes;

export const Widget = gestureHandlerRootHOC(() => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSend, setFeedbackSend] = useState(false);
	const handleRestartFeedback = () => {
		setFeedbackType(null);
		setFeedbackSend(false);
	};
	const handleFeedbackSend = () => {
		setFeedbackSend(true);
	};
	const handleOpen = () => {
		bottomSheetRef.current?.expand();
	};
	return (
		<>
			<TouchableOpacity onPress={handleOpen} style={styles.button}>
				<ChatTeardropDots
					size={24}
					weight="bold"
					color={theme.colors.text_on_brand_color}
				/>
			</TouchableOpacity>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={[1, 280]}
				backgroundStyle={styles.modal}
				handleIndicatorStyle={styles.indicator}
			>
				{!feedbackType ? (
					<Options onFeedbackTypeChange={setFeedbackType} />
				) : (
					<>
						{!feedbackSend ? (
							<Form
								feedbackType={feedbackType}
								onFeedbackTypeRemove={handleRestartFeedback}
								onFeedbackSent={handleFeedbackSend}
							/>
						) : (
							<Success onSendAnotherFeedback={handleRestartFeedback} />
						)}
					</>
				)}
			</BottomSheet>
		</>
	);
});
