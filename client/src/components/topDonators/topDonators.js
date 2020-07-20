import React from "react";

const topDonators = (props) => {
  const memberList = props.memberList.sort((a, b) => b.donations - a.donations);

  const topDonators = memberList.map((member, i) => {
    return (
      <tr>
        <th scope="row" className="text-center fontSemiBold">
          {i + 1}
        </th>
        <td>{member.name}</td>
        <td className="text-center">{member.donations}</td>
        <td className="text-center">{member.donationsReceived}</td>
      </tr>
    );
  });

  return (
    <div className="jumbotron jumbotronSelf overflow-auto px-3 py-4 scroll-self">
      <table className="table table-borderless table-sm">
        <thead>
          <tr>
            <th scope="col" className="text-center fontSemiBold">
              No.
            </th>
            <th scope="col" className="fontSemiBold">
              Name
            </th>
            <th scope="col" className="text-center fontSemiBold">
              Donated
            </th>
            <th scope="col" className="text-center fontSemiBold">
              Received
            </th>
          </tr>
        </thead>
        <tbody>{topDonators}</tbody>
      </table>
    </div>
  );
};

export default topDonators;
