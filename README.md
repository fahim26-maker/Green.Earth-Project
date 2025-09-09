<!-- Q1 is -->
Difference between var, let and const is :
- var is function-scoped, meaning it’s only accessible within the function where it’s declared, and it can be re-declared and updated freely.
- let is block-scoped, so it only exists within the {} block it's defined in, and while it can be updated, it cannot be re-declared in the same scope.
- const is also block-scoped, but unlike let, it must be initialized at the time of declaration and cannot be updated or re-declared.
In short: var is loose and risky, let is flexible and modern, and const is strict and reliable. we’ll mostly use let for dynamic values and const for fixed ones like DOM selectors or config settings.

<!-- Q-2 is -->
 Difference between map(), forEach(), and filter() is :
 - forEach() executes a function on each element of an array but doesn’t return anything — it’s mainly used for side effects like logging or DOM updates.
- map() also runs a function on each element, but it returns a new array with the transformed values, making it ideal for data conversion or formatting.
- filter() checks each element against a condition and returns a new array containing only the elements that pass that test.
In short:
👉 forEach() is for doing something with each item,
👉 map() is for transforming items into a new array,
👉 filter() is for selecting specific items based on a condition.
Want to try applying all three to a DOM-based list or spinner logic to see how they behave differently?

<!-- Q3 is -->
Arrow function E6 is:
- Arrow functions use the => syntax, which makes code shorter and cleaner — especially useful when  working with callbacks like in map(), filter(), or event listeners.
- They don’t require the function keyword, and if the function body is a single expression, It can even skip the curly braces and return keyword.
- Arrow functions don’t have their own this context, which means they inherit this from their surrounding scope — super handy when dealing with DOM events or nested functions.

<!-- Q4 -->
- Destructuring allows to extract values from arrays or properties from objects and assign them to variables in a single, clean line of code.
- In array destructuring, the position of each value matters — values are unpacked based on their index.
- In object destructuring, the variable names must match the property names of the object, unless you rename them using a colon.
- It can also set default values during destructuring, which will be used if the original value is undefined.
- Destructuring makes code more readable and reduces repetition, especially when working with complex data like API responses or DOM elements.

<!-- Q-5 -->
Here’s a clear, sentence-by-sentence explanation of template literals in ES6 and how they differ from traditional string concatenation:

- Template literals are a modern way to write strings using backticks (`) instead of quotes, allowing for cleaner and more readable syntax.
- They let you embed variables directly inside the string using ${} without breaking the string or using the + operator.
- Unlike string concatenation, template literals support multi-line strings naturally, so you don’t need to use \n or join multiple lines manually.
- Template literals are especially useful when building dynamic HTML or logging complex messages, because they reduce clutter and improve readability.
- String concatenation uses + to join strings and variables, which can get messy and hard to follow when dealing with multiple values or long lines.
- In short, template literals make your code more elegant and easier to maintain, especially in DOM manipulation or UI rendering tasks.

