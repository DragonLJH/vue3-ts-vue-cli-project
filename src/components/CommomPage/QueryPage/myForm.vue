<script lang="ts">
import { h, reactive } from "vue";
import { ElInput, ElInputNumber, ElFormItem, ElForm } from "element-plus";
interface myFormObj {
  label: string;
  name: string;
  type: string;
}
export default {
  name: "myForm",
  props: {
    formObj: { type: Array, default: {} },
  },
  components: {
    ElInput,
    ElInputNumber,
  },
  setup(props:any, context) {
    const { formObj } = props;
    const form = reactive(Object.create({}));
    formObj.forEach((val: myFormObj) => {
      let key = val.name;
      let value = val.type === "string" ? "" : 0;
      form[key] = value;
    });
    console.log("formObj", formObj);
    const inputName = (key: string) => {
      switch (key) {
        case "string":
          return ElInput;
        case "number":
          return ElInputNumber;
        default:
          return "";
      }
    };
    const children = formObj.map((val: myFormObj) => {
      let value = form[val.name];
      return h(ElFormItem, { ...val }, [
        h(inputName(val.type), {
          value,
          onInput: function(e: string | number) { 
            value = e;
            form[val.name] = e;
          },
        }),
      ]);
    });
    console.log("myForm", formObj);
    return () => h(ElForm, {}, children);
  },
};
</script>