let items = document.querySelectorAll("main .slider .image");
let images = document.querySelectorAll("main .slider .image img");
let headerLinkes = document.querySelectorAll("header .container ul li");
let pagination = document.querySelectorAll(".pagination span");
let galleryItems = document.querySelectorAll("main .gallery .container .item");
let zoomIcons = document.querySelectorAll(".zoom");


headerLinkes.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        headerLinkes.forEach(element => {
              element.classList.remove("active");
              if (e.currentTarget) {
                   e.currentTarget.classList.add("active");
              }
          });
      });
  });

function slider()
{
    let count = 0;
    const resitCount = 2;

    setInterval(() => {

        items.forEach((img) => {
                img.classList.remove("active");
            });

            count++;
            items[count].classList.add("active");

            // pagination
            pagination.forEach((span) => {
                span.classList.remove("active");
            });
            pagination[count].classList.add("active");
            // pagination

            if (count == resitCount)    
            count = -1;


    }, 3000)

}
slider();

window.onload = () => {
    setTimeout(() => {
        headerLinkes.forEach((li) => {
            li.style.bottom = "0";
        });
    }, 0);

    setTimeout(() => {
        document.querySelector("header .container ul li:first-child").classList.add("active");
    }, 2000);
}
// pagination

pagination.forEach((span) => {
    span.addEventListener("click", (e) => {

        pagination.forEach((el) => {
            el.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        count = e.currentTarget.dataset.num;

        items.forEach((item) => {
            item.classList.remove("active");
        });

        items[count].classList.add("active");

    });
});

function typingAnimation(letter, target) {

    let array = [];
    let selector = document.querySelector(target);
    let counter = 0;

    setTimeout(() => {
        setInterval(() => {
            array.push(letter[counter]);
            counter++;
            selector.textContent = array.join("");
        }, 100);

    }, 700)
}

galleryItems.forEach((box) => {

    box.addEventListener("click", (e) => {

        e.currentTarget.style.transform = "rotatey(-180deg)";

        if (e.currentTarget === galleryItems[0]) {
            if (document.querySelector(".coc h3").textContent == "") {
                typingAnimation("Cocnut", ".coc h3");
            }
            setTimeout(() => {
                zoomIcons[0].style.opacity = "1"
            }, 1000)
        }
        if (e.currentTarget === galleryItems[1]) {
            if (document.querySelector(".rom h3").textContent == "") {
                typingAnimation("Bomegranate", ".rom h3");
                setTimeout(() => {
                    zoomIcons[1].style.opacity = "1"
                }, 1000)
            }
        }
        if (e.currentTarget === galleryItems[2]) {
            if (document.querySelector(".lem h3").textContent == "") {
                typingAnimation("lemon", ".lem h3");
                setTimeout(() => {
                    zoomIcons[2].style.opacity = "1"
                }, 1000)
            }
        }
        if (e.currentTarget === galleryItems[3]) {
            if (document.querySelector(".flo h3").textContent == "") {
                typingAnimation("Chery", ".flo h3");
                setTimeout(() => {
                    zoomIcons[3].style.opacity = "1"
                }, 1000)
            }
        }
        if (e.currentTarget === galleryItems[4]) {
            if (document.querySelector(".ber h3").textContent == "") {
                typingAnimation("Cranberry", ".ber h3");
                setTimeout(() => {
                    zoomIcons[4].style.opacity = "1"
                }, 1000)
            }
        }
    });

});


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("front")) {
        e.target.parentElement.style.transform = "rotatey(-180deg)";
    }else if (e.target.parentElement.classList.contains("front")) {
        e.target.parentElement.parentElement.style.transform = "rotatey(-180deg)";
    }
    else if (!e.target.classList.contains("back") && !e.target.parentElement.classList.contains("back")) {
        galleryItems.forEach((box) => {
            box.style.transform = "rotate(0)";
        });
    }
});



let imgs = document.querySelectorAll(".overley img");

zoomIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        document.querySelector(".overley").style.display = "flex";
        imgs.forEach((img) => {
            if (e.currentTarget.dataset.count == img.dataset.count) {
                console.log(e.currentTarget.dataset.count)
                img.classList.add("active");
                setTimeout(() => {
                    img.style.right = "0";
                }, 200);
            }
        });
    });
});

document.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".overley")) {
        document.querySelector(".overley").style.display = "none";
        document.querySelector("img.active").style.right = "-900px";
        document.querySelector("img.active").classList.remove("active");
    }
});
