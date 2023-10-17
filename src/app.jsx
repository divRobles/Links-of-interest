import { resources } from "./utils/sections_info/recursos";
import { extensions } from "./utils/sections_info/extensiones";
import { guies } from "./utils/sections_info/guias";
import { learning } from "./utils/sections_info/aprendizaje";
import { createDataFunction } from "./utils/functios/create_component_from_data.jsx";
import Typography from "@mui/material/Typography";
import "./App.css";
import Paper from '@mui/material/Paper';

export default function App() {
  const allData = [...learning, ...resources, ...extensions, ...guies];

  const component = createDataFunction(allData);
  return (

    <Paper
    sx={{
      background: "rgb(27, 27, 27)",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      marginTop:"30px",
      padding:"0 2% 2% 2%",
    }}
    className="box-shadow paper"
    >
      <Typography 
      sx={{
        color:"rgb(9, 120, 167)",
        fontWeight: "bolder !important",
        padding:"2%",
        fontSize:"xx-large"
      }}
      >Enlaces de interés</Typography>
        {component}
    </Paper>


  );
}
