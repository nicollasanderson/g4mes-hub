import { InputContainer } from "./style";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";

const Input = ({ icon, register, name, label, error, ...rest }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <InputContainer>
      <label>{label}</label>
      {icon ? (
        <input
          {...register(name)}
          {...rest}
          type={show ? "text" : "password"}
        />
      ) : (
        <input {...register(name)} {...rest} />
      )}
      {icon && (
        <div className="btn-show-hide" onClick={toggleShow}>
          {show ? (
            <MdVisibility size={"19px"} />
          ) : (
            <MdVisibilityOff size={"19px"} />
          )}
        </div>
      )}
      {!!error && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}
    </InputContainer>
  );
};

export default Input;
