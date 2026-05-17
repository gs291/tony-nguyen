import Avatar from "./Avatar";

interface HeroProps {
  avatarUrl: string;
  avatarAlt: string;
  name: string;
  handle: string;
}

export default function Hero({
  avatarUrl,
  avatarAlt,
  name,
  handle,
}: HeroProps) {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="mb-4">
        <Avatar src={avatarUrl} alt={avatarAlt} />
      </div>
      <h1 className="font-display text-headline-lg-mobile text-on-surface text-center mb-1 uppercase">
        {name}
      </h1>
      <p className="font-mono text-label-sm text-surface-tint tracking-widest text-center">
        {handle}
      </p>
    </div>
  );
}
