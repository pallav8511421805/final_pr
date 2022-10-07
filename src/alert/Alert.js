import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { resetalertaction } from "../redux/actions/alert.action";

function Alert(props) {
  const { enqueueSnackbar } = useSnackbar();

  let Alert = useSelector((state) => state.alert);
  let dispatch = useDispatch();

  console.log(Alert);

  useEffect(() => {
    console.log("okokokok");
    if (Alert.text !== "") {
      console.log("666666666666666", Alert.text);
      enqueueSnackbar(Alert.text, {
        variant: Alert.color,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
      setTimeout(() => {
        dispatch(resetalertaction());
      }, 2000);
    }
  }, [Alert.text]);

  return (
    <></>
  );
}

export default Alert;
