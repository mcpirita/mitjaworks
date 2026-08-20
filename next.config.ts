import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /*
     * The optimizer is bypassed in development only.
     *
     * The project lives on an exFAT volume, where macOS writes AppleDouble
     * sidecar files (`._name`) next to anything it touches. They land in the
     * optimizer's cache directory as it fills up, and the reads that follow
     * fail — photographs then render as broken-image icons locally, with
     * nothing wrong in the code. Skipping the optimizer in dev removes the
     * cache directory from the picture entirely.
     *
     * Production builds and Vercel are untouched: layout, ratios and blur
     * placeholders are identical either way, only the local file sizes differ.
     */
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
