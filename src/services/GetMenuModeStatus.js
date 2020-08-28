import ChangeCurrentStatus from "./ChangeMenuStatus";
const GetMenuModeStatus = () => {
  /**
   *  current status meaning:
   *  [ 1  => dark mode  ]
   *  [ 0  => light mode ]
   */
  let currentStatus = localStorage.getItem("currentStatus");
  if(currentStatus === null) {
    localStorage["currentStatus"] = 0;
    return 0;
  }
  currentStatus = ChangeCurrentStatus(currentStatus);
  return currentStatus;
};

export default GetMenuModeStatus;
