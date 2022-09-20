import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { resetalertaction } from "../redux/actions/alert.action";

function Alert(props) {
  let Alert = useSelector((state) => state.alert);
  let dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (Alert.text !== "") {
      enqueueSnackbar(Alert.text, {
        variant: Alert.color,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
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
