import React, { useState, useEffect } from "react";
import Content from "../../layout/content/Content";
import { Block, Icon, UserAvatar } from "../../components/Component";
import {
  Card,
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  TabContent,
  TabPane,
} from "reactstrap";
import BorrowersDocumentsTable from "./Borrower/BorrowersDocumentsTable";
import LendersDocumentsTable from "./Lender/LendersDocumentsTable";
import UploadDocument from './UploadDocument';

const UserProfileLayout = () => {
  const [sm, updateSm] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [verticalTab, setVerticalTab] = useState("1");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage (assuming it's stored as JSON)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to check if the user is a lender (customize this logic as per your application)
  const isLender = user && user.role === "Lender";
  const isUser = user && user.role === "User";

  // function to change the design view under 990 px
  const viewChange = () => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    } else {
      setMobileView(false);
      updateSm(false);
    }
  };

  useEffect(() => {
    viewChange();
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
      updateSm(false);
    });
    return () => {
      window.removeEventListener("resize", viewChange);
      window.removeEventListener("load", viewChange);
    };
  }, []);

  return (
    <React.Fragment>
      <Content>
        {mobileView ? (
          <div>Mobile view</div>
        ) : (
          <Card className="card-bordered">
            <div className="card-aside-wrap">
              <div
                className={`card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg ${
                  sm ? "content-active" : ""
                }`}
              >
                <div className="card-inner-group">
                  <div className="card-inner">
                    <div className="user-card">
                      <UserAvatar theme="primary" />
                      <div className="user-info">
                        <span className="lead-text">
                          {user?.first_name} {user?.last_name}
                        </span>
                        <span className="sub-text">{user?.email}</span>
                      </div>
                      <div className="user-action">
                        <UncontrolledDropdown>
                          <DropdownToggle tag="a" className="btn btn-icon btn-trigger mr-n2">
                            <Icon name="more-v"></Icon>
                          </DropdownToggle>
                          <DropdownMenu right>
                            <ul className="link-list-opt no-bdr">
                              <li>
                                <DropdownItem
                                  tag="a"
                                  href="#dropdownitem"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <Icon name="camera-fill"></Icon>
                                  <span>Change Photo</span>
                                </DropdownItem>
                              </li>
                              <li>
                                <DropdownItem
                                  tag="a"
                                  href="#dropdownitem"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <Icon name="edit-fill"></Icon>
                                  <span>Update Profile</span>
                                </DropdownItem>
                              </li>
                            </ul>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </div>
                  {isUser && (
                    <>
                      <div className="card-inner">
                        <div className="user-account-info py-0">
                          <h6 className="overline-title-alt">YOUR DTI SCORE</h6>
                          <div className="user-balance">40%</div>
                          <div className="user-balance-sub">
                            Loans <span>0.344939</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="card-inner p-0">
                    <ul className="nav link-list-menu border border-light round m-0">
                      <li>
                        <a
                          href="#tab"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setVerticalTab("1");
                          }}
                        >
                          Personal Information
                        </a>
                      </li>
                      {isLender && (
                        <>
                          <li>
                            <a
                              href="#tab"
                              onClick={(ev) => {
                                ev.preventDefault();
                                setVerticalTab("2");
                              }}
                            >
                              Upload Documents
                            </a>
                          </li>
                          <li>
                            <a
                              href="#tab"
                              onClick={(ev) => {
                                ev.preventDefault();
                                setVerticalTab("3");
                              }}
                            >
                              All Documents
                            </a>
                          </li>
                        </>
                      )}
                      <>
                        {isUser && (
                          <>
                            <li>
                              <a
                                href="#tab"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setVerticalTab("4");
                                }}
                              >
                                Upload Documents
                              </a>
                            </li>
                            <li>
                              <a
                                href="#tab"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setVerticalTab("5");
                                }}
                              >
                                All Documents
                              </a>
                            </li>
                          </>
                        )}
                      </>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-inner card-inner-lg">
                <TabContent activeTab={verticalTab}>
                  <TabPane tabId="1">
                    <Block>
                      <div className="nk-data data-list">
                        <div className="data-head">
                          <h6 className="overline-title">Basics</h6>
                        </div>
                        <div className="data-item">
                          <div className="data-col">
                            <span className="data-label">First Name</span>
                            <span className="data-value">{user?.first_name}</span>
                          </div>
                        </div>
                        <div className="data-item">
                          <div className="data-col">
                            <span className="data-label">Last Name</span>
                            <span className="data-value">{user?.last_name}</span>
                          </div>
                        </div>
                        <div className="data-item">
                          <div className="data-col">
                            <span className="data-label">Email</span>
                            <span className="data-value">{user?.email}</span>
                          </div>
                        </div>
                        <div className="data-item">
                          <div className="data-col">
                            <span className="data-label">Phone Number</span>
                            <span className="data-value text-soft">{user?.phone_number}</span>
                          </div>
                        </div>
                        <div className="data-item">
                          <div className="data-col">
                            <span className="data-label">Address</span>
                            <span className="data-value">
                              address,
                              <br />
                              stat, country
                            </span>
                          </div>
                        </div>
                      </div>
                    </Block>
                  </TabPane>
                  <TabPane tabId="2">{isLender ? <UploadDocument /> : null}</TabPane>
                  <TabPane tabId="3">{isLender ? <LendersDocumentsTable /> : null}</TabPane>
                  <TabPane tabId="4">{isUser ? <UploadDocument /> : null}</TabPane>
                  <TabPane tabId="5">{isUser ? <BorrowersDocumentsTable /> : null}</TabPane>
                </TabContent>
              </div>
            </div>
          </Card>
        )}
      </Content>
    </React.Fragment>
  );
};

export default UserProfileLayout;
