import http from "k6/http";

export let 
export default function () {
  http.get("https://www.flipkart.com/");
}
