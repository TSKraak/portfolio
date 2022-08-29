import gemeenteamsterdam from "../../data/images/gemeente-amsterdam.png";
import deltalloyd from "../../data/images/deltalloyd.png";
import sineth from "../../data/images/sineth.svg";
import AVB from "../../data/images/AVB.jpeg";
import codaisseur from "../../data/images/codaisseur.svg";
import capgemini from "../../data/images/capgemini.jpeg";
import rijksoverheid from "../../data/images/rijksoverheid.png";
import leaves from "../../data/images/leaves.png";
import easycoding from "../../data/images/easycoding.png";
import rijksportaal from "../../data/images/rijksportaal.jpeg";

export const projects = [
  {
    align: "right",
    project: "PRO - Dutch Government websites",
    image: rijksoverheid,
    company: "Ministerie van Algemene Zaken",
    description:
      "Improving, maintaining and upgrading the websites of the Dutch government. This included setting up the MVP CI/CD Pipeline and upgrading the Bloomreach CMS system",
    url: "",
  },
  {
    align: "left",
    project: "Rijksportaal - Intranet Dutch Government employees",
    image: rijksportaal,
    company: "Ministerie van Binnenlandse Zaken",
    description:
      "Building the new intranet for the Dutch government using Bloomreach CMS headless.",
    url: "",
  },
  {
    align: "right",
    project: "Leaves",
    image: leaves,
    company: "Codaisseur Academy",
    description: `Final assignment after a 3 month academy to think of a concept and create a complete website from scratch within 1 week. 
      Leaves is a social platform where you can share your (favorite) plants with others users and friends. On the homepage popular suggestions are displayed and on the 'Leaves' page you can see all plants users added to share with the community.`,
    url: "https://leaves-community.netlify.app/",
  },
  {
    align: "left",
    project: "Easy Coding",
    image: easycoding,
    company: "Codaisseur Academy",
    description: `Group assignment in the final weeks of the academy to create a website from scratch with 3 people in 1 week.
    This is an app created for developers who need help how to implement a new feature or dependency. Through this app a user can upload a post to help others code in the easiest possible way, or even request a matter that they have trouble with, so eventually another user can and post something about it.`,
    url: "https://easy-coding.netlify.app/",
  },
];

export const experience = [
  {
    title: "Digital Engineer - Full-stack developer",
    logo: capgemini,
    company: "Capgemini",
    period: `Feb 2021 - Present · ${getMonthDifference(
      new Date("2021-02-01"),
      new Date()
    )} months`,
    description:
      "Working for different clients as a consultant and full-stack developer. See 'Projects' for more information.",
  },
  {
    title: "Career transition",
    logo: codaisseur,
    company: "Career Break",
    period: "Jul 2020 - Feb 2021 · 8 months",
    description:
      "Taking a bootcamp at Codaisseur and online courses to switch career to Full-Stack Developer.",
  },
  {
    title: "Building Engineer",
    logo: AVB,
    company: "AVB (Amsterdams Vastgoed Beheer)",
    period: "Sep 2018 - Jul 2020 · 1 yr 11 months",
    description:
      "Preparing and applying permits for building/renovation projects, including architectural drawings and discussing plans and drawings with clients.",
  },
  {
    title: "Project Manager",
    logo: sineth,
    company: "Sineth Engineering B.V.",
    period: "Jun 2015 - Aug 2018 · 3 yrs 3 months",
    description:
      "Supervising building projects are carried out as planned and consulting contractors, including maintaining contact with clients and budget management.",
  },
  {
    title: "Underwriter Technical Insurances CAR",
    logo: deltalloyd,
    company: "Delta Lloyd, Technische Verzekeringen",
    period: "Feb 2012 - May 2015 · 3 yrs 4 months",
    description: `Assessing, determining conditions and accepting insurances for the construction of buildings and installations. 
    Implementing a new program to make quotations and keep the database of insurances for the company using Scrum method.`,
  },
  {
    title: "Inspecteur Bouwen & Wonen",
    logo: gemeenteamsterdam,
    company: "Gemeente Amsterdam, Stadsdeel Centrum · Full-time",
    period: "Jul 2011 - Feb 2012 · 8 months",
    description:
      "Checking the condition of buildings/housing, state of the construction/fundament and checking building projects are following the regulations in Amsterdam.",
  },
];

function getMonthDifference(startDate, endDate) {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
}
