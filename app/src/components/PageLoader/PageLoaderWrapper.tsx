"use client";
import { useState, useEffect } from "react";
import PageLoader from "@/components/PageLoader/PageLoader";

export default function PageLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader minDuration={2000} />}
      {children}
    </>
  );
}
