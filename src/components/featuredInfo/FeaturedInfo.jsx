import "./FeaturedInfo.css";
import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredmoneyContainer">
          <span className="featuredMoney">$2,415 </span>
          <span className="featuredMoneyRate">
            -11.45 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredmoneyContainer">
          <span className="featuredMoney">$4,915 </span>
          <span className="featuredMoneyRate">
            -1.8 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredmoneyContainer">
          <span className="featuredMoney">$2,415 </span>
          <span className="featuredMoneyRate">
            +6.45 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
