
  // Get today’s date
  const today = new Date();

  // Format the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  // Insert into the HTML
  document.getElementById("news-date").textContent =
    today.toLocaleDateString("en-US", options);
