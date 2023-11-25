import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import Logo from "../../images/logoMuiaa.png";
import LogoDark from "../../images/logoMuiaa.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
// import AuthFooter from "../../pages/auth/AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Spinner, FormGroup } from "reactstrap";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { lenderRegister } from "../../redux/actions/authActions";

const RegisterLender = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [passState, setPassState] = useState(false);
  const [confirmPassState, setConfirmPassState] = useState(false);
  const [username, setUsername] = useState('')
  const [first_name, setFirst_name ] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_password] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { errors, register, handleSubmit } = useForm();

  const handleFormSubmit = async () => {
    setLoading(true);

    const registerData = {
      first_name,
      last_name,
      username,
      email,
      phone_number,
      password,
    }

    try {
      await dispatch(lenderRegister(registerData))
      console.log('Registered data', registerData)
      setFirst_name("");
      setLast_name("");
      setUsername("");
      setEmail("");
      setPhone_number('');
      setPassword('');
      setConfirm_password('');
      setIsSubmitted(true);
      toast.success("User registered successfully!");
      setTimeout(() => history.push(`/auth-success`), 2000);
    } catch (error) {
      toast.error("Unable to register");
    }
  };
  return (
    <React.Fragment>
      <Head title="Register" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={`/`} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Register</BlockTitle>
                <BlockDes>
                  <p>Create New Account</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
            <FormGroup>
                <label className="form-label" htmlFor="name">
                  Username
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    ref={register({ required: true })}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control-lg form-control"
                  />
                  {errors.username && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <label className="form-label" htmlFor="name">
                  First Name
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter your First Name"
                    ref={register({ required: true })}
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    className="form-control-lg form-control"
                  />
                  {errors.first_name && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <label className="form-label" htmlFor="name">
                  Last Name
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter your Last Name"
                    ref={register({ required: true })}
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    className="form-control-lg form-control"
                  />
                  {errors.last_name && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    bssize="lg"
                    id="email"
                    name="email"
                    ref={register({ required: true })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control-lg form-control"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="phone_number">
                    Phone number
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    bssize="lg"
                    id="default-01"
                    name="phone_number"
                    ref={register({ required: true })}
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    className="form-control-lg form-control"
                    placeholder="Enter your email address"
                  />
                  {errors.phone_number && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPassState(!passState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input
                    type={passState ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.password && <span className="invalid">{errors.password.message}</span>}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Confirm Password
                  </label>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setConfirmPassState(!confirmPassState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${confirmPassState ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input
                    type={confirmPassState ? "text" : "password"}
                    id="confirmpassword"
                    name="password"
                    ref={register({ required: "This field is required" })}
                    value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)}
                    placeholder="Enter your Password"
                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.confirm_password && <span className="invalid">{errors.confirm_password.message}</span>}
                </div>
              </FormGroup>

              <FormGroup>
                <Button type="submit" color="primary" size="lg" className="btn-block">
                  {loading ? <Spinner size="sm" color="light" /> : "Register"}
                </Button>
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
              {" "}
              Already have an account?{" "}
              <Link to={`/auth-login`}>
                <strong>Sign in instead</strong>
              </Link>
            </div>
          </PreviewCard>
        </Block>
      </PageContainer>
    </React.Fragment>
  );
};
export default RegisterLender;
