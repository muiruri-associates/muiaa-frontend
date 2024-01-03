import React, {} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Card} from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
} from "../../components/Component";
// import { useHistory } from "react-router";
import { calculateSubscriptionEndDate, formatToDayMonthYear } from "../../utils/Utils";

const LenderSubscription = () => {

  // const history = useHistory();

  const currentDate = Date.now();
  const subscriptionStart = formatToDayMonthYear(currentDate)
  const subscriptionEnd = calculateSubscriptionEndDate(subscriptionStart, 1);

  return (
    <React.Fragment>
      <Head title="User Details - Regular"></Head>
        <Content>
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle tag="h3" page>
                  Subscriptions / <strong className="text-primary small">Name</strong>
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      Subscription Type: <span className="text-base">Premium</span>
                    </li>
                    <li>
                      Subscription Status: <span className="text-base">Active</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Button
                  color="light"
                  outline
                  className="bg-white d-none d-sm-inline-flex"
                  // onClick={() => history.goBack()}
                >
                  <Icon name="plus"></Icon>
                  <span>Upgrade Subscription</span>
                </Button>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <Card className="card-bordered">
              <div className="card-aside-wrap" id="user-detail-block">
                <div className="card-content">

                  <div className="card-inner">
                    <Block>
                      <BlockHead>
                        <BlockTitle tag="h5">Subscription Information</BlockTitle>
                      </BlockHead>
                      <div className="profile-ud-list">
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Subscription Type</span>
                            <span className="profile-ud-value">Premium</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Subscription Status</span>
                            <span className="profile-ud-value">Active</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Subscription Start</span>
                            <span className="profile-ud-value">{subscriptionStart}</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Subscription End</span>
                            <span className="profile-ud-value">{subscriptionEnd}</span>
                          </div>
                        </div>
                        {/* <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Mobile Number</span>
                            <span className="profile-ud-value">MOBILE</span>
                          </div>
                        </div>
                        <div className="profile-ud-item">
                          <div className="profile-ud wider">
                            <span className="profile-ud-label">Email Address</span>
                            <span className="profile-ud-value">email</span>
                          </div>
                        </div> */}
                      </div>
                    </Block>
                    {/* <div className="nk-divider divider md"></div> */}
                  </div>
                </div>
                {/* <Modal
                  isOpen={addNoteModal}
                  toggle={() => setAddNoteModal(false)}
                  className="modal-dialog-centered"
                  size="lg"
                >
                  <ModalBody>
                    <a
                      href="#cancel"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setAddNoteModal(false);
                        setAddNoteText("");
                      }}
                      className="close"
                    >
                      <Icon name="cross-sm"></Icon>
                    </a>
                    <div className="p-2">
                      <h5 className="title">Add Admin Note</h5>
                      <div className="mt-4 mb-4">
                        <textarea
                          defaultValue={addNoteText}
                          className="form-control no-resize"
                          onChange={(e) => setAddNoteText(e.target.value)}
                        />
                      </div>
                      <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                        <li>
                          <Button color="primary" size="md" type="submit" onClick={submitNote}>
                            Add Note
                          </Button>
                        </li>
                        <li>
                          <Button onClick={() => setAddNoteModal(false)} className="link link-light">
                            Cancel
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </ModalBody>
                </Modal> */}
              </div>
            </Card>
          </Block>
        </Content>
    </React.Fragment>
  );
};

export default LenderSubscription;