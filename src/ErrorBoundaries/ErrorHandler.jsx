/*
    Error Boundary :- 
        A class component that implements either one or both of the lifecycle methods :- 
            1) getDerivedStateFromError
            2) componentDidCatch
        becomes an Error Boundary
    
    The static method getDerivedStateFromError method is used to render the fallback UI after an error is thrown
    the componentDidCatch method is used to log the error Information
 */

import React, { Component } from "react";

class ErrorHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMsg: "",
    };
  }

  static getDerivedStateFromError(error) {
    // console.log("error : ", error);
    return {
      hasError: true,
      errorMsg: error,
    };
  }
  componentDidCatch(error, info) {
    console.log("error : ", error, " ,info : ", info);
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h2>Has Error</h2>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorHandler;
