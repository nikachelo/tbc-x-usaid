/* აქედან შესაძლებელია პარტნიორების დინამიურად დამატება,
   სლაიდერს გვერდები ემატება პარტნიორების რაოდენობის მიხედვით, ყოველ 3 პარტნიორზე თითო გვერდი */

/* ------ პარტნიორები დინამიურად ------ */

const partnersData = [
  { name: "Usaid", image: "images/partners/usaid.png" },
  { name: "Space", image: "images/partners/space.png" },
  { name: "Tnet", image: "images/partners/tnet.png" },
  { name: "Tegeta", image: "images/partners/tegeta.png" },
  { name: "Spectre", image: "images/partners/spectre.png" },
  { name: "TBC", image: "images/partners/tbc.png" },
  { name: "UFC", image: "images/partners/ufc.png" },
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
