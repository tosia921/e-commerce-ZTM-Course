import { createSelector } from 'reselect';

const selectUser = state => state.user; // input selector, function that gets whole state and return just slice of it.

export const selectCurrentUser = createSelector( // writing a memoized selector thank tocreateSelector, takes 2 parameters, first is our selectCart, in this case it is array, second one is a function that will return value that we want to get from this selector.
    [selectUser],
    (user) => user.currentUser
);

