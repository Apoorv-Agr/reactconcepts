import React, { Component } from "react";
import InputComp from "./InputComp";
import ListComp from "./ListComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
      cityList: [],
    };
    this.inputRef = React.createRef();
  }
  focusOnInput = () => {
    this.inputRef.current.focus();
  };
  componentDidMount() {
    this.focusOnInput();
  }

  onInputChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  getCityVal = () => {
    const { inputVal } = this.state;
    if (inputVal) {
      this.setState(
        (prevState) => ({
          cityList: [...prevState.cityList, inputVal],
          inputVal: "",
        }),
        () => {
          this.focusOnInput();
        }
      );
    }
  };

  render() {
    const { cityList, inputVal } = this.state;
    return (
      <div>
        <InputComp
          inputVal={inputVal}
          onInputChange={this.onInputChange}
          getCityVal={this.getCityVal}
          ref={this.inputRef}
        />
        <ListComp cityList={cityList} />
      </div>
    );
  }
}

export default ParentComp;
