import { Btn } from "./WhiteBtn.styled";

const WhiteBtn = ({ text }) => {
  return (
    <>
      <Btn type={"submit"}>{text}</Btn>
    </>
  );
};

export default WhiteBtn;
