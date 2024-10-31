import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, type TextInput, View } from 'react-native';
import Button from '../../components/Button';
import { Input } from '../../components/inputs';
import { styles } from './style';

export default function FormStepThree() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function handleNextSetp(data: any) {
		console.log(data);
	}

	const refStep = useRef<TextInput>(null);

	return (
		<View style={styles.container}>
			<Text style={styles.tittle}>Criar sua conta</Text>

			<Input
				icon="lock"
				error={errors.password?.message}
				formProps={{
					name: 'password',
					control,
					rules: {
						required: 'Senha é obrigatório.',
					},
				}}
				inputProps={{
					placeholder: 'Nome',
					onSubmitEditing: () => refStep.current?.focus(),
					returnKeyType: 'next',
				}}
			/>

			<Input
				icon="lock"
				ref={refStep}
				error={errors.passwordConfirmation?.message}
				formProps={{
					name: 'passwordConfirmation',
					control,
					rules: {
						required: 'Confirme a senha é obrigatório.',
					},
				}}
				inputProps={{
					placeholder: 'Confirme a senha',
					onSubmitEditing: () => handleSubmit(handleNextSetp),
					secureTextEntry: true,
				}}
			/>

			<Button title="Continuar" onPress={handleSubmit(handleNextSetp)} />
		</View>
	);
}
