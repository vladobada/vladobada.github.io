const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar_link');
const progress = document.querySelector('.progress_bars_table');
const progressBarPercents = [85, 75, 55];

window.addEventListener("scroll", () => {
    mainFN();
});

const mainFN = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');   
            });
            navbarLinks[i].classList.add('change');
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress_procent").forEach((el, i) => {
          el.style.width = `${progressBarPercents[i]}%`;
          el.previousElementSibling.firstElementChild.textContent =
            progressBarPercents[i];
        });
      }
}

mainFN