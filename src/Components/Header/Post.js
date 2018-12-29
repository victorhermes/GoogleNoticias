import React from "react";
import { View, Text } from "react-native";

const Post = ({ data }) => (
    <View>
        <Text>{data.author}</Text>
    </View>
);

export default Post;
