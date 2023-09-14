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
                      <span className="lead-text">{user?.first_name} {user?.last_name}</span>
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
                    <li>
                      <a
                        href="#tab"
                        onClick={(ev) => {
                          ev.preventDefault();
                          setVerticalTab("2");
                        }}
                      >
                        Documents
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
                        Notifications
                      </a>
                    </li>
                    <li>
                      <a
                        href="#tab"
                        onClick={(ev) => {
                          ev.preventDefault();
                          setVerticalTab("4");
                        }}
                      >
                        Connect
                      </a>
                    </li>
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
                <TabPane tabId="2">
                  <p>
                    Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute
                    magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris
                    ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip
                    labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod
                    do sint minim consectetur qui.
                  </p>
                  <p>
                    Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                    incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                    occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                    voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                    excepteur ea incid.
                  </p>
                </TabPane>
                <TabPane tabId="3">
                  <p>
                    Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident
                    laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla.
                    Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna
                    commodo est ea veniam consectetur.
                  </p>
                  <p>
                    Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                    incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                    occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                    voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                    excepteur ea incid.
                  </p>
                </TabPane>
                <TabPane tabId="4">
                  <p>
                    Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor
                    proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua
                    amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa
                    ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.
                  </p>
                  <p>
                    Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                    incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                    occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                    voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                    excepteur ea incid.
                  </p>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Card>
      </Content>
    </React.Fragment>
  );
};

export default UserProfileLayout;
