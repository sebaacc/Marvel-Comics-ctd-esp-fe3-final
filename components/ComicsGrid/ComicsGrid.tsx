import styles from "./comicsGrid.module.css";
import Card, { ComicProps } from "../common/CardM";
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
  const [comicsData, setComicsData] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await new Promise<any>((resolve) => {
        setTimeout(() => {
          resolve(comics.data.results.slice(page * 12, (page + 1) * 12));
        }, 10);
      });

      setComicsData(fetchedData);
    };

    loadData();
  }, [comics, page]);

  return (
    <div className={styles.comicsGrid}>
      {comicsData.map((item, index) => (
        <div key={index} className={styles.comicCard}>
          <Card key={index} comic={item} />
        </div>
      ))}
      <Pagination
        count={comics.data.results.length / 12}
        color="primary"
        onChange={(event, value) => setPage(value - 1)}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(ComicsGrid), { ssr: false });
