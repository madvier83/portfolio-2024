"use client";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./components/BackgroundGradientAnimation";
import { Vortex } from "./components/VortexBackground";
import Hero from "./main/Hero";
import MainNavbar from "./components/MainNavbar";
import MainLayout from "./components/MainLayout";
import Head from "next/head";

export default function Home() {
  return (
    <MainLayout>
      <Hero></Hero>
    </MainLayout>
  );
}
