import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'


const Counter = ({ counter, dec, inc, rnd}) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button 
        onClick={dec}
        className="btn btn-primary btn-lg" 
        >-</button>
      <button 
        onClick={inc}
        className="btn btn-primary btn-lg"
        >+</button>
      <button 
        onClick={rnd}
        className="btn btn-primary btn-lg"
        >RND</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd} = bindActionCreators(actions, dispatch)
  return {
    inc,
    dec,
    rnd: () => {
      const value = Math.floor(Math.random() * 10)
      rnd(value)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)