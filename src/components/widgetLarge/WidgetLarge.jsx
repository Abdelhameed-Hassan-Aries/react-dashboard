import "./WidgetLarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://scontent.fcai20-6.fna.fbcdn.net/v/t31.18172-8/26172857_1890591607636121_7761768485069054532_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pGSCvC7QO08AX9TasJQ&_nc_ht=scontent.fcai20-6.fna&oh=20fd2e0c8b58c98b4be977cc0b04724b&oe=60DB126C"
              alt="Abdelhameed"
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Abdelhameed Hassan</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://scontent.fcai20-6.fna.fbcdn.net/v/t31.18172-8/26172857_1890591607636121_7761768485069054532_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pGSCvC7QO08AX9TasJQ&_nc_ht=scontent.fcai20-6.fna&oh=20fd2e0c8b58c98b4be977cc0b04724b&oe=60DB126C"
              alt="Abdelhameed"
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Abdelhameed Hassan</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://scontent.fcai20-6.fna.fbcdn.net/v/t31.18172-8/26172857_1890591607636121_7761768485069054532_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pGSCvC7QO08AX9TasJQ&_nc_ht=scontent.fcai20-6.fna&oh=20fd2e0c8b58c98b4be977cc0b04724b&oe=60DB126C"
              alt="Abdelhameed"
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Abdelhameed Hassan</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://scontent.fcai20-6.fna.fbcdn.net/v/t31.18172-8/26172857_1890591607636121_7761768485069054532_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pGSCvC7QO08AX9TasJQ&_nc_ht=scontent.fcai20-6.fna&oh=20fd2e0c8b58c98b4be977cc0b04724b&oe=60DB126C"
              alt="Abdelhameed"
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Abdelhameed Hassan</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
