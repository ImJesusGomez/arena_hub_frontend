interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border/40
        min-h-70
      "
    >
      <img
        src={image}
        alt={title}
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-8">
        <h3
          className="
            text-2xl
            font-black
            uppercase
            leading-none
            text-white
            md:text-3xl
          "
        >
          {title}
        </h3>

        <p className="mt-4 max-w-md text-lg text-white/90">{description}</p>
      </div>
    </div>
  );
}
