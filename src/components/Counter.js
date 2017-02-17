import React, { Component } from "react";
import { observer, inject } from "mobx-react";
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

export const Counter = observer(({ store }) => {
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

@inject("store")
@observer
class CounterWithStore extends Component {
  render() {
    let { store } = this.props;
    return <Counter store={store} />;
  }
}

export default CounterWithStore;
