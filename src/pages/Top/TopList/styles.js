import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.light,
        borderRadius: metrics.baseRadius,
        height: 30,
        marginTop: metrics.baseMargin,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;
