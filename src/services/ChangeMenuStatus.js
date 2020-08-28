const ChangeCurrentStatus = (currentStatus) => {
  if (!parseInt(currentStatus)) {
    return (localStorage["currentStatus"] = 1);
  }
  if (parseInt(currentStatus)) {
    return (localStorage["currentStatus"] = 0);
  }
};
export default ChangeCurrentStatus;
