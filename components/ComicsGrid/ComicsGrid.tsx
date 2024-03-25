import styles from "./comicsGrid.module.css";
import Card from "../common/CardM";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import dynamic from "next/dynamic";

export interface Props {
  comics: {
    data: {
      results: [];
    };
  };
}

const ComicsGrid: React.FC<Props> = ({ comics }) => {
  const [comicsData, setComicsData] = useState([])
  
  const [page, setPage] = useState(0)
  
  const [filteredComics, setfilteredComics] = useState()

  // const filterPage = () => {
  //   setComicsData(comicsData.slice(page*12,12))
  // }

  useEffect(() => {
    setComicsData((comics.data.results).slice(page*12,(page+1)*12))
  }, [comics, page]);
  //const comicsList = comics.data.results;
  
  
  return (
    <div className={styles.comicsGrid}>
      {comicsData.map((item, index) => (
        <div key={index} className={styles.comicCard}>
          <Card key={index} comic={item} />
        </div>
      ))}
        <Pagination count={comicsData.length} color="primary" onChange={(event, value) => setPage(value-1)}  />

    </div>
  );
};

export default dynamic (() => Promise.resolve(ComicsGrid), {ssr:false}); 
