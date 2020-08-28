import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleMenuService from "../services/ToggleMenuStatus";
import GetMenuModeStatus from "../services/GetMenuModeStatus";
import SetLastRecordedMode from "../services/SetLastRecordedMode";
export default class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = SetLastRecordedMode();
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    // here you know which component is that, so you can call parent method
    var result = ToggleMenuService(GetMenuModeStatus());
    this.setState({
      color: result.color,
      icon: result.icon,
    });
    console.log(this.state);
  }

  render() {
    const { icon, color } = this.state;
    return (
      <button onClick={this.onClick} className="app__dark-mode-btn icon level-right">
        <FontAwesomeIcon icon={this.state.icon} color={this.state.color} />
      </button>
    );
  }
}
