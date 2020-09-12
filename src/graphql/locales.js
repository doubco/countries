import gql from "graphql-tag";

export default {
  typeDefs: gql`
    enum Locale {
      AF_NA
      AF_ZA
      AF
      AK_GH
      AK
      SQ_AL
      SQ
      AM_ET
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
      AR_SD
      AR_SY
      AR_TN
      AR_AE
      AR_YE
      AR
      HY_AM
      HY
      AS_IN
      AS
      ASA_TZ
      ASA
      AZ_CYRL
      AZ_CYRL_AZ
      AZ_LATN
      AZ_LATN_AZ
      AZ
      BM_ML
      BM
      EU_ES
      EU
      BE_BY
      BE
      BEM_ZM
      BEM
      BEZ_TZ
      BEZ
      BN_BD
      BN_IN
      BN
      BS_BA
      BS
      BG_BG
      BG
      MY_MM
      MY
      YUE_HANT_HK
      CA_ES
      CA
      TZM_LATN
      TZM_LATN_MA
      TZM
      CHR_US
      CHR
      CGG_UG
      CGG
      ZH_HANS
      ZH_HANS_CN
      ZH_HANS_HK
      ZH_HANS_MO
      ZH_HANS_SG
      ZH_HANT
      ZH_HANT_HK
      ZH_HANT_MO
      ZH_HANT_TW
      ZH
      KW_GB
      KW
      HR_HR
      HR
      CS_CZ
      CS
      DA_DK
      DA
      NL_BE
      NL_NL
      NL
      EBU_KE
      EBU
      EN_AS
      EN_AU
      EN_BE
      EN_BZ
      EN_BW
      EN_CA
      EN_GU
      EN_HK
      EN_IN
      EN_IE
      EN_IL
      EN_JM
      EN_MT
      EN_MH
      EN_MU
      EN_NA
      EN_NZ
      EN_MP
      EN_PK
      EN_PH
      EN_SG
      EN_ZA
      EN_TT
      EN_UM
      EN_VI
      EN_GB
      EN_US
      EN_ZW
      EN
      EO
      ET_EE
      ET
      EE_GH
      EE_TG
      EE
      FO_FO
      FO
      FIL_PH
      FIL
      FI_FI
      FI
      FR_BE
      FR_BJ
      FR_BF
      FR_BI
      FR_CM
      FR_CA
      FR_CF
      FR_TD
      FR_KM
      FR_CG
      FR_CD
      FR_CI
      FR_DJ
      FR_GQ
      FR_FR
      FR_GA
      FR_GP
      FR_GN
      FR_LU
      FR_MG
      FR_ML
      FR_MQ
      FR_MC
      FR_NE
      FR_RW
      FR_RE
      FR_BL
      FR_MF
      FR_SN
      FR_CH
      FR_TG
      FR
      FF_SN
      FF
      GL_ES
      GL
      LG_UG
      LG
      KA_GE
      KA
      DE_AT
      DE_BE
      DE_DE
      DE_LI
      DE_LU
      DE_CH
      DE
      EL_CY
      EL_GR
      EL
      GU_IN
      GU
      GUZ_KE
      GUZ
      HA_LATN
      HA_LATN_GH
      HA_LATN_NE
      HA_LATN_NG
      HA
      HAW_US
      HAW
      HE_IL
      HE
      HI_IN
      HI
      HU_HU
      HU
      IS_IS
      IS
      IG_NG
      IG
      ID_ID
      ID
      GA_IE
      GA
      IT_IT
      IT_CH
      IT
      JA_JP
      JA
      KEA_CV
      KEA
      KAB_DZ
      KAB
      KL_GL
      KL
      KLN_KE
      KLN
      KAM_KE
      KAM
      KN_IN
      KN
      KK_CYRL
      KK_CYRL_KZ
      KK
      KM_KH
      KM
      KI_KE
      KI
      RW_RW
      RW
      KOK_IN
      KOK
      KO_KR
      KO
      KHQ_ML
      KHQ
      SES_ML
      SES
      LAG_TZ
      LAG
      LV_LV
      LV
      LT_LT
      LT
      LUO_KE
      LUO
      LUY_KE
      LUY
      MK_MK
      MK
      JMC_TZ
      JMC
      KDE_TZ
      KDE
      MG_MG
      MG
      MS_BN
      MS_MY
      MS
      ML_IN
      ML
      MT_MT
      MT
      GV_GB
      GV
      MR_IN
      MR
      MAS_KE
      MAS_TZ
      MAS
      MER_KE
      MER
      MFE_MU
      MFE
      NAQ_NA
      NAQ
      NE_IN
      NE_NP
      NE
      ND_ZW
      ND
      NB_NO
      NB
      NN_NO
      NN
      NYN_UG
      NYN
      OR_IN
      OR
      OM_ET
      OM_KE
      OM
      PS_AF
      PS
      FA_AF
      FA_IR
      FA
      PL_PL
      PL
      PT_BR
      PT_GW
      PT_MZ
      PT_PT
      PT
      PA_ARAB
      PA_ARAB_PK
      PA_GURU
      PA_GURU_IN
      PA
      RO_MD
      RO_RO
      RO
      RM_CH
      RM
      ROF_TZ
      ROF
      RU_MD
      RU_RU
      RU_UA
      RU
      RWK_TZ
      RWK
      SAQ_KE
      SAQ
      SG_CF
      SG
      SEH_MZ
      SEH
      SR_CYRL
      SR_CYRL_BA
      SR_CYRL_ME
      SR_CYRL_RS
      SR_LATN
      SR_LATN_BA
      SR_LATN_ME
      SR_LATN_RS
      SR
      SN_ZW
      SN
      II_CN
      II
      SI_LK
      SI
      SK_SK
      SK
      SL_SI
      SL
      XOG_UG
      XOG
      SO_DJ
      SO_ET
      SO_KE
      SO_SO
      SO
      ES_AR
      ES_BO
      ES_CL
      ES_CO
      ES_CR
      ES_DO
      ES_EC
      ES_SV
      ES_GQ
      ES_GT
      ES_HN
      ES_419
      ES_MX
      ES_NI
      ES_PA
      ES_PY
      ES_PE
      ES_PR
      ES_ES
      ES_US
      ES_UY
      ES_VE
      ES
      SW_KE
      SW_TZ
      SW
      SV_FI
      SV_SE
      SV
      GSW_CH
      GSW
      SHI_LATN
      SHI_LATN_MA
      SHI_TFNG
      SHI_TFNG_MA
      SHI
      DAV_KE
      DAV
      TA_IN
      TA_LK
      TA
      TE_IN
      TE
      TEO_KE
      TEO_UG
      TEO
      TH_TH
      TH
      BO_CN
      BO_IN
      BO
      TI_ER
      TI_ET
      TI
      TO_TO
      TO
      TR_TR
      TR
      UK_UA
      UK
      UR_IN
      UR_PK
      UR
      UZ_ARAB
      UZ_ARAB_AF
      UZ_CYRL
      UZ_CYRL_UZ
      UZ_LATN
      UZ_LATN_UZ
      UZ
      VI_VN
      VI
      VUN_TZ
      VUN
      CY_GB
      CY
      YO_NG
      YO
      ZU_ZA
      ZU
    }
  `,
  resolvers: {
    Locale: {
      AF_NA: "af_NA",
      AF_ZA: "af_ZA",
      AF: "af",
      AK_GH: "ak_GH",
      AK: "ak",
      SQ_AL: "sq_AL",
      SQ: "sq",
      AM_ET: "am_ET",
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
      AR_SD: "ar_SD",
      AR_SY: "ar_SY",
      AR_TN: "ar_TN",
      AR_AE: "ar_AE",
      AR_YE: "ar_YE",
      AR: "ar",
      HY_AM: "hy_AM",
      HY: "hy",
      AS_IN: "as_IN",
      AS: "as",
      ASA_TZ: "asa_TZ",
      ASA: "asa",
      AZ_CYRL: "az_Cyrl",
      AZ_CYRL_AZ: "az_Cyrl_AZ",
      AZ_LATN: "az_Latn",
      AZ_LATN_AZ: "az_Latn_AZ",
      AZ: "az",
      BM_ML: "bm_ML",
      BM: "bm",
      EU_ES: "eu_ES",
      EU: "eu",
      BE_BY: "be_BY",
      BE: "be",
      BEM_ZM: "bem_ZM",
      BEM: "bem",
      BEZ_TZ: "bez_TZ",
      BEZ: "bez",
      BN_BD: "bn_BD",
      BN_IN: "bn_IN",
      BN: "bn",
      BS_BA: "bs_BA",
      BS: "bs",
      BG_BG: "bg_BG",
      BG: "bg",
      MY_MM: "my_MM",
      MY: "my",
      YUE_HANT_HK: "yue_Hant_HK",
      CA_ES: "ca_ES",
      CA: "ca",
      TZM_LATN: "tzm_Latn",
      TZM_LATN_MA: "tzm_Latn_MA",
      TZM: "tzm",
      CHR_US: "chr_US",
      CHR: "chr",
      CGG_UG: "cgg_UG",
      CGG: "cgg",
      ZH_HANS: "zh_Hans",
      ZH_HANS_CN: "zh_Hans_CN",
      ZH_HANS_HK: "zh_Hans_HK",
      ZH_HANS_MO: "zh_Hans_MO",
      ZH_HANS_SG: "zh_Hans_SG",
      ZH_HANT: "zh_Hant",
      ZH_HANT_HK: "zh_Hant_HK",
      ZH_HANT_MO: "zh_Hant_MO",
      ZH_HANT_TW: "zh_Hant_TW",
      ZH: "zh",
      KW_GB: "kw_GB",
      KW: "kw",
      HR_HR: "hr_HR",
      HR: "hr",
      CS_CZ: "cs_CZ",
      CS: "cs",
      DA_DK: "da_DK",
      DA: "da",
      NL_BE: "nl_BE",
      NL_NL: "nl_NL",
      NL: "nl",
      EBU_KE: "ebu_KE",
      EBU: "ebu",
      EN_AS: "en_AS",
      EN_AU: "en_AU",
      EN_BE: "en_BE",
      EN_BZ: "en_BZ",
      EN_BW: "en_BW",
      EN_CA: "en_CA",
      EN_GU: "en_GU",
      EN_HK: "en_HK",
      EN_IN: "en_IN",
      EN_IE: "en_IE",
      EN_IL: "en_IL",
      EN_JM: "en_JM",
      EN_MT: "en_MT",
      EN_MH: "en_MH",
      EN_MU: "en_MU",
      EN_NA: "en_NA",
      EN_NZ: "en_NZ",
      EN_MP: "en_MP",
      EN_PK: "en_PK",
      EN_PH: "en_PH",
      EN_SG: "en_SG",
      EN_ZA: "en_ZA",
      EN_TT: "en_TT",
      EN_UM: "en_UM",
      EN_VI: "en_VI",
      EN_GB: "en_GB",
      EN_US: "en_US",
      EN_ZW: "en_ZW",
      EN: "en",
      EO: "eo",
      ET_EE: "et_EE",
      ET: "et",
      EE_GH: "ee_GH",
      EE_TG: "ee_TG",
      EE: "ee",
      FO_FO: "fo_FO",
      FO: "fo",
      FIL_PH: "fil_PH",
      FIL: "fil",
      FI_FI: "fi_FI",
      FI: "fi",
      FR_BE: "fr_BE",
      FR_BJ: "fr_BJ",
      FR_BF: "fr_BF",
      FR_BI: "fr_BI",
      FR_CM: "fr_CM",
      FR_CA: "fr_CA",
      FR_CF: "fr_CF",
      FR_TD: "fr_TD",
      FR_KM: "fr_KM",
      FR_CG: "fr_CG",
      FR_CD: "fr_CD",
      FR_CI: "fr_CI",
      FR_DJ: "fr_DJ",
      FR_GQ: "fr_GQ",
      FR_FR: "fr_FR",
      FR_GA: "fr_GA",
      FR_GP: "fr_GP",
      FR_GN: "fr_GN",
      FR_LU: "fr_LU",
      FR_MG: "fr_MG",
      FR_ML: "fr_ML",
      FR_MQ: "fr_MQ",
      FR_MC: "fr_MC",
      FR_NE: "fr_NE",
      FR_RW: "fr_RW",
      FR_RE: "fr_RE",
      FR_BL: "fr_BL",
      FR_MF: "fr_MF",
      FR_SN: "fr_SN",
      FR_CH: "fr_CH",
      FR_TG: "fr_TG",
      FR: "fr",
      FF_SN: "ff_SN",
      FF: "ff",
      GL_ES: "gl_ES",
      GL: "gl",
      LG_UG: "lg_UG",
      LG: "lg",
      KA_GE: "ka_GE",
      KA: "ka",
      DE_AT: "de_AT",
      DE_BE: "de_BE",
      DE_DE: "de_DE",
      DE_LI: "de_LI",
      DE_LU: "de_LU",
      DE_CH: "de_CH",
      DE: "de",
      EL_CY: "el_CY",
      EL_GR: "el_GR",
      EL: "el",
      GU_IN: "gu_IN",
      GU: "gu",
      GUZ_KE: "guz_KE",
      GUZ: "guz",
      HA_LATN: "ha_Latn",
      HA_LATN_GH: "ha_Latn_GH",
      HA_LATN_NE: "ha_Latn_NE",
      HA_LATN_NG: "ha_Latn_NG",
      HA: "ha",
      HAW_US: "haw_US",
      HAW: "haw",
      HE_IL: "he_IL",
      HE: "he",
      HI_IN: "hi_IN",
      HI: "hi",
      HU_HU: "hu_HU",
      HU: "hu",
      IS_IS: "is_IS",
      IS: "is",
      IG_NG: "ig_NG",
      IG: "ig",
      ID_ID: "id_ID",
      ID: "id",
      GA_IE: "ga_IE",
      GA: "ga",
      IT_IT: "it_IT",
      IT_CH: "it_CH",
      IT: "it",
      JA_JP: "ja_JP",
      JA: "ja",
      KEA_CV: "kea_CV",
      KEA: "kea",
      KAB_DZ: "kab_DZ",
      KAB: "kab",
      KL_GL: "kl_GL",
      KL: "kl",
      KLN_KE: "kln_KE",
      KLN: "kln",
      KAM_KE: "kam_KE",
      KAM: "kam",
      KN_IN: "kn_IN",
      KN: "kn",
      KK_CYRL: "kk_Cyrl",
      KK_CYRL_KZ: "kk_Cyrl_KZ",
      KK: "kk",
      KM_KH: "km_KH",
      KM: "km",
      KI_KE: "ki_KE",
      KI: "ki",
      RW_RW: "rw_RW",
      RW: "rw",
      KOK_IN: "kok_IN",
      KOK: "kok",
      KO_KR: "ko_KR",
      KO: "ko",
      KHQ_ML: "khq_ML",
      KHQ: "khq",
      SES_ML: "ses_ML",
      SES: "ses",
      LAG_TZ: "lag_TZ",
      LAG: "lag",
      LV_LV: "lv_LV",
      LV: "lv",
      LT_LT: "lt_LT",
      LT: "lt",
      LUO_KE: "luo_KE",
      LUO: "luo",
      LUY_KE: "luy_KE",
      LUY: "luy",
      MK_MK: "mk_MK",
      MK: "mk",
      JMC_TZ: "jmc_TZ",
      JMC: "jmc",
      KDE_TZ: "kde_TZ",
      KDE: "kde",
      MG_MG: "mg_MG",
      MG: "mg",
      MS_BN: "ms_BN",
      MS_MY: "ms_MY",
      MS: "ms",
      ML_IN: "ml_IN",
      ML: "ml",
      MT_MT: "mt_MT",
      MT: "mt",
      GV_GB: "gv_GB",
      GV: "gv",
      MR_IN: "mr_IN",
      MR: "mr",
      MAS_KE: "mas_KE",
      MAS_TZ: "mas_TZ",
      MAS: "mas",
      MER_KE: "mer_KE",
      MER: "mer",
      MFE_MU: "mfe_MU",
      MFE: "mfe",
      NAQ_NA: "naq_NA",
      NAQ: "naq",
      NE_IN: "ne_IN",
      NE_NP: "ne_NP",
      NE: "ne",
      ND_ZW: "nd_ZW",
      ND: "nd",
      NB_NO: "nb_NO",
      NB: "nb",
      NN_NO: "nn_NO",
      NN: "nn",
      NYN_UG: "nyn_UG",
      NYN: "nyn",
      OR_IN: "or_IN",
      OR: "or",
      OM_ET: "om_ET",
      OM_KE: "om_KE",
      OM: "om",
      PS_AF: "ps_AF",
      PS: "ps",
      FA_AF: "fa_AF",
      FA_IR: "fa_IR",
      FA: "fa",
      PL_PL: "pl_PL",
      PL: "pl",
      PT_BR: "pt_BR",
      PT_GW: "pt_GW",
      PT_MZ: "pt_MZ",
      PT_PT: "pt_PT",
      PT: "pt",
      PA_ARAB: "pa_Arab",
      PA_ARAB_PK: "pa_Arab_PK",
      PA_GURU: "pa_Guru",
      PA_GURU_IN: "pa_Guru_IN",
      PA: "pa",
      RO_MD: "ro_MD",
      RO_RO: "ro_RO",
      RO: "ro",
      RM_CH: "rm_CH",
      RM: "rm",
      ROF_TZ: "rof_TZ",
      ROF: "rof",
      RU_MD: "ru_MD",
      RU_RU: "ru_RU",
      RU_UA: "ru_UA",
      RU: "ru",
      RWK_TZ: "rwk_TZ",
      RWK: "rwk",
      SAQ_KE: "saq_KE",
      SAQ: "saq",
      SG_CF: "sg_CF",
      SG: "sg",
      SEH_MZ: "seh_MZ",
      SEH: "seh",
      SR_CYRL: "sr_Cyrl",
      SR_CYRL_BA: "sr_Cyrl_BA",
      SR_CYRL_ME: "sr_Cyrl_ME",
      SR_CYRL_RS: "sr_Cyrl_RS",
      SR_LATN: "sr_Latn",
      SR_LATN_BA: "sr_Latn_BA",
      SR_LATN_ME: "sr_Latn_ME",
      SR_LATN_RS: "sr_Latn_RS",
      SR: "sr",
      SN_ZW: "sn_ZW",
      SN: "sn",
      II_CN: "ii_CN",
      II: "ii",
      SI_LK: "si_LK",
      SI: "si",
      SK_SK: "sk_SK",
      SK: "sk",
      SL_SI: "sl_SI",
      SL: "sl",
      XOG_UG: "xog_UG",
      XOG: "xog",
      SO_DJ: "so_DJ",
      SO_ET: "so_ET",
      SO_KE: "so_KE",
      SO_SO: "so_SO",
      SO: "so",
      ES_AR: "es_AR",
      ES_BO: "es_BO",
      ES_CL: "es_CL",
      ES_CO: "es_CO",
      ES_CR: "es_CR",
      ES_DO: "es_DO",
      ES_EC: "es_EC",
      ES_SV: "es_SV",
      ES_GQ: "es_GQ",
      ES_GT: "es_GT",
      ES_HN: "es_HN",
      ES_419: "es_419",
      ES_MX: "es_MX",
      ES_NI: "es_NI",
      ES_PA: "es_PA",
      ES_PY: "es_PY",
      ES_PE: "es_PE",
      ES_PR: "es_PR",
      ES_ES: "es_ES",
      ES_US: "es_US",
      ES_UY: "es_UY",
      ES_VE: "es_VE",
      ES: "es",
      SW_KE: "sw_KE",
      SW_TZ: "sw_TZ",
      SW: "sw",
      SV_FI: "sv_FI",
      SV_SE: "sv_SE",
      SV: "sv",
      GSW_CH: "gsw_CH",
      GSW: "gsw",
      SHI_LATN: "shi_Latn",
      SHI_LATN_MA: "shi_Latn_MA",
      SHI_TFNG: "shi_Tfng",
      SHI_TFNG_MA: "shi_Tfng_MA",
      SHI: "shi",
      DAV_KE: "dav_KE",
      DAV: "dav",
      TA_IN: "ta_IN",
      TA_LK: "ta_LK",
      TA: "ta",
      TE_IN: "te_IN",
      TE: "te",
      TEO_KE: "teo_KE",
      TEO_UG: "teo_UG",
      TEO: "teo",
      TH_TH: "th_TH",
      TH: "th",
      BO_CN: "bo_CN",
      BO_IN: "bo_IN",
      BO: "bo",
      TI_ER: "ti_ER",
      TI_ET: "ti_ET",
      TI: "ti",
      TO_TO: "to_TO",
      TO: "to",
      TR_TR: "tr_TR",
      TR: "tr",
      UK_UA: "uk_UA",
      UK: "uk",
      UR_IN: "ur_IN",
      UR_PK: "ur_PK",
      UR: "ur",
      UZ_ARAB: "uz_Arab",
      UZ_ARAB_AF: "uz_Arab_AF",
      UZ_CYRL: "uz_Cyrl",
      UZ_CYRL_UZ: "uz_Cyrl_UZ",
      UZ_LATN: "uz_Latn",
      UZ_LATN_UZ: "uz_Latn_UZ",
      UZ: "uz",
      VI_VN: "vi_VN",
      VI: "vi",
      VUN_TZ: "vun_TZ",
      VUN: "vun",
      CY_GB: "cy_GB",
      CY: "cy",
      YO_NG: "yo_NG",
      YO: "yo",
      ZU_ZA: "zu_ZA",
      ZU: "zu",
    },
  },
};
