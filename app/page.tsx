import siteConfig from "@/config/site";
import { Hero, LinkList } from "@/components";

export default function HomePage() {
  return (
    <main className="pt-[100px] px-container-margin max-w-md mx-auto flex flex-col items-center">
      <Hero
        avatarUrl={siteConfig.avatarUrl}
        avatarAlt={siteConfig.avatarAlt}
        name={siteConfig.name}
        handle={siteConfig.handle}
      />
      <LinkList links={siteConfig.links} />
    </main>
  );
}
