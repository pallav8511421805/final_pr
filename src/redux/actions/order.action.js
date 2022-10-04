import * as Actiontypes from "../actiontypes";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
export const Getorderaction = () => async (dispatch) => {
  let data = [];
  const querySnapshot = await getDocs(collection(db, "Order"));
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  dispatch({ type: Actiontypes.Getorder, payload: data });
};

export const Addorderaction = (data) => async (dispatch) => {
  const docRef = await addDoc(collection(db, "Order"), {
    ...data,
  });
  console.log("Document written with ID: ", docRef.id);
  dispatch({ type: Actiontypes.Addorder, payload: { ...data, id: docRef.id } });
};
