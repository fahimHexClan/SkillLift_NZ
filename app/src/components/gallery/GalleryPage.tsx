"use client";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";
import GalleryCategories from "./GalleryCategories";
import GalleryStats from "./GalleryStats";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GalleryCategories />
      <GalleryGrid />
      <GalleryStats />
      <Footer />
    </>
  );
}
