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
  const urlApi = 'https://65fdf9b6b2a18489b385aa85.mockapi.io/api/faqs'
  try {
    const response = await fetch(urlApi);
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
