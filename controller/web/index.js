const Projects = require("../../models/projects");
const Abouts = require("../../models/about");
const Services = require("../../models/services");
const News = require("../../models/news");
const Team = require("../../models/team");
const Articles = require("../../models/article");

exports.index = async (req, res) => {
  const projects = await Projects.find().sort({ date: -1 });
  const services = await Services.find().sort({ date: -1 });
  const news = await News.find().sort({ date: -1 });
  const teams = await Team.find().sort({ date: -1 });
  const articles = await Articles.find().sort({ createdAt: -1 });
  const abouts = await Abouts.find();
  res.render("./web/index", {
    title: "Habibulloh",
    layout: "./web_layout",
    lang: req.session.ulang,
    projects,
    abouts,
    services,
    news,
    teams,
    articles,
  });
};

exports.projects = async (req, res) => {
  const articles = await Articles.find().sort({ createdAt: -1 });
  res.render("./web/projects", {
    title: "Ma'ruzalar",
    layout: "./web_layout",
    lang: req.session.ulang,
    articles,
  });
};

exports.projectsru = async (req, res) => {
  const projects = await Projects.find().sort({ date: -1 });
  res.render("./web/about", {
    title: "Biz haqimizda",
    layout: "./web_layout",
    lang: req.session.ulang,
    projects,
  });
};

exports.contact = async (req, res) => {
  res.render("./web/contact", {
    title: "Suv tozalash inshootlari | Stroy montaj invest",
    layout: "./web_layout",
    lang: req.session.ulang,
  });
};

exports.projectOne = async (req, res) => {
  const result = await Articles.findById({ _id: req.params.id });
  const articles = await Articles.find().sort({ createdAt: -1 });
  res.render("./web/article_one", {
    title: "Maqola",
    layout: "./web_layout",
    result,
    articles,
  });
};

exports.newsOne = async (req, res) => {
  const result = await News.findById({ _id: req.params.id });
  res.render("./web/news_one", {
    title: "Suv tozalash inshootlari | Stroy montaj invest",
    layout: "./web_layout",
    result,
  });
};

exports.servicesOne = async (req, res) => {
  const result = await Services.findById({ _id: req.params.id });
  const teams = await Team.find().sort({ date: -1 });
  res.render("./web/services_one", {
    title: "Suv tozalash inshootlari | Stroy montaj invest",
    layout: "./web_layout",
    result,
    teams,
  });
};

exports.teamOne = async (req, res) => {
  const result = await Team.findById({ _id: req.params.id });
  res.render("./web/team_one", {
    title: "Suv tozalash inshootlari | Stroy montaj invest",
    layout: "./web_layout",
    result,
  });
};
exports.errorMessage = async (req, res) => {
  res.render("./web/errorMessage", {
    title: "Suv tozalash inshootlari | Stroy montaj invest",
    layout: "./web_layout",
  });
};
