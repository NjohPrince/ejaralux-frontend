"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { ImageProps } from "next/image";

interface LazyImageAtomProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  className?: string;
}

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
    <div ref={wrapperRef} className={`${className}`}>
      {isInView && (
        <Image
          src={src}
          alt={alt}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/products/image11.webp"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImageAtom;
