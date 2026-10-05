# Pizza mart shopping card planning

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- Single page app using react router.
- App component:
  - Header (contains nav for main)
  - Content (contains child component that changes from nav)
  - Footer
- Header skeleton section that contains page title and persistent page navigation.
- Navigation includes three child component pages that go in content:
  - Home
  - Pizza shop
  - Cart
- Home is default on router.
- Child components load into parent app while header and footer remain.
- Footer is static and includes attribution to author.
- Functionality:
  - Header:
    - Navigation buttons are only interactive elements in header.
    - Tapping each one loads child component via router in content section.
  - Home:
    - Basic centered card with tagline, image, benefits of pizzas.
    - Big centered button encouraging user to shop for pizza, tapping brings user to shop page.
  - Pizza shop:
    - Header section with intro about pizzas.
    - Cards grid section with different pizza options. Each card has:
      - Image of the pizza type.
      - Item title
      - Item description
      - Item price
      - Quantity section, with flexed element with - and + controls around a field with option to type quantity.
      - Add to cart button
    - Some type of feedback on the page when you add something to cart, maybe a growl or a success message, and quantity of that item resets to 1 (if it had been changed).
      - Input for item can't be blank, <1 or non-numeric to add to cart. Throw error otherwise.
      - Adding item to cart also adds indicator to cart button in the header. Maybe dot indicator or number, TBD.
  - Cart:
    - Empty state:
      - Centered card explaining nothing in the cart yet but encouraging user to add to it.
      - Big button prompting them to move to shop section.
    - Items in cart:
      - Column oriented list of cards, with each card showing item name, price of each, total price for the item, -, +, and input quantity controls, and remove from cart option.
      - Total price for order at bottom.
      - Checkout button.
        - Tapping checkout button gives feedback that order has been placed and is on it's way, maybe centered modal? It then clears cart.
  - Footer:
    - Hyperlink to author github profile.
- All buttons and elements will have clear labels for accessibility purposes.

## What will the project react components be?

- App/
  - Header/
  - Content/
    - Home/
    - Shop/
      - ShopCard/
    - Cart/
      - CartCard/
  - Footer/

## How do you plan to design the application state?

- Shared App state:
  - Array of each item in the store, with current cart quantity. Passed down to header and each content route to show current live quantity in store, cart, and indicator for items in cart in header.
  - Increment/decrement state methods can be called from store or cart components.
  - Thinking don't need to store cart totals, just calculate that using static prices and quantity of each item in cart.
- Local Shop state:
  - Array of each item in store with local quantity used for adding to cart. Quantity changes based on increment or decrement on shop page. Also resets to 1 if you tap the add to cart button and update the shared quantity state.

## Does the project have any side effects and how will they work?

- One effect for calling food API to get data, invoked inside of App.
- Define static API URL constant outside of App and then use it in effect inside of app (to avoid dependency array).
- effect defines controller inside of effect.
- Defines Async function with try/catch.
  - Try block fetches data from API endpoint.
  - Throws error if try not okay.
  - captures data and sets it, updates status from loading.
- Catch:
  - Handles error and displays it
  - handles abortError and returns function if this error is returned.
- invokes async function inside of effect to get data.
- Return statement aborts the controller, this is needed to cancel the in-flight effect if the component unmounts while it is in process.
- Empty dependency array because this effect runs only on mount in this application.

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- Only inputs are card quantities added from shop page or adjusted from card page. User entered data.

## How will you design your UI and link it to application state

- Build app component by component in JSX. Initially with entirely hardcoded values.
- Once component is built with hardcoded values, then pass down hardcoded props (including hardcoded pizza data in correct shape).
- Once all components are built with hardcoded props, then refactor to add in state.
- Add in effect of dynamically pulling pizza data from the API.

## How will you test the project?

- Testing approach:
  - Use Vitest as the test runner and React Testing Library to render the app and interact with its UI.
  - Test observable behavior rather than component internals: what users can see, enter, click, and navigate to.
  - Use accessible queries such as button roles and input labels, and simulate interactions with `user-event`.
- Component tests:
  - Check that quantity controls in a shop card and cart card display and respond to user input.
  - Check validation and feedback where they are visible to the user.
- Integration tests:
  - Render the app and test at least one complete cart flow:
    1. Add a pizza with a chosen quantity.
    2. Verify the cart indicator updates.
    3. Navigate to the cart and verify the item, quantity, and total.
    4. Change or remove the item and verify the displayed results update.
- API states:
  - Test that the Shop page displays loading, error, empty-catalog, and populated-catalog states.
  - Use predictable mocked API responses; tests should not depend on the live API.
- Test boundaries:
  - Don’t test React Router internals. Test that using the app’s navigation shows the expected page.
  - Avoid assertions about React state, component hierarchy, CSS classes, or internal function calls.
  - Use test-first development for important interactions when it helps: write a failing behavior test, implement the smallest change, then refactor while keeping it passing.
