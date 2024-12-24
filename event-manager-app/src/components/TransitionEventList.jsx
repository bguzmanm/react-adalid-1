import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function TransitionEventList() {
  const [events, setEvents] = useState([
    { id: 1, title: "Evento 1" },
    { id: 2, title: "Evento 2" },
  ]);

  const addEvent = () => {
    const newEvent = {
      id: Math.random(),
      title: `Evento ${events.length + 1}`,
    };
    setEvents([...events, newEvent]);
  };

  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <h3>Lista de Transiciones</h3>
      <button onClick={addEvent}>Agregar evento</button>
      <TransitionGroup>
        {events.map((event) => (
          <CSSTransition key={event.id} timeout={500} classNames="event">
            <li className="event-card" onClick={() => removeEvent(event.id)}>
              {event.title}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TransitionEventList;
