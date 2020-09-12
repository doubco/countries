import gql from "graphql-tag";

export default {
  typeDefs: gql`
    enum Locale {
      AF
      SQ
      AM
      AR_DZ
      AR_BH
      AR_EG
      AR_IQ
      AR_JO
      AR_KW
      AR_LB
      AR_LY
      AR_MA
      AR_OM
      AR_QA
      AR_SA
      AR_SY
      AR_TN
      AR_AE
      AR_YE
      HY
      AS
      AZ_AZ
      EU
      BE
      BN
      BS
      BG
      MY
      CA
      ZH_CN
      ZH_HK
      ZH_MO
      ZH_SG
      ZH_TW
      HR
      CS
      DA
      DV
      NL_BE
      NL_NL
      EN
      EN_AU
      EN_BZ
      EN_CA
      EN_CB
      EN_GB
      EN_IN
      EN_IE
      EN_JM
      EN_NZ
      EN_PH
      EN_ZA
      EN_TT
      EN_US
      EN_SG
      ET
      FO
      FA
      FI
      FR_BE
      FR_CA
      FR_FR
      FR_LU
      FR_CH
      MK
      GD_IE
      GD
      DE_AT
      DE_DE
      DE_LI
      DE_LU
      DE_CH
      EL
      GN
      GU
      HE
      HI
      HU
      IS
      ID
      IT_IT
      IT_CH
      JA
      KN
      KS
      KK
      KM
      KO
      LO
      LA
      LV
      LT
      MS_BN
      MS_MY
      ML
      MT
      MI
      MR
      MN
      NE
      NO_NO
      OR
      PL
      PT_BR
      PT_PT
      PA
      RM
      RO_MO
      RO
      RU
      RU_MO
      SA
      SR_SP
      TN
      SD
      SI
      SK
      SL
      SO
      SB
      ES_AR
      ES_BO
      ES_CL
      ES_CO
      ES_CR
      ES_DO
      ES_EC
      ES_SV
      ES_GT
      ES_HN
      ES_MX
      ES_NI
      ES_PA
      ES_PY
      ES_PE
      ES_PR
      ES_ES
      ES_UY
      ES_VE
      SW
      SV_FI
      SV_SE
      TG
      TA
      TT
      TE
      TH
      BO
      TS
      TR
      TK
      UK
      UR
      UZ_UZ
      VI
      CY
      XH
      YI
      ZU
    }
  `,
  resolvers: {
    Locale: {
      AF: "af",
      SQ: "sq",
      AM: "am",
      AR_DZ: "ar_DZ",
      AR_BH: "ar_BH",
      AR_EG: "ar_EG",
      AR_IQ: "ar_IQ",
      AR_JO: "ar_JO",
      AR_KW: "ar_KW",
      AR_LB: "ar_LB",
      AR_LY: "ar_LY",
      AR_MA: "ar_MA",
      AR_OM: "ar_OM",
      AR_QA: "ar_QA",
      AR_SA: "ar_SA",
      AR_SY: "ar_SY",
      AR_TN: "ar_TN",
      AR_AE: "ar_AE",
      AR_YE: "ar_YE",
      HY: "hy",
      AS: "as",
      AZ_AZ: "az_AZ",
      EU: "eu",
      BE: "be",
      BN: "bn",
      BS: "bs",
      BG: "bg",
      MY: "my",
      CA: "ca",
      ZH_CN: "zh_CN",
      ZH_HK: "zh_HK",
      ZH_MO: "zh_MO",
      ZH_SG: "zh_SG",
      ZH_TW: "zh_TW",
      HR: "hr",
      CS: "cs",
      DA: "da",
      DV: "dv",
      NL_BE: "nl_BE",
      NL_NL: "nl_NL",
      EN_AU: "en_AU",
      EN_BZ: "en_BZ",
      EN_CA: "en_CA",
      EN_CB: "en_CB",
      EN_GB: "en_GB",
      EN_IN: "en_IN",
      EN_IE: "en_IE",
      EN_JM: "en_JM",
      EN_NZ: "en_NZ",
      EN_PH: "en_PH",
      EN_ZA: "en_ZA",
      EN_TT: "en_TT",
      EN_US: "en_US",
      EN_SG: "en_SG",
      EN: "en",
      ET: "et",
      FO: "fo",
      FA: "fa",
      FI: "fi",
      FR_BE: "fr_BE",
      FR_CA: "fr_CA",
      FR_FR: "fr_FR",
      FR_LU: "fr_LU",
      FR_CH: "fr_CH",
      MK: "mk",
      GD_IE: "gd_IE",
      GD: "gd",
      DE_AT: "de_AT",
      DE_DE: "de_DE",
      DE_LI: "de_LI",
      DE_LU: "de_LU",
      DE_CH: "de_CH",
      EL: "el",
      GN: "gn",
      GU: "gu",
      HE: "he",
      HI: "hi",
      HU: "hu",
      IS: "is",
      ID: "id",
      IT_IT: "it_IT",
      IT_CH: "it_CH",
      JA: "ja",
      KN: "kn",
      KS: "ks",
      KK: "kk",
      KM: "km",
      KO: "ko",
      LO: "lo",
      LA: "la",
      LV: "lv",
      LT: "lt",
      MS_BN: "ms_BN",
      MS_MY: "ms_MY",
      ML: "ml",
      MT: "mt",
      MI: "mi",
      MR: "mr",
      MN: "mn",
      NE: "ne",
      NO_NO: "no_NO",
      OR: "or",
      PL: "pl",
      PT_BR: "pt_BR",
      PT_PT: "pt_PT",
      PA: "pa",
      RM: "rm",
      RO_MO: "ro_MO",
      RO: "ro",
      RU: "ru",
      RU_MO: "ru_MO",
      SA: "sa",
      SR_SP: "sr_SP",
      TN: "tn",
      SD: "sd",
      SI: "si",
      SK: "sk",
      SL: "sl",
      SO: "so",
      SB: "sb",
      ES_AR: "es_AR",
      ES_BO: "es_BO",
      ES_CL: "es_CL",
      ES_CO: "es_CO",
      ES_CR: "es_CR",
      ES_DO: "es_DO",
      ES_EC: "es_EC",
      ES_SV: "es_SV",
      ES_GT: "es_GT",
      ES_HN: "es_HN",
      ES_MX: "es_MX",
      ES_NI: "es_NI",
      ES_PA: "es_PA",
      ES_PY: "es_PY",
      ES_PE: "es_PE",
      ES_PR: "es_PR",
      ES_ES: "es_ES",
      ES_UY: "es_UY",
      ES_VE: "es_VE",
      SW: "sw",
      SV_FI: "sv_FI",
      SV_SE: "sv_SE",
      TG: "tg",
      TA: "ta",
      TT: "tt",
      TE: "te",
      TH: "th",
      BO: "bo",
      TS: "ts",
      TR: "tr",
      TK: "tk",
      UK: "uk",
      UR: "ur",
      UZ_UZ: "uz_UZ",
      VI: "vi",
      CY: "cy",
      XH: "xh",
      YI: "yi",
      ZU: "zu",
    },
  },
};
