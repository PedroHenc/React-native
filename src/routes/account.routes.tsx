import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormStepOne from '../screens/FormStep1';
import FormStepTwo from '../screens/FormStep2';
import FormStepThree from '../screens/FormStep3';

const { Navigator, Screen } = createNativeStackNavigator();

const AccountRoutes = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="1" component={FormStepOne} />
			<Screen name="2" component={FormStepTwo} />
			<Screen name="3" component={FormStepThree} />
		</Navigator>
	);
};

export default AccountRoutes;
