import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface ISuccess {
	onSendAnotherFeedback: () => void;
}

export const Success = ({ onSendAnotherFeedback }: ISuccess) => {
	return (
		<View style={styles.container}>
			<Image source={successImg} style={styles.image} />
			<Text style={styles.title}>Agradecemos o feedback</Text>
			<TouchableOpacity onPress={onSendAnotherFeedback} style={styles.button}>
				<Text style={styles.buttonTitle}>Quero enviar outro</Text>
			</TouchableOpacity>
			<Copyright />
		</View>
	);
};
