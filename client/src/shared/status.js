/**
 * Define the status by color
 */
const statusByColor = (color) => {
  let status = {};
  // [color, (animation)]
  let splittedColor = color.split('_');

  switch(splittedColor[0]) {
    case 'blue':
      status.status = 'correct';
      break;
    case 'red':
      status.status = 'failed';
      break;
    default:
      status.status = splittedColor[0];
      break;
  }

  if(splittedColor[1] === 'anime') {
    status.inProgress = true;
  } else {
    status.inProgress = false;
  }

  return status;
}

export default statusByColor;
