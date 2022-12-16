<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

After you're finished please remove all the comments and instructions!
-->

<div align="center">

  <img src="murple_logo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h2><b>car_cruise_rental</b></h2>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](https://powerful-citadel-47440.herokuapp.com/)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Author](#author)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [car_cruise_rental] <a name="about-project"></a>

> This is the car rental system built using ruby on rails and React js. The system helps you to reserve the car online and track your reservations.

*[car_cruise_rental]* enables you to have accurate records of your entire fleet in one place, which makes day-to-day running smooth and easy.
Without proper records, your business would be under the table, and no authority can audit you. You would not be able to get insurance, etc.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Describe the tech stack and include only the relevant sections that apply to your project.

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">Ruby On Rails</a></li>
    <li><a href="https://reactjs.org/">React js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> what you spend money on and how much you spend, you can see exactly where your cash is going and areas where you can cut back.

- *[Track your expenses]*

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Add a link to your deployed project.

- [Coming soon](https://powerful-citadel-47440.herokuapp.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> Describe how a new developer could make use of your project.

To get a local copy up and running, follow these steps.

### Prerequisites

In order to work on this project, you need to have the following dependencies installed:

<ul>
  <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
  <li><a href="https://www.postgresql.org/">Postgresql</a></li>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://yarnpkg.com/">yarn</a></li>
  <li><a href="https://rubyonrails.org/">Rails</a></li>
</ul>

<!--
Example command:

sh
 gem install rails

 -->

### Setup

Clone this repository to your desired folder:


sh
  git clone git@github.com:aron-helu/Budget-app.git
  cd Budget-app



### Commands to run

To get all the gems required for the project:


```
  bundle install
```

To install packages such as style linters:


```
  npm install
```

To check linters locally, use:

```
rubocop
```
```
npx stylelint "**/*.{css,scss}"
```


Once you have the project correctly set up, run:

```
rails db:migrate
```
- To run all migrations,

```
rails db:create
```
- To create the database for testing and for development, and insert some data into the database for you to visualize the changes:

- or run: 

```
rails db:seed
```
To use the inserted data in the seeds file


### Usage

To run the project, execute the following command:
 ```
 ./bin/dev
 ```
 - To start the application and open the application on

 ```
 localhost:5000
 ```

Finally, each time you make changes to the project, run

In the root folder to check the consistency of the app. 

### Run tests

To run tests, run the following command:
```
rspec spec
```
Please don't make changes to the tests unless completely necessary, and mention it in your PR description:

```
bundle exec rspec /spec
```

API DOCUMENTATION 
To run the api swagg tests, run the following command:
```
rails rswag:specs:swaggerize
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="Ntihinduka Alpha"></a>

> Mention all of the collaborators of this project.

:man_technologist: 👤 **Ntihinduka Alpha** :writing_hand: 

- GitHub: [githubhandle](https://github.com/AlphaNtihinduka)
- Twitter: [twitterhandle](https://twitter.com/@alphantihinduka)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/ntihinduka-alpha-81bb7b22a/) 

:Lady_technologist:  👤**Titilope Apuabi**
- GitHub: [@Eternalgratis](https://github.com/Eternalgratis)
- Twitter: [@eternalgratis](https://twitter.com/eternalgratis)
- LinkedIn: [Apuabi Titilope](https://www.linkedin.com/in/titilope-apuabi/)

:man_technologist: 👤 **Ntare Guy**

- GitHub: [@41hulk](https://github.com/41hulk)
- Twitter: [@ntare_guy]()
- LinkedIn: [@Ntare Guy](linkedin.com/in/ntare-guy)

:Lady_technologist:  👤 **Natasha Tatenda Chirombe**

- GitHub: [@NATASHA-ct]((https://github.com/NATASHA-ct)
- Twitter: [@NatashaChirombe]
- LinkedIn: [Natasha Chirombe](linkedin.com/in/natasha-chirombe-1531aa17b)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> Describe 1 - 3 features you will add to the project.

- Only the admin can add and delete the car.
- The Admin can upload the car from the local storage of the devise
- During sign up, the user can state the date of birth. And if below 18 years, the user can not reserve cars.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/AlphaNtihinduka/car_cruise_rental/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> Give credit to everyone who inspired your codebase.

I would like to thank...

- Original Design by: [Gregoire Vella](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign/modules/173005583)

- Microverse

- LazyCoders

- Coding Partners

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

> Add at least 2 questions new developers would ask when they decide to use your project.

- *[Question_1]*

  - [Answer_1]

- *[Question_2]*

  - [Answer_2]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). The [Creative Commons license of the design](https://creativecommons.org/licenses/by-nc/4.0/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
