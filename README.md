# React Router Dom v6 Nested Route Issue

This repository demonstrates a problem with nested routes in React Router Dom v6. The parent route renders correctly, but the child routes do not.

## Problem

The application uses nested routes to structure the application.  The parent route renders, but clicking on child links does nothing.  The URL changes, but the content does not update.

## Solution

The issue is solved by correctly specifying the `useRoutes` hook and ensuring that the nested routes are declared within their parent route elements.  The solution includes a corrected `App.js` file that fixes the issue.