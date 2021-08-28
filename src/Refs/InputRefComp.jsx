import React, { Component } from "react";

class InputRefComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  onFocusHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default InputRefComp;
