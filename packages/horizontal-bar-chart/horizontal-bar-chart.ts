import useBase from "pkg/compositions/useBase";
import useColorSet from "pkg/compositions/useColorSet";
import { defineComponent, onMounted, PropType, watch } from "vue";
import Color from "color";
import { EChartOption } from "echarts";

type SeriesItem = {
  data: number[]; // 系列的数据
  name?: string; // 系列名
  color?: string | [string, string]; // 柱条的颜色，不提供会默认使用调色盘的颜色，若提供一个数组，则显示渐变色
  bgColor?: string; // 柱条背景色，不提供默认会根据 color 的值生成
  maxValue?: number; // 该系列数据的上限值
};

type Series = SeriesItem | SeriesItem[];

export default defineComponent({
  name: "horizontal-bar-chart",
  props: {
    height: {
      type: String,
      default: "100%"
    },
    width: {
      type: String,
      default: "100%"
    },
    adaptive: {
      type: Boolean,
      default: false
    },
    // 标题
    title: String,
    // 标题字体大小
    titleSize: Number,
    // 标题颜色
    titleColor: String,
    // 类目数组
    category: {
      type: Array as PropType<string[]>,
      required: true
    },

    // 系列数据数组
    series: {
      type: [Object, Array] as PropType<Series>,
      required: true
    },

    // 是否圆角
    round: {
      type: Boolean,
      default: true
    },

    // 字体的颜色
    color: {
      type: String,
      default: "#000"
    },

    // label, legend 字体大小
    labelSize: Number,

    // 两个系列数据对比时，调整中间 label 距离容器左边位置
    // 可以是的百分比或绝对像素值
    labelLeft: {
      type: [String, Number],
      default: "46%"
    },

    // 两个系列数据对比时，调整左右两边 grid 的宽度
    // 可以是相对于容器宽度的百分比或绝对像素值
    gridWidth: {
      type: [String, Number],
      default: "37%"
    },

    gridTop: {
      type: [String, Number]
    },

    gridBottom: {
      type: [String, Number],
      default: "-1.5%"
    },

    // 图表容器背景色
    backgroundColor: {
      type: String,
      default: "transparent"
    },

    // 柱条的宽度
    barWidth: {
      type: Number
    }
  },
  setup(props) {
    const { chart, renderFn, titleFontSize, contentFontSize } = useBase(props);
    const echartsColorSet = useColorSet();
    watch(
      () => props.series,
      (val, oldVal) => {
        renderChart(val != oldVal);
      },
      { deep: true }
    );

    function renderChart(notMerge = false) {
      chart.value.setOption(createOption(), notMerge);
    }

    function createOption() {
      const tempSeries = !Array.isArray(props.series)
        ? [props.series]
        : props.series;

      const showTitle = !!props.title;
      const showLegend = tempSeries.some(item => !!item.name);
      const labelSize = props.labelSize || contentFontSize.value;

      const itemColor = (
        color: string | string[] | undefined,
        index: number
      ) => {
        color = color || echartsColorSet[index % echartsColorSet.length];
        if (Array.isArray(color) && color.length > 1) {
          return {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: color[0] // 0% 处的颜色
              },
              {
                offset: 1,
                color: color[1] // 100% 处的颜色
              }
            ]
          };
        } else {
          return Array.isArray(color) ? color[0] : color;
        }
      };

      const itemBgColor = (item: SeriesItem, index: number) => {
        let bgColor: string;
        if (item.bgColor) {
          bgColor = item.bgColor;
        } else if (typeof item.color === "string") {
          bgColor = Color(item.color)
            .fade(0.8)
            .toString();
        } else {
          bgColor = Color(echartsColorSet[index])
            .fade(0.8)
            .toString();
        }
        return bgColor;
      };

      let grid: EChartOption.Grid[],
        xAxis: EChartOption.XAxis[],
        yAxis: EChartOption.YAxis[],
        series: EChartOption.Series[] = [];

      if (tempSeries.length > 1) {
        const gridCommon = {
          top:
            showTitle || showLegend
              ? props.gridTop || "12%"
              : props.gridTop || "5%",
          bottom: "4%",
          containLabel: true
        };

        grid = [
          {
            width: props.gridWidth,
            left: "5%",
            ...gridCommon
          },
          {
            width: "0%",
            left: props.labelLeft,
            ...gridCommon
          },
          {
            width: props.gridWidth,
            right: "5%",
            ...gridCommon
          }
        ];

        const xAxisCommon = {
          show: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          position: "top",
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        } as EChartOption.XAxis;

        const yAxisCommon = {
          axisLine: { show: false },
          splitLine: { show: false },
          axisTick: { show: false }
        };

        xAxis = [
          {
            gridIndex: 0,

            inverse: true,
            ...xAxisCommon
          },
          { gridIndex: 1, ...xAxisCommon },
          { gridIndex: 2, ...xAxisCommon }
        ];

        yAxis = [
          {
            gridIndex: 0,
            type: "category",
            axisLabel: { show: false },
            ...yAxisCommon
          },
          {
            gridIndex: 1,
            type: "category",
            axisLabel: {
              show: true,
              color: props.color,
              fontSize: labelSize
            },
            ...yAxisCommon,
            data: props.category
              .map(value => ({
                value,
                textStyle: {
                  align: "center"
                }
              }))
              .reverse()
          },
          {
            gridIndex: 2,
            type: "category",
            axisLabel: { show: false },
            ...yAxisCommon
          }
        ];

        tempSeries.slice(0, 2).forEach((item, i) => {
          const seriesData = [...item.data].reverse();
          series.push(
            {
              type: "bar",
              name: item.name,
              barWidth: props.barWidth,
              barMaxWidth: !props.barWidth ? 25 : undefined,
              zlevel: 1,
              xAxisIndex: i === 1 ? 2 : 0,
              yAxisIndex: i === 1 ? 2 : 0,
              label: {
                show: false,
                position: i === 0 ? "left" : "right",
                color: props.color,
                fontSize: labelSize * 0.9
              },
              itemStyle: {
                color: itemColor(item.color, i) as string,
                barBorderRadius: props.round ? 50 : 0
              },
              data: seriesData
            },
            {
              type: "bar",
              barWidth: props.barWidth,
              barMaxWidth: !props.barWidth ? 25 : undefined,
              barGap: "-100%",
              xAxisIndex: i === 1 ? 2 : 0,
              yAxisIndex: i === 1 ? 2 : 0,
              label: {
                show: true,
                position: i === 0 ? "left" : "right",
                color: props.color,
                fontSize: labelSize * 0.9,
                formatter: ({ dataIndex }: { dataIndex: number }) =>
                  seriesData[dataIndex]
              },
              itemStyle: {
                color: itemBgColor(item, i),
                barBorderRadius: props.round ? 50 : 0
              },
              data: Array(seriesData.length).fill(
                item.maxValue || Math.max(...seriesData) * 1.06
              )
            }
          );
        });
      } else {
        grid = [
          {
            top:
              showTitle || showLegend
                ? props.gridTop || "12%"
                : props.gridTop || "5%",
            bottom: props.gridBottom,
            right: "8%",
            left: "4%",
            containLabel: true
          }
        ];

        xAxis = [{ show: false }];

        yAxis = [
          {
            type: "category",
            data: [...props.category].reverse(),
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              color: props.color,
              fontSize: labelSize,
              margin: 12
            }
          }
        ];

        const seriesData = [...tempSeries[0].data].reverse();

        series.push(
          {
            type: "bar",
            name: tempSeries[0].name,
            zlevel: 1,
            barWidth: props.barWidth,
            barMaxWidth: !props.barWidth ? 25 : undefined,
            label: {
              show: false
            },
            itemStyle: {
              color: itemColor(tempSeries[0].color, 0) as string,
              barBorderRadius: props.round ? 50 : 0
            },
            data: seriesData
          },
          {
            type: "bar",
            barWidth: props.barWidth,
            barMaxWidth: !props.barWidth ? 25 : undefined,
            barGap: "-100%",
            label: {
              show: true,
              position: "right",
              color: props.color,
              fontSize: labelSize * 0.9,
              formatter: ({ dataIndex }: { dataIndex: number }) =>
                seriesData[dataIndex]
            },
            itemStyle: {
              color: itemBgColor(tempSeries[0], 0),
              barBorderRadius: props.round ? 50 : 0
            },
            data: Array(seriesData.length).fill(
              tempSeries[0].maxValue || Math.max(...seriesData) * 1.06
            )
          }
        );
      }

      return {
        backgroundColor: props.backgroundColor,
        title: {
          show: showTitle,
          text: props.title,
          left: "3%",
          top: "3.5%",
          textStyle: {
            fontSize: props.titleSize || titleFontSize.value,
            color: props.titleColor || props.color
          }
        },
        legend: {
          show: showLegend,
          right: showTitle ? "5%" : "center",
          top: "3.5%",
          textStyle: {
            fontSize: labelSize,
            color: props.color
          },
          itemWidth: labelSize * 1.5,
          itemHeight: labelSize,
          itemGap: 12
        },
        grid,
        xAxis,
        yAxis,
        series
      };
    }

    onMounted(() => {
      renderChart();
    });

    return renderFn;
  }
});
