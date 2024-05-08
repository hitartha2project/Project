//single Selction
//Multiple Selection

import { useState } from "react";
import Data from "./data";
import "./Style.css";
export default function Accordina() {
  const [selected, setSelected] = useState(null);
  const [enbleMultiSeclectoin, setEnbleMultiSeclectoin] = useState(false);
  const [multiple, setMultipale] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handlemultiselection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findindex = cpyMultiple.indexOf(getCurrentId);

    if (findindex === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findindex, 1);
    setMultipale(cpyMultiple);
  }
  console.log(selected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnbleMultiSeclectoin(!enbleMultiSeclectoin)}>
        Enable MutiSelection
      </button>
      <div className="accordina">
        {Data && Data.length > 0 ? (
          Data.map((Dataitem) => (
            <div className="item">
              <div
                onClick={
                  enbleMultiSeclectoin
                    ? () => handlemultiselection(Dataitem.id)
                    : () => handleSingleSelection(Dataitem.id)
                }
                className="title"
              >
                <h3>{Dataitem.question}</h3>
                <span>+</span>
              </div>
              {enbleMultiSeclectoin
                ? multiple.indexOf(Dataitem.id) !== -1 && (
                    <div className="content">{Dataitem.answer}</div>
                  )
                : selected === Dataitem.id && (
                    <div className="content">{Dataitem.answer}</div>
                  )}
              {/* {selected === Dataitem.id ||
              multiple.indexOf(Dataitem.id) !== -1 ? (
                <div className="content">{Dataitem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Foud !</div>
        )}
      </div>
    </div>
  );
}
