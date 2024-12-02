document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("guestBookForm");
    const entriesList = document.getElementById("entriesList");

    // ฟังก์ชันโหลดข้อมูลจาก Local Storage
    const loadEntries = () => {
        const entries = JSON.parse(localStorage.getItem("guestBookEntries")) || [];
        entriesList.innerHTML = "";
        entries.forEach(entry => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Name : </strong> ${entry.name}<br>
                <strong>Email : </strong> ${entry.email}<br>
                <strong>Feedback : </strong> ${entry.feedback}<br>
                <strong>Rating : </strong> ${entry.rating}<br>
                <strong>Suggestion : </strong> ${entry.suggestion}
            `;
            entriesList.appendChild(listItem);
        });
    };

    // โหลดข้อมูลเมื่อเปิดหน้า
    if (entriesList) {
        loadEntries();
    }

    // เพิ่มรายการใหม่ลงใน Local Storage
    form?.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const feedback = document.getElementById("feedback").value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');
        const suggestion = document.getElementById("suggestion").value;

        if (!rating) {
            alert("Please rate our website.");
            return;
        }

        alert(`Thank you for your feedback, ${name}!`);


        const newEntry = {
            name,
            email,
            feedback,
            rating: rating.value,
            suggestion
        };

        const entries = JSON.parse(localStorage.getItem("guestBookEntries")) || [];
        entries.push(newEntry);
        localStorage.setItem("guestBookEntries", JSON.stringify(entries));

        form.reset();

  
        window.location.href = "homepage.html";
    });
});