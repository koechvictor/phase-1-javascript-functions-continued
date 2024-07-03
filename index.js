function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(type = "*") {
  const flairing = function (adjective = "special") {
    return `You are ${type}${adjective}${type}!`;
  };
  return flairing;
}
