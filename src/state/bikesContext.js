import React, { createContext, useContext, useEffect, useState } from "react";
import { useAsyncFn } from "react-use";

const BikesContext = createContext({});

const BikesProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(undefined);

  const allBikesUrl = process.env.REACT_APP_API + "/bikes";
  const [bikes, getBikes] = useAsyncFn(async () => {
    const response = await fetch(allBikesUrl, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const result = await response.json();
    return result;
  }, [allBikesUrl]);

  const searchSerialUrl = process.env.REACT_APP_API + "/bikes";
  const [searchResults, searchSerial] = useAsyncFn(
    async (serial) => {
      const response = await fetch(searchSerialUrl + `/${serial}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      const result = await response.json();
      return result;
    },
    [searchSerialUrl]
  );

  const searchByParamsUrl = process.env.REACT_APP_API + "/bikes/filter";
  const [searchByParamsResults, searchByParams] = useAsyncFn(
    async (params) => {
      const response = await fetch(searchByParamsUrl, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(params),
      });
      const result = await response.json();
      return result;
    },
    [searchByParamsUrl]
  );

  // useEffect(() => {
  //   searchByParams({
  //     type: "Mountain",
  //   });
  // }, []);

  // console.log(searchByParamsResults);

  const postBikeUrl = process.env.REACT_APP_API + "/bikes/add";
  const [postAttempt, postBike] = useAsyncFn(
    async (data) => {
      console.log(data);
      const response = await fetch(postBikeUrl, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      return result;
    },
    [postBikeUrl]
  );

  const putBikeUrl = process.env.REACT_APP_API + "/bikes";
  const [putAttempt, editBike] = useAsyncFn(
    async (bike) => {
      const response = await fetch(putBikeUrl + `/${bike.serial}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(bike),
      });
      const result = await response.json();
      return result;
    },
    [putBikeUrl]
  );

  const deleteBikeUrl = process.env.REACT_APP_API + "/bikes";
  const [deleteAttempt, deleteBike] = useAsyncFn(
    async (serial) => {
      const response = await fetch(putBikeUrl + `/${serial}`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      const result = await response.json();
      return result;
    },
    [deleteBikeUrl]
  );

  const resetMessage = () => {
    let timer = setTimeout(() => {
      setSuccessMsg("");
      timer = null;
    }, 2500);
  };

  const refreshFormOptionsUrl =
    process.env.REACT_APP_API + "/bikes/form/refresh";
  const [refreshFormAttempt, refreshFormOptions] = useAsyncFn(async () => {
    const response = await fetch(refreshFormOptionsUrl, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const result = await response.json();
    return result;
  }, [refreshFormOptionsUrl]);

  useEffect(() => {
    refreshFormOptions();
  }, []);

  console.log(`refreshForm, ${refreshFormAttempt.value}`);
  const bikesContextValue = {
    bikes,
    isLoading,
    getBikes,
    successMsg,
    postBike,
    editBike,
    resetMessage,
    searchSerial,
    searchResults,
    postAttempt,
    putAttempt,
    deleteBike,
    deleteAttempt,
    searchByParams,
    searchByParamsResults,
    refreshFormOptions,
    refreshFormAttempt,
  };

  return <BikesContext.Provider value={bikesContextValue} {...props} />;
};

const useBikes = () => useContext(BikesContext);

export { BikesProvider, useBikes };
