import { FaqsType, faqsData } from "dh-marvel/components/faqs/faqsData";
import type { NextApiRequest, NextApiResponse } from "next";

export default function faqsHandler(
  req: NextApiRequest,
  res: NextApiResponse<FaqsType[]>
) {
  try {
    res.status(200).json(faqsData);
  } catch (error) {
    res.status(500);
  }
}
