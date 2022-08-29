import http from "k6/http";

export let options = {
  target: 15,
  duration: "5s",
};
export default function () {
  http.get("https://www.flipkart.com/");
}
