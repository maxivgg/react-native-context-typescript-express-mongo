import * as React from "react";
import { useContext } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import Post from "../components/Post";
import Context from "../context/context";

export default function TabOneScreen(props: any) {
  const context = useContext(Context);
  const posts = context.state.posts;
  const isLoading = context.isLoading;
  return (
    <ScrollView style={styles.container}>
      {!isLoading && posts?.length > 0 ? (
        posts?.map((post: any, index: number) => (
          <Post key={index} post={post} navigation={props.navigation} />
        ))
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large"/>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    left: 0,
    right: 0,
    top: 250,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
});
