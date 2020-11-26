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
    station_to_guess: "Gare du Nord",
    hint: "G___ d_ N___",
    left_stations: ["La Courneuve - Aubervilliers", "Plaine - Stade de France"],
    right_stations: ["Châtelet - Les Halles", "Saint-Michel"],
    line_name: "rerB"
  },
  {
    station_to_guess: "Gare de l'Est",
    hint: "G___ d_ L'___",
    left_stations: ["Barbès - Rochechouart", "Gare Du Nord"],
    right_stations: ["Château d'Eau", "Strasbourg - Saint-Denis"],
    line_name: "m4"
  },
  {
    station_to_guess: "Belleville",
    hint: "B____v____",
    left_stations: ["Jaurès", "Colonel Fabien"],
    right_stations: ["Couronnes", "Ménilmontant"],
    line_name: "m2"
  },
  {
    station_to_guess: "Châtelet Les Halles",
    hint: "C_______ L__ H_____",
    left_stations: ["Madeleine", "Pyramides"],
    right_stations: ["Gare de Lyon", "Bercy"],
    line_name: "m14"
  },
  {
    station_to_guess: "Saint Lazare",
    hint: "S____ L_____",
    left_stations: ["Villiers", "Europe"],
    right_stations: ["Havre - Caumartin", "Opéra"],

    line_name: "m3"
  },
  {
    station_to_guess: "Place de Clichy",
    hint: "P____ D_ C_____",
    left_stations: ["Villiers", "Rome"],
    right_stations: ["Blanche", "Pigalle"],
    line_name: "m2"
  },
  {
    station_to_guess: "La Défense",
    hint: "L_ D______",
    left_stations: ["Nanterre-Préfecture"],
    right_stations: ["Charles de Gaulle - Étoile"],
    line_name: "rerA"
  },
  {
    station_to_guess: "République",
    hint: "R______q__",
    left_stations: ["Gare de l'Est", "Jacques Bonsergent"],
    right_stations: ["Oberkampf", "Richard-Lenoir"],
    line_name: "m5"
  },
  {
    station_to_guess: "Bastille",
    hint: "Ba______",
    left_stations: ["Hôtel de Ville", "Saint-Paul"],
    right_stations: ["Gare de Lyon", "Reuilly-Diderot"],
    line_name: "m1"
  },
  {
    station_to_guess: "Jussieu",
    hint: "J__s___",
    left_stations: ["Pont Marie", "Sully - Morland"],
    right_stations: ["Place Monge", "Censier - Daubenton"],
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
    right_stations: ["Saint-Germain-des-Prés", "Saint-Sulpice"],
    line_name: "m4"
  },
  {
    station_to_guess: "Grands Boulevards",
    hint: "G_____ B_________",
    left_stations: ["Chaussée d'Antin - La Fayette", "Richelieu - Drouot"],
    right_stations: ["Bonne Nouvelle", "Strasbourg - Saint-Denis"],
    line_name: "m9"
  },
  {
    station_to_guess: "Paris-Austerlitz",
    hint: "P____-Au________",
    left_stations: ["Musée d'Orsay", "St-Michel"],
    right_stations: ["Bibliothèque François Mitterrand", "Ivry sur Seine"],
    line_name: "rerC"
  },
  {
    station_to_guess: "Montparnasse - Bienvenüe",
    hint: "M___p_______ - Bi_______",
    left_stations: ["Sèvres - Lecourbe", "Pasteur"],
    right_stations: ["Edgar Quinet", "Raspail"],
    line_name: "m6"
  }
];
