import { inject, App } from "vue";
import AdaptiveWrapper from "./adaptive-wrapper";
import BaseChart from "./base-chart";
import GridChart from "./grid-chart";
import HorizontalBarChart from "./horizontal-bar-chart";
import PieChart from "./pie-chart";
import RatioChart from "./ratio-chart";

import { colors } from "./utils/config";

const colorSetSymbol = Symbol();

function install(app: App, option = { colors }) {
  app.provide(colorSetSymbol, option.colors);
  app
    .use(AdaptiveWrapper)
    .use(BaseChart)
    .use(GridChart)
    .use(HorizontalBarChart)
    .use(PieChart)
    .use(RatioChart);
}

function useDefaultColors() {
  return inject(colorSetSymbol, colors);
}

declare namespace window {
  const Vue: any;
  function echartComponents(app: App, ...option: any[]): any;
}

if (window && window.Vue) {
  window.echartComponents = install;
}

export default install;

export {
  AdaptiveWrapper,
  BaseChart,
  GridChart,
  HorizontalBarChart,
  PieChart,
  RatioChart,
  useDefaultColors
};
