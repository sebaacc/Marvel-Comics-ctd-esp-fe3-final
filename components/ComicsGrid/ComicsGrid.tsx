import styles from "./comicsGrid.module.css";
import Card from "../common/Card";

export interface Props {
  comics: {
    data: {
      results: [];
    };
  };
}

const ComicsGrid: React.FC<Props> = ({ comics }) => {
  const comicsList = comics.data.results;

  return (
    <div className={styles.comicsGrid}>
      {comicsList.map((item, index) => (
        <div key={index} className={styles.comicCard}>
          <Card key={index} comic={item} />
        </div>
      ))}
    </div>
  );
};

export default ComicsGrid;
