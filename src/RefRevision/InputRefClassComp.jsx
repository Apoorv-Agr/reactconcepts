import React, { Component } from "react";

class InputRefClassComp extends Component {
  constructor(props) {
    super(props);

    // Step 1
    this.inputRef = React.createRef();
    this.state = {};
  }
  componentDidMount() {
    // console.log(this.inputRef.current);
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    console.log("value of input box : ", this.inputRef.current.value);
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {/* Step 2 */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default InputRefClassComp;
