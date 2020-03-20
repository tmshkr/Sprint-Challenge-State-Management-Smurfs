## What problem does the Context API help solve?

The Context API makes it easier to share data among components in an application by allowing components to consume data from a Provider component, without having to manually pass down data at each level of the component hierarchy. This helps to avoid "prop-drilling" by allowing data to be passed freely throughout the application, as long as there is a Provider component above the consumer component in the hierarchy.


## In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

With Redux, there is a `store` which acts as a central repository for the application's state, providing a single source of truth (SSOT) — i.e., a sole provider of information for the app, to which components in the app can refer in order to avoid bugs and errors that could be caused by inconsistent state coming from multiple components.

The Redux `store` is modified by a reducer function, which creates a new state in response to actions, represented by an object with a `type` and an optional `payload`. The reducer function returns a new state for every action, so that the state in the `store` is not directly mutated.

## What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state, i.e., state that can be accessed throughout the application. Component state is local state, which can only be accessed through a specific component. Application state is useful for data that must be accessed throughout the application, e.g., user preferences that affect many components. Component state is appropriate for situations where the the state is only needed in a single component, for example, state for a controlled input that must be updated on every keystroke, which can then be dispatched to Application state.

## Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middleware for Redux that allows asynchronous actions, e.g., coming from network requests, to be dispatched to the Redux store. When using `redux-thunk`, action creators should be thunks, i.e., functions that return functions, which allows the `dispatch` function to be referenced asynchronously. For example:
```javascript
export const getData = () => dispatch => {
  dispatch({
    type: GET_DATA
  });
  axios.get("/data").then(({ data }) => {
    dispatch({
      type: UPDATE_STORE,
      payload: data
    });
  });
};
```

## What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is much more enjoyable with Hooks. It makes the code more straightforward and easier to use. Redux DevTools is also useful for inspecting the application's state.