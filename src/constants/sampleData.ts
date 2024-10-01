export const sampleData = [
  {
    avatar: ["https://i.pravatar.cc/150?img=3"],
    name: "deepak",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
    newMessagesAlert: [{ chatId: "1", count: 4 }],
  },
  {
    avatar: ["https://i.pravatar.cc/300", "https://i.pravatar.cc/150?img=3"],
    name: "bibek",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
    newMessagesAlert: [{ chatId: "2", count: 6 }],
  },
];

export const sampleUsers = [
  { name: "deepak", _id: "1", avatar: ["dewrer"] },
  { name: "bibek", _id: "2", avatar: ["dewrer"] },
];

export const sampleNotification = [
  {
    sender: {
      avatar: "fdewf",
      name: "deepak",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "fdewf",
      name: "bibek",
    },
    _id: "1",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "freg",
        url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg",
      },
    ],
    content:
      "message two fjwfgjerg ofkewoppfojr jfewpjfg jfpewoopfj jioewjpfjr jirewjoirjfjwoejfor fewfgrj ifewjfferjgiojer gfjrejg fhreghr fhregoehr fhrehgehrg fuherugreh fherhuigher fhwehgifh fehuwhgf",
    _id: "ferfr",
    sender: {
      _id: "useid",
      name: "deepak",
    },
    chat: "chatId",
    createdAt: "date",
  },
  {
    attachments: [{ public_id: "freg", url: "fwefgerg" }],
    content: "message one",
    _id: "ferfr",
    sender: {
      _id: "useid",
      name: "deepak",
    },
    chat: "chatId",
    createdAt: "date",
  },
  {
    attachments: [{ public_id: "freg", url: "fwefgerg" }],
    content: "message one",
    _id: "dwefw",
    sender: {
      _id: "dwefw",
      name: "deepak",
    },
    chat: "chatId",
    createdAt: "date",
  },
  {
    attachments: [{ public_id: "freg", url: "fwefgerg" }],
    content: "message three",
    _id: "dwefw",
    sender: {
      _id: "dwefw",
      name: "deepak",
    },
    chat: "chatId",
    createdAt: "date",
  },

  {
    attachments: [
      {
        public_id: "freg",
        url: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_3.png",
      },
    ],
    content: "message three",
    _id: "dwefw",
    sender: {
      _id: "dwefw",
      name: "deepak",
    },
    chat: "chatId",
    createdAt: "date",
  },
  {
    attachments: [
      {
        public_id: "freg",
        url: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_3.png",
      },
    ],

    _id: "dwefw",
    sender: {
      _id: "dwefw",
      name: "deepak",
    },
    chat: "chatId",
    createdAt: "date",
  },
];
