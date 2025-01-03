document.getElementById("generateBtn")?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  
    const preview = document.getElementById("resumePreview")!;
    preview.innerHTML = `
      <div class="resume-preview">
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Summary:</strong> ${summary}</p>
        <h3>Skills</h3>
        <ul>${skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
      </div>
    `;
  });
  