import React from "react";
import Reactotron from "reactotron-react-native";
import {
    View,
    Image,
    Text,
    Modal,
    TextInput,
    Alert,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    FlatList
} from "react-native";
import { SearchBar } from "react-native-elements";
import api from "~/services/api";
import Post from "./Post";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default class Header extends React.Component {
    state = {
        data: [],
        news: "",
        loading: false,
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    CloseModal = () => {
        this.setModalVisible(!this.state.modalVisible);
    };

    loadNews = async news => {
        this.setState({ loading: true });
        const newss = this.state.news;
        const { data } = await api.get(
            `/everything?q=${newss}&language=pt&apiKey=a5f689f8a6b64e609289192834d4c9c6`
        );

        this.setState({ data, loading: false });
    };

    lapsList() {
        return this.state.data.map(data => {
            return (
                <View>
                    <Text>{data.articles.title}</Text>
                </View>
            );
        });
    }

    render() {
        const { data, news, loading } = this.state;
        return (
            <View>
                <View style={styles.header}>
                    <View>
                        <Icon
                            name="search"
                            size={16}
                            style={styles.icon}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        />
                    </View>
                    <View>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require("~/assets/logo.png")}
                        />
                    </View>
                    <View>
                        <Icon name="user" size={16} style={styles.icon} />
                    </View>
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
                        <View style={styles.container_form}>
                            <View style={styles.form}>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder="Pesquisar notícia"
                                    underlineColorAndroid="transparent"
                                    value={news}
                                    onChangeText={text =>
                                        this.setState({ news: text })
                                    }
                                />

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.loadNews}
                                >
                                    {loading ? (
                                        <ActivityIndicator
                                            size="small"
                                            color="#fff"
                                        />
                                    ) : (
                                        <Text style={styles.buttonText}>
                                            Procurar
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}
