export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  branch: 'root' | 'hashimi' | 'ismaili';
  birthDate: string;
  birthPlace: string;
  deathDate: string;
  deathPlace: string;
  spouse: string;
  description: string;
}

export const familyDatabase: FamilyMember[] = [
  {
    id: "kasim-olia",
    name: "Kasim Olia",
    relation: "Family Patriarch",
    branch: "root",
    birthDate: "Circa 1850",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "Unknown",
    deathPlace: "Unknown",
    spouse: "Unknown",
    description: "Kasim Olia is the earliest clearly documented ancestor of the family. He was a respected merchant within the Surti Sunni Bohra community in Rander. Reflecting the active maritime networks of Gujarati Muslims during the late nineteenth century, Kasim engaged in extensive commercial activity extending to Ceylon (Sri Lanka) and the Maldives. He formed strategic marital alliances with prominent merchant lineages, strengthening the family's social and commercial standing across the Indian Ocean world."
  },
  {
    id: "hashim-kasim",
    name: "Hashim Kasim Olia",
    relation: "Son of Kasim Olia",
    branch: "hashimi",
    birthDate: "Unknown",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "Unknown",
    deathPlace: "Rander, Surat District, Gujarat, India",
    spouse: "Rasoolbibi Ajum Piperdy",
    description: "Hashim Kasim Olia co-founded the family's two principal branches. Unlike his brother Ismail who migrated to Burma, Hashim remained in Rander to manage the family's local interests and trading networks. His marriage to Rasoolbibi Ajum Piperdy consolidated the family's ties with notable Indo-Mauritian trading networks. He had two sons and one daughter, cementing the Hashimi branch in Rander."
  },
  {
    id: "rasoolbibi-piperdy",
    name: "Rasoolbibi Ajum Piperdy",
    relation: "Wife of Hashim Kasim Olia",
    branch: "hashimi",
    birthDate: "1895",
    birthPlace: "Rander, Surat District, Bombay Presidency, British India",
    deathDate: "March 1, 195X",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "Hashim Kasim Olia",
    description: "Rasoolbibi was the daughter of Ajum Goolam Hossen Piperdy, a highly notable and successful Indo-Mauritian merchant. Her marriage to Hashim Kasim Olia linked the Olia family directly to influential oceanic trading systems. Following the Partition of British India, she migrated to Pakistan and lived her final years in Karachi, passing away on March 1 in the 1950s."
  },
  {
    id: "ismail-kasim",
    name: "Ismail Kasim Olia",
    relation: "Son of Kasim Olia",
    branch: "ismaili",
    birthDate: "Unknown",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "Unknown",
    deathPlace: "Rangoon (Yangon), Burma (Myanmar)",
    spouse: "Mohtarma (Madam) Ashraf",
    description: "Ismail Kasim Olia founded the Ismaili branch of the family. In the early twentieth century, he migrated to Yangon (Rangoon), Burma, following the colonial trade boom. He established a prosperous, prominent mercantile household in Rangoon where he raised three sons. Despite the geographic distance, he maintained close connections with his brother Hashim in Rander, laying the groundwork for future endogamous reunions."
  },
  {
    id: "madam-ashraf",
    name: "Mohtarma Ashraf (Madam Ashraf)",
    relation: "Wife of Ismail Kasim Olia",
    branch: "ismaili",
    birthDate: "Unknown",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "Unknown",
    deathPlace: "Rander, Surat District, Gujarat, India",
    spouse: "Ismail Kasim Olia",
    description: "Mohtarma Ashraf was a native of Rander. Her marriage to Ismail Kasim Olia reinforced the family's strong preference for endogamous, community-based alliances. After years spent establishing the family's presence in Burma, she returned to Rander, where she eventually passed away and was laid to rest."
  },
  {
    id: "kasim-h",
    name: "Kasim H. Olia",
    relation: "Son of Hashim Kasim Olia",
    branch: "hashimi",
    birthDate: "Unknown",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "June 1997",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "Hafsa Piperdi",
    description: "Kasim H. Olia was born in Rander and grew up within the traditional merchant environment. He later participated in the Partition-era migration, moving to Sindh, Pakistan, where he helped re-establish the family network. He lived in Karachi until his death in June 1997."
  },
  {
    id: "hafsa-piperdi",
    name: "Hafsa Piperdi",
    relation: "Wife of Kasim H. Olia",
    branch: "hashimi",
    birthDate: "Unknown",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "October 31, 2007",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "Kasim H. Olia",
    description: "Hafsa Piperdi was born in Rander and married Kasim H. Olia, maintaining the family's endogamous pattern of aligning with the Piperdy/Piperdi mercantile houses. She migrated with her husband to Karachi, Pakistan, where she passed away on October 31, 2007."
  },
  {
    id: "ali-hashim",
    name: "Ali Hashim Olia",
    relation: "Son of Hashim Kasim Olia",
    branch: "hashimi",
    birthDate: "November 5, 1912",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "October 22, 1978",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "N/A",
    description: "Ali Hashim Olia was born in Rander during the pre-World War I era. He was part of the generation that witnessed the dramatic shifts of the family between Rander, Burma, and eventually Pakistan. Following Partition in 1947, he relocated to Karachi, where he passed away on October 22, 1978."
  },
  {
    id: "mohammed-hashim",
    name: "Mohammed Hashim Olia",
    relation: "Son of Hashim Kasim Olia",
    branch: "hashimi",
    birthDate: "June 1912",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "May 23, 1968",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "Rehmatbibi Ahmed Piperdi",
    description: "Mohammed Hashim Olia was born in Rander in the summer of 1912. He was a merchant who married Rehmatbibi Ahmed Piperdi, bringing together families connected across Mauritius, Gujarat, and Karachi. Following the Partition, he migrated to Karachi, Pakistan, where he passed away on May 23, 1968."
  },
  {
    id: "rehmatbibi-piperdi",
    name: "Rehmatbibi Ahmed Piperdi",
    relation: "Wife of Mohammed Hashim Olia",
    branch: "hashimi",
    birthDate: "December 7, 1917",
    birthPlace: "Mauritius (Indian Ocean)",
    deathDate: "February 5, 1990",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "Mohammed Hashim Olia",
    description: "Rehmatbibi Ahmed Piperdi was born in Mauritius, reflecting the global footprint of the Surti Sunni Bohra trading network in the Indian Ocean. She married Mohammed Hashim Olia and eventually settled in Karachi, Pakistan, where she passed away on February 5, 1990."
  },
  {
    id: "yusuf-ismail",
    name: "Yusuf Ismail Olia",
    relation: "Son of Ismail Kasim Olia",
    branch: "ismaili",
    birthDate: "Circa 1910",
    birthPlace: "Rangoon (Yangon), Burma (Myanmar)",
    deathDate: "September 6, 1975",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "Aishabibi Hashim Olia",
    description: "Yusuf Ismail Olia was a prominent figure who lived a highly successful life. He was a wealthy businessman in Rangoon and distinguished himself by playing professional football (soccer) for the Burmese national team—an extraordinary achievement for a South Asian Muslim merchant of his time. In 1942, he led his family through a perilous escape from the Japanese invasion of Burma, returning to Rander. He later migrated to Karachi, Pakistan, where he died on September 6, 1975."
  },
  {
    id: "aishabibi-hashim",
    name: "Aishabibi Hashim Olia",
    relation: "Wife of Yusuf Ismail Olia / Daughter of Hashim",
    branch: "hashimi",
    birthDate: "September 16, 1916",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "January 17, 1995",
    deathPlace: "Karachi, Sindh, Pakistan",
    spouse: "Yusuf Ismail Olia",
    description: "Aishabibi Hashim Olia was born in Rander and married her cousin Yusuf Ismail Olia, uniting the Hashimi and Ismaili branches. During the Japanese invasion of Burma in 1942, she sustained injuries while fleeing the country while pregnant. Despite these hardships, she safely delivered their son Hashim in Rander. She later migrated to Karachi, where she passed away on January 17, 1995."
  },
  {
    id: "ghulam-mohammed",
    name: "Ghulam Mohammed Olia",
    relation: "Son of Ismail Kasim Olia",
    branch: "ismaili",
    birthDate: "Unknown",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "Unknown",
    deathPlace: "Rander, Surat District, Gujarat, India",
    spouse: "Unknown",
    description: "Ghulam Mohammed Olia was born in Rander. As part of the Ismaili branch, he maintained local ties in Gujarat and lived his entire life in his ancestral town of Rander, where he also passed away."
  },
  {
    id: "kasim-ismail",
    name: "Kasim Ismail Olia",
    relation: "Son of Ismail Kasim Olia",
    branch: "ismaili",
    birthDate: "Unknown",
    birthPlace: "Rander, Surat District, Gujarat, India",
    deathDate: "Unknown",
    deathPlace: "Rander, Surat District, Gujarat, India",
    spouse: "Unknown",
    description: "Kasim Ismail Olia was born and died in Rander, Gujarat. CRITICAL NOTE: The descendants of Kasim Ismail Olia are notable for staying behind in Rander, India, instead of migrating to Karachi, Pakistan during the Partition in 1947. This branch preserves the continuous, unbroken physical connection of the Olia family to their historical homeland in Gujarat."
  }
];
