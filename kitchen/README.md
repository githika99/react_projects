# Purpose

Initially, when you click on the samosa image, count increases by 1. <br>
Once you have at least 10 counts, you can click the Double Stuffed button, which makes it such that each time you click, the number of samosas increases by 2 times what it previously increased by. But, 10 samosas get subtracted from your count. <br>

Party Pack and Full Feast operate in the same way, but for the values that they display.

# React Router example turorial

- source code is taken from this React Router tutorial
- https://reactrouter.com/en/main/start/tutorial

# Implementation

In this prokect, I learned about states and hooks. In App.css, I call an Event component. Events are the 3 boxes at the bottom. I use useState to create the count and multipler variabels (count is the samsoa count, multipler is the number of samosas that increases each count). <br>

The onclick event for the samosa image is handled by App.jsx. The onclick event for the Events is handled by event.jsx. To allow the Events' onclick event to change count and multipler, I pass these along with their associated functions, setCount and setmultipler, as props to all Event objects. <br>

All the styling is handled by App.css, not index.css.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Author: Githika Annapureddy

## Date: 03/02/2024
