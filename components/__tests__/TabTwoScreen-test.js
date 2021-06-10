import { fireEvent, render, waitFor } from '@testing-library/react-native'
import '@testing-library/jest-dom/extend-expect'
import TabTwoScreen from '../../screens/TabTwoScreen';
import Context from '../../context/context';

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

test("search button", () => {
  const { getByText } = renderWithContext(<TabTwoScreen />);
  getByText("submit");
});
