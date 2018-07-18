// This is just an example,
// so you can safely delete all default props below

export default {
  skills: {
    title: 'Skills',
    subtitle: 'More skills',
    attr: {
      server: 'Server',
      performances: 'Performance',
      databases: 'Databases',
      seo: 'SEO Techniques',
      dev: 'Development Experience'
    }
  },
  languages: {
    title: 'Languages',
    attr: {
      es: 'Spanish',
      en: 'English',
      fr: 'French',
      it: 'Italian'
    }
  },
  personalInfo: {
    title: 'Personal Information',
    attr: {
      date: {
        label: 'Date of birth',
        sublabel: '12 September 1995'
      },
      address: {
        label: 'Address',
        sublabel: 'Venezuela, Nueva Esparta'
      },
      phoneNumber: {
        label: 'Phone number',
        sublabel: '+58 426 1998349'
      },
      nationality: {
        label: 'Nationality',
        sublabel: 'Spanish, Venezuelan'
      },
      motherLanguage: {
        label: 'Mother Language',
        sublabel: 'Spanish'
      }
    }
  },
  education: {
    title: 'Education',
    attr: {
      name: 'Name',
      country: 'Country',
      degree: 'Degree',
      system: 'Systems Engineering',
      year: 'Year of study'
    }
  },
  workExperience: {
    title: 'Work Experience',
    attr: {
      company: 'Company',
      position: 'Position',
      academia: {
        position: 'Intern Web Developer',
        period: 'April 2017 - December 2017',
        description: `
            <p>
              The company <strong>Grupo Leiros</strong> wanted to build an e-learning system for their employees. They wanted a website to create educational courses with dynamic content, tests and more.
            </p>
            <p>
              I worked alongside a programming team and we created the website using Ruby on Rails, postgres as database, and git as our version control system.
            </p>
        `
      },
      b2b: {
        position: 'Full-time Web Developer',
        period: 'January 2018 - April 2018',
        description: `
        <p>
        The company <strong>Grupo Leiros</strong> hired me to be a full-time web developer. My responsabilities were the following:
        </p>
        <ul>
          <li>
           Add new features to the site.
          </li>
          <li>
            Fix bugs.
          </li>
          <li>
            Implement testing code
          </li>
          <li>
              Improve the UI.
          </li>
        </ul>
        <p>
          The website was built with <strong> Ruby on Rails</strong> and <strong>NodeJs</strong>. In addition, I implemented <strong>VueJs</strong> to improve the UI's functionality.
        </p>
        `
      },
      unigleam: {
        position: 'Web Developer',
        period: 'August 2017 - Novemeber 2017',
        description: `
        <p>
          I was hired through Upwork to complete four different projects for this company, some of these tasks were:
        </p>
        <ul>
          <li>
           Redesigning the website's UI.
          </li>
          <li>
           Add new features to the website.
          </li>
          <li>
           Fix bugs in the webpage.
          </li>
        </ul>
        <p>
          This web site was built with <strong>Ruby on Rails</strong>. For this project I had to set up the <strong>heroku server</strong>, the <strong>sidekiq server</strong> with <strong>redis</strong>, create new tables for the database, work with the SEO, <strong>Google Analytics</strong> and more.
        </p>
        `
      },
      iqtest: {
        position: 'Partial-Time Web Developer',
        period: 'June 2018 - Current ',
        description: `
        <p>
          I was hired through Upwork to complete different projects for this company, one was the IQ Test page and I worked beside another company called <a style="text-decoration: none" href="https://marsbased.com/es/">Mars Based </a> who together organized issue on the <a style="text-decoration: none" href="http://github.com">Github</a> platform.
        </p>
        <p>
          In summary this project included several task, like the following:
        </p>
        <ul>
          <li>
           Redesigning the website's UI.
          </li>
          <li>
           Add new features to the website.
          </li>
          <li>
           Fix bugs in the webpage.
          </li>
          <li>
            Add payment gateway like 2checkout, Braintree and Stripe.
          </li>
          <li>
            And more work in progress...
          </li>
        </ul>
        <p>
          This web site was built with <strong>Ruby on Rails</strong>. For this project I had to work on their <strong>heroku server</strong>, work with the <strong>Sentry</strong> app, Circle Ci and more.
        </p>
        `
      },
      tdpost: {
        position: 'SEO Manager',
        period: 'June 2018 - July 2018',
        description: `
          <p>
            The company The Daily Post hired me to make a SEO optimization in their Wordpress website.
          </p>
          <p>
            I applied the best SEO techniques as XML sitemap, keyword Research, correct use of HTML tags, caching and many others.
          </p>
        `
      },
      tascolatam: {
        position: 'Web Developer',
        period: 'February 2018 - June 2018',
        description: `
        <p>
          The company <strong>Tas Automation</strong> wanted to build a website from scratch.
        </p>
        <p>
          Some of my responsabilities were:
        </p>
        <ul>
          <li>
            Setting up the server.
          </li>
          <li>
          Programming the back-end and front-end.
          </li>
          <li>
          Designing the UI for their web site.
          </li>
        </ul>
        <p>
          I decided to use <strong>VueJs</strong> and <strong>Ruby on Rails as API </strong>, and I recommend them to use <strong>Amazon Web Services</strong>.
        </p>
        `
      }
    }
  },
  certificates: {
    title: 'Certificates'
  },
  recommendations: {
    title: 'Recommendations',
    attr: {
      hassan: {
        comment: "As Javier's manager, I am pleased to confirm you that he is brilliant in his work, manages work with least supervision. He is great teamplayer and has very helpfull personality.",
        position: 'Project Manager'
      },
      valeria: {
        comment: "Javier is a reliable, hard-working, and extremely skilled web developer. He likes to implement the best technologies available to deliver a timely and productive website. I'd highly recommend him to anyone looking for a web developer.",
        position: 'Office Manager'
      },
      kenny: {
        comment: 'Javier is great and gets the job done!',
        position: 'Project Manager'
      },
      henry: {
        comment: 'Javier has done an excellent job, 100% recommended. No doubt we will return to work on a new project.',
        position: 'CEO'
      }
    }
  },
  hire: {
    title: 'Hire me',
    searching: 'Currently Searching for a Job',
    description: "Let's discuss your project",
    attr: {
      upwork: 'Hire me on Upwork',
      remote: 'Hire me on Remote',
      email: 'Hire me by email'
    }
  }
}
