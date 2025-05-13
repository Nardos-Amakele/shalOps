import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ShalOps - Digital Solutions Provider",
    short_name: "ShalOps",
    description: "We create reliable business solutions tailored to your needs",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eff9",
    theme_color: "#8C52FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
