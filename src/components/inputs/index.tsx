import { Feather } from '@expo/vector-icons';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { Controller, type UseControllerProps } from 'react-hook-form';
import { Text, TextInput, type TextInputProps, View } from 'react-native';
import { styles } from './style';

type Props = {
	icon: keyof typeof Feather.glyphMap;
	formProps: UseControllerProps;
	inputProps: TextInputProps;
	error: string;
};

export const Input = forwardRef<TextInput, Props>(
	({ icon, formProps, inputProps, error = '' }, ref) => {
		return (
			<Controller
				render={({ field }) => {
					return (
						<View style={styles.container}>
							<View style={styles.group}>
								<View style={styles.icon}>
									<Feather
										name={icon}
										size={24}
										color={clsx({
											['#DC1637']: error.length > 0,
											['#0970E5']: error.length === 0 && field.value,
											['#888']: !field.value && error.length === 0,
										})}
									/>
								</View>

								<TextInput
									ref={ref}
									style={styles.control}
									value={field.value}
									onChangeText={field.onChange}
									{...inputProps}
								/>
							</View>
							{error.length > 0 && <Text style={styles.error}>{error}</Text>}
						</View>
					);
				}}
				{...formProps}
			/>
		);
	},
);
