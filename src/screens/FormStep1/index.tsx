import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, type TextInput, View } from 'react-native';
import Button from '../../components/Button';
import { Input } from '../../components/inputs';
import { styles } from './style';

export default function FormStepOne() {
	const { navigate } = useNavigation();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function handleNextSetp(data: any) {
		console.log(data);
	}

	const emailRef = useRef<TextInput>(null);

	return (
		<View style={styles.container}>
			<Text style={styles.tittle}>Criar sua conta</Text>

			<Input
				icon="user"
				error={errors.name?.message}
				formProps={{
					name: 'name',
					control,
					rules: {
						required: 'O nome é obrigatório.',
					},
				}}
				inputProps={{
					placeholder: 'Nome',
					onSubmitEditing: () => emailRef.current?.focus(),
					returnKeyType: 'next',
				}}
			/>

			<Input
				icon="mail"
				ref={emailRef}
				error={errors.email?.message}
				formProps={{
					name: 'email',
					control,
					rules: {
						required: 'E-mail é obrigatório.',
						pattern: {
							value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
							message: 'o E-mail é inválido.',
						},
					},
				}}
				inputProps={{
					placeholder: 'E-mail',
					onSubmitEditing: () => handleSubmit(handleNextSetp),
				}}
			/>

			<Button title="Continuar" onPress={handleSubmit(handleNextSetp)} />
		</View>
	);
}
