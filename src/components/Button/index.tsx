import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
	title: string;
};

const Button = ({ title, ...rest }: Props) => {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;
