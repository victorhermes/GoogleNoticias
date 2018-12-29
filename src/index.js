import "./config/ReactotronConfig";
import React from "react";
import createNavigator from "./routes";

export default class App extends React.Component {
    render() {
        const Routes = createNavigator();

        return <Routes />;
    }
}
