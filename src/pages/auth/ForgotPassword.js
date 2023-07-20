import React from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import { FormGroup } from "reactstrap";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "../../redux/reducers/authApiSlice";

const ForgotPassword = () => {
  const { handleSubmit, register } = useForm();
  const [forgotPassword] = useForgotPasswordMutation();
  const handleFormSubmit = async (formData)=> {
    const {email}= formData;
    try{
    const data = await forgotPassword(email);
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
                  <p>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  type="text"
                  name= "email"
                  className="form-control form-control-lg"
                  id="default-01"
                  placeholder="Enter your email address"
                  ref={register({ required: true })}

                />
              </FormGroup>
              <FormGroup>
                <Button type="submit" color="primary" size="lg" className="btn-block" >
                  Send Reset Link
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
export default ForgotPassword;
