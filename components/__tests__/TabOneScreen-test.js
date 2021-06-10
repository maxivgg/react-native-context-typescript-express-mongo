import { render } from '@testing-library/react-native'
import '@testing-library/jest-dom/extend-expect'
import Context from "../../context/context";
import TabOneScreen from '../../screens/TabOneScreen';

function renderWithContext(component) {
	return render(<Context.Provider value={{
		state: state,
		isLoading: isLoading,
		setLoading: () => setLoading,
		addNewPost: addNewPost,
		updatePost: updatePost,
		deletePost: deletePost,
		editPost: editPost,
		setEditPost: setEditPost,
	}}
	>{component}</Context.Provider>);
}

test("search title", () => {
	const { getByText } = renderWithContext(<TabOneScreen />);
	getByText("Posts");
});

