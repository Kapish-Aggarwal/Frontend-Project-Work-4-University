// Get URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      const photoUrl = urlParams.get("photoUrl");
      const homeName = urlParams.get("homeName");
      const homeProfile = urlParams.get("homeProfile");
      const aboutMePhotoUrl = urlParams.get("aboutMePhotoUrl");
      const aboutMeMyself = urlParams.get("aboutMeMyself");
      const aboutMeDetails = urlParams.get("aboutMeDetails");
      const skill1 = urlParams.get("skill1");
      const skill2 = urlParams.get("skill2");
      const skill3 = urlParams.get("skill3");
      const skill4 = urlParams.get("skill4");
      const college = urlParams.get("college");
      const course = urlParams.get("course");
      const collegeYear = urlParams.get("collegeYear");
      const school = urlParams.get("school");
      const classes = urlParams.get("classes");
      const schoolYear = urlParams.get("schoolYear");
      const project1 = urlParams.get("project1");
      const project1Skills = urlParams.get("project1Skills");
      const project1Link = urlParams.get("project1Link");
      const project2 = urlParams.get("project2");
      const project2Skills = urlParams.get("project2Skills");
      const project2Link = urlParams.get("project2Link");
      const phoneNumber = urlParams.get("phone");
      const resumeLink = urlParams.get("resume");
      const email = urlParams.get("email");

      // Display data
      const imgElement = document.getElementById("photoUrl");
      imgElement.src = photoUrl;
      imgElement.alt = "Photo";
      document.getElementById("homeName").textContent = homeName;
      document.getElementById("homeProfile").textContent = `- ${homeProfile}`;
      const aboutMePhotoElement = document.getElementById("aboutMePhoto");
      aboutMePhotoElement.src = aboutMePhotoUrl;
      aboutMePhotoElement.alt = "Photo";
      document.getElementById("aboutMeTitle").textContent = "About Me";
      document.getElementById("aboutMeMyself").textContent = aboutMeMyself;
      document.getElementById("aboutMeDetails").textContent = aboutMeDetails;
      const skillContainer = document.getElementById("skillContainer");
      skillContainer.innerHTML = `
            <div><p>${skill1}</p></div>
            <div><p>${skill2}</p></div>
            <div><p>${skill3}</p></div>
            <div><p>${skill4}</p></div>
        `;
      document.getElementById("collegeName").textContent = college;
      document.getElementById("courseName").textContent = course;
      document.getElementById("collegeYearText").textContent = collegeYear;
      document.getElementById("schoolName").textContent = school;
      document.getElementById("classesName").textContent = classes;
      document.getElementById("schoolYearText").textContent = schoolYear;
      document.getElementById("project1Name").textContent = project1;
      document.getElementById("project1SkillsText").textContent =
        project1Skills;
      document.getElementById("project1LinkText").href = project1Link;
      document.getElementById("project1LinkText").textContent = project1Link;
      document.getElementById("project2Name").textContent = project2;
      document.getElementById("project2SkillsText").textContent =
        project2Skills;
      document.getElementById("project2LinkText").href = project2Link;
      document.getElementById("project2LinkText").textContent = project2Link;
      document.getElementById("phone").value = phoneNumber;
      document.getElementById("resume").value = resumeLink;
      document.getElementById("email").value = email;
      document.getElementById("phoneLink").href = "tel:" + phoneNumber;
      document.getElementById("resumeLink").href = resumeLink;
      document.getElementById("emailLink").href = "mailto:" + email;

      function myFunction() {
        alert("Thank you. Your request has been send");
