import React, {useState} from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
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
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { forgotPassword } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  // const history = useHistory();
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null)

  const onFormSubmit = async (e) => {
    e.preventDefault();
  
    if (!email) {
      toast.error("Please enter your email.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      return;
    }
  
    // Basic email format validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      return;
    }
  
    setLoading(true);
  
    try {
      await dispatch(forgotPassword(email));
      setLoading(false);
      toast.success("Reset link has been sent successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
    } catch (error) {
      setLoading(false);
      console.error("Forgot password error:", error);
      // You might want to display an error message using toast.error() here
    }
  };
  

  // Use toast notifications to display success or error messages

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
                <BlockTitle tag="h5">Forgot password</BlockTitle>
                <BlockDes>
                  <p>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="default-01"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <Link to={`/auth-login`}>
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
