import { Avatar } from "@mui/material";
import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar className="widgetLgUserAvatar" />
            <span className="widgetLgName">Susan Mwebia</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$23.40</td>
          <td className="widgetLgTd">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar className="widgetLgUserAvatar" />
            <span className="widgetLgName">Moris Munene</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$23.40</td>
          <td className="widgetLgTd">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar className="widgetLgUserAvatar" />
            <span className="widgetLgName">Susan Mwebia</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$23.40</td>
          <td className="widgetLgTd">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar className="widgetLgUserAvatar" />
            <span className="widgetLgName">Susan Mwebia</span>
          </td>
          <td className="widgetLgDate">2 June 2022</td>
          <td className="widgetLgAmount">$23.40</td>
          <td className="widgetLgTd">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
