import FaqComponent from "dh-marvel/components/faqs/FaqsComponent";
import { FaqsType, faqsData } from "dh-marvel/components/faqs/faqsData";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const PreguntasFrecuentesPage: NextPage = () => {
  const [faqs, setFaqs] = useState<FaqsType[]>([]); // Estado para almacenar las FAQs

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/api/faqs"); // Endpoint para obtener las FAQs
        const data = await response.json();
        console.log(data);
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <>
      <h1>Preguntas Frecuentes</h1>
      <FaqComponent faqs={faqs} />
    </>
  );
};

export default PreguntasFrecuentesPage;
