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

export const getproduct_data = () => (dispatch) => {
  try {
    dispatch(loaddata());
    setTimeout(async function () {
      let data = [];
      const querySnapshot = await getDocs(collection(db, "Products"));
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: Actiontypes.getproductdata, payload: data });
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
      const proRef = ref(storage, "Products/" + filename);
      uploadBytes(proRef, data.pname).then(async (snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          const docRef = await addDoc(collection(db, "Products"), {
            ...data,
            pname: url,
            filename: filename,
          });
          dispatch({
            type: Actiontypes.Add_product,
            payload: { ...data, id: docRef.id, pname: url, filename: filename },
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
    const proRef = doc(db, "Products", data.id);
    if (typeof data.pname === "string") {
      await updateDoc(proRef, {
        address: data.address,
        companyname: data.companyname,
        name: data.name,
        price: data.price,
        description: data.description,
      });
      dispatch({ type: Actiontypes.Edit_product, payload: data });
    } else {
      const oldimgRef = ref(storage, "Products/" + data.filename);
      const newimgRef = ref(storage, "Products/" + filename);

      deleteObject(oldimgRef).then(async () => {
        uploadBytes(newimgRef, data.pname).then(async (snapshot) => {
          getDownloadURL(snapshot.ref).then(async (url) => {
            await updateDoc(proRef, {
              address: data.address,
              companyname: data.companyname,
              name: data.name,
              price: data.price,
              description: data.description,
              filename: filename,
              pname: url,
            });
            dispatch({
              type: Actiontypes.Edit_product,
              payload: { ...data, filename: filename, pname: url },
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
    const proRef = ref(storage, "Products/" + data.filename);
    deleteObject(proRef)
      .then(async () => {
        await deleteDoc(doc(db, "Products", data.id));
        dispatch({ type: Actiontypes.Delete_product, payload: data.id });
      })
      .catch((error) => {
        dispatch(errordata(error.message));
      });
  } catch (error) {
    dispatch(errordata(error.message));
  }
};

export const loaddata = () => (dispatch) => {
  dispatch({ type: Actiontypes.Load_Product });
};

export const errordata = (error) => (dispatch) => {
  dispatch({ type: Actiontypes.Error_Product, payload: error });
};
