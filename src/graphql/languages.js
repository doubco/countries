import gql from "graphql-tag";

export default {
  typeDefs: gql`
    enum Language {
      AA
      AB
      AF
      AK
      AM
      AN
      AR
      AS
      AV
      AY
      AZ
      BA
      BE
      BG
      BH
      BI
      BM
      BN
      BO
      BR
      BS
      CA
      CE
      CH
      CO
      CR
      CS
      CU
      CV
      CY
      DA
      DE
      DV
      DZ
      EE
      EL
      EN
      EO
      ES
      ET
      EU
      FA
      FF
      FI
      FJ
      FO
      FR
      FY
      GA
      GD
      GL
      GN
      GU
      GV
      HA
      HE
      HI
      HO
      HR
      HT
      HU
      HY
      HZ
      IA
      ID
      IE
      IG
      II
      IK
      IO
      IS
      IT
      IU
      JA
      JV
      KA
      KG
      KI
      KJ
      KK
      KL
      KM
      KN
      KO
      KR
      KS
      KU
      KV
      KW
      KY
      LA
      LB
      LG
      LI
      LN
      LO
      LT
      LV
      MG
      MH
      MI
      MK
      ML
      MN
      MO
      MR
      MS
      MT
      MY
      NA
      ND
      NE
      NG
      NL
      NN
      NO
      NR
      NV
      NY
      OC
      OJ
      OM
      OR
      OS
      PA
      PI
      PL
      PS
      PT
      QU
      RM
      RN
      RO
      RU
      RW
      SA
      SC
      SD
      SE
      SG
      SH
      SI
      SK
      SL
      SM
      SN
      SO
      SQ
      SR
      SS
      ST
      SU
      SV
      SW
      TA
      TE
      TG
      TH
      TI
      TK
      TL
      TN
      TO
      TR
      TS
      TT
      TW
      TY
      UG
      UK
      UR
      UZ
      VE
      VI
      VO
      WA
      WO
      XH
      YI
      YO
      ZA
      ZH
      ZU
    }
  `,
  resolvers: {
    Language: {
      AA: "aa",
      AB: "ab",
      AF: "af",
      AK: "ak",
      AM: "am",
      AN: "an",
      AR: "ar",
      AS: "as",
      AV: "av",
      AY: "ay",
      AZ: "az",
      BA: "ba",
      BE: "be",
      BG: "bg",
      BH: "bh",
      BI: "bi",
      BM: "bm",
      BN: "bn",
      BO: "bo",
      BR: "br",
      BS: "bs",
      CA: "ca",
      CE: "ce",
      CH: "ch",
      CO: "co",
      CR: "cr",
      CS: "cs",
      CU: "cu",
      CV: "cv",
      CY: "cy",
      DA: "da",
      DE: "de",
      DV: "dv",
      DZ: "dz",
      EE: "ee",
      EL: "el",
      EN: "en",
      EO: "eo",
      ES: "es",
      ET: "et",
      EU: "eu",
      FA: "fa",
      FF: "ff",
      FI: "fi",
      FJ: "fj",
      FO: "fo",
      FR: "fr",
      FY: "fy",
      GA: "ga",
      GD: "gd",
      GL: "gl",
      GN: "gn",
      GU: "gu",
      GV: "gv",
      HA: "ha",
      HE: "he",
      HI: "hi",
      HO: "ho",
      HR: "hr",
      HT: "ht",
      HU: "hu",
      HY: "hy",
      HZ: "hz",
      IA: "ia",
      ID: "id",
      IE: "ie",
      IG: "ig",
      II: "ii",
      IK: "ik",
      IO: "io",
      IS: "is",
      IT: "it",
      IU: "iu",
      JA: "ja",
      JV: "jv",
      KA: "ka",
      KG: "kg",
      KI: "ki",
      KJ: "kj",
      KK: "kk",
      KL: "kl",
      KM: "km",
      KN: "kn",
      KO: "ko",
      KR: "kr",
      KS: "ks",
      KU: "ku",
      KV: "kv",
      KW: "kw",
      KY: "ky",
      LA: "la",
      LB: "lb",
      LG: "lg",
      LI: "li",
      LN: "ln",
      LO: "lo",
      LT: "lt",
      LV: "lv",
      MG: "mg",
      MH: "mh",
      MI: "mi",
      MK: "mk",
      ML: "ml",
      MN: "mn",
      MO: "mo",
      MR: "mr",
      MS: "ms",
      MT: "mt",
      MY: "my",
      NA: "na",
      ND: "nd",
      NE: "ne",
      NG: "ng",
      NL: "nl",
      NN: "nn",
      NO: "no",
      NR: "nr",
      NV: "nv",
      NY: "ny",
      OC: "oc",
      OJ: "oj",
      OM: "om",
      OR: "or",
      OS: "os",
      PA: "pa",
      PI: "pi",
      PL: "pl",
      PS: "ps",
      PT: "pt",
      QU: "qu",
      RM: "rm",
      RN: "rn",
      RO: "ro",
      RU: "ru",
      RW: "rw",
      SA: "sa",
      SC: "sc",
      SD: "sd",
      SE: "se",
      SG: "sg",
      SH: "sh",
      SI: "si",
      SK: "sk",
      SL: "sl",
      SM: "sm",
      SN: "sn",
      SO: "so",
      SQ: "sq",
      SR: "sr",
      SS: "ss",
      ST: "st",
      SU: "su",
      SV: "sv",
      SW: "sw",
      TA: "ta",
      TE: "te",
      TG: "tg",
      TH: "th",
      TI: "ti",
      TK: "tk",
      TL: "tl",
      TN: "tn",
      TO: "to",
      TR: "tr",
      TS: "ts",
      TT: "tt",
      TW: "tw",
      TY: "ty",
      UG: "ug",
      UK: "uk",
      UR: "ur",
      UZ: "uz",
      VE: "ve",
      VI: "vi",
      VO: "vo",
      WA: "wa",
      WO: "wo",
      XH: "xh",
      YI: "yi",
      YO: "yo",
      ZA: "za",
      ZH: "zh",
      ZU: "zu",
    },
  },
};
