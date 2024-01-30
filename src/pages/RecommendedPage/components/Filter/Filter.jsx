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
              customPadding="77px"
              customMediaPadding="86px"
              type="text"
              name="title"
              placeholder="Enter text"
            />
          </InputWrapp>
          <InputWrapp>
            <Label htmlFor="author">The author:</Label>
            <Input
              customPadding="85px"
              customMediaPadding="95px"
              type="text"
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
