async function checkSpam() {
  const content = document.getElementById('emailContent').value;
  const resultDiv = document.getElementById('result');

  resultDiv.innerText = "Checking...";

  try {
    const response = await fetch('http://localhost:8080/api/detect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });

    const data = await response.json();
    if (data.spam) {
      resultDiv.innerText = "🚫 This email is SPAM!";
      resultDiv.style.color = "red";
    } else {
      resultDiv.innerText = "✅ This email is NOT spam.";
      resultDiv.style.color = "green";
    }
  } catch (error) {
    resultDiv.innerText = "❌ Error contacting the server.";
    resultDiv.style.color = "gray";
  }
}
