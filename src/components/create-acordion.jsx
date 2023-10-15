import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
export const CreateAcordion = ({ id, title, dataFunctions }) => {
  const [acordionClicked, setacordionClicked] = useState(false);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon  className={acordionClicked ? "acordionClicked" : "acordionNoClicked"} />}
        aria-controls={`panel${title}-content`}
        id={`panel${title}-header`}
        onClick={() => setacordionClicked(!acordionClicked)}
      >
        <Typography
          className={acordionClicked ? "acordionClicked" : "acordionNoClicked"}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{dataFunctions}</AccordionDetails>
    </Accordion>
  );
};
