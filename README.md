<div align="center">
  <a href="http://netflix-clone-with-tmdb-using-react-mui.vercel.app/">
    <img src="./public/assets/netflix-logo.png" alt="Logo" width="100" height="32">
  </a>

  <h3 align="center">Netflix Clone</h3>

  <p align="center">
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/Pabl0Parra/Netflix-clone-React-Typescript/issues">Report Bug</a>
    ·
    <a href="https://github.com/Pabl0Parra/Netflix-clone-React-Typescript/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#prerequisites">Prerequisites</a>
    </li>
    <li>
      <a href="#features-this-project-deals-with">Features this project deals with</a>
    </li>
    <li><a href="#third-party-libraries-used-except-for-react-and-rtk">Third Party libraries used except for React and RTK</a></li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

<br />

<div align="center">
  <img src="./public/assets/home-page.png" alt="Logo" width="100%" height="100%">
  <p align="center">Home Page</p>
  <img src="./public/assets/mini-portal.png" alt="Logo" width="100%" height="100%">
  <p align="center">Mini Portal</p>
  <img src="./public/assets/detail-modal.png" alt="Logo" width="100%" height="100%">
  <p align="center">Detail Modal</p>
  <img src="./public/assets/grid-genre.png" alt="Logo" width="100%" height="100%">
  <p align="center">Grid Genre Page</p>
</div>

## Prerequisites

- Create an account or use your exsiting one at [TMDB](https://www.themoviedb.org/).
- Follow the [documentation](https://developers.themoviedb.org/3/getting-started/introduction) to create the API Key.

- Finally, if you use v3 of TMDB API, create a file named `.env`, copy-paste the content of `.env.example` to the `.env` file you just created and then paste the API Key you got at TMDB.

## Features this project deal with

- How to create and use [Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- How to use [Context](https://reactjs.org/docs/context.html) and its provider
- How to use lazy and Suspense for [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- How to use [Portal](https://reactjs.org/docs/portals.html)
- How to use [Fowarding Refs](https://reactjs.org/docs/forwarding-refs.html) to make components reusuable
- How to create and use [HOC](https://reactjs.org/docs/higher-order-components.html)
- How to customize default theme of [MUI](https://mui.com/)
- How to use [RTK](https://redux-toolkit.js.org/introduction/getting-started)
- How to use [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- How to customize default classname of [MUI](https://mui.com/material-ui/experimental-api/classname-generator).
- Infinite Scrolling(using [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API))
- How to make awesome carousel using [slick-carousel](https://react-slick.neostack.com)

## Third Party libraries used except for React and RTK

- [MUI(Material UI)](https://mui.com/)
- [framer-motion](https://www.framer.com/docs/)
- [react-player](https://github.com/CookPete/react-player)
- [react-use](https://github.com/streamich/react-use)
- [react-slick](https://react-slick.neostack.com/)

## Install with Docker

```sh
docker build --build-arg TMDB_V3_API_KEY=your_api_key_here -t netflix-clone .

docker run --name netflix-clone-website --rm -d -p 80:80 netflix-clone
```

## Todo

- [] Add loader.

- [] Implement animation using motion hook from `react-use`, now I am using `framer-motion` for animation. If we use the motion hook from `react-use`, `framer-motion` is not needed.
- [] Improve performance. I am using `context` and `provider` but all components subscribed to the context's value are re-rendered. These re-renders happen even if the part of the value is not used in the render of the component. There are [several ways](https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/) to prevent these re-renders. In addition to them, there may be several performance issues.
- [] Replace bundler([Vite](https://vitejs.dev/guide)) with [Turbopack](https://turbo.build/pack/docs/why-turbopack). Turbopack is introduced in Next.js conf recently. It's very fast but it's not ready to use right now with React. It just supports Next.js, they plan to support all others as soon as possible, so if it's ready to use, replace [Vite](https://vitejs.dev/guide) with [Turbopack](https://turbo.build/pack/docs/why-turbopack).

## Contact

- frontend.bcn.dev@gmail.com

> **Note**
> This project only aims to show how to use the features mentioned above.
> There might be several things to improve for performance.
> So I welcome anyone who wants to contribute.
