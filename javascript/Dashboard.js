/* globals Chart:false, feather:false */

(() => {
  "use strict";

  feather.replace({ "aria-hidden": "true" });

  // Graphs
  const ctx = document.getElementById("myChart");
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
      datasets: [
        {
          data: [0, 10, 7, 16, 20, 25, 0],
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
})();
