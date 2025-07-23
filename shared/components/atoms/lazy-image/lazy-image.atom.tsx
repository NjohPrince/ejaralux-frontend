"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { ImageProps } from "next/image";

interface LazyImageAtomProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  className?: string;
}

/**
 * The LazyImageAtom component renders an image lazily when it comes into view.
 * It uses the IntersectionObserver API to detect when the image is in the viewport.
 * The image is wrapped in a div with an overflow of hidden to prevent layout shifting.
 * The image is rendered with a blur placeholder and loaded with lazy loading.
 * The component takes the src and alt props as required and the className and other
 * props as optional.
 *
 * @example
 * <LazyImageAtom src="/images/products/image.jpg" alt="An image of a product" />
 */
const LazyImageAtom: React.FC<LazyImageAtomProps> = ({
  src,
  alt,
  className = "",
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
      }}
      ref={wrapperRef}
      className={`${className}`}
    >
      {isInView && (
        <Image
          src={src}
          alt={alt}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/products/blur.webp"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImageAtom;
