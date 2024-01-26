/* აქედან შესაძლებელია პარტნიორების დინამიურად დამატება,
   სლაიდერს გვერდები ემატება პარტნიორების რაოდენობის მიხედვით, ყოველ 3 პარტნიორზე თითო გვერდი */

/* ------ პარტნიორები დინამიურად ------ */

const partnersData = [
  { name: "Partner 1", image: "images/partners/space.png" },
  { name: "Partner 2", image: "images/partners/tegeta.png" },
  { name: "Partner 3", image: "images/partners/tnet.png" },
  { name: "Partner 4", image: "images/partners/usaid.png" },
  { name: "Partner 6", image: "images/partners/spectre.png" },
  { name: "Partner 8", image: "images/partners/ufc.png" },
];

/* ------ დასასრული ------ */

const partnersPerPage = 3;
const totalSlides = Math.ceil(partnersData.length / partnersPerPage);
const slides = [];
for (let i = 0; i < totalSlides; i++) {
  slides.push(
    partnersData.slice(i * partnersPerPage, (i + 1) * partnersPerPage)
  );
}
