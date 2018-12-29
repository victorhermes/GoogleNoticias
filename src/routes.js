import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Top from "./pages/Top";

const Routes = () =>
    createAppContainer(
        createSwitchNavigator(
            {
                Top
            },
            {
                initialRouteName: "Top"
            }
        )
    );

export default Routes;
