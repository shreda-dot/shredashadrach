import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

type PortraitProps = {
  className?: string;
  preload?: boolean;
};

export function Portrait({ className = "", preload = false }: PortraitProps) {
  const portraitPath = join(process.cwd(), "public", "images", "shreda.webp");
  const hasPortrait = existsSync(portraitPath);

  return (
    <div
      className={`portrait-frame ${className}`.trim()}
      aria-label={hasPortrait ? undefined : "Portrait placeholder"}
    >
      {hasPortrait ? (
        <Image
          className="portrait-image"
          src="/images/shreda.webp"
          alt="Portrait of Shreda, founder and full-stack developer in Lagos."
          width={760}
          height={1014}
          sizes="(max-width: 680px) 100vw, (max-width: 1100px) 40vw, 520px"
          preload={preload}
          loading={preload ? undefined : "lazy"}
        />
      ) : (
        <span className="portrait-monogram" aria-hidden="true">
          S
        </span>
      )}
    </div>
  );
}
