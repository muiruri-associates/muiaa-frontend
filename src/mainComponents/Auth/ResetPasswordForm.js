import React, {useState} from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
// import AuthFooter from "./AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  PreviewCard
} from "../../components/Component";
import { FormGroup } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
// import { ResetPassword } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import AuthFooter from "../../pages/auth/AuthFooter";
import { resetPassword } from "../../redux/actions/authActions";

const ResetPasswordForm = () => {
  const dispatch = useDispatch()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null)

  const onFormSubmit = (e) => {
    e.preventDefault();
  
    if (!password) {
      toast.error("Please enter your new password.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }
  
    setLoading(true);
  
    // Dispatch the resetPassword action with the password value
    dispatch(resetPassword(password))
      .then(() => {
        setLoading(false);
        // Handle success (show a success message or navigate to a different page)
        toast.success("Password reset successful!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        setLoading(false);
        // Handle error (show an error message)
        toast.error("Password reset failed. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={"/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h5">Reset password</BlockTitle>
                <BlockDes>
                  <p>If you forgot your password, well, then we’ll password you instructions to reset your password.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="default-01"
                  placeholder="Enter your password address"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
              <Button 
                color="primary"
                size="lg"
                className="btn-block"
                onClick={onFormSubmit}
                disabled={loading} // Use the local 'loading' state
              >
                {loading ? 'Loading...' : 'Submit'}
              </Button>
                <ToastContainer /> {/* Add this to render toast notifications */}
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
              <Link to={`/login`}>
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
export default ResetPasswordForm;
