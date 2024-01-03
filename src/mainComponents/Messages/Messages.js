import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import MessageItem from "./MessageItem";
import ContentAlt from "../../layout/content/ContentAlt";
import Simplebar from "simplebar-react";
import { Button, Icon, UserAvatar } from "../../components/Component";
import { messageData } from "./MessageData";
import { findUpper } from "../../utils/Utils";

const Messages = () => {
  const [data, setData] = useState(messageData);
  const [filteredTabData, setFilteredTabData] = useState(messageData);
  const [filterTab, setFilterTab] = useState("1");
  const [search, setOnSearch] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [selectedId, setSelectedIt] = useState(1);
  const [mobileView, setMobileView] = useState(false);

  const onInputChange = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(() => {
    if (filterText !== "") {
      const filteredData = messageData.filter((item) => {
        return (
          item.name.toLowerCase().includes(filterText.toLowerCase()) ||
          item.messageTitle.toLowerCase().includes(filterText.toLowerCase())
        );
      });
      setData([...filteredData]);
    } else {
      setData(filteredTabData);
    }
  }, [filterText, filterTab, filteredTabData]);

  useEffect(() => {
    let filteredData;
    if (filterTab === "1") {
      filteredData = messageData.filter((item) => {
        return item.closed === false;
      });
      setData(filteredData);
      setFilteredTabData(filteredData);
    } else if (filterTab === "2") {
      filteredData = messageData.filter((item) => {
        return item.closed === true;
      });
      setData(filteredData);
      setFilteredTabData(filteredData);
    } else if (filterTab === "3") {
      filteredData = messageData.filter((item) => {
        return item.marked === true;
      });
      setData(filteredData);
      setFilteredTabData(filteredData);
    } else {
      filteredData = messageData;
      setData(filteredData);
      setFilteredTabData(filteredData);
    }
  }, [filterTab]);

  const onSearchBack = () => {
    setOnSearch(false);
    setFilterText("");
  };

  const onClosed = (id) => {
    let newData = data;
    const index = newData.findIndex((item) => item.id === id);
    newData[index].closed = true;
    setData([...newData]);
  };

  const onMessageClick = (id) => {
    setSelectedIt(id);
    if (window.innerWidth <= 990) {
      setMobileView(true);
    }
  };

  return (
    <React.Fragment>
      <Head title="App Messages"></Head>
      <ContentAlt>
        <div className="nk-msg">
          
          {/*nk-aside*/}
          <MessageItem
            id={selectedId}
            setMobileView={setMobileView}
            mobileView={mobileView}
            onClosed={onClosed}
            data={data}
          />
        </div>
      </ContentAlt>
    </React.Fragment>
  );
};
export default Messages;