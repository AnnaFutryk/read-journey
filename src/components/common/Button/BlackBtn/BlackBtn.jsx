import { Btn } from "./BlackBtn.styled";

const BlackBtn = ({ text, onClick }) => {
  return (
    <>
      <Btn type={"submit"} onClick={onClick}>
        {text}
      </Btn>
    </>
  );
};

export default BlackBtn;
