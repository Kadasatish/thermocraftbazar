const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
  const orderId = dot.dataset.orderid;

  setInterval(() => {
    fetch(`https://sabpisa-backend.onrender.com/status/${orderId}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "SUCCESS") {
          dot.style.backgroundColor = "white";
          setTimeout(() => {
            dot.style.backgroundColor = "black";
          }, 3000);
        }
      })
      .catch(err => console.error("Polling error:", err));
  }, 5000);
});
