import * as Actiontypes from "../actiontypes";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
export const Getorderaction = () => (dispatch) => {
  try {
    dispatch(loaddata());
    setTimeout(async function () {
      let data;
      const querySnapshot = await getDocs(collection(db, "Order"));
      querySnapshot.forEach((doc) => {
        data = { ...doc.data(), id: doc.id };
      });
      dispatch({ type: Actiontypes.Getorder, payload: data });
    }, 2000);
  } catch (error) {
    dispatch(errordata(error.message));
  }
};

export const Addorderaction = (data) => (dispatch) => {
  try {
    dispatch(loaddata());
    setTimeout(async function () {
      const docRef = await addDoc(collection(db, "Order"), {
        ...data,
      });
      dispatch({
        type: Actiontypes.Addorder,
        payload: { ...data, id: docRef.id },
      });
    }, 2000);
  } catch (error) {
    dispatch(errordata(error.message));
  }
};

export const loaddata = () => (dispatch) => {
  dispatch({ type: Actiontypes.Load_order });
};

export const errordata = (error) => (dispatch) => {
  dispatch({ type: Actiontypes.Error_order, payload: error });
};
