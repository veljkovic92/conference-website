const button = document.querySelector(".icon")
const list = document.querySelector(".myLinks")

function myFunction() {

  button.addEventListener("click", function() {

    list.classList.toggle("myLinksToggle")

  })
}

let people = [
  {
    name: "Aaron Irizarry",
    logo: "DESIGNING A CULTURE OF DESIGN",
    description: "Workplace culture doesn’t start with beanbags, foosball tables, or a beer fridge, and it doesn’t end with neckties, PCs, or big corporations. It’s the unwritten rules, behavior, beliefs, and the motivations that enable good work to get done, or it’s what stifles a workforce. For design to be most effective and for designers to feel valued, we need to work in a culture that embraces design and allows it to succeed. In Aaron’s session he will explore how to recognize the traits of organizations that *get* design, both large and small. He will share what those teams, departments, and companies have that others don’t, and more importantly, how to begin to change your own workplace’s culture. Once you’ve worked within a culture of design it’s almost impossible to imagine yourself anywhere else.",
    about: "Aaron Irizarry is a Senior Product Designer for Nasdaq OMX, a lover of heavy metal, a foodie, and a master of BBQ arts. You can find some of his thoughts and presentations on the conversation surrounding design over at discussingdesign.com.",
    image: "https://jolly-kalam-23776e.netlify.app/styledconferences/assets/images/speakers/aaron-irizarry.jpg",
    social: ["@aaroni", "thisisaaronslife.com"]
  },
  {
    name: "Adam Connor",
    logo: "LIGHTS! CAMERA! INTERACTION! DESIGN INSPIRATION FROM FILMMAKERS",
    description: "Films succeed in evoking responses and engaging audiences only with a combination of well-written narrative and effective storytelling technique. It’s the filmmaker’s job to put this together. To do so they’ve developed processes, tools and techniques that allow them to focus attention, emphasize information, foreshadow and produce the many elements that together comprise a well-told story. With this workshop, we’ll revisit the topic of using stories in design and expand on the technical aspects used in film to communicate. We’ll look at some tools used in film, such as cinematic patterns, beat sheets, and storyboards. We’ll consider why they’re used and how we might look to them for inspiration.",
    about: "Adam Connor is a designer, illustrator and speaker passionate about collaboration, communication, creativity and storytelling. As an Experience Design Director with Mad*Pow, Adam combines 10+ years of experience in interaction and experience design with a background in computer science, film, and animation to create effective and easy-to-use digital products and services. He believes that no matter how utilitarian a tool is, at the core of its creation lies a story; uncovering that story is key to its success. Occasionally, he shares his perspectives on design at adamconnor.com and discussingdesign.com.",
    image: "https://jolly-kalam-23776e.netlify.app/styledconferences/assets/images/speakers/adam-connor.jpg",
    social: ["@adamconnor", "adamconnor.com"]
  },
  {
    name: "AJ Self",
    logo: "(YOU SHOULD BE) TESTING YOUR JAVASCRIPT",
    description: "JavaScript applications frequently utilize battle-tested libraries like jQuery, AngularJS, Backbone.js and more, but how can we be sure that our code is ready for production? This talk will share tips on how writing tests can be written easily and quickly and how to remove buggy code through testing.",
    about: "AJ is a software engineer specializing in JavaScript working at Belly in Chicago. Lately he has been writing applications with AngularJS and loving it. When not coding he is out loving the outdoors with his dog, Sunshine.",
    image: "https://jolly-kalam-23776e.netlify.app/styledconferences/assets/images/speakers/aj-self.jpg",
    social: ["@ajself", "ajself.com"]
  },
  {
    name: "Arman Ghosh",
    logo: "DESIGNING DEALS: HOW GOOD DESIGN DRIVES SALES",
    description: "Perception influences decisions, especially when it comes to selling products and services. Learn why before you even start sales conversations; good, thoughtful design and presentation will define you and your ability to close deals.",
    about: "Arman is an entrepreneur who has his roots planted in building aggressive sales and revenue-generating teams. Having built out national sales and operations teams in the B2B and consumer spaces, his focus has been driving aggressive growth for technology-based companies. He has an extensive operating background and has built a career disrupting sales processes and approaches with companies doing the same in their respective technology spaces.",
    image: "https://jolly-kalam-23776e.netlify.app/styledconferences/assets/images/speakers/arman-ghosh.jpg",
    social: ["@armanghosh"]
  },
  {
    name: "Bermon Painter",
    logo: "DEATH TO WIREFRAMES: LONG LIVE RAPID PROTOTYPING",
    description: "Static wireframes are a drag on the whole design process. Prototyping makes things a little better by allowing you to stitch together static wireframes or mockups while adding basic interactions. Rapid prototyping with HTML, CSS, and JavaScript is even better and faster; it increases collaboration and improves the iteration process. Kill your wireframes. Long live rapid prototyping.",
    about: "Bermon is the organizer of various community groups for user experience designers and front-end developers, and the organizer of Blend Conference, a three-day, multi-track event for user experience strategists, designers and developers. He also leads the user experience team for Cardinal Solutions’ Charlotte office, where he consults with large enterprise clients on interesting problems across user experience, design and front-end development.",
    image: "https://jolly-kalam-23776e.netlify.app/styledconferences/assets/images/speakers/bermon-painter.jpg",
    social: ["@bermonpainter", "bermonpainter.com"]
  },
  {
    name: "Shay Howe",
    logo: "LESS IS MORE: HOW CONSTRAINTS CULTIVATE GROWTH",
    description: "By setting constraints, we force ourselves to be more productive. They help us make decisions, creating focus around the problem we are trying to solve. They improve our consistency, which provides a better experience for our users. And they help us grow, a valuable asset in times of innovation.",
    about: "As a designer and front-end developer, Shay Howe has a passion for solving problems while building creative and intuitive products. Shay specializes in product design and interface development, specialties which he regularly writes and speaks about.",
    image: "https://jolly-kalam-23776e.netlify.app/styledconferences/assets/images/speakers/shay-howe.jpg",
    social: ["@shayhowe", "learn.shayhowe.com"]
  }
]

const peopleSec = document.querySelector("#people-sec");



window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = people.map(function (item) {
    // console.log(item);
const splitted = item.name.split(" ")[0]

    return `<div class="person">
      <div class="person-left">
        <h3>${item.name}</h3>
        <h5>${item.logo}</h5>
        <p>${item.description}</p>
        <h5>ABOUT ${splitted.toUpperCase()}</h5>
        <p>${item.about}</p>
      </div>
      <div class="person-right">
        <div class="profile-right">
          <img src=${item.image} alt="">
          <div class="person-link">
          <a href="#">${item.social[0]}</a>
          <br>
          <a href="#">${item.social[1]}</a>
          </div>
        </div>
      </div>
    </div>`
  });
  displayMenu = displayMenu.join("");

  peopleSec.innerHTML = displayMenu;
});
