import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import YourEmail from "./YourEmail";
import VerifCode from "./VerifCode";
import UpdateForgetPassword from "./UpdatePassword";
import Role from "./Role";

const ForgetForm = ({ setForgetPassForm }) => {
  const [roleV, setRoleV] = useState<Boolean>(true);
  const [emailV, setEmailV] = useState<Boolean>(false);
  const [codeV, setCodeV] = useState<Boolean>(false);
  const [UpdatePassV, setUpdatePassV] = useState<Boolean>(false);
  const [email, setEmail] = useState<any>("");
  const [role, setRole] = useState<any>("");

  return (
    <form
      action=""
      className="flex backdrop-blur-md backdrop-contrast-50	 z-10 b flex-col items-center justify-center absolute top-10  lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] w-full h-full "
    >
      <IoClose
        className="absolute right-5 z-50 top-5 text-5xl cursor-pointer "
        onClick={() => setForgetPassForm(false)}
      />



      {roleV && (
        <Role
          setEmailV={setEmailV}
          setRoleV={setRoleV}
          setRole={setRole}
        />
      )}

      {emailV && (
        <YourEmail
          setEmailV={setEmailV}
          setCodeV={setCodeV}
          setEmail={setEmail}
          role={role}
        />
      )}
      {codeV && (
        <VerifCode
          setCodeV={setCodeV}
          setUpdatePassV={setUpdatePassV}
          email={email}
        />
      )}
      {UpdatePassV && (
        <UpdateForgetPassword setUpdatePassV={setUpdatePassV} email={email} setForgetPassForm={setForgetPassForm}  role={role}/>
      )}
    </form>
  );
};

export default ForgetForm;
