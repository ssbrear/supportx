import React from "react";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import ServerNav from "./ServerNav";
import Chat from "./Chat";

// DATA STRUCTURE RECEIVED FROM A SINGLE SERVER
let channelData = [];

const serverData = [
  {
    name: "Server 1",
  },
  {
    name: "Server 2",
  },
];

const Dashboard = () => {
  const [currentServer, setServer] = React.useState(null);
  const [currentChannel, setChannel] = React.useState(null);
  const [currentTicket, setTicket] = React.useState([false, null, null]);
  // INITIALIZE TICKETDATA WITH API CALL
  const [ticketData, setTicketData] = React.useState([
    {
      agents: [
        {
          _id: "1234",
          username: "asda",
          avatarURL: "https://via.placeholder.com/100",
        },
      ],
      severity: "0",
      _id: "1",
      title: "Cat in tree",
      messages: [
        {
          message: "sss",
          timeStamp: "sss",
          senderName: "sss",
        },
      ],
      channel: "General",
    },
    {
      agents: [
        {
          _id: "1234",
          username: "asda",
          avatarURL: "https://via.placeholder.com/100",
        },
      ],
      severity: "0",
      _id: "2",
      title: "Cat in tree stuck processing",
      messages: [
        {
          message: "sss",
          timeStamp: "sss",
          senderName: "sss",
        },
      ],
      channel: "Processing",
    },
    {
      agents: [
        {
          _id: "1234",
          username: "asda",
          avatarURL: "https://via.placeholder.com/100",
        },
      ],
      severity: "0",
      _id: "3",
      title: "Cat in tree",
      messages: [
        {
          message: "sss",
          timeStamp: "sss",
          senderName: "sss",
        },
      ],
      channel: "General",
    },
  ]);

  function serverClick(e) {
    const serverIndex = e.currentTarget.getAttribute("index");
    setChannel(null);
    setServer(serverIndex);
    // API CALL TO RETRIEVE TICKET DATA FROM SERVER
    // setTicketData()
    channelData = ticketData
      .map((ticket) => ticket.channel)
      .filter((name, i, array) => array.indexOf(name) === i);
  }

  function channelClick(e) {
    const channelIndex = e.currentTarget.getAttribute("index");
    setChannel(channelIndex);
    // POPULATE TICKETS WITH STORED DATA
  }

  return (
    <div className="app">
      <ServerList
        data={serverData}
        action={serverClick}
        focus={currentServer}
      />
      <div className={`${currentServer === null ? "none" : "chatOuter"}`}>
        <div className="channels">
          <ServerNav
            name={`${
              currentServer === null ? "" : serverData[currentServer].name
            }`}
          />
          <div className="channelListOuter">
            <ChannelList
              action={channelClick}
              data={channelData}
              focus={currentChannel}
            />
          </div>
          <div className="userArea">
            <img
              alt="User Icon"
              src="https://via.placeholder.com/100"
              className="userIcon"
            ></img>
            <div className="userName">
              Sebastian Brear
              <div className="userID">#1234</div>
            </div>
            <img
              alt="Settings icon"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gear-1961574-1659804.png"
              className="settingsIcon"
            ></img>
          </div>
        </div>
        <Chat
          currentChannel={channelData[currentChannel]}
          currentTicket={currentTicket}
          setTicket={setTicket}
          ticketData={ticketData}
          setTicketData={setTicketData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
