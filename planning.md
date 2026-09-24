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

## How do you plan to design the application state?

## Does the project have any side effects and how will they work?

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

## How will you design your UI and link it to application state
