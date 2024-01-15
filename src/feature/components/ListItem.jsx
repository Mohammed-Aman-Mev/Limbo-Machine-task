import React from "react";

const ListItem = ({ data }) => {
  // {
  //     s_no: 1,
  //     txnId: "ac228549-8d83-48c5-aee9-c54a24dbe8fd",
  //     name: "Sergei Doolan",
  //     merchantTxnId: "dd569080-f832-43d8-954b-02e50576a212",
  //     orderNo: "451af8ff-fb81-4807-9bbc-953e0877feff",
  //     currency: "CNY",
  //     country: "China",
  //     amount: 153.9,
  //     fee: 30,
  //     merchant: "Trupe",
  //     paymentgateway: "Stiedemann, Paucek and Marks",
  //     transactiondate: "27/02/2022",
  //     pdate: null,
  //     merchantfee: 1309,
  //     Status: "Pending",
  //     cardtype: "jcb",
  //     cardnumber: "3558379106327925",
  //     message:
  //       "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  //     email: "sdoolan0@mapy.cz",
  //     merchantsettled: true,
  //     merchantsettleddate: null,
  //     acquiresettled: true,
  //     acquiresettleddate: null,
  //     Router: "97c:a002:7013:b639:382c:f173:3ccb:8dea",
  //     WebURL: "44.248.115.151",
  //     option: "Option",
  //   },
  return (
    <li className="flex p-1 justify-between w-full border-[2px] mt-1 rounded-sm">
      <p className="truncate">{data.s_no}</p>
      <p className="truncate">{data.name}</p>
      <p className="truncate">{data.country}</p>
      <p className="truncate">{data.amount}</p>
      <p className="truncate">{data.status}</p>
    </li>
  );
};

export default ListItem;
