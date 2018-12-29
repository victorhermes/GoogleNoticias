import React from "react";
import PropTypes from "prop-types";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    WebView,
    TouchableHighlight,
    Alert
} from "react-native";
import { Card } from "react-native-elements";
import styles from "./styles";

export default class TopList extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    CloseModal = () => {
        this.setModalVisible(!this.state.modalVisible);
    };

    render() {
        const { list } = this.props;
        let img = list.urlToImage
            ? list.urlToImage
            : "https://images5.alphacoders.com/876/thumb-1920-876590.png";

        return (
            <View>
                <View style={styles.container}>
                    <Card title={list.title} image={{ uri: img }}>
                        <Text style={{ marginBottom: 10 }}>
                            {list.description}
                        </Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <Text style={{ color: "#333" }}>Ler</Text>
                        </TouchableOpacity>
                    </Card>
                </View>

                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                    >
                        <WebView
                            source={{
                                uri: list.url
                            }}
                        />
                    </Modal>
                </View>
            </View>
        );
    }
}
