import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { resetalertaction } from "../redux/actions/alert.action";

function Alert(props) {
  const { enqueueSnackbar } = useSnackbar();
  let Alert = useSelector((state) => state.alert);
  let dispatch = useDispatch();
  useEffect(() => {
    if (Alert.text !== "") {
      enqueueSnackbar(Alert.text, {
        variant: Alert.color,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
      setTimeout(() => {
        dispatch(resetalertaction);
      }, 2000);
    }
  }, [Alert.text]);
  return <div></div>;
}

export default Alert;
