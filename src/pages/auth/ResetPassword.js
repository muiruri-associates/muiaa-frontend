import React from "react";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import ResetPasswordForm from "../../mainComponents/Auth/ResetPasswordForm";


const ResetPassword = () => {
  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <ResetPasswordForm />
      </PageContainer>
    </React.Fragment>
  );
};
export default ResetPassword;
