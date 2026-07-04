// ============================================================
// data.js — curated content (satisfies "Your Own Content" requirement)
// 15 real entries, written by hand — no placeholder text.
// Exported as ES6 modules so index.html and chronicles.html can import
// only what they need.
// ============================================================

export const emperors = [
  { name: "Augustus", reign: "27 BCE – 14 CE", dynasty: "Julio-Claudian",
    summary: "Ended a century of civil war and became Rome's first emperor, founding the political system that would govern the empire for centuries. He reorganized the army, the provinces, and the city of Rome itself, famously said to have found it brick and left it marble." },
  { name: "Tiberius", reign: "14 – 37 CE", dynasty: "Julio-Claudian",
    summary: "A capable general who consolidated Augustus's reforms but grew increasingly reclusive, ruling much of his later reign from the island of Capri. His suspicion of the Senate set a troubling precedent for treason trials under later emperors." },
  { name: "Caligula", reign: "37 – 41 CE", dynasty: "Julio-Claudian",
    summary: "Began his reign popular but is remembered for erratic and increasingly autocratic behavior that alienated the Senate and the Praetorian Guard alike. He was assassinated by his own guard after less than four years in power." },
  { name: "Claudius", reign: "41 – 54 CE", dynasty: "Julio-Claudian",
    summary: "Underestimated because of a physical disability, he proved an effective administrator who expanded the empire's bureaucracy and initiated the conquest of Britain in 43 CE. His reign shows how competent governance mattered more than public image." },
  { name: "Nero", reign: "54 – 68 CE", dynasty: "Julio-Claudian",
    summary: "The last Julio-Claudian emperor, whose reign is associated with artistic ambition, the Great Fire of Rome in 64 CE, and the persecution of early Christians. His suicide in 68 CE triggered the civil wars of the Year of the Four Emperors." },
  { name: "Vespasian", reign: "69 – 79 CE", dynasty: "Flavian",
    summary: "Restored stability after the Year of the Four Emperors and founded the Flavian dynasty on the strength of a pragmatic, soldier's reputation. He began construction of the Colosseum, funded in part by the spoils of the Jewish–Roman War." },
  { name: "Trajan", reign: "98 – 117 CE", dynasty: "Nerva–Antonine",
    summary: "Presided over the empire's greatest territorial extent, conquering Dacia and pushing into Mesopotamia. Later generations of emperors were formally wished to be 'more fortunate than Augustus, better than Trajan.'" },
  { name: "Hadrian", reign: "117 – 138 CE", dynasty: "Nerva–Antonine",
    summary: "Reversed Trajan's eastern expansion in favor of consolidating defensible borders, most famously building Hadrian's Wall across northern Britain. He toured the provinces extensively, investing heavily in architecture and Greek culture." },
  { name: "Antoninus Pius", reign: "138 – 161 CE", dynasty: "Nerva–Antonine",
    summary: "Ruled over one of the empire's longest stretches of internal peace, rarely leaving Italy and governing largely through correspondence with provincial officials. His stable, low-drama reign is often cited as the high point of the Pax Romana." },
  { name: "Marcus Aurelius", reign: "161 – 180 CE", dynasty: "Nerva–Antonine",
    summary: "A Stoic philosopher-emperor who spent much of his reign defending the Danube frontier against Germanic tribes, chronicled in his personal writings, the Meditations. His death is traditionally seen as the end of the Pax Romana." },
  { name: "Commodus", reign: "180 – 192 CE", dynasty: "Nerva–Antonine",
    summary: "Broke with the practice of adopting capable successors by taking the throne as Marcus Aurelius's biological son, and became infamous for performing personally as a gladiator. His assassination plunged Rome back into civil conflict." },
  { name: "Diocletian", reign: "284 – 305 CE", dynasty: "Tetrarchy",
    summary: "Ended the Crisis of the Third Century by splitting the empire's administration among four co-rulers in the Tetrarchy, and pushed through sweeping military and economic reforms. He is also remembered for the last and most severe empire-wide persecution of Christians." },
  { name: "Constantine", reign: "306 – 337 CE", dynasty: "Constantinian",
    summary: "Reunified the empire under a single ruler, legalized Christianity through the Edict of Milan, and founded Constantinople as a new eastern capital. His reign reshaped both the political and religious trajectory of the empire for a thousand years." },
  { name: "Julian", reign: "361 – 363 CE", dynasty: "Constantinian",
    summary: "Known as 'the Apostate' for attempting to reverse Constantine's Christianization and restore traditional Roman religion. A capable general and administrator, his brief reign ended when he was killed campaigning against Persia." },
  { name: "Justinian", reign: "527 – 565 CE", dynasty: "Justinian (Eastern)",
    summary: "Ruling from Constantinople, he temporarily reconquered much of the western Mediterranean, codified Roman law in the Corpus Juris Civilis, and built the Hagia Sophia. His reign is often treated as the last great flowering of a unified Roman world." }
];

export const conflicts = {
  early: {
    label: "The Republic & Rise",
    items: [
      { name: "The Punic Wars", date: "264 – 146 BCE",
        description: "Three wars against Carthage, including Hannibal's famous crossing of the Alps, that ended with Rome's total destruction of its rival and control of the western Mediterranean." },
      { name: "The Conquest of Greece", date: "214 – 146 BCE",
        description: "A series of Macedonian and Achaean wars through which Rome absorbed the Hellenistic kingdoms, adopting much of Greek culture, art, and philosophy in the process." }
    ]
  },
  pax: {
    label: "The Pax Romana & Expansion",
    items: [
      { name: "Caesar's Civil War", date: "49 – 45 BCE",
        description: "Julius Caesar's crossing of the Rubicon triggered a war against Pompey and the Senate that ended the Republic in all but name and set the stage for Augustus's empire." },
      { name: "Trajan's Dacian Wars", date: "101 – 106 CE",
        description: "Two brutal campaigns north of the Danube that conquered the kingdom of Dacia, funding a wave of construction in Rome and pushing the empire to its largest territorial extent." }
    ]
  },
  crisis: {
    label: "The Crisis & Restoration",
    items: [
      { name: "The Marcomannic Wars", date: "166 – 180 CE",
        description: "Years of grinding conflict against Germanic tribes along the Danube frontier, fought personally by Marcus Aurelius and often marked as the beginning of three centuries of border pressure." },
      { name: "The Aurelian Restoration", date: "270 – 275 CE",
        description: "Emperor Aurelian reunified an empire that had fractured into three competing states, earning the title 'Restorer of the World' and stabilizing Rome after the Crisis of the Third Century." }
    ]
  }
};