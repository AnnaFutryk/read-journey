import { Formik } from "formik";
import BlackBtn from "../../../../components/common/Button/BlackBtn/BlackBtn";
import {
  BtnContainer,
  FormContainer,
  Input,
  InputWrapp,
  Label,
  Title,
} from "./Filter.styled";

const Filter = () => {
  const initialValues = { title: "", author: "", password: "" };

  return (
    <div>
      <Title>Filters:</Title>
      <Formik initialValues={initialValues}>
        <FormContainer>
          <InputWrapp>
            <Label htmlFor="title">Book title:</Label>
            <Input
              custompadding="77px"
              custommediapadding="86px"
              type="text"
              id="title"
              name="title"
              placeholder="Enter text"
            />
          </InputWrapp>
          <InputWrapp>
            <Label htmlFor="author">The author:</Label>
            <Input
              custompadding="85px"
              custommediapadding="95px"
              type="text"
              id="author"
              name="author"
              placeholder="Enter text"
            />
          </InputWrapp>
          <BtnContainer>
            <BlackBtn text={"To apply"} />
          </BtnContainer>
        </FormContainer>
      </Formik>
    </div>
  );
};

export default Filter;
