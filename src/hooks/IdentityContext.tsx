import { getInitalSinnerJSON } from "@helpers/parseData";
import { Identity } from "@types/data";
import React, { useEffect, useState } from "react";

export const IdentityContext = React.createContext({});

function IdentityProvider({ children }) {
  //Object with {sinnerId: LCB Identity} mapping
  const [identities, setIdentities] = useState<Object>({});

  useEffect(() => {
    //grab inital team data and set team to LCB Sinners
    getInitalSinnerJSON().then((data) => {
      console.log(data);
      let obj = {};
      data.forEach((res) => {
        obj[res.sinnerID] = res;
      });
      setIdentities(obj);
    });
  }, []);

  function setIdentity(sinnerID: number, identity: Identity) {
    setIdentities({ ...identities, [`${sinnerID}`]: identity });
  }

  function getIdentity(sinnerID: number) {
    if (sinnerID < 1 || sinnerID === 10 || sinnerID > 13) {
      return null;
    }
    return identities[sinnerID];
  }

  return (
    <IdentityContext.Provider value={{ identities, setIdentity, getIdentity }}>{children}</IdentityContext.Provider>
  );
}

export default IdentityProvider;
