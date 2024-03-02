import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function AccordionTile({text} : {text : string}) {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon  style={{  color: 'black' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {text}
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
  );
}
function Icon(){
    return (
        <Link
            className=" w-12 h-12 p-3 rounded-full bg-white"
            href={'#'}
        >
        <FontAwesomeIcon icon={faPlusCircle} size="1x" style={{ backgroundColor: 'transparent' }} />
      </Link>
    ) 
}

function Section7(){
    return (
        
        <div className='w-3/4'>
           <AccordionTile text={'What kind of tasks can I post?'}/>
           <AccordionTile text={'Do I need to be a member to post tasks?'}/>
           <AccordionTile text={'What is the difference between Tasks and Apprenticeships?'}/>
           <AccordionTile text={'How do I compensate the marketers?'}/>
           
        </div>
    )
}

export default Section7