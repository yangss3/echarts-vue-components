import { defineComponent, onMounted, watch, PropType } from "vue";
import useBase from "../compositions/useBase";
import useColorSet from "../compositions/useColorSet";
import { EChartOption } from 'echarts'
export default defineComponent({
  name: "BaseChart",
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
    option: {
      type: Object as PropType<EChartOption>,
      default: () => ({})
    },
    watchOption: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { chart, renderFn } = useBase(props);
    const defaultColors = useColorSet();

    function renderChart(notMerge = false) {
      chart.value.setOption(
        { color: defaultColors, ...props.option },
        notMerge
      );
    }

    watch(
      () => props.option,
      (val, oldVal) => {
        if (props.watchOption) {
          renderChart(val != oldVal);
        }
      },
      { deep: true }
    );

    onMounted(() => {
      renderChart();
    });

    return renderFn
  }
})
