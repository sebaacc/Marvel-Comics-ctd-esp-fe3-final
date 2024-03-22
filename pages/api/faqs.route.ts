import { FaqsType, faqsData } from "dh-marvel/components/faqs/faqsData";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<FaqsType[]>
) {
    res.status(200).json(faqsData)
}