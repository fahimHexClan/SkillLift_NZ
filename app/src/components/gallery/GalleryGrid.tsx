"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Heart, Share2, Download } from "lucide-react";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", title: "Classroom Session", category: "Classes", tall: false },
  { id: 2, url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80", title: "Student Workshop", category: "Workshops", tall: true },
  { id: 3, url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", title: "Group Learning", category: "Students", tall: false },
  { id: 4, url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80", title: "Graduation Day", category: "Events", tall: true },
  { id: 5, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", title: "Team Collaboration", category: "Students", tall: false },
  { id: 6, url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", title: "Award Ceremony", category: "Achievements", tall: false },
  { id: 7, url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80", title: "Study Group", category: "Classes", tall: true },
  { id: 8, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80", title: "Tech Workshop", category: "Workshops", tall: false },
  { id: 9, url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", title: "Success Stories", category: "Achievements", tall: false },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      <section style={{
        padding: "80px 48px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          {/* Masonry Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
            gridAutoFlow: "dense",
          }}>
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(img.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedImage(img)}
                style={{
                  gridRow: img.tall ? "span 2" : "span 1",
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  height: img.tall ? 520 : 280,
                  boxShadow: "0 4px 20px rgba(15,23,42,0.08)",
                }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s",
                    transform: hoveredId === img.id ? "scale(1.1)" : "scale(1)",
                  }}
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === img.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.3))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 24,
                  }}
                >
                  {/* Top Actions */}
                  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Heart size={16} color="#fff" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Share2 size={16} color="#fff" />
                    </motion.div>
                  </div>

                  {/* Bottom Info */}
                  <div>
                    <div style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: 6,
                      background: "rgba(26,86,219,0.9)",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 12,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {img.category}
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}>
                      {img.title}
                      <ZoomIn size={18} />
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 40,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: 1200,
                maxHeight: "90vh",
                width: "100%",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: "absolute",
                  top: -50,
                  right: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                }}
              >
                <X size={22} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: 16,
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                }}
              />

              {/* Info Bar */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 24px",
                background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                borderRadius: "0 0 16px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <div>
                  <div style={{
                    fontSize: 12,
                    color: "#93bbfd",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    marginBottom: 4,
                  }}>
                    {selectedImage.category}
                  </div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#fff",
                  }}>
                    {selectedImage.title}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 10,
                    background: "rgba(26,86,219,0.9)",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <Download size={16} />
                  Download
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
