import Vue from "vue";
import Day from "dayjs";

Vue.filter("formatDate", value => {
  if (!value) return "";
  value = value.toString();
  return Day(value).format("DD/MM/YYYY HH:mm A");
});
