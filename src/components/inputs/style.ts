import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	group: {
		width: "100%",
		flexDirection: "row",
		height: 56,
		backgroundColor: "#fff",
		alignItems: "center",
		overflow: "hidden",
	},
	icon: {
		height: 56,
		width: 56,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		borderRightWidth: 3,
		borderRightColor: "#f4f5f6",
	},
	control: {
		flex: 1,
		paddingLeft: 16,
		fontSize: 16,
	},
	error: {
		fontSize: 14,
		marginTop: 7,
		color: "#E1251C",
	},
});
