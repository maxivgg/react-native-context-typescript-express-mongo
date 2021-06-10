import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { Alert, Platform, ScrollView, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { View } from "../components/Themed";
import Context from "../context/context";

export default function TabTwoScreen(props: any) {
  const context = useContext(Context);
  const addNewPost = context.addNewPost;
  const deletePost = context.deletePost;
  const updatePost = context.updatePost;
  const editPost = context.editPost;
  const initalState = {
    _id: "",
    userId: 7,
    title: "",
    body: "",
  };
  const [state, setState] = useState(initalState);

  const handleChangeText = (value: string, name: string) => {
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (editPost) {
      setState({
        _id: editPost._id,
        userId: editPost.userId,
        title: editPost.title,
        body: editPost.body,
      });
    }
  }, [editPost]);

  const openConfirmationAlert = () => {
    if (Platform.OS === "web") {
      const confirm = window.confirm("Are you sure?");
      if (confirm) onDelete();
    } else {
      Alert.alert(
        "Removing the User",
        "Are you sure?",
        [
          { text: "Yes", onPress: () => onDelete() },
          { text: "No", onPress: () => console.log("canceled") },
        ],
        {
          cancelable: true,
        }
      );
    }
  };

  const onDelete = () => {
    deletePost(state._id);
    props.navigation.navigate("TabOne");
    setState(initalState);
  };

  const onSubmit = () => {
    const title = state.title;
    const body = state.body;
    const _id = state._id;
    const userId = state.userId;
    if (state._id) {
      updatePost({ _id, userId, title, body });
    } else {
      addNewPost({ _id, userId, title, body });
    }
    props.navigation.navigate("TabOne");
    setState(initalState);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttons}>
        <Input
          placeholder="title"
          value={state.title || ""}
          onChangeText={(value) => handleChangeText(value, "title")}
        />
      </View>
      <View style={styles.buttons}>
        <Input
          placeholder="body"
          value={state.body || ""}
          onChangeText={(value) => handleChangeText(value, "body")}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Submit" onPress={onSubmit} />
      </View>
      {editPost && (
        <View>
          <Button
            title="Delete"
            onPress={() => openConfirmationAlert()}
            type="clear"
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttons: {
    marginBottom: 15,
    backgroundColor: "rgb(242, 242, 242)",
  },
});
