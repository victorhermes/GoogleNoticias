import Reactotron from "reactotron-react-native";

Reactotron.configure({
    host: "192.168.0.103"
})
    .useReactNative()
    .connect();
