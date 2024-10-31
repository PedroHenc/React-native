import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, type TextInput, View } from 'react-native';
import Button from '../../components/Button';
import { Input } from '../../components/inputs';
import { styles } from './style';

export default function FormStepTwo() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	function handleNextSetp(data: any) {
		console.log(data);
	}

	const refStep = useRef<TextInput>(null);

	return (
		<View style={styles.container}>
			<Text style={styles.tittle}>Suas informações</Text>

			<Input
				icon="calendar"
				error={errors.birth?.message}
				formProps={{
					name: 'birth',
					control,
					rules: {
						required: 'Data de nascimento é obrigatório.',
					},
				}}
				inputProps={{
					placeholder: 'data de nascimento',
					onSubmitEditing: () => refStep.current?.focus(),
					returnKeyType: 'next',
				}}
			/>

			<Input
				icon="phone"
				ref={refStep}
				error={errors.phone?.message}
				formProps={{
					name: 'phone',
					control,
					rules: {
						required: 'O telefone é obrigatório.',
						pattern: {
							value: /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/,
							message: 'o telefone é inválido.',
						},
					},
				}}
				inputProps={{
					placeholder: 'telefone',
					onSubmitEditing: () => handleSubmit(handleNextSetp),
				}}
			/>

			<Button title="Continuar" onPress={handleSubmit(handleNextSetp)} />
		</View>
	);
}
