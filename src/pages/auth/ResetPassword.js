import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import { FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "../../redux/reducers/authApiSlice";

const ResetPassword = () => {
  const location = useLocation(); 
  console.log(location)

  const { handleSubmit, register, errors, watch } = useForm();
  const [resetPassword] = useResetPasswordMutation();
  const newPassword = watch("password", "");
  const token = new URLSearchParams(location.search).get("token") || "";


  const handleFormSubmit = async (formData)=> {
    const {passcode}= formData;
    try{
    const data = await resetPassword({token, password});
    if (data.status==200){
      console.log("success check your email")
    }}
    catch (error){
      console.log(error)
    }
  }
  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h5">Reset password</BlockTitle>
                <BlockDes>
                  <p>Input your new password </p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="email">
                    New Password
                  </label>
                </div>
                <input
                  type="password"
                  name= "password"
                  className="form-control form-control-lg"
                  id="default-01"
                  placeholder="Enter new password"
                  ref={register({ required: true })}

                />
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="email">
                    Confirm Password
                  </label>
                </div>
                <input
                  type="password"
                  name= "passcode"
                  className="form-control form-control-lg"
                  id="default-02"
                  placeholder=" enter matching password"
                  ref={register({
                    required: "This field is required",
                    validate: (value) => value === newPassword || "Passwords do not match",
                  })}
                />
                {errors.passcode && <span className="invalid">passwords do not match</span>}

              </FormGroup>
              <FormGroup>
                <Button type="submit" color="primary" size="lg" className="btn-block" >
                  Generate New Password
                </Button>
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
              <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
                <strong>Return to login</strong>
              </Link>
            </div>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default ResetPassword;
