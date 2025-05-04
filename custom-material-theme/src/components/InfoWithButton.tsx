import { InfoProps } from "./Info";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

interface InfoWithBtnProps extends InfoProps {
  btnName: string;
}

/** This is a HOC */
const withInfoButton = (WrappedComponent: React.ComponentType<InfoProps>) => {
  return (props: InfoWithBtnProps) => {
    const { btnName, ...remaingProps } = props;
    return (
      <Container>
        <WrappedComponent {...remaingProps} />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ marginTop: "20px" }}
        >
          {btnName}
        </Button>
      </Container>
    );
  };
};

export default withInfoButton;
