import React from "react";
import ErrorImage from "../../images/gfx/error-504.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import { Link } from "react-router-dom";
import { Block, BlockContent, Button } from "../../components/Component";

const Error504Modern = () => {
  return (
    <PageContainer>
      <Block className="nk-block-middle wide-md mx-auto">
        <BlockContent className="nk-error-ld text-center">
          <img className="nk-error-gfx" src={ErrorImage} alt="error" />
          <div className="wide-xs mx-auto">
            <h3 className="nk-error-title">Unauthorized!!!</h3>
            <p className="nk-error-text">
              You don&apos;t have access to this page.
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color="primary" size="lg" className="mt-2">
                Back To Home
              </Button>
            </Link>
          </div>
        </BlockContent>
      </Block>
    </PageContainer>
  );
};
export default Error504Modern;
