* {
      margin: 0;
      padding: 0;
      background-color: black;
      color: white;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    #navbar-wrapper {
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 1rem;
    }

    .leftnav {
      font-size: 2.5rem;
      display: flex;
    }

    .leftnav p {
      color: yellow;
    }

    .navitems {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
    }

    .navMenu {
      margin-left: 3rem;
    }

    .navMenu a {
      text-decoration: none;
    }

    .Home {
      padding: 2rem;
      margin-top: 3rem;
      display: flex;
      justify-content: space-around;
      width: 100%;
      text-align: center;
    }

    .lefthome {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .greeting,
    .Define {
      font-size: 1.5rem;
      color: yellow;
    }

    .name {
      font-size: 3.5rem;
    }

    .righthome {
      width: 40%;
    }

    .righthome img {
      width: 100%;
    }

    .AboutMe {
      padding: 2rem;
      margin-top: 3rem;
      display: flex;
      justify-content: space-around;
      width: 100%;
      background-color: #1a1a1a;
    }

    .leftAboutMe {
      width: 40%;
      background-color: #1a1a1a;
    }

    .leftAboutMe img {
      width: 100%;
      background-color: #1a1a1a;
    }

    .rightAboutMe {
      width: 40%;
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #1a1a1a;
    }

    #aboutMeMyself {
      margin-top: 20px;
      background-color: #1a1a1a;
      font-weight: 600;
    }

    .details {
      margin-top: 15px;
      background-color: #1a1a1a;
    }

    .title {
      margin-top: 50px;
      background-color: #1a1a1a;
    }

    #aboutMeTitle {
      color: yellow;
      font-size: 2.5rem;
      background-color: #1a1a1a;
    }

    .skill {
      padding: 2rem;
      margin-top: 3rem;
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding-bottom: 4rem;
    }

    .skill p {
      font-size: 1.5rem;
    }

    .title2 {
      text-align: center;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 2rem;
    }

    .title2 b {
      font-size: 2.5rem;
      color: yellow;
    }

    .educationExperience {
      padding: 5rem;
      margin-top: 2rem;
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 2rem;
      padding-bottom: 5rem;
      background-color: #1a1a1a;
    }

    .leftsection {
      width: 40%;
      background-color: #1a1a1a;
    }

    .rightsection {
      width: 40%;
      background-color: #1a1a1a;
    }

    .leftsection1,
    .rightsection1 {
      font-size: 1.5rem;
      padding: 1rem;
      background-color: #262626;
    }

    .leftsection2,
    .rightsection2 {
      margin-top: 1rem;
      font-size: 1.5rem;
      padding: 1rem;
      background-color: #262626;
    }

    .leftsection p,
    .rightsection p {
      background-color: #262626;
    }

    .leftsection b,
    .rightsection b {
      color: yellow;
      background-color: #262626;
    }

    #project1LinkText,
    #project2LinkText {
      text-decoration: none;
      background-color: #262626;
    }

    .title3 {
      font-size: 2.5rem;
      color: yellow;
      text-align: center;
      margin-bottom: 1rem;
      background-color: #1a1a1a;
    }

    .title4 {
      font-size: 2.5rem;
      color: yellow;
      text-align: center;
      margin-top: 2rem;
    }

    .Contact form {
      margin: 2rem auto;
      width: 60%;
      display: flex;
      flex-direction: column;
    }

    input,
    textarea {
      width: 100%;
      margin-bottom: 20px;
      height: 40px;
      padding: 10px;
      border: 1px solid #a1a1a1;
      background-color: white;
      color: black;
    }

    textarea {
      height: 80px;
    }

    button {
      width: 100%;
      margin-bottom: 20px;
      height: 40px;
      padding: 10px;
      background: #ffbf35;
      color: #fff;
      border: none;
      font-size: 16px;
    }

    .bottom {
      padding: 2rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      text-align: center;
    }

    .leftbottom,
    .middlebottom,
    .rightbottom {
      width: 40%;
    }

    .icon i {
      color: yellow;
    }

    .heading {
      font-weight: bolder;
      font-size: 1.8rem;
      padding: 0.5rem;
      color: white;
    }

    .heading a {
      text-decoration: none;
    }

    /*****FOOTER SECTION*****/
    .footer {
      background-color: #1a1a1a;
      padding: 2rem 0px;
      width: 100%;
      float: left;
    }

    .container {
      display: flex;
      background-color: #1a1a1a;
      justify-content: space-around;
      text-align: center;
    }

    .footer-sect {
      color: #b3b3b3;
      background-color: #1a1a1a;
    }

    .footer-sect a {
      color: #b3b3b3;
      margin-left: 10px;
      text-decoration: none;
      font-size: 18px;
      text-align: center;
      background-color: #1a1a1a;
    }

    .social-icon a i {
      width: 50px;
      height: 50px;
      border: 1px solid #cdcdcd;
      background-color: #1a1a1a;
      line-height: 50px;
      font-size: 20px;
      border-radius: 50%;
    }

    a {
      transition: font-size 0.4s ease-in-out 0s;
    }

    a:hover {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 1300px) and (min-width: 900px) {
      div a {
        font-size: 1rem;
      }
    }


    @media screen and (max-width:900px) {

      main div,
      .rightAboutMe {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
      }


      .nav {
        flex-direction: column;
        padding-top: 0;
        justify-content: center;
      }

      .nav,
      .leftnav,
      .navitems,
      .nav p,
      .nav a {
        background-color: #090909;
      }

      .icon {
        padding: 1rem;
      }

      .leftsection a,
      .rightsection a {
        word-break: break-all;
      }
    }

    @media screen and (max-width:550px) {
      .nav a {
        font-size: 0.8rem;
      }

      .leftnav {
        font-size: 1.2rem;
      }
    }
