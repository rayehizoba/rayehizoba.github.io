const projects = [
  // Zaptta
  {
    title: 'Zaptta',
    duration: '2023',
    tags: [
      'iOS',
      'Android',
      'Admin Dashboard',
      'Push Notification',
      'Payment Integration',
    ],
    description: 'As a highly skilled full-stack developer, I initiated and successfully executed the creation of ' +
      'ZAPTTA\'s web and mobile applications on a freelance basis. My responsibilities included developing and ' +
      'implementing a real-time appointment broadcasting system, which has significantly streamlined operations and ' +
      'increased customer satisfaction. Furthermore, I continuously maintain and enhance the system with cutting-edge ' +
      'features to meet evolving business needs.',
    slides: [
      'assets/images/zaptta/2688x1242bb.png',
      'assets/images/zaptta/2688x1242bb1.png',
      'assets/images/zaptta/1242x2688bb.png',
      'assets/images/zaptta/1242x2688bb1.png',
      'assets/images/zaptta/1242x2688bb2.png',
      'assets/images/zaptta/2688x1242bb3.png',
      'assets/images/zaptta/1242x2688bb (1).png',
      'assets/images/zaptta/1242x2688bb (2).png',
      'assets/images/zaptta/1242x2688bb (3).png',
      'assets/images/zaptta/1242x2688bb (4).png',
    ],
    links: [
      {
        title: 'App Store',
        url: 'https://zaptta.com/help'
      },
      {
        title: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.zaptta'
      },
      // {
      //   title: 'Homepage',
      //   url: 'https://zaptta.com'
      // },
    ]
  },
  // Nexxar - Robot Car
  // {
  //   title: 'Nexxar - Robot Car',
  //   duration: '2023',
  //   tags: [
  //     'Product Design',
  //     '3D Modelling',
  //     'Prototyping',
  //     'Robotics',
  //     'Mobile',
  //   ],
  //   description: 'I was the first design hire and head of design at WalletConnect. Here I got to wear all\n' +
  //     '                        hats: I was responsible for the company rebranding and redesign of all web and printed\n' +
  //     '                        touch-points. I completely overhauled one of web3s most well known products and worked on\n' +
  //     '                        introducing completely new ones. I art directed WC\'s brand identity, helped shape its\n' +
  //     '                        vision and narrative.',
  //   slides: [
  //     'assets/images/nexxar/s1.png',
  //     'assets/images/nexxar/s2.png',
  //   ],
  //   links: [
  //     {
  //       title: 'Homepage',
  //       url: 'https://google.com'
  //     },
  //   ]
  // },
  // {
  //   title: 'Hydroponic Farm',
  //   duration: '2023',
  //   tags: [
  //     'Product Design',
  //     '3D Modelling',
  //     'Prototyping',
  //   ],
  //   description: '',
  //   slides: [
  //     'assets/images/a1/s1.jpeg',
  //   ],
  //   links: [
  //     {
  //       title: 'Homepage',
  //       url: 'https://google.com'
  //     },
  //   ]
  // },
  // IA Learn
  {
    title: 'Immunization Academy\'s IA Learn',
    duration: '2021—2023',
    tags: [
      'E-Learning',
      'Android',
      'Web',
    ],
    description: 'Train your immunization team in 15 minutes per day — with an app. ' +
      'The IA Learn app enables countries to build the capacity of EPI staff ' +
      'through short instructional videos and tests, taking just 15 minutes per session. ' +
      'Unlike traditional training, the IA Learn app increases skill and knowledge retention over time ' +
      'and reduces disruption to work. It puts knowledge right into people\'s hands. ' +
      'With a library of hundreds of training videos to choose from, ' +
      'IA Learn can be customized to target a country\'s performance gaps -- and measurably improve performance.',
    slides: [
      'assets/images/ia_learn/s1.webp',
      'assets/images/ia_learn/s2.webp',
      'assets/images/ia_learn/s3.png',
      'assets/images/ia_learn/s5.webp',
      'assets/images/ia_learn/s4.webp',
    ],
    links: [
      {
        title: 'Homepage',
        url: 'https://immunizationacademy.com/en/learn_android_app'
      },
      {
        title: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.bullcitylearning.ialearn'
      }
    ]
  },
  // RazorLabs
  {
    title: 'Razorlabs',
    duration: '2022—2023',
    tags: [
      'UI/UX Design',
      'Web',
    ],
    description: 'As the co-founder and lead developer of Razorlabs, my top priority was establishing our online ' +
      'presence. We take pride in delivering some of the best and most thoughtful tech products in the tech industry, ' +
      'even as a young and upcoming agency.',
    slides: [
      'assets/images/razorlabs/IMG_1103.PNG',
      'assets/images/razorlabs/Screenshot 2023-04-08 at 4.26.05 PM.png',
      'assets/images/razorlabs/IMG_1104.PNG',
      'assets/images/razorlabs/IMG_1105.PNG',
      'assets/images/razorlabs/IMG_1106.PNG',
      'assets/images/razorlabs/Screenshot 2023-04-08 at 4.26.30 PM.png',
    ],
    links: [
      {
        title: 'Homepage',
        url: 'https://razorlabs.tech'
      }
    ]
  }
];

