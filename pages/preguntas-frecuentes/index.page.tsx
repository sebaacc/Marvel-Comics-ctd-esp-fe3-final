import FaqComponent from "dh-marvel/components/faqs/FaqsComponent";
import { FaqsType } from "dh-marvel/components/faqs/faqsData";
import type { NextPage } from "next";
import styles from "./faqs.module.css";

interface PreguntasFrecuentesPageProps {
  faqs: FaqsType[];
}
const PreguntasFrecuentesPage: NextPage<PreguntasFrecuentesPageProps> = ({
  faqs,
}) => {
  return (
    <div className={styles.faqsPageStyle}>
      <h1>Preguntas Frecuentes</h1>
      <FaqComponent faqs={faqs} />
    </div>
  );
};

export default PreguntasFrecuentesPage;

export async function getStaticProps() {
  try {
    const response = await fetch("http://localhost:3000/api/faqs");
    const data = await response.json();
    return {
      props: {
        faqs: data,
      },
    };
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return {
      props: {
        faqs: [],
      },
    };
  }
}
