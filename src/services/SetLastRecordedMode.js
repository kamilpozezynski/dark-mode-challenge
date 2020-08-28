import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const SetLastRecordedMode = () => {
  let currentStatus = localStorage.getItem("currentStatus");
  if (currentStatus == 0) return { icon: faSun, color: "FFA500" };
  return { icon: faMoon, color: "4D5B6B" };
};

export default SetLastRecordedMode;
