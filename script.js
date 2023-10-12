
document.addEventListener("DOMContentLoaded", function () {
    const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Ecosystem Integrity",
                data: [65, 59, 80, 81, 56],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
            },
            {
                label: "Human Impact",
                data: [28, 48, 40, 19, 86],
                fill: false,
                borderColor: "rgb(255, 99, 132)",
            },
        ],
    };

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "line",
        data: data,
    });
});
