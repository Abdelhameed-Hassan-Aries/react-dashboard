import "./Home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import Chart from "../../components/chart/Chart";

import { userData } from "../../data/DummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title={"User Analytics"}
        data={userData}
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
