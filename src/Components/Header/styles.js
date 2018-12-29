import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
    header: {
        height: 30 + getStatusBarHeight(),
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: metrics.basePadding
    },
    icon: {
        color: colors.regular
    },
    form: {
        marginTop: metrics.baseMargin * 2
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        height: 44,
        paddingHorizontal: metrics.basePadding
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: metrics.baseRadius,
        height: 44,
        marginTop: metrics.baseMargin,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16
    }
});

export default styles;
