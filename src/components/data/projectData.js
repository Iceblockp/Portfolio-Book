import touche from "../../assets/img/touche.png"
import dashboard from "../../assets/img/dashboard.png"
import portfolio from "../../assets/img/portfolio.png"
import project from "../../assets/img/project.png"
import card from "../../assets/img/card.png"
import Html from "../icons/HtmlIcon"
import Css from "../icons/CssIcon"
import Javascript from "../icons/JsIcon"
import Tailwind from "../icons/TailwindIcon"
import React from "../icons/ReactIcon"
import Next from "../icons/NextJsIcon"
import Typescript from "../icons/TsIcon"
import Php from "../icons/PhpIcon"
import Laravel from "../icons/LaravelIcon"
import Redux from "../icons/ReduxIcon"
import construction from "../../assets/img/constructs.png"

export const projects = [
    {
        id: 1,
        title: "Touche",
        tech: [Html, , Css, Tailwind, React, Redux],
        image: touche,
        preview: "https://touche-cafe.vercel.app/",
        source: "https://github.com/Iceblockp/Touche-cafe",
        page: 1,
        feature: ["Landing page"],
    },
    {
        id: 2,
        title: "Disyuting",
        tech: [Html, , Css, Tailwind, React],
        image: project,
        preview: "https://devdisyuting.netlify.app/",
        source: "https://github.com/Iceblockp/disyuting.git",
        page: 5,
        feature: ["Static Landing page"],
    },
    {
        id: 3,
        title: "Dashboard",
        tech: [Html, , Css, Tailwind, React],
        image: dashboard,
        preview: "https://satoshi-update-with-real-api-sweetalert.vercel.app/",
        source: "https://github.com/Iceblockp/satoshiUpdate-with-realApi-sweetalert.git",
        page: 4,
        feature: ["Landing page"],
    },
    {
        id: 4,
        title: "E-commerce",
        tech: [Html, , Css, Tailwind],
        image: card,
        preview: "https://cart-management-chi.vercel.app/",
        source: "https://github.com/Iceblockp/Cart-management.git",
        page: 1,
        feature: ["search product", "filter By category", "add to cart", "remove from cart", "place order",],
    },
    {
        id: 5,
        title: "Construction",
        tech: [Html, , Css, Tailwind, React, Next],
        image: construction,
        preview: "https://construction-delta-seven.vercel.app/",
        source: "https://github.com/Iceblockp/construction.git",
        page: 1,
        feature: ["Landing page"],
    },
    {
        id: 6,
        title: "Portfolio",
        tech: [Html, , Css, Tailwind, React, Redux],
        image: portfolio,
        preview: "https://portfolio-book-five.vercel.app/",
        source: "https://github.com/Iceblockp/Portfolio-Book",
        page: 10,
        feature: ["Animation Landing page", "contact with emailjs", "css animation", "javascript animation"],
    },
];

export const projectTwo = [
    {
        id: 5,
        title: "Construction",
        tech: [Html, , Css, Tailwind, React, Next],
        image: construction,
        preview: "https://construction-delta-seven.vercel.app/",
        source: "https://github.com/Iceblockp/construction.git",
        page: 1,
        feature: ["Landing page"],
    },
    {
        id: 6,
        title: "Portfolio",
        tech: [Html, , Css, Tailwind, React, Redux],
        image: portfolio,
        preview: "https://portfolio-book-five.vercel.app/",
        source: "https://github.com/Iceblockp/Portfolio-Book",
        page: 1,
        feature: ["Landing page"],
    },
]