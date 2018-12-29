import Reactotron from "reactotron-react-native";
import React, { Component } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import Header from "~/Components/Header";
import api from "~/services/api";
import TopList from "./TopList";
import styles from "./styles";

export default class Top extends Component {
    state = {
        data: [],
        loading: true,
        refreshing: false
    };

    componentDidMount() {
        this.loadTop();
    }

    loadTop = async () => {
        this.setState({ refreshing: true });

        const { data } = await api.get(
            "/top-headlines?country=br&apiKey=a5f689f8a6b64e609289192834d4c9c6"
        );

        this.setState({ data, loading: false, refreshing: false });
    };

    TopListItem = ({ item }) => <TopList list={item} />;

    renderList = () => {
        const { data, refreshing } = this.state;
        return (
            <FlatList
                data={data.articles}
                keyExtractor={item => String(item.title)}
                renderItem={this.TopListItem}
                onRefresh={this.loadTop}
                refreshing={refreshing}
            />
        );
    };

    render() {
        const { loading } = this.state;

        return (
            <View style={styles.container}>
                <Header />
                {loading ? <ActivityIndicator /> : this.renderList()}
            </View>
        );
    }
}
