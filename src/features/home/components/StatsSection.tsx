import { Star } from "lucide-react";

type Stat = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: "50+",
    label: "Instalaciones Premium",
  },
  {
    value: "10K+",
    label: "Usuarios Activos",
  },
  {
    value: "4.9",
    label: "Calificación Media",
    icon: <Star className="size-5 fill-primary text-primary md:size-6" />,
  },
];

export const StatsSection = () => {
  return (
    <section className="w-full bg-slate-950" id="stats">
      <div className="grid grid-cols-1 divide-y border border-border/30 backdrop-blur-sm md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-6 py-12 text-center lg:py-16"
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  text-5xl
                  font-black
                  text-primary
                  drop-shadow-[0_0_15px_hsl(var(--primary)/0.35)]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {stat.value}
              </span>

              {stat.icon}
            </div>

            <p
              className="
                mt-4
                text-xs
                uppercase
                tracking-[0.2em]
                text-muted-foreground
                sm:text-sm
                font-bold
              "
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
