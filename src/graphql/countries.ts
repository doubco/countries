import gql from "graphql-tag";

export default {
  typeDefs: gql`
    enum Country {
      AF
      AX
      AL
      DZ
      AS
      AD
      AO
      AI
      AQ
      AG
      AR
      AM
      AW
      AU
      AT
      AZ
      BS
      BH
      BD
      BB
      BY
      BE
      BZ
      BJ
      BM
      BT
      BO
      BA
      BW
      BV
      BR
      IO
      BN
      BG
      BF
      BI
      KH
      CM
      CA
      CV
      KY
      CF
      TD
      CL
      CN
      CX
      CC
      CO
      KM
      CG
      CD
      CK
      CR
      CI
      HR
      CU
      CY
      CZ
      DK
      DJ
      DM
      DO
      EC
      EG
      SV
      GQ
      ER
      EE
      ET
      FK
      FO
      FJ
      FI
      FR
      GF
      PF
      TF
      GA
      GM
      GE
      DE
      GH
      GI
      GR
      GL
      GD
      GP
      GU
      GT
      GG
      GN
      GW
      GY
      HT
      HM
      VA
      HN
      HK
      HU
      IS
      IN
      ID
      IR
      IQ
      IE
      IM
      IL
      IT
      JM
      JP
      JE
      JO
      KZ
      KE
      KI
      KP
      KR
      XK
      KW
      KG
      LA
      LV
      LB
      LS
      LR
      LY
      LI
      LT
      LU
      MO
      MK
      MG
      MW
      MY
      MV
      ML
      MT
      MH
      MQ
      MR
      MU
      YT
      MX
      FM
      MD
      MC
      MN
      ME
      MS
      MA
      MZ
      MM
      NA
      NR
      NP
      NL
      AN
      NC
      NZ
      NI
      NE
      NG
      NU
      NF
      MP
      NO
      OM
      PK
      PW
      PS
      PA
      PG
      PY
      PE
      PH
      PN
      PL
      PT
      PR
      QA
      RO
      RU
      RW
      RE
      BL
      SH
      KN
      LC
      MF
      PM
      VC
      WS
      SM
      ST
      SA
      SN
      RS
      SC
      SL
      SG
      SK
      SI
      SB
      SO
      ZA
      SS
      GS
      ES
      LK
      SD
      SR
      SJ
      SZ
      SE
      CH
      SY
      TW
      TJ
      TZ
      TH
      TL
      TG
      TK
      TO
      TT
      TN
      TR
      TM
      TC
      TV
      UG
      UA
      AE
      GB
      US
      UY
      UZ
      VU
      VE
      VN
      VG
      VI
      WF
      YE
      ZM
      ZW
    }
  `,
  resolvers: {
    Country: {
      AF: "AF",
      AX: "AX",
      AL: "AL",
      DZ: "DZ",
      AS: "AS",
      AD: "AD",
      AO: "AO",
      AI: "AI",
      AQ: "AQ",
      AG: "AG",
      AR: "AR",
      AM: "AM",
      AW: "AW",
      AU: "AU",
      AT: "AT",
      AZ: "AZ",
      BS: "BS",
      BH: "BH",
      BD: "BD",
      BB: "BB",
      BY: "BY",
      BE: "BE",
      BZ: "BZ",
      BJ: "BJ",
      BM: "BM",
      BT: "BT",
      BO: "BO",
      BA: "BA",
      BW: "BW",
      BV: "BV",
      BR: "BR",
      IO: "IO",
      BN: "BN",
      BG: "BG",
      BF: "BF",
      BI: "BI",
      KH: "KH",
      CM: "CM",
      CA: "CA",
      CV: "CV",
      KY: "KY",
      CF: "CF",
      TD: "TD",
      CL: "CL",
      CN: "CN",
      CX: "CX",
      CC: "CC",
      CO: "CO",
      KM: "KM",
      CG: "CG",
      CD: "CD",
      CK: "CK",
      CR: "CR",
      CI: "CI",
      HR: "HR",
      CU: "CU",
      CY: "CY",
      CZ: "CZ",
      DK: "DK",
      DJ: "DJ",
      DM: "DM",
      DO: "DO",
      EC: "EC",
      EG: "EG",
      SV: "SV",
      GQ: "GQ",
      ER: "ER",
      EE: "EE",
      ET: "ET",
      FK: "FK",
      FO: "FO",
      FJ: "FJ",
      FI: "FI",
      FR: "FR",
      GF: "GF",
      PF: "PF",
      TF: "TF",
      GA: "GA",
      GM: "GM",
      GE: "GE",
      DE: "DE",
      GH: "GH",
      GI: "GI",
      GR: "GR",
      GL: "GL",
      GD: "GD",
      GP: "GP",
      GU: "GU",
      GT: "GT",
      GG: "GG",
      GN: "GN",
      GW: "GW",
      GY: "GY",
      HT: "HT",
      HM: "HM",
      VA: "VA",
      HN: "HN",
      HK: "HK",
      HU: "HU",
      IS: "IS",
      IN: "IN",
      ID: "ID",
      IR: "IR",
      IQ: "IQ",
      IE: "IE",
      IM: "IM",
      IL: "IL",
      IT: "IT",
      JM: "JM",
      JP: "JP",
      JE: "JE",
      JO: "JO",
      KZ: "KZ",
      KE: "KE",
      KI: "KI",
      KP: "KP",
      KR: "KR",
      XK: "XK",
      KW: "KW",
      KG: "KG",
      LA: "LA",
      LV: "LV",
      LB: "LB",
      LS: "LS",
      LR: "LR",
      LY: "LY",
      LI: "LI",
      LT: "LT",
      LU: "LU",
      MO: "MO",
      MK: "MK",
      MG: "MG",
      MW: "MW",
      MY: "MY",
      MV: "MV",
      ML: "ML",
      MT: "MT",
      MH: "MH",
      MQ: "MQ",
      MR: "MR",
      MU: "MU",
      YT: "YT",
      MX: "MX",
      FM: "FM",
      MD: "MD",
      MC: "MC",
      MN: "MN",
      ME: "ME",
      MS: "MS",
      MA: "MA",
      MZ: "MZ",
      MM: "MM",
      NA: "NA",
      NR: "NR",
      NP: "NP",
      NL: "NL",
      AN: "AN",
      NC: "NC",
      NZ: "NZ",
      NI: "NI",
      NE: "NE",
      NG: "NG",
      NU: "NU",
      NF: "NF",
      MP: "MP",
      NO: "NO",
      OM: "OM",
      PK: "PK",
      PW: "PW",
      PS: "PS",
      PA: "PA",
      PG: "PG",
      PY: "PY",
      PE: "PE",
      PH: "PH",
      PN: "PN",
      PL: "PL",
      PT: "PT",
      PR: "PR",
      QA: "QA",
      RO: "RO",
      RU: "RU",
      RW: "RW",
      RE: "RE",
      BL: "BL",
      SH: "SH",
      KN: "KN",
      LC: "LC",
      MF: "MF",
      PM: "PM",
      VC: "VC",
      WS: "WS",
      SM: "SM",
      ST: "ST",
      SA: "SA",
      SN: "SN",
      RS: "RS",
      SC: "SC",
      SL: "SL",
      SG: "SG",
      SK: "SK",
      SI: "SI",
      SB: "SB",
      SO: "SO",
      ZA: "ZA",
      SS: "SS",
      GS: "GS",
      ES: "ES",
      LK: "LK",
      SD: "SD",
      SR: "SR",
      SJ: "SJ",
      SZ: "SZ",
      SE: "SE",
      CH: "CH",
      SY: "SY",
      TW: "TW",
      TJ: "TJ",
      TZ: "TZ",
      TH: "TH",
      TL: "TL",
      TG: "TG",
      TK: "TK",
      TO: "TO",
      TT: "TT",
      TN: "TN",
      TR: "TR",
      TM: "TM",
      TC: "TC",
      TV: "TV",
      UG: "UG",
      UA: "UA",
      AE: "AE",
      GB: "GB",
      US: "US",
      UY: "UY",
      UZ: "UZ",
      VU: "VU",
      VE: "VE",
      VN: "VN",
      VG: "VG",
      VI: "VI",
      WF: "WF",
      YE: "YE",
      ZM: "ZM",
      ZW: "ZW",
    },
  },
};
