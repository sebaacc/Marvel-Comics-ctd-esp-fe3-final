import FaqComponent from "dh-marvel/components/faqs/FaqsComponent";
import { FaqsType, faqsData } from "dh-marvel/components/faqs/faqsData";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const PreguntasFrecuentesPage: NextPage = () => {
  const [faqs, setFaqs] = useState<FaqsType[]>(faqsData); // Estado para almacenar las FAQs

  useEffect(() => {
    // Lógica para cargar las FAQs desde el JSON o una API
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/api/faqs"); // Endpoint para obtener las FAQs
        const data = await response.json();
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
