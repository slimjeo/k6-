


{let body = JSON.stringify({
  Cakes: [
    {
      Name: "Muffin",
      Price: 10.0,
    },
    {
      Name: "Crumpet",
      Price: 5.0,
    },
  ],
});

let params = {
  header: {
    "content-Type": "application/json",
  },
};

let url = "https://postman-echo.com/post"; }

export  default 