const projects = [
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
    description: 'I was the first design hire and head of design at WalletConnect. Here I got to wear all\n' +
      '                        hats: I was responsible for the company rebranding and redesign of all web and printed\n' +
      '                        touch-points. I completely overhauled one of web3s most well known products and worked on\n' +
      '                        introducing completely new ones. I art directed WC\'s brand identity, helped shape its\n' +
      '                        vision and narrative.',
    slides: [
      'assets/images/zaptta/s1.PNG',
      'assets/images/zaptta/s2.PNG',
      'assets/images/zaptta/s3.PNG',
      // 'assets/images/zaptta/s4.PNG',
      // 'assets/images/zaptta/s5.PNG',
      'assets/images/zaptta/s6.PNG',
    ],
    links: [
      {
        title: 'App Store',
        url: 'https://google.com'
      },
      {
        title: 'Play Store',
        url: 'https://google.com'
      },
      {
        title: 'Homepage',
        url: 'https://zaptta.com'
      },
    ]
  },
  {
    title: 'Nexxar - Robot Car',
    duration: '2023',
    tags: [
      'Product Design',
      '3D Modelling',
      'Prototyping',
      'Robotics',
      'Mobile',
    ],
    description: 'I was the first design hire and head of design at WalletConnect. Here I got to wear all\n' +
      '                        hats: I was responsible for the company rebranding and redesign of all web and printed\n' +
      '                        touch-points. I completely overhauled one of web3s most well known products and worked on\n' +
      '                        introducing completely new ones. I art directed WC\'s brand identity, helped shape its\n' +
      '                        vision and narrative.',
    slides: [
      'assets/images/nexxar/s1.png',
      'assets/images/nexxar/s2.png',
    ],
    links: [
      {
        title: 'Homepage',
        url: 'https://google.com'
      },
    ]
  },
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
  {
    title: 'Razorlabs',
    duration: '2022—2023',
    tags: [
      'UI/UX Design',
      'Web',
    ],
    description: 'I was the first design hire and head of design at WalletConnect. Here I got to wear all\n' +
      '                        hats: I was responsible for the company rebranding and redesign of all web and printed\n' +
      '                        touch-points. I completely overhauled one of web3s most well known products and worked on\n' +
      '                        introducing completely new ones. I art directed WC\'s brand identity, helped shape its\n' +
      '                        vision and narrative.',
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
    projects,
  }))
})

function carousel(slides) {
  return {
    slides,
    splide: null,

    init() {
      this.splide = new Splide(this.$refs.splide, {
        rewind: true,
        padding: '0.5rem',
        drag: 'free',
        snap: true,
        height: '93vh',
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
        this.splide && this.splide.add('<li class="splide__slide mr-2"><img class="h-full rounded-2xl" src="' + slide + '" alt=""/></li>');
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




const player = document.querySelector("lottie-player");

(function () {
  const fixedElement = document.querySelector('.foo');
  let windowHeight = window.innerHeight;
  const fixedElementHeight = fixedElement.offsetHeight;
  let endPosition = windowHeight - fixedElementHeight;
  // let endPosition = windowHeight - fixedElementHeight;

  window.addEventListener('scroll', function () {
    const currentPosition = window.scrollY;
    const newPosition = (currentPosition / (document.body.clientHeight - windowHeight)) * endPosition;
    const transformFactor = currentPosition / (document.body.clientHeight - windowHeight);
    const translateY = (newPosition - fixedElement.clientHeight) * transformFactor;

    fixedElement.style.transform = `translateY(${translateY}px)`;
  });

  window.addEventListener('resize', function () {
    windowHeight = window.innerHeight;
    endPosition = windowHeight - fixedElementHeight;
  });

  // Create a FontFaceObserver instance for your font
  const myFont = new FontFaceObserver('Unbounded');

  // Check if the font has loaded
  myFont.load().then(function () {
    fitty('.fit');
    player && player.play();
    document.querySelector('.foo').classList.remove('opacity-0');
  });

})();
