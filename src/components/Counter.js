import React from "react";
import { observer } from "mobx-react";

import styled from "styled-components";

const Wrapper = styled.div`
  button{
    margin-top:0;
  }
  button:not(:last-child){
    margin-right:5px;
  }
  .count{
    width:100px;
    flex:2;
  }
  .counter-wrap{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
  }
  .buttons{
    margin-top:5px;
  }
`;

const Counter = observer(({ store }) => {
  return (
    <Wrapper>
      <div className="counter-wrap">
        <div className="count">{store.counter}</div>
        <div className="buttons">
          <button onClick={store.decreaseCounter.bind(store)}>
            -
          </button>
          <button onClick={store.increaseCounter.bind(store)}>
            +
          </button>
        </div>
      </div>
    </Wrapper>
  );
});

export default Counter;
