const projects = [
  // Zaptta
  {
    title: 'Zaptta',
    duration: '2023',
    tags: [
      'Android',
      'iOS',
      'Push Notification',
      'API Integration',
      'Payment Integration',
      'Admin Panel',
    ],
    description: 'Zaptta is a mobile application that helps contractors and service providers find jobs and ' +
        'leads in their preferred categories and geographic areas. Users sign up by entering their phone number, ' +
        'email, and business information, and select their preferred job categories and geographic areas. ' +
        'The app has online and offline modes, and users can only receive notifications for jobs in their ' +
        'chosen categories and areas. I worked on the project with Converge Groups as its founding engineer, ' +
        'laying the groundwork for the product.',
    slides: [
      'images/zaptta/2688x1242bb.png',
      'images/zaptta/2688x1242bb1.png',
      'images/zaptta/1242x2688bb.png',
      'images/zaptta/1242x2688bb1.png',
      'images/zaptta/1242x2688bb2.png',
      'images/zaptta/2688x1242bb3.png',
      'images/zaptta/1242x2688bb (1).png',
      'images/zaptta/1242x2688bb (2).png',
      'images/zaptta/1242x2688bb (3).png',
      'images/zaptta/1242x2688bb (4).png',
    ],
    links: [
      {
        title: 'App Store',
        url: 'https://apps.apple.com/us/app/zaptta/id1669126768'
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
  //     'images/nexxar/s1.png',
  //     'images/nexxar/s2.png',
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
  //     'images/a1/s1.jpeg',
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
      'Ed. Tech',
      'Android',
      'Multiple Languages',
      'Manager Dashboard',
    ],
    description: 'Train your immunization team in 15 minutes per day — with an app. ' +
      'The IA Learn app enables countries to build the capacity of EPI staff ' +
      'through short instructional videos and tests, taking just 15 minutes per session. ' +
      'Unlike traditional training, the IA Learn app increases skill and knowledge retention over time ' +
      'and reduces disruption to work. It puts knowledge right into people\'s hands. ' +
      'With a library of hundreds of training videos to choose from, ' +
      'IA Learn can be customized to target a country\'s performance gaps -- and measurably improve performance.',
    slides: [
      'images/ia_learn/s4.png',
      'images/ia_learn/s3.png',
      'images/ia_learn/s1.png',
      'images/ia_learn/s2.png',
      'images/ia_learn/s5.png',
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
      'Web',
      'Mobile',
      '3D Modelling',
      'UI/UX',
    ],
    description: 'Razorlabs.tech is a website for a technology company that provides software development, ' +
        'IT consulting, and outsourcing services to businesses. The company boasts a team of ' +
        'experienced professionals who are well-versed in the latest technologies and are committed ' +
        'to delivering high-quality solutions that meet clients\' unique needs. The website provides ' +
        'information on the company\'s services, portfolio, and team members, as well as contact information ' +
        'for potential clients to get in touch. The website\'s sleek and modern design is indicative of ' +
        'the company\'s focus on innovation and cutting-edge technology.',
    slides: [
      'images/razorlabs/IMG_1103.PNG',
      'images/razorlabs/Screenshot 2023-04-08 at 4.26.05 PM.png',
      'images/razorlabs/IMG_1104.PNG',
      'images/razorlabs/IMG_1105.PNG',
      'images/razorlabs/IMG_1106.PNG',
      'images/razorlabs/Screenshot 2023-04-08 at 4.26.30 PM.png',
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
    resume_url: 'https://docs.google.com/document/d/1KbM7c5e_sqq2gDrfPAuwa73zRTOt_IqJKf3lbx2k5fg/edit?usp=sharing',
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
        height: '80vh',
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
          '<li class="splide__slide bg-neutral-800/70 backdrop-blur-xl mr-2">' +
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
