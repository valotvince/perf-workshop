# Exercise 1

You are in charge of optimizing a component re-render time, that is used on your company public-facing website.
The component shows limited number discount offers from other websites, and shows a fake number of people viewing the offer.

Component works well when alone, but when showing hundreds of offers, the company's website faces performance issues rendering the navigation laggy.

The company still want the same design and the component to:
- show an title, description and image (based on item's id)
- show a fake number of active users changing each second

## Goals

- **WITHOUT LOOKING AT THE CODE**, find out what are the issues of the component on re-render (describe it, using screenshots from DevTools).
- Bring the component re-rendering time around or below 0.50 ms (half micro-second). First render time isn't an issue.

## Information

- Go to http://localhost:3000/exercise-1
- Use the Performance Chrome DevTool
- The application is using a custom app state management, whose API looks like Redux's one.
  - `useStore` hook to get store instance
  - `useSelector` hook to select state values

## Rules

- You can use any React's hooks
- You can use any other code/API found in the src/app/exercise-1 or src/utils folders
- You can edit code in, and only in, src/app/exercise-1 folder
- You will see code comments `// DO NOT EDIT`. Code wrapped around those comments is intentional and SHOULDN'T be changed.
- **You may change the function definition around `// DO NO EDIT` code blocks, as-long as its runtime still call the DO NOT EDIT code.**
- The shown image should still be generated using the card `id` prop, and take width/height from the state
