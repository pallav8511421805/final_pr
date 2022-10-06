import * as Actiontypes from "../actiontypes";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

export const Getorderaction = () => async (dispatch) => {
  console.log("okkkkkkkkkkkkkkkkkkk");
  let data = [];
  const querySnapshot = await getDocs(collection(db, "Order"));

  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  console.log(data);
  dispatch({ type: Actiontypes.Getorder, payload: data });
};

export const Addorderaction = (data) => async (dispatch) => {
  const docRef = await addDoc(collection(db, "Order"), {
    ...data,
  });

  dispatch({
    type: Actiontypes.Addorder,
    payload: { ...data, id: docRef.id },
  });
};
