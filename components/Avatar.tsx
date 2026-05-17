import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 128 }: AvatarProps) {
  return (
    <div className="rounded-full overflow-hidden border-2 border-surface-tint p-1 avatar-glow">
      <div
        className="rounded-full overflow-hidden bg-surface-container"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
