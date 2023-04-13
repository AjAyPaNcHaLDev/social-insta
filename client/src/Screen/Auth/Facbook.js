import { PORT } from "../../Config";
import axios from "axios";
const componentClicked = (data) => {};
const responseFacebook = (response) => {
  // console.log(response);
  const { status = null } = response;
  if (status == "unknown") {
    return;
  }
  axios
    .post(
      `${location.protocol}//${location.hostname}:${PORT}/auth/fb`,
      response
    )
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { componentClicked };
export default responseFacebook;
