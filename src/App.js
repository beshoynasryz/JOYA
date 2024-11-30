import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/component/layout.tsx";
import Page from "./pages/page.tsx";
import Services from "./pages/Services.jsx";
import ContactPage from "./component/Contact/ContectPage.jsx";
import AboutPage from "./component/About/AboutPage.tsx";
import Projects from "./component/projectsSection/Projects.jsx";
import Features from "./component/projectsSection/Featuress/Features.jsx";
import OffPlan from "./component/projectsSection/offplan/offplan/OffPlan.jsx";
import OffPlan2 from "./component/projectsSection/offplan/offplan/OffPlan2.jsx";
import Features2 from "./component/projectsSection/Featuress/Features2.jsx";
import Luxury from "./component/projectsSection/luxury/Luxury.jsx";
import Blog from "./component/Blogs/blog.jsx";
import SpecificBlog from "./component/Blogs/SpesificBlog.jsx";
import EmailInputScreen from "./pages/EmailPage.jsx";
import LoginComponent from "./pages/LoginPage.jsx";
import Properties from "./pages/Dashboard.jsx";
import HomePageSlider from "./component/HomePage/HomePageSlider.jsx";
import DashboardHome from "./pages/DashboardHome.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route
          path="/"
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/Projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/Projects/Features"
          element={
            <Layout>
              <Features />
            </Layout>
          }
        />
        <Route
          path="/Projects/Features2/:id"
          element={
            <Layout>
              <Features2 />
            </Layout>
          }
        />
        <Route
          path="/Projects/Off-Plan"
          element={
            <Layout>
              <OffPlan />
            </Layout>
          }
        />
        <Route
          path="/Projects/Off-Plan2/:id"
          element={
            <Layout>
              <OffPlan2 />
            </Layout>
          }
        />
        <Route
          path="/Projects/Luxury"
          element={
            <Layout>
              <Luxury />
            </Layout>
          }
        />
        <Route
          path="/Blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/SpecificBlog/:id"
          element={
            <Layout>
              <SpecificBlog />
            </Layout>
          }
        />
        <Route
          path="/email"
          element={
            <Layout>
              <EmailInputScreen />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginComponent />
            </Layout>
          }
        />

        {/* Route without Header and Footer */}
        <Route path="/Properties" element={<Properties />} />
        <Route path="/DashboardHome" element={<DashboardHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
