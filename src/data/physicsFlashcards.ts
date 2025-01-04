export const physicsFlashcards = [
  // Electric Charges and Fields
  {
    topic: "Electric Charge: Basic Properties",
    content: "Electric charge is a fundamental property of matter. Charges can be positive or negative. Like charges repel, unlike charges attract. Charge is conserved and quantized.",
    formula: "q = ne, \\text{ where n is an integer}",
    proportionality: [
      "F \\propto q_1q_2",
      "F \\propto \\frac{1}{r^2}"
    ]
  },
  {
    topic: "Coulomb's Law",
    content: "The electrostatic force between two point charges is directly proportional to the product of charges and inversely proportional to the square of distance between them.",
    formula: "F = k\\frac{q_1q_2}{r^2}",
    proportionality: [
      "k = \\frac{1}{4\\pi\\epsilon_0}",
      "\\epsilon_0 = 8.85 \\times 10^{-12} \\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}"
    ]
  },
  {
    topic: "Electric Field",
    content: "Electric field is the space around a charge where it exerts force on other charges. Field lines start from positive and end at negative charges.",
    formula: "E = \\frac{F}{q} = k\\frac{Q}{r^2}",
    proportionality: [
      "E \\propto Q",
      "E \\propto \\frac{1}{r^2}"
    ]
  },
  {
    topic: "Electric Field Lines Properties",
    content: "1. Start from +ve charge, end at -ve charge\n2. Never intersect\n3. Closer lines indicate stronger field\n4. Always perpendicular to equipotential surfaces",
    formula: "\\text{Number of lines} \\propto \\text{Magnitude of charge}"
  },
  {
    topic: "Electric Flux",
    content: "Electric flux is the measure of electric field lines passing through a surface. It's a scalar quantity.",
    formula: "\\Phi_E = E \\cdot A = EA\\cos\\theta",
    proportionality: [
      "\\Phi_E \\propto E",
      "\\Phi_E \\propto A\\cos\\theta"
    ]
  },
  {
    topic: "Gauss's Law",
    content: "The total electric flux through a closed surface is equal to 1/ε₀ times the total charge enclosed by the surface.",
    formula: "\\oint E \\cdot dA = \\frac{Q_{enc}}{\\epsilon_0}",
    proportionality: [
      "\\Phi_E = \\frac{Q}{\\epsilon_0}"
    ]
  },
  
  // Electrostatic Potential and Capacitance
  {
    topic: "Electric Potential",
    content: "Electric potential at a point is the work done per unit charge to move a test charge from infinity to that point.",
    formula: "V = \\frac{W}{q} = k\\frac{Q}{r}",
    proportionality: [
      "V \\propto Q",
      "V \\propto \\frac{1}{r}"
    ]
  },
  {
    topic: "Potential Energy of System of Charges",
    content: "The potential energy of a system of charges is the work done in assembling the charges by bringing them from infinity.",
    formula: "U = k\\frac{q_1q_2}{r}",
    proportionality: [
      "U \\propto q_1q_2",
      "U \\propto \\frac{1}{r}"
    ]
  },
  {
    topic: "Equipotential Surfaces",
    content: "Surfaces where electric potential is constant. Work done in moving charge along equipotential surface is zero.",
    formula: "W = qV_1 - qV_2 = 0 \\text{ (when }V_1 = V_2\\text{)}"
  },
  {
    topic: "Capacitance",
    content: "Ability of a conductor to store charge. Ratio of charge to potential difference.",
    formula: "C = \\frac{Q}{V}",
    proportionality: [
      "C \\propto A",
      "C \\propto \\frac{1}{d}"
    ]
  },
  {
    topic: "Parallel Plate Capacitor",
    content: "Two parallel conducting plates separated by a dielectric. Capacitance depends on area and separation.",
    formula: "C = \\frac{\\epsilon_0 A}{d}",
    proportionality: [
      "C \\propto A",
      "C \\propto \\frac{1}{d}"
    ]
  },
  {
    topic: "Energy Stored in Capacitor",
    content: "Work done in charging a capacitor is stored as electrostatic potential energy.",
    formula: "U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}",
    proportionality: [
      "U \\propto V^2",
      "U \\propto Q^2"
    ]
  },

  // Current Electricity
  {
    topic: "Electric Current",
    content: "Rate of flow of electric charge through a conductor. Measured in amperes.",
    formula: "I = \\frac{dQ}{dt}",
    proportionality: [
      "I \\propto V \\text{ (Ohm's Law)}",
      "I \\propto \\frac{1}{R}"
    ]
  },
  {
    topic: "Ohm's Law",
    content: "Current through a conductor is directly proportional to potential difference across it at constant temperature.",
    formula: "V = IR",
    proportionality: [
      "R = \\rho\\frac{l}{A}",
      "\\rho \\propto T \\text{ (for metals)}"
    ]
  },
  {
    topic: "Resistivity and Conductivity",
    content: "Resistivity is the electrical resistance offered by unit length and unit cross-section of a material.",
    formula: "\\rho = \\frac{RA}{l}",
    proportionality: [
      "\\sigma = \\frac{1}{\\rho}",
      "\\rho \\propto T \\text{ (for metals)}"
    ]
  },
  {
    topic: "Combination of Resistors",
    content: "Resistors can be combined in series or parallel to get equivalent resistance.",
    formula: "R_{series} = R_1 + R_2 + R_3",
    proportionality: [
      "\\frac{1}{R_{parallel}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}"
    ]
  },
  {
    topic: "Kirchhoff's Laws",
    content: "1. Junction Rule: Sum of currents entering = Sum of currents leaving\n2. Loop Rule: Sum of potential differences in a closed loop is zero",
    formula: "\\sum I_{in} = \\sum I_{out}"
  },
  {
    topic: "Electrical Power",
    content: "Rate of electrical energy transfer. Product of voltage and current.",
    formula: "P = VI = I^2R = \\frac{V^2}{R}",
    proportionality: [
      "P \\propto I^2",
      "P \\propto V^2"
    ]
  }

  // ... Continue with more chapters
];