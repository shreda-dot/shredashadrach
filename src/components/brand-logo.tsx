import Image from "next/image";

export function BrandLogo({ preload = false }: { preload?: boolean }) {
  return (
    <>
      <Image
        className="brand-logo brand-logo-light"
        src="/images/logo-light.png"
        alt=""
        width={512}
        height={512}
        preload={preload}
      />
      <Image
        className="brand-logo brand-logo-dark"
        src="/images/logo-dark.png"
        alt=""
        width={512}
        height={512}
      />
    </>
  );
}
