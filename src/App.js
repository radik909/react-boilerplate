/*@flow*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import from action creators
const setDummyFn = () => ({ type: 'SET_DUMMY' });

type Props = {
  data: string,
  setDummy: Function
};

class App extends Component<Props> {
  componentDidMount() {
    const { setDummy } = this.props;
    setTimeout(setDummy, 2000);
  }

  render() {
    const { data } = this.props;
    return <h2>Welcome - {data}</h2>;
  }
}

export default connect(
  state => {
    const { dummy: { data } } = state;
    return {
      data
    };
  },
  {
    setDummy: setDummyFn
  }
)(App);
