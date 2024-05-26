"use client";
import React, { ReactEventHandler, useRef, useState } from "react";
import styles from "./ImageCarousel.module.css";
import Image, { StaticImageData } from "next/image";
import { 단짠단짠 } from "@/shared/assets";

const ImageCarousel = ({ images }: { images: StaticImageData[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = ref.current;
    if (!container) return;
    setIsDown(true);
    container.classList.add("active");
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    ref.current?.classList.remove("active");
  };

  const handleMouseUp = () => {
    setIsDown(false);
    ref.current?.classList.remove("active");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const container = ref.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX; // Adjust the scroll speed as needed
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={styles.imageContainer}
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {images.map((image, idx) => (
        <div key={image.src} className={styles.imageCard}>
          <Image src={image} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
