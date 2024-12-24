import TransformableEvent from "./TransformableEvent";

function TransformableEventList() {
  const events = [
    {
      id: 1,
      title: "Reunión de equipo",
      date: "2024-12-20",
      status: "Pendiente",
    },
    {
      id: 2,
      title: "Presentación de Proyecto",
      date: "2024-12-22",
      status: "Pendiente",
    },
    {
      id: 3,
      title: "Pool Party",
      date: "2024-12-25",
      status: "Pendiente",
    },
  ];

  return (
    <div className="event-list">
      {events.map((event) => (
        <TransformableEvent key={event.id} event={event} />
      ))}
    </div>
  );
}

export default TransformableEventList;
