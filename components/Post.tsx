import React, { useContext } from "react";
import { Avatar, ListItem } from "react-native-elements";
import Context from "../context/context";

export default function Post(props: any) {
  const { post, navigation } = props;
  const context = useContext(Context);
  const setEditPost = context.setEditPost;

  return (
    <ListItem
      key={post.id}
      bottomDivider
      onPress={() => {
        setEditPost(post);
        navigation.navigate('TabTwo');
      }}
    >
      <ListItem.Chevron />
      <Avatar
        size="medium"
        source={{
          uri: "https://avatars.githubusercontent.com/u/45208874?s=400&u=ecdb30d5b244ecbd2515654392312313fe8a1e5f&v=4",
        }}
        rounded
      />
      <ListItem.Content>
        <ListItem.Title>{post.title}</ListItem.Title>
        <ListItem.Subtitle>{post.body}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
