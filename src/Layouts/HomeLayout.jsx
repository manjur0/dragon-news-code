import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import GetMethod from "../api/GetMethod";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="left-nav"></section>
        <section className="main-content">
          <Outlet />
        </section>
        <section className="right-nav">
          <GetMethod />
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
