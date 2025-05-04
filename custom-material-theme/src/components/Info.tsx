import { Typography } from "@mui/material";

export interface InfoProps {
  salutation: string;
  information: string;
}

function Info(props: InfoProps) {
  return (
    <>
      <h1>{props.salutation}</h1>
      <Typography color="secondary" component="h1" noWrap gutterBottom>
        {props.information}
      </Typography>
    </>
  );
}

export default Info;
