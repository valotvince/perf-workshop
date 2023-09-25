# Exercise 1

## Description

You are in charge of optimizing a component re-render time, that is used on your company public-facing website.
The component shows limited number discount offers from other websites, and shows a fake number of people viewing the offer.

Component works well when alone, but when showing hundreds of offers, the company's website faces performance issues rendering the navigation laggy.

The company still want the same design and the component to:
- show an title, description and image (based on item's id)
- show a fake number of active users changing each second

The goal is to bring the component rendering time around or below 0.50 ms (half micro-second).

## Information

- The application is using a custom app state management, whose API looks like Redux's one.
  - `useStore` hook to get store instance
  - `useSelector` hook to select state values

## Rules

- You can use any React's hooks
- You can use any other code/API found in the src/app/exercise-1 or src/utils folders
- You can edit code in, and only in, src/app/exercise-1 folder
- The function `simulateHeavyComputation` usage is intentional and SHOULDN'T be changed. **You may change the function definition that is calling `simulateHeavyComputation`, as-long as its runtime still call `simulateHeavyComputation`.**
- The shown image should still be generated using the card `id` prop, and take width/height from the state

