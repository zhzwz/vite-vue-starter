export default defineComponent({
  name: 'TsxButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (<>
      <button class="px-4">{props.text}</button>
    </>)
  },
})
