# Calculator

This is a calculator with basic arithmetic functionality. It stores at most two operands and an operator in memory.

## Setup

You must have [Node.js](https://nodejs.org/en/) and npm installed to run this. Installing Node.js will automatically install npm.

Open a terminal, and change directory into this project:

```
cd <path-to>/calculator
```

To install dependencies, run:

```
npm i
```

To start the app in development mode, run:

```
npm run dev
```

Visit the link that is printed on the console (usually http://localhost:3000) to see the calculator.

## Notes

I focused on getting a basic calculator UI up first with the calculator buttons with minimal styles. This helps me visualize the calculator and makes it easier for me to test the calculator logic. Then I worked on the calculator logic.

## If I had more time:

- The user can navigate the calculator buttons with the 'tab' key, but that is not the best UX as the user would have to tab the many times when they want to reach a key that is far away. I would add arrow key support so ease the button navigation.
- There is no indication that the user's button press has registered in the calculator. I would add a little bit of background color change with a fading animation to clearly indicate that the button has been pressed.
- It is also important that the screen reader correctly reads out what button is being pressed. I would test that with the Mac VoiceOver.
- The user can add as many digits as they want. When that happens, the calculator overflows. I would cap the calculator to a certain number of digits so that the calculator digits does not overflow the width of calculator screen.
- Find ways to make the calculator look nicer.
- Unit test the logic of the calculator using Vitest.
- Integration test the calculator in the UI with Playwright.
