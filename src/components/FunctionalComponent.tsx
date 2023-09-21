import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
interface FunctionalComponentProps {
  title: string;
}

interface MyPasta {
  name: string;
  label: string;
  id: number;
}

const FunctionalComponent = ({ title }: FunctionalComponentProps) => {
  const params = useParams<{ randomId: string }>();
  const location = useLocation();

  const [counter, setCounter] = useState(0);

  const [pasta, setPasta] = useState<null | MyPasta>(null);
  // TS si lamenta che non possiamo assegnare un valore diverso dal tipo iniziale null
  // al momento del set state, in cui inviamo un oggetto, quindi un tipo strutturale e decisamente diverso da null.
  // per inferenza quindi, a pasta gli era stato assegnato il tipo null di default.
  // il tipo non cambia nel tempo una volta assegnato.
  // sarà quindi necessario prevedere, con uno Union Type, entrambe le possibilità da SUBITO
  // prima null e poi un eventuale oggetto MyPasta
  console.log("PARAMS", params);
  console.log("LOCATION", location);
  return (
    <div style={{ marginTop: "3rem" }}>
      <span>{counter}</span>
      <h1>I'm a functional Component! {title}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <h4>PARAMS: {params.randomId}</h4>
      <div>
        {pasta && <div>nome: {pasta.name}</div>}
        <button onClick={() => setPasta({ name: "gricia", label: "fat+", id: 3 })}>setPasta</button>
      </div>
    </div>
  );
};
export default FunctionalComponent;