document.addEventListener('alpine:init', () => {
  Alpine.data('page', () => ({
    email_url: 'rayehizoba@gmail.com',
    resume_url: null,
    wallet_url: null,
    github_url: 'https://github.com/rayehizoba',
    projects,

    init() {
      new Splide(this.$refs.marquee, {
        type: 'loop',
        drag: 'free',
        pagination: false,
        arrows: false,
        height: '2rem',
        focus: 'center',
        autoWidth: true,
        autoScroll: {
          speed: 1,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      }).mount(window.splide.Extensions);

      // Create a FontFaceObserver instance for your font
      const myFont = new FontFaceObserver('Unbounded');
      const player = document.querySelector("lottie-player");

      // Check if the font has loaded
      myFont.load().then(function () {
        fitty('.fit');
        player && player.play();
        document.querySelector('.js-fit-group').classList.remove('opacity-0');

        (() => {
          const fixedElement = document.querySelector('.js-fit-group');
          let windowHeight = window.innerHeight;
          const fixedElementHeight = fixedElement.offsetHeight;
          const lastFooterElement = document.querySelector('footer:last-of-type');
          const lastFooterElementHeight = lastFooterElement.clientHeight;
          let endPosition = windowHeight - (lastFooterElementHeight - fixedElementHeight);

          window.addEventListener('scroll', function () {
            const currentPosition = window.scrollY;
            const newPosition = (currentPosition / (document.body.clientHeight - windowHeight)) * endPosition;
            const transformFactor = currentPosition / (document.body.clientHeight - windowHeight);
            const translateY = (newPosition - fixedElement.clientHeight) * transformFactor;

            fixedElement.style.transform = `translateY(${translateY}px)`;
          });

          window.addEventListener('resize', function () {
            windowHeight = window.innerHeight;
            endPosition = windowHeight - (lastFooterElementHeight - fixedElementHeight);
          });
        })();
      });
    }
  }))
})

function carousel(slides) {
  return {
    slides,
    splide: null,

    init() {
      this.splide = new Splide(this.$refs.splide, {
        // lazyLoad: 'nearby',
        rewind: true,
        padding: '0.5rem',
        drag: 'free',
        snap: true,
        height: '85vh',
        autoWidth: true,
        arrows: false,
        pagination: false,
        breakpoints: {
          640: {
            snap: false,
          },
        }
      });
      this.splide && this.splide.mount();
      slides.forEach(slide => {
        this.splide && this.splide.add(
          '<li class="splide__slide mr-2">' +
          '<img class="h-full rounded-2xl" src="' + slide + '" data-splide-lazy="' + slide + '" alt=""/>' +
          '</li>'
        );
      });
    },

    onPressNext() {
      this.splide && this.splide.go('>');
    },

    onPressPrevious() {
      this.splide && this.splide.go('<');
    }
  }
}
