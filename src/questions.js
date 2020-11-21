/*
gare du nord
gare de l'est
saint lazare
place de clichy
montparnasse
bastille
gare de lyon
concorde
opéra m8
pigalle
trocadero

jussieu
gambetta
invalides
gare d'austerlitz
Odéon
place d'italie

 */
export const questions = [
  {
    station_to_guess: "Gare Du Nord",
    hint: "G___ D_ N___",
    left_stations: [
      "La coureneueve - Aubervillier",
      "Plaine - Stade de France"
    ],
    right_stations: ["Chatelet Les Halles", "Saint Michel"],
    line_name: "rerB"
  },
  {
    station_to_guess: "Gare de l'est",
    hint: "G___ D_ L'___",
    left_stations: ["Barbès-Rochechouart", "Gare Du Nord"],
    right_stations: ["Chateau d'eau", "Strasbourg - Saint-Denis"],
    line_name: "m4"
  },
  {
    station_to_guess: "Belleville",
    hint: "B____v____",
    left_stations: ["Jaurés", "Colonel Fabien"],
    right_stations: ["Couronnes", "Ménilmontant"],
    line_name: "m2"
  },
  {
    station_to_guess: "Chatelet les halles",
    hint: "C_______ L__ H_____",
    left_stations: ["Madeleine", "Pyramides"],
    right_stations: ["Gare de Lyon", "Bercy"],
    line_name: "m14"
  },
  {
    station_to_guess: "Saint Lazare",
    hint: "S____ L_____",
    left_stations: ["Villier", "Europe"],
    right_stations: ["Havre - Caumartin", "Opéra"],

    line_name: "m3"
  },
  {
    station_to_guess: "Place de Clichy",
    hint: "P____ D_ C_____",
    left_stations: ["Villier", "Rome"],
    right_stations: ["Blanche", "Pigalle"],
    line_name: "m2"
  },
  {
    station_to_guess: "La défense",
    hint: "L_ D______",
    left_stations: ["Nantere-Préfécture"],
    right_stations: ["Charles de Gaulle - Ètoile"],
    line_name: "rerA"
  },
  {
    station_to_guess: "République",
    hint: "R______q__",
    left_stations: ["Gare de l'est", "Jacques-Bonsergent"],
    right_stations: ["Oberkamph", "Richard-Lenoir"],
    line_name: "m5"
  },
  {
    station_to_guess: "Bastille",
    hint: "Ba______",
    left_stations: ["Hotel de ville", "Saint-Paul"],
    right_stations: ["Gare de Lyon", "Reuilly-Diderot"],
    line_name: "m1"
  },
  {
    station_to_guess: "Jussieu",
    hint: "J__s___",
    left_stations: ["Pont Marie", "Sully-Morland"],
    right_stations: ["Place Monge", "Censier - Dauberton"],
    line_name: "m7"
  },
  {
    station_to_guess: "Place d'Italie",
    hint: "P____ d'______",
    left_stations: ["Censier - Daubenton", "Les Gobelins"],
    right_stations: ["Tolbiac", "Maison Blanche"],
    line_name: "m7"
  },
  {
    station_to_guess: "Odéon",
    hint: "O_é__",
    left_stations: ["Cité", "Saint-Michel"],
    right_stations: ["Saint-Germain-des-Prés", "Saint-Suplice"],
    line_name: "m4"
  },
  {
    station_to_guess: "Grand Boulevards",
    hint: "G____ B_________",
    left_stations: ["Chaussé d'Antin - La Fayette", "Richelieu Drouott"],
    right_stations: ["Bonne nouvelle", "Strasbourg - Saint-Denis"],
    line_name: "m9"
  }
];
