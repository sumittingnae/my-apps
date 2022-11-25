 let menu = document.querySelector('#menu-bar');
      let nav = document.querySelector('.nav');

      menu.onclick = () => {

        menu.classList.toggle('fa-times');
        nav.classList.toggle('active');

      }

      window.onscroll = () => {

        menu.classList.remove('fa-times');
        nav.classList.remove('active');

        if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
        } else {
          document.querySelector('#scroll-top').classList.remove('active');
        }

      }
