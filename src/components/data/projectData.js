import touche from "../../assets/img/touche.png";
import dashboard from "../../assets/img/dashboard.png";
import portfolio from "../../assets/img/portfolio.png";
import project from "../../assets/img/project.png";
import card from "../../assets/img/card.png";
import Html from "../icons/HtmlIcon";
import Css from "../icons/CssIcon";
import Javascript from "../icons/JsIcon";
import Tailwind from "../icons/TailwindIcon";
import React from "../icons/ReactIcon";
import Next from "../icons/NextJsIcon";
import Typescript from "../icons/TsIcon";
import Php from "../icons/PhpIcon";
import Laravel from "../icons/LaravelIcon";
import Redux from "../icons/ReduxIcon";
import construction from "../../assets/img/constructs.png";
import Swagger from "../icons/SwaggerIcon";
import NodeJs from "../icons/NodeJsIcon";
import user from "../../assets/img/baranie-user.png";
import clinic from "../../assets/img/management.png";
import admin from "../../assets/img/admin.png";

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
    source:
      "https://github.com/Iceblockp/satoshiUpdate-with-realApi-sweetalert.git",
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
    feature: [
      "search product",
      "filter By category",
      "add to cart",
      "remove from cart",
      "place order",
    ],
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
    feature: [
      "Animation Landing page",
      "contact with emailjs",
      "css animation",
      "javascript animation",
    ],
  },
  {
    id: 7,
    title: "Baranie User",
    tech: [Html, , Css, Tailwind, React, Redux, Next, Typescript, NodeJs],
    image: user,
    preview: "https://baranie.com/",
    source: null,
    page: 20 + "+",
    feature: [
      "Register/Login",
      "Search Feature",
      "Home Page",
      "Shop/Detail/Booking",
      "Service/Detail/Booking",
      "Profile/Setting",
    ],
  },
  {
    id: 8,
    title: "Baranie Management",
    tech: [
      Html,
      ,
      Css,
      Tailwind,
      React,
      Redux,
      Next,
      Typescript,
      Swagger,
      NodeJs,
    ],
    image: clinic,
    preview: "https://management.baranie.com/",
    source: null,
    page: 20 + "+",
    feature: [
      "Request Otp/Confirm/Register/Login",
      "Search Feature",
      "Dashboard",
      "Analytics Chart",
      "Professional/Create/Details/TimeTable",
      "Services/Create/Detail/Edit/Relate Doctors",
      "Client/Create/Detail/Reply comment",
      "Appointments/Access/Reject",
      "Profile/Setting",
      "more...",
    ],
  },
  //   {
  //     id: 9,
  //     title: "MedService Admin",
  //     tech: [Html, , Css, Tailwind, React, Next, Typescript, Swagger, NodeJs],
  //     image: admin,
  //     preview: "https://appointment-admin.vercel.app/",
  //     source: null,
  //     page: 20 + "+",
  //     feature: [
  //       "Request Otp with Admin Email/Confirm and Login",
  //       "Dashboard",
  //       "Analytics Chart",
  //       "Approve/Reject Clinic Register",
  //       "Clinic Type/Add",
  //       "Doctor Speciality/Add",
  //       "User List/Doctor List",
  //       "Articles/Tags",
  //       "Add Admins",
  //       "Advertisements",
  //       "Notifications/Profile/Setting",
  //     ],
  //   },
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
];
