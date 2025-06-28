# spam-email-detector



```markdown
# 📧 Spam Email Detector

A simple full-stack Java application that detects whether a given email is **spam** or **not spam** using a Naive Bayes-based text classifier. Built with **Spring Boot (Java)** for the backend and **HTML/CSS/JavaScript** for the frontend.

---

## 🛠️ Features

- 🧠 Trains on sample spam and ham email datasets
- 📡 REST API to detect spam
- 🖥️ Frontend UI for testing emails
- 🧰 Integrated backend and frontend with Spring Boot

---

## 🚀 Tech Stack

- **Backend**: Java 17, Spring Boot, Maven
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **IDE**: VS Code (Recommended)

---

## 📁 Project Structure

```

spam-email-detector/
├── src/
│   ├── main/
│   │   ├── java/com/example/spamdetector/
│   │   │   ├── SpamDetectorApplication.java
│   │   │   ├── controller/SpamController.java
│   │   │   ├── model/EmailRequest.java
│   │   │   └── service/SpamClassifierService.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── spam.txt
│   │       ├── ham.txt
│   │       └── static/
│   │           ├── index.html
│   │           ├── style.css
│   │           └── script.js
├── pom.xml

````

---

## ⚙️ Getting Started

### 1. Prerequisites

- Java 17+
- Maven
- VS Code or IntelliJ IDEA
- Spring Boot Extension Pack (for VS Code)

---

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/spam-email-detector.git
cd spam-email-detector
````

---

### 3. Run the App

Using Maven:

```bash
mvn spring-boot:run
```

Or inside VS Code:

* Open `SpamDetectorApplication.java`
* Click `▶ Run` at the top right

---

### 4. Access the Frontend

Open in your browser:

```
http://localhost:8080/index.html
```

Paste your email message, click **Check**, and see whether it's spam.

---

## 🔌 API Endpoint

### `POST /api/detect`

**Request Body:**

```json
{
  "content": "Congratulations! You've won a prize!"
}
```

**Response:**

```json
{
  "spam": true
}
```

---

## 📚 Data

Training data is stored in:

* `src/main/resources/spam.txt` – Example spam emails
* `src/main/resources/ham.txt` – Example legitimate emails

You can improve the model by expanding these files.

---

## 📸 Screenshots

| Frontend UI                | Result Example             |
| -------------------------- | -------------------------- |
| ![screenshot](docs/ui.png) | ![result](docs/result.png) |

---

## 📦 Build Production JAR

```bash
mvn clean install
```

Run JAR:

```bash
java -jar target/spam-detector-1.0.jar
```

---

## 🧠 Future Improvements

* Use real ML libraries (e.g., DL4J, Weka)
* Store trained model
* Add login system for history tracking
* Upload training data via admin panel

---

## 🤝 License

MIT License © 2025 \[Your Name]

```


```
