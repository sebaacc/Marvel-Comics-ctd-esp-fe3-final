import React from 'react';
import { FaqsType } from './faqsData'; // Importa el tipo FaqsType desde tu archivo de tipos
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

type FaqListProps = {
    faqs: FaqsType[];
  };

const FaqComponent: React.FC<FaqListProps> = ({ faqs }) => {
  return (
    <div>
      {faqs.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary expandIcon={<ArrowDropDown/>} aria-controls="panel2-content" id="panel2-header">
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FaqComponent;