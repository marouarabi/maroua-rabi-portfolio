import Image from "next/image";

export function ProjectVisual({
  title,
  index = 0,
  src,
  alt,
  images,
}: {
  title: string;
  index?: number;
  src?: string;
  alt?: string;
  images?: { src: string; alt: string }[];
}) {
  const gradients = [
    "from-[#dce7f6] via-[#eef1ff] to-[#d9d6f5]",
    "from-[#d7ebe9] via-[#eef5f1] to-[#cbdcf0]",
    "from-[#eadff2] via-[#f5eff6] to-[#d7e2f1]",
  ];
  if (images && images.length > 1)
    return (
      <div className="relative grid aspect-[16/10] grid-cols-4 items-center gap-2 overflow-hidden bg-gradient-to-br from-[#f6f0e8] via-white to-[#edf3ee] p-4 sm:gap-4 sm:p-6">
        {images.slice(0, 4).map((image, imageIndex) => (
          <div
            className={`relative aspect-[9/19] overflow-hidden rounded-[.7rem] border border-black/10 bg-white shadow-soft ${imageIndex % 2 ? "translate-y-3" : "-translate-y-3"}`}
            key={image.src}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 22vw, 150px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    );
  if (src)
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt || title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-contain p-4"
        />
      </div>
    );
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}
    >
      <div className="grid-texture absolute inset-0" />
      <div className="absolute left-[12%] top-[22%] h-28 w-28 rounded-full border border-brand/20" />
      <div className="absolute bottom-[18%] right-[15%] h-3 w-3 rounded-full bg-accent shadow-[0_0_0_18px_rgba(83,103,231,.08)]" />
      <p className="absolute bottom-6 left-6 max-w-[70%] text-xl font-extrabold tracking-tight text-[#17365d]">
        {title}
      </p>
    </div>
  );
}
