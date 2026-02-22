"use client";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactMain />
      <ContactMap />
      <Footer />
    </main>
  );
}