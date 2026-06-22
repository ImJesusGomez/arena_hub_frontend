import { useGetMyWaitlist } from "../hooks/useGetMyWaitlist";
import { WaitlistCard } from "./WaitlistCard";

export const WaitlistList = () => {
  const { data, isLoading, isError } = useGetMyWaitlist();

  if (isLoading) {
    return <p>Cargando lista de espera...</p>;
  }

  if (isError) {
    return <p>Error al cargar la lista de espera.</p>;
  }

  if (!data?.content.length) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center">
        <h3 className="text-lg font-semibold">No estás en ninguna lista de espera</h3>

        <p className="mt-2 text-muted-foreground">
          Cuando un horario esté lleno podrás unirte a la lista de espera.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {data.content.map((waitlist) => (
        <WaitlistCard key={waitlist.id} waitlist={waitlist} />
      ))}
    </div>
  );
};
