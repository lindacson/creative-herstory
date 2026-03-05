// Each object in this array represents the historical context card shown at the start of a scene.
// id: matches the scene number used in dialogue.js showContext property
// nextDialogue: the id of the first dialogue node in that scene
const SCENE_CONTEXTS = [
  {
    id: 1,
    title: "THE ROMAN THREAT",
    time: "24 BCE",
    location: "Royal Palace, Meroë, Kingdom of Kush",
    body: `<p>Rome has recently conquered Egypt under Emperor Augustus. For the first time in history, a European power directly borders the Kingdom of Kush.</p>
<p>Roman prefects in Egypt eye Kush's:</p>
<ul>
  <li>Gold mines and wealth</li>
  <li>Control of Nile trade routes</li>
  <li>Strategic position in Northeast Africa</li>
</ul>
<p>Queen Amanirenas has ruled Kush for 16 years. She is a proven military commander and diplomat. Rome sees Kush as either a future ally... or a future province.</p>
<p>Today, a Roman envoy arrives with Emperor Augustus's "proposal."</p>`,
    nextDialogue: 20,
  },
  {
    id: 2,
    title: "QUEEN AMANIRENAS",
    body: `<p>The queen character is inspired by the real life Queen Amanirenas (also spelled Amanirena), who ruled Kush in the late 1st century BCE.</p>
<p><strong>HER ACHIEVEMENTS:</strong></p>
<ul>
  <li>Invaded Roman Egypt (24 BCE)</li>
  <li>Fought Rome to a stalemate</li>
  <li>Lost an eye in battle, kept fighting</li>
  <li>Negotiated directly with Emperor Augustus</li>
  <li>Secured Kushite independence (20 BCE)</li>
  <li>Rome never conquered Kush</li>
</ul>
<p><strong>WHY THIS MATTERS:</strong></p>
<p>Amanirenas exemplifies the agency and resilience of African women throughout history. As a queen warrior — a title that in Kush denoted both royal authority and military command — she embodied dual power that was institutionalized, not exceptional.</p>
<p>Rather than being shaped by external forces, she actively shaped them: invading Roman Egypt, personally commanding armies despite losing an eye in battle, and negotiating directly with Emperor Augustus as an equal sovereign. Her story challenges stereotypes that reduce African women to victims of oppression, revealing them instead as strategic leaders who wielded military, political, and diplomatic power to defend their sovereignty.</p>
<p>Your choices will determine if you match her legacy of power and agency.</p>`,
    nextDialogue: 60,
  },
  {
    id: 3,
    title: "ECONOMIC COLONIZATION",
    body: `<p>Throughout history, empires have used trade agreements as tools of control. Initial "partnerships" often led to:</p>
<ul>
  <li>Economic dependency</li>
  <li>Gradual loss of sovereignty</li>
  <li>Foreign control without military conquest</li>
</ul>
<p>This pattern would repeat across Africa centuries later during European colonization.</p>
<p><strong>AFRICAN MERCHANT QUEENS:</strong></p>
<p>Long before Rome's arrival, African women controlled trade at the highest levels. Merchant queens were rulers who personally directed long-distance commerce, managed treasury systems, and negotiated with foreign powers as economic equals.</p>
<p>Notable examples include:</p>
<ul>
  <li><strong>Amanishakheto of Kush</strong> — accumulated such vast personal wealth from Nile trade that her pyramid tomb contained one of the largest treasure hoards ever found in ancient Africa</li>
  <li><strong>The Queen of Sheba (Makeda)</strong> — led a trade empire connecting the Horn of Africa to the Arabian Peninsula, famous for her diplomatic commerce with King Solomon</li>
  <li><strong>Nzinga of Ndongo</strong> — 17th century queen who used trade negotiations with the Portuguese as a tool of resistance, playing European powers against each other to protect her people</li>
</ul>
<p>These women understood that economic power and political power were inseparable — control trade, and you control sovereignty.</p>`,
    nextDialogue: 40,
  },
  {
    id: 4,
    title: "VICTORY",
    time: "20 BCE",
    location: "Island of Samos — Peace negotiations with Emperor Augustus",
    body: `<p>Kush's forces captured Roman standards — the sacred military emblems of Rome's legions. This was a profound humiliation for the empire that had never lost its eagles to an African power.</p>
<p>Emperor Augustus, facing military campaigns elsewhere, agreed to negotiate. Amanirenas traveled to Samos and met with Augustus as an equal sovereign. The resulting Treaty of Samos (20 BCE) granted Kush:</p>
<ul>
  <li>Full recognition of independence</li>
  <li>Removal of Roman tax obligations</li>
  <li>Withdrawal of Roman forces from Kushite territory</li>
  <li>Return of captured Kushite prisoners</li>
</ul>
<p>Rome never conquered Kush. It stands as one of the few African kingdoms to successfully resist Roman expansion.</p>
<hr>
<p><strong>AFRICAN WOMEN AS FEMALE MONARCHS:</strong></p>
<p>The Kandake title was not honorary — it was constitutional. In Kush, women held sovereign power as a matter of law and tradition, not exception. For over 300 years (roughly 300 BCE–350 CE), Kandakes commanded armies, built pyramids, controlled trade networks, and conducted diplomacy with Mediterranean empires.</p>
<p>This pattern of female sovereignty appeared across the continent:</p>
<ul>
  <li><strong>Yaa Asantewaa (Ghana, 1900)</strong> — led the Asante nation in armed resistance against British colonization when male chiefs hesitated; commanded thousands of warriors</li>
  <li><strong>Nzinga of Ndongo (Angola, 1600s)</strong> — ruled for 37 years, personally led military campaigns, and outwitted Portuguese colonial administrators through diplomacy and force</li>
  <li><strong>Ranavalona I of Madagascar (1800s)</strong> — ruled for 33 years, expelled European missionaries and traders, and preserved Malagasy sovereignty against French and British pressure</li>
  <li><strong>Nehanda Charwe Nyakasikana (Zimbabwe, 1890s)</strong> — spiritual and military leader of the First Chimurenga resistance against British colonization; her last words before execution — "My bones will rise" — became a rallying cry for independence movements</li>
</ul>
<p><strong>AFRICAN WOMEN AS MERCHANT QUEENS:</strong></p>
<p>Control of trade was inseparable from political power. African women who commanded commerce commanded kingdoms. Amanishakheto of Kush accumulated personal wealth so vast that her pyramid tomb — excavated in the 1830s — contained gold jewelry, shields, and treasures that rival any royal hoard in the ancient world.</p>
<p>The Queen of Sheba, known as Makeda in Ethiopian tradition, directed a trade empire spanning the Horn of Africa and the Arabian Peninsula. Her legendary visit to Solomon was not a social call — it was a trade negotiation between equals.</p>
<p>These women were not anomalies. They were the norm — rulers who wielded economic, military, and diplomatic power as a birthright, not an exception.</p>
<p><em>Their stories were not lost. They were suppressed — by colonialism, by the erasure of African archives, and by historical narratives that centered European experience. This game is one small act of reclamation.</em></p>`,
    nextDialogue: 80,
  },
  {
    id: 5,
    title: "PETITION & COLLECTIVE RESISTANCE",
    body: `<p>In ancient African kingdoms, formal written petitions were a recognized and legitimate tool of political engagement. Long before European concepts of democracy, African merchants, guilds, and communities had established channels to bring grievances directly before their sovereigns.</p>
<p><strong>WHAT WAS PETITION WRITING IN AFRICA?</strong></p>
<p>Petitions were formal written documents — presented to rulers, councils, or courts — stating a grievance and demanding redress. In literate kingdoms like Kush, where merchants maintained writing for commercial records and correspondence, petition writing was a natural extension of commercial literacy into political advocacy.</p>
<p>Unlike armed rebellion, petitions operated within the system: they acknowledged the ruler's authority while asserting the community's right to be heard. A ruler who ignored petitions risked losing the economic and social cooperation of the most organized classes in the kingdom.</p>
<p><strong>AFRICAN WOMEN AS PETITION ORGANIZERS:</strong></p>
<ul>
  <li><strong>Market Women's Guilds (West Africa)</strong> — across the Sahel and forest kingdoms, women who controlled market trade formed guilds that served as political pressure groups; their collective economic power meant rulers ignored their organized demands at their peril</li>
  <li><strong>The Women's War / Aba Riots (Nigeria, 1929)</strong> — Igbo and Ibibio market women organized through their existing trade networks to protest British colonial taxation, using sit-ins, song, and formal complaint — a tradition of collective action rooted in pre-colonial practice</li>
  <li><strong>Egyptian Papyri Records</strong> — surviving documents from Roman-era Egypt (which bordered Kush) show women regularly submitting formal written petitions to courts and governors, asserting property rights, trade disputes, and personal grievances</li>
  <li><strong>Merina Women of Madagascar</strong> — women in the Merina kingdom organized formal petitions to Queen Ranavalona I, demonstrating that female sovereigns were expected to be responsive to their women subjects</li>
</ul>
<p><strong>WHY THIS MATTERS:</strong></p>
<p>The image of African women as passive victims of historical forces is a colonial invention. Across the continent and across centuries, African women organized, wrote, petitioned, protested, and demanded accountability from their rulers. The merchant queens of Kush writing petitions to their Kandake were part of a long, documented tradition of women using collective power to shape political outcomes.</p>
<p>Their voices shaped kingdoms. Your choice now will determine whether this queen listens.</p>`,
    nextDialogue: 91,
  },
  // Add more scenes below following the same format:
  // {
  //   id: 3,
  //   title: "SCENE TITLE",
  //   time: "DATE",          // optional — omit or leave empty to hide
  //   location: "LOCATION",  // optional — omit or leave empty to hide
  //   body: `<p>Context text here.</p>`,
  //   nextDialogue: 999,
  // },
];
