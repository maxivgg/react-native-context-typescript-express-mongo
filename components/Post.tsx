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
      <ListItem.Content>
        <ListItem.Title testID="title">{post.title}</ListItem.Title>
        <ListItem.Subtitle>{post.body}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
