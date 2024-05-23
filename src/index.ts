import { from as createStateMachine } from "jssm";

const TrafficLightWithOff = createStateMachine(`
  Red => Green => Yellow => Red;
  [Red Yellow Green] ~> Off -> Red;

  flow: left;

  state Red    : { background-color: pink;        corners: rounded; };
  state Yellow : { background-color: lightyellow; corners: rounded; };
  state Green  : { background-color: lightgreen;  corners: rounded; };

  state Off : {
    background-color : steelblue;
    text-color       : white;
    shape            : octagon;
    linestyle        : dashed;
  };
`);
