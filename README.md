This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Assumptions

Assumptions Made for the Take Home Front-End Screening Challenge

Based on the provided challenge brief, I made the following assumptions:

Technologies: Since the challenge requested a static web page solution, it implied that HTML, CSS, React.js, Next.js, and TypeScript would be used for building the UI component.

Data visualization library: Given the requirement to display a price chart, I assumed that a data visualization library like ApexCharts would be used to create the chart component.

Data fetching: I understood that the provided JSON endpoint would be queried to fetch the 7-day price data for the $ATOM-$NTRN pair.

Data processing: Once the price data was fetched, I processed it to extract relevant information such as the average price, maximum price, and minimum price for the week. This processing was done in TypeScript before rendering the chart, and I used helpers to structure the code and application for code readability and maintenance.

Chart axes: I understood that the x-axis of the chart would represent the time range (7 days), while the y-axis would represent the price values. I formatted the data to be displayed on the chart.

Styling: I ensured that the UI component was styled appropriately to ensure clarity and readability. This included choosing colors, fonts, and layouts that enhanced the user experience. Also, I used Tailwind CSS for easier processing.

Responsiveness: I handled the responsiveness of the website from the initial scratch.

Please let me know if you need further assistance or clarification.