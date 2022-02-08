import "./App.css";
import debounce from "lodash.debounce";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CustomTextField from "./Components/textfield";
import GitReopCards from "./Components/gitRepoCards";
import CardsSkeleton from "./Components/cardSkeleton";
import NoData from "./Components/noFile";

const App = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [gitRepoData, setGitRepoData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  //after searching an org name
  useEffect(() => {
    debouncedSave(search);
  }, [search]);

  const debouncedSave = useCallback(
    debounce((search) => gitRepoApi(search), 1000),
    []
  );
  // will be created only once initially

  const gitRepoApi = async (searchItem) => {
    setLoading(true);

    await axios
      .get(`https://api.github.com/orgs/${searchItem}/repos`)
      .then((res) => {
        setGitRepoData(res.data);
        if (res.data.length > 0) setErrorMessage("No Repo available for this organization");
      })
      .catch((err) => {
        setGitRepoData([]);
        setErrorMessage(err.response.data.message);
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <CustomTextField search={search} setSearch={setSearch} />
        <>
          {loading ? (
            <CardsSkeleton />
          ) : gitRepoData?.length > 0 ? (
            <GitReopCards data={gitRepoData} />
          ) : (
            search && (
              <>
                <NoData message={errorMessage} />
              </>
            )
          )}
        </>
      </div>
    </div>
  );
};

export default App;
