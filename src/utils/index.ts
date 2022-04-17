import { PropType } from 'vue';

const commonWidgetDataProps = <T>(defaultData: T) => (
  {
    data: {
      type: Object as PropType<T>,
      default: () => (defaultData)
    },
    params: Object
  }
);

export const widgetDataProps = <T>(defaultData: T) => (
  {
    id: {
      type: [Number, String],
      required: true
    },
    ...commonWidgetDataProps<T>(defaultData)
  }
);
