import siteConfig from "@/config/site";

export const metadata = {
  title: `Gallery – ${siteConfig.name}`,
};

export default function GalleryPage() {
  return (
    <main className="pt-[100px] px-container-margin max-w-2xl mx-auto min-h-screen">
      <h1 className="font-display text-headline-lg text-on-surface mb-4">
        Gallery
      </h1>
      <p className="font-body text-body-md text-on-surface-variant">
        Coming soon.
      </p>
    </main>
  );
}
