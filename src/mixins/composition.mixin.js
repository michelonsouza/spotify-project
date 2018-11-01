export default {
  props: {
    size: {
      type: String,
      required: false,
      default: "h6"
    },
    color: {
      type: String,
      required: false,
      default: "text-dark"
    },
    limit: {
      type: Boolean,
      required: false,
      default: false
    },
    desc: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
