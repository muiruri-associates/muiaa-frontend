import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  PreviewCard,
} from "../../components/Component";
import { FormGroup } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthFooter from "../../pages/auth/AuthFooter";
import { resetPassword } from "../../redux/actions/authActions";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newPassCredential = {
      email,
      resetPasswordToken: token,
      newPassword,
    };

    try {
      await dispatch(resetPassword(newPassCredential));
      setEmail("");
      setNewPassword("");
      toast.success("Password changed successfully!");
      history.push("/auth-login");
    } catch (error) {
      toast.error("Password reset failed");
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={"/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img
                className="logo-dark logo-img logo-img-lg"
                src={LogoDark}
                alt="logo-dark"
              />
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h5">Reset password</BlockTitle>
                <BlockDes>
                  <p>
                    If you forgot your password, we&apos;ll send you instructions to
                    reset it.
                  </p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form onSubmit={onFormSubmit}>
              <input type="hidden" name="resetPasswordToken" value={token} />
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="btn-block"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
                <ToastContainer />
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
