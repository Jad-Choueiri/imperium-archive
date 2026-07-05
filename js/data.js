// ============================================================
// data.js — curated content (satisfies "Your Own Content" requirement)
// 15 real entries, written by hand — no placeholder text.
// Exported as ES6 modules so index.html and chronicles.html can import
// only what they need.
// ============================================================

export const emperors = [
  { name: "Augustus", reign: "27 BCE – 14 CE", dynasty: "Julio-Claudian", image: "augustus.jpg",
    summary: "Ended a century of civil war and became Rome's first emperor, founding the political system that would govern the empire for centuries. He reorganized the army, the provinces, and the city of Rome itself, famously said to have found it brick and left it marble.",
    funFact: "His title 'Augustus' became a permanent part of the imperial office itself — every later emperor took it on, regardless of bloodline.",
    bio: [
      "Born Gaius Octavius, he was Julius Caesar's great-nephew and adopted heir, inheriting both his name and his unfinished war. After defeating Mark Antony and Cleopatra at Actium in 31 BCE, he became the unrivaled master of the Roman world at just 32 years old.",
      "Rather than declare himself king, a title Romans still despised after centuries of Republic, he styled himself 'first citizen' while quietly holding every meaningful power in the state. His 41-year reign rebuilt Rome's institutions, its army, and its skyline, setting the template every emperor after him would follow."
    ] },
  { name: "Tiberius", reign: "14 – 37 CE", dynasty: "Julio-Claudian", image: "tiberius.jpg",
    summary: "A capable general who consolidated Augustus's reforms but grew increasingly reclusive, ruling much of his later reign from the island of Capri. His suspicion of the Senate set a troubling precedent for treason trials under later emperors.",
    funFact: "He spent his final decade never once returning to Rome, governing the empire entirely by letter from Capri.",
    bio: [
      "Augustus's stepson and reluctant heir, Tiberius was a proven military commander who never wanted the throne and made little secret of it. His early reign was competent and financially disciplined, leaving the treasury far richer than he found it.",
      "As he aged, he withdrew almost entirely from public life, retreating to Capri in 26 CE and leaving Rome's governance to the ambitious Praetorian prefect Sejanus. That absence, and the paranoid treason trials that followed, cast a long shadow over how later generations remembered him."
    ] },
  { name: "Caligula", reign: "37 – 41 CE", dynasty: "Julio-Claudian", image: "caligula.jpg",
    summary: "Began his reign popular but is remembered for erratic and increasingly autocratic behavior that alienated the Senate and the Praetorian Guard alike. He was assassinated by his own guard after less than four years in power.",
    funFact: "His assassination in 41 CE was the first time the Praetorian Guard, meant to protect the emperor, was responsible for killing one.",
    bio: [
      "The son of the beloved general Germanicus, Caligula took the throne to genuine public celebration after Tiberius's death. A severe illness just months into his reign is often cited by ancient historians as the turning point after which his behavior grew erratic and increasingly tyrannical.",
      "He emptied the treasury on lavish building projects and personal extravagance, clashed openly with the Senate, and reportedly demanded to be worshipped as a living god. His own guards ended his reign in 41 CE, plunging the succession into brief chaos before his uncle Claudius was found and installed."
    ] },
  { name: "Claudius", reign: "41 – 54 CE", dynasty: "Julio-Claudian", image: "claudius.jpg",
    summary: "Underestimated because of a physical disability, he proved an effective administrator who expanded the empire's bureaucracy and initiated the conquest of Britain in 43 CE. His reign shows how competent governance mattered more than public image.",
    funFact: "He personally oversaw the construction of a new artificial harbor at Ostia, easing Rome's chronic grain shortages.",
    bio: [
      "Claudius stammered, limped, and was treated as an embarrassment by his own family for most of his life, kept away from public office. That very obscurity may have saved him during Caligula's purges, and it was the Praetorian Guard, not the Senate, who placed him on the throne in 41 CE.",
      "He turned out to be a shrewd, hands-on administrator, expanding Rome's civil service, reforming the courts, and personally launching the invasion of Britain in 43 CE, a province no emperor before him had managed to conquer."
    ] },
  { name: "Nero", reign: "54 – 68 CE", dynasty: "Julio-Claudian", image: "nero.jpg",
    summary: "The last Julio-Claudian emperor, whose reign is associated with artistic ambition, the Great Fire of Rome in 64 CE, and the persecution of early Christians. His suicide in 68 CE triggered the civil wars of the Year of the Four Emperors.",
    funFact: "After the Great Fire, he built the extravagant Domus Aurea (Golden House) over the cleared land, fueling rumors he'd started the blaze himself.",
    bio: [
      "Nero came to power at 16 under the guidance of his mother Agrippina and the philosopher Seneca, and his early reign was genuinely well-regarded. He increasingly prioritized his own artistic ambitions, performing publicly as a singer and actor, which scandalized Rome's elite.",
      "The Great Fire of 64 CE devastated much of the city, and rumors that he'd started it to clear land for his palace stuck for centuries. He blamed Rome's Christian community instead, launching the first state-sponsored persecution against them. Rebellions across the provinces forced his suicide in 68 CE, ending the dynasty Augustus had founded."
    ] },
  { name: "Vespasian", reign: "69 – 79 CE", dynasty: "Flavian", image: "vespasian.jpg",
    summary: "Restored stability after the Year of the Four Emperors and founded the Flavian dynasty on the strength of a pragmatic, soldier's reputation. He began construction of the Colosseum, funded in part by the spoils of the Jewish–Roman War.",
    funFact: "He famously taxed public urinals, reportedly telling critics 'pecunia non olet' — money doesn't smell.",
    bio: [
      "A career soldier from a modest, non-aristocratic family, Vespasian rose through the ranks commanding legions in Britain and then suppressing the Jewish rebellion in Judea. When the empire fractured into civil war after Nero's death, his own troops declared him emperor in 69 CE.",
      "He proved a practical, unglamorous ruler focused on refilling an empty treasury and rebuilding public trust in the office itself. Construction began under him on the Flavian Amphitheatre, the building the world now calls the Colosseum, funded largely by the spoils of his Judean campaign."
    ] },
  { name: "Trajan", reign: "98 – 117 CE", dynasty: "Nerva–Antonine", image: "trajan.jpg",
    summary: "Presided over the empire's greatest territorial extent, conquering Dacia and pushing into Mesopotamia. Later generations of emperors were formally wished to be 'more fortunate than Augustus, better than Trajan.'",
    funFact: "Trajan's Column in Rome still stands today, its spiral relief carving depicting his entire Dacian campaign in sequence.",
    bio: [
      "Trajan was the first emperor born outside Italy, from a Roman family settled in Hispania, and he came to power through adoption by the elderly Nerva rather than bloodline. A career military commander, he spent much of his reign personally leading campaigns rather than governing from Rome.",
      "His conquest of Dacia brought enormous wealth into the empire, funding a wave of public building, while his later eastern campaigns pushed Roman territory to its largest extent ever, briefly reaching the Persian Gulf before his death in 117 CE."
    ] },
  { name: "Hadrian", reign: "117 – 138 CE", dynasty: "Nerva–Antonine", image: "hadrian.jpg",
    summary: "Reversed Trajan's eastern expansion in favor of consolidating defensible borders, most famously building Hadrian's Wall across northern Britain. He toured the provinces extensively, investing heavily in architecture and Greek culture.",
    funFact: "He personally redesigned the Pantheon in Rome, whose concrete dome remains the largest unreinforced one in the world.",
    bio: [
      "Trajan's chosen successor and distant relative, Hadrian took a strikingly different approach to empire, abandoning the newly conquered eastern territories he judged indefensible. He spent over half his reign traveling the provinces in person rather than ruling from the capital.",
      "An enthusiastic architect and admirer of Greek culture, he commissioned the wall across northern Britain that still bears his name and rebuilt the Pantheon into the form still standing in Rome today."
    ] },
  { name: "Antoninus Pius", reign: "138 – 161 CE", dynasty: "Nerva–Antonine", image: "antoninus-pius.jpg",
    summary: "Ruled over one of the empire's longest stretches of internal peace, rarely leaving Italy and governing largely through correspondence with provincial officials. His stable, low-drama reign is often cited as the high point of the Pax Romana.",
    funFact: "He reigned for 23 years without personally commanding a single military campaign — almost unheard of for a Roman emperor.",
    bio: [
      "Adopted by Hadrian on the condition he in turn adopt Marcus Aurelius, Antoninus Pius inherited an empire already at its territorial peak and largely focused on preserving it rather than expanding it further. He earned his title 'Pius' for his loyalty in ensuring Hadrian's own deification by the Senate.",
      "His 23-year reign is remarkable mainly for how uneventful it was by Roman standards, no major wars, no succession crises, governed almost entirely by correspondence with provincial governors rather than personal travel or campaigning."
    ] },
  { name: "Marcus Aurelius", reign: "161 – 180 CE", dynasty: "Nerva–Antonine", image: "marcus-aurelius.jpg",
    summary: "A Stoic philosopher-emperor who spent much of his reign defending the Danube frontier against Germanic tribes, chronicled in his personal writings, the Meditations. His death is traditionally seen as the end of the Pax Romana.",
    funFact: "The Meditations were never meant for publication — they were private journal entries written to himself during military campaigns.",
    bio: [
      "Raised and trained for rule from childhood by Antoninus Pius, Marcus Aurelius took the throne alongside his adoptive brother Lucius Verus, an unusual co-emperorship. Much of his reign was consumed by grinding, defensive wars along the Danube frontier against Germanic tribes.",
      "During those campaigns, he kept a private philosophical journal, later known as the Meditations, reflecting on Stoic discipline and the burden of duty. His death in 180 CE, followed by his son Commodus's troubled reign, is traditionally marked as the end of Rome's long era of stability."
    ] },
  { name: "Commodus", reign: "180 – 192 CE", dynasty: "Nerva–Antonine", image: "commodus.jpg",
    summary: "Broke with the practice of adopting capable successors by taking the throne as Marcus Aurelius's biological son, and became infamous for performing personally as a gladiator. His assassination plunged Rome back into civil conflict.",
    funFact: "He renamed Rome 'Colonia Commodiana' after himself and had the Colossus statue's head replaced with his own.",
    bio: [
      "Commodus broke a century-long pattern of emperors adopting their most capable successor, instead inheriting the throne directly as Marcus Aurelius's biological son at just 18. He quickly abandoned his father's frontier wars, negotiating peace to return to Rome.",
      "He became infamous for personally fighting as a gladiator in the arena, a scandal to Rome's elite, and for increasingly erratic, self-glorifying behavior. He was strangled in his bath by a wrestler in 192 CE, ending the dynasty and triggering another year of civil war."
    ] },
  { name: "Diocletian", reign: "284 – 305 CE", dynasty: "Tetrarchy", image: "diocletian.jpg",
    summary: "Ended the Crisis of the Third Century by splitting the empire's administration among four co-rulers in the Tetrarchy, and pushed through sweeping military and economic reforms. He is also remembered for the last and most severe empire-wide persecution of Christians.",
    funFact: "He is the only Roman emperor to voluntarily retire from power, spending his final years growing cabbages at his palace in Split.",
    bio: [
      "Rising from a low-born military career during decades of near-constant civil war and invasion, Diocletian ended the Crisis of the Third Century by fundamentally redesigning how the empire was ruled. He split authority among four co-rulers, the Tetrarchy, to defend its borders simultaneously.",
      "His reforms restructured taxation, the army, and provincial government, but he's also remembered for launching the empire's harshest persecution of Christians. Uniquely among emperors, he chose to retire in 305 CE, living out his final years at a palace on the Dalmatian coast."
    ] },
  { name: "Constantine", reign: "306 – 337 CE", dynasty: "Constantinian", image: "constantine.jpg",
    summary: "Reunified the empire under a single ruler, legalized Christianity through the Edict of Milan, and founded Constantinople as a new eastern capital. His reign reshaped both the political and religious trajectory of the empire for a thousand years.",
    funFact: "The city he founded, Constantinople, remained the capital of the Eastern Roman Empire for over a thousand years after Rome itself fell.",
    bio: [
      "Constantine rose through a fresh round of civil wars following Diocletian's Tetrarchy, defeating his rivals one by one to reunify the empire under sole rule by 324 CE. Ahead of his decisive battle at the Milvian Bridge, he attributed his victory to the Christian god, a turning point in his own beliefs.",
      "His Edict of Milan in 313 CE legalized Christianity across the empire for the first time, ending centuries of persecution. He also founded a new eastern capital on the site of ancient Byzantium, naming it Constantinople, which would outlast Rome itself by nearly a millennium."
    ] },
  { name: "Julian", reign: "361 – 363 CE", dynasty: "Constantinian", image: "julian.jpg",
    summary: "Known as 'the Apostate' for attempting to reverse Constantine's Christianization and restore traditional Roman religion. A capable general and administrator, his brief reign ended when he was killed campaigning against Persia.",
    funFact: "He was also a prolific writer, composing philosophical essays defending traditional Greco-Roman religion in his own hand.",
    bio: [
      "Raised Christian but secretly drawn to traditional Greco-Roman philosophy and religion, Julian was an unlikely emperor, a scholar thrust into military command as a young cousin of Constantius II. He proved surprisingly effective leading campaigns in Gaul, which won him his troops' loyalty and eventually the throne.",
      "Once emperor, he attempted to reverse Constantine's Christianization of the empire and restore the old religious practices, earning him the label 'the Apostate' from later Christian historians. His reign was cut short in 363 CE when he was killed during a campaign against the Persian Sassanid Empire."
    ] },
  { name: "Justinian", reign: "527 – 565 CE", dynasty: "Justinian (Eastern)", image: "justinian.jpg",
    summary: "Ruling from Constantinople, he temporarily reconquered much of the western Mediterranean, codified Roman law in the Corpus Juris Civilis, and built the Hagia Sophia. His reign is often treated as the last great flowering of a unified Roman world.",
    funFact: "His legal code, the Corpus Juris Civilis, directly influenced the legal systems of most of continental Europe centuries later.",
    bio: [
      "Ruling from Constantinople two centuries after Rome itself had fallen to Germanic kingdoms, Justinian pursued an ambitious project to restore the empire's former glory. His general Belisarius reconquered North Africa and much of Italy, briefly reuniting most of the old Roman Mediterranean under one ruler again.",
      "His most lasting achievement wasn't military: the Corpus Juris Civilis, a sweeping codification of Roman law, became the foundation of legal systems across continental Europe for centuries after. He also rebuilt Constantinople's Hagia Sophia into the architectural marvel that still stands today."
    ] }
];


