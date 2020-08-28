import ToggleDarkModeClassList from "./ToggleDarkModeClassList";
import SetLastRecordedMode from "./SetLastRecordedMode";

const ToggleMenuService = (status) => {
  ToggleDarkModeClassList(status);
  return SetLastRecordedMode();
};

export default ToggleMenuService;
