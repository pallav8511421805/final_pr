import { db, storage } from "../../Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import * as Actiontypes from "../actiontypes";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export const getdata = () => (dispatch) => {
  try {
    dispatch(loaddata());
    setTimeout(async function () {
      let data = [];
      const querySnapshot = await getDocs(collection(db, "categorys"));
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: Actiontypes.getcategory, payload: data });
    }, 2000);
  } catch (error) {
    dispatch(errordata(error.message));
  }
};

export const Adddata = (data) => (dispatch) => {
  try {
    dispatch(loaddata());
    setTimeout(function () {
      const filename = Math.floor(Math.random() * 100000);
      const cateref = ref(storage, "categorys/" + filename);
      uploadBytes(cateref, data.cname).then(async (snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          const docRef = await addDoc(collection(db, "categorys"), {
            ...data,
            cname: url,
            filename: filename,
          });
          dispatch({
            type: Actiontypes.Add_category,
            payload: { ...data, id: docRef.id, cname: url, filename: filename },
          });
        });
      });
    }, 2000);
  } catch (error) {
    dispatch(errordata(error.message));
  }
};

export const Editdata = (data) => async (dispatch) => {
  const filename = Math.floor(Math.random() * 100000);
  try {
    const cateref = doc(db, "categorys", data.id);
    if (typeof data.cname === "string") {
      await updateDoc(cateref, {
        name: data.name,
      });
      dispatch({ type: Actiontypes.Edit_category, payload: data });
    } else {
      const oldimgRef = ref(storage, "categorys/" + data.filename);
      const newimgRef = ref(storage, "categorys/" + filename);

      deleteObject(oldimgRef).then(async () => {
        uploadBytes(newimgRef, data.cname).then(async (snapshot) => {
          getDownloadURL(snapshot.ref).then(async (url) => {
            await updateDoc(cateref, {
              name: data.name,
              filename: filename,
              cname: url,
            });
            dispatch({
              type: Actiontypes.Edit_category,
              payload: { ...data, filename: filename, cname: url },
            });
          });
        });
      });
    }
  } catch (error) {
    dispatch(errordata(error.message));
  }
};

export const Deletedata = (data) => (dispatch) => {
  try {
    const cateref = ref(storage, "categorys/" + data.filename);
    deleteObject(cateref)
      .then(async () => {
        await deleteDoc(doc(db, "categorys", data.id));
        dispatch({ type: Actiontypes.Delete_category, payload: data.id });
      })
      .catch((error) => {
        dispatch(errordata(error.message));
      });
  } catch (error) {
    dispatch(errordata(error.message));
  }
};

export const loaddata = () => (dispatch) => {
  dispatch({ type: Actiontypes.Load_category });
};

export const errordata = (error) => (dispatch) => {
  dispatch({ type: Actiontypes.Load_category, payload: error });
};
