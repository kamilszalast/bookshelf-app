import type { NextPage } from "next";
import Head from "next/head";
import { apiAddress } from "../constants/apiLinks";
import TableComponent from "../components/TableComponent";
import { useState, useEffect } from "react";
import { TableBookElement, SinglePageBookList } from "../constants/types";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  const [data, setData] = useState<SinglePageBookList>();
  const [results, setResults] = useState<TableBookElement[]>([]);
  const [flashResults, setFlashResults] = useState<TableBookElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //method to fetch data from another page
  // function getDataByPageId(i: number): TableBookElement[] {
  //   fetch(`${apiAddress}/book/?page=${i}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFlashResults(data.results);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => setLoading(false));
  //   return flashResults;
  // }

  //fetching data
  useEffect(() => {
    fetch(`${apiAddress}/book`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setResults(data.results);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Head>
        <title>Gutenberg Bookshelf</title>
      </Head>
      <Typography align="center" variant="h4" sx={{ lineHeight: "200%" }}>
        Gutenberg Bookshelf
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {loading && <div>Trwa ładowanie danych</div>}
        <TableComponent data={results!} />
      </Box>
    </div>
  );
};

export default Home;