export const conflicts = {
  early: {
    label: "The Republic & Rise",
    items: [
      { name: "The Punic Wars", date: "264 – 146 BCE",
        description: "Three wars against Carthage, including Hannibal's famous crossing of the Alps, that ended with Rome's total destruction of its rival and control of the western Mediterranean.",
        keyFigures: ["Hannibal Barca", "Scipio Africanus"],
        outcome: "Carthage destroyed; Rome gains control of the western Mediterranean." },
      { name: "The Conquest of Greece", date: "214 – 146 BCE",
        description: "A series of Macedonian and Achaean wars through which Rome absorbed the Hellenistic kingdoms, adopting much of Greek culture, art, and philosophy in the process.",
        keyFigures: ["Philip V of Macedon", "Perseus of Macedon"],
        outcome: "Macedon and the Greek city-states absorbed into Roman control." }
    ]
  },
  pax: {
    label: "The Pax Romana & Expansion",
    items: [
      { name: "Caesar's Civil War", date: "49 – 45 BCE",
        description: "Julius Caesar's crossing of the Rubicon triggered a war against Pompey and the Senate that ended the Republic in all but name and set the stage for Augustus's empire.",
        keyFigures: ["Julius Caesar", "Pompey the Great", "Augustus"],
        outcome: "Caesar victorious; the Republic's collapse paves the way for Augustus's empire.",
        relatedEmperor: "augustus" },
      { name: "Trajan's Dacian Wars", date: "101 – 106 CE",
        description: "Two brutal campaigns north of the Danube that conquered the kingdom of Dacia, funding a wave of construction in Rome and pushing the empire to its largest territorial extent.",
        keyFigures: ["Trajan", "Decebalus"],
        outcome: "Dacia annexed as a province; its gold funds a wave of construction in Rome.",
        relatedEmperor: "trajan" }
    ]
  },
  crisis: {
    label: "The Crisis & Restoration",
    items: [
      { name: "The Marcomannic Wars", date: "166 – 180 CE",
        description: "Years of grinding conflict against Germanic tribes along the Danube frontier, fought personally by Marcus Aurelius and often marked as the beginning of three centuries of border pressure.",
        keyFigures: ["Marcus Aurelius", "Marcomanni and Quadi tribes"],
        outcome: "Frontier stabilized at great cost; marks the beginning of centuries of border pressure.",
        relatedEmperor: "marcus-aurelius" },
      { name: "The Aurelian Restoration", date: "270 – 275 CE",
        description: "Emperor Aurelian reunified an empire that had fractured into three competing states, earning the title 'Restorer of the World' and stabilizing Rome after the Crisis of the Third Century.",
        keyFigures: ["Aurelian", "Zenobia of Palmyra"],
        outcome: "The splintered empire reunified under Aurelian's sole rule." }
    ]
  }
};