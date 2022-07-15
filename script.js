const dates_you_want = [
  { year: 2022, month: 7, day: 15 },
  { year: 2022, month: 7, day: 16 },
  { year: 2022, month: 7, day: 17 },
  { year: 2022, month: 7, day: 18 },
  { year: 2022, month: 7, day: 19 },
  { year: 2022, month: 7, day: 20 },
  { year: 2022, month: 7, day: 21 },
  { year: 2022, month: 7, day: 22 },
  { year: 2022, month: 7, day: 23 },
  { year: 2022, month: 7, day: 24 },
  { year: 2022, month: 7, day: 25 },
  { year: 2022, month: 7, day: 26 },
  { year: 2022, month: 7, day: 27 },
  { year: 2022, month: 7, day: 28 },
  { year: 2022, month: 7, day: 29 },
  { year: 2022, month: 7, day: 30 },
  { year: 2022, month: 7, day: 31 },
];

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

let available = false;
const list = document.getElementsByClassName(" avaliable");
if (list.length > 1) {
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < dates_you_want.length; j++) {
      if (Number(list[i].getAttribute("data-year")) === dates_you_want[j].year &&
          Number(list[i].getAttribute("data-month")) + 1 === dates_you_want[j].month &&
          Number(list[i].innerText) === dates_you_want[j].day
      ) {
        available = true;

        new Notification(
          `${dates_you_want[j].year}-${dates_you_want[j].month}-${dates_you_want[j].day} Available`,
          {
            icon: "https://cdn.shopify.com/s/files/1/1061/1924/products/Heart_Eyes_Emoji_large.png",
            body: "",
          }
        );

        break;
      }
    }
    if (available) {
      break;
    }
  }
}

if (!available && list.length != 0) {
  //random from 1000ms to 5000ms
  setTimeout("location.reload();", Math.floor(Math.random() * 5000) + 1000);
}
