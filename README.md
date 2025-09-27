What is JSX, and why is it used?

Answer: JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript.
And we use JSX in React because it makes the code more readable and easier to write. It allows developers to breaking down the UI into smaller, reusable components, making it easier to manage and maintain the codebase.

What is the difference between State and Props?

Answer: State and Props are both used to manage data in a React application, but they serve different purposes. State is a local data storage that is managed within a component, while Props are used to pass data from a parent component to a child component.

What is the useState hook, and how does it work?

Answer: The useState hook is a built-in React hook that allows developers to add state to functional components. It works by returning an array with two elements: the current state value and a function to update that value. When the state is updated using the provided function, React re-renders the component to reflect the new state.

How can you share state between components in React?

Answer: There are several ways to share state between components in React. One common method is to lift the state up to a common parent component and pass it down as props to the child components. Another way is to use React's Context API, which allows for global state management and makes it easier to share state across multiple components without prop drilling. Additionally, third-party state management libraries like Redux or MobX can be used for more complex state management needs.

How is event handling done in React?

Answer: Event handling in React is done using camelCase syntax for event names and passing a function as the event handler. For example, instead of using "onclick" like in traditional HTML, React uses "onClick". The event handler function can be defined within the component and can access the component's state and props. Additionally, React uses a synthetic event system that normalizes events across different browsers, providing a consistent API for event handling.
