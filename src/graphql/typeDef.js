import gql from "graphql-tag";

export default gql`
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

  enum Timezone {
    PACIFIC__NIUE
    PACIFIC__PAGO_PAGO
    PACIFIC__HONOLULU
    PACIFIC__RAROTONGA
    PACIFIC__TAHITI
    PACIFIC__MARQUESAS
    AMERICA__ANCHORAGE
    PACIFIC__GAMBIER
    AMERICA__LOS_ANGELES
    AMERICA__TIJUANA
    AMERICA__VANCOUVER
    AMERICA__WHITEHORSE
    PACIFIC__PITCAIRN
    AMERICA__DENVER
    AMERICA__PHOENIX
    AMERICA__MAZATLAN
    AMERICA__DAWSON_CREEK
    AMERICA__EDMONTON
    AMERICA__HERMOSILLO
    AMERICA__YELLOWKNIFE
    AMERICA__BELIZE
    AMERICA__CHICAGO
    AMERICA__MEXICO_CITY
    AMERICA__REGINA
    AMERICA__TEGUCIGALPA
    AMERICA__WINNIPEG
    AMERICA__COSTA_RICA
    AMERICA__EL_SALVADOR
    PACIFIC__GALAPAGOS
    AMERICA__GUATEMALA
    AMERICA__MANAGUA
    AMERICA__CANCUN
    AMERICA__BOGOTA
    PACIFIC__EASTER
    AMERICA__NEW_YORK
    AMERICA__IQALUIT
    AMERICA__TORONTO
    AMERICA__GUAYAQUIL
    AMERICA__HAVANA
    AMERICA__JAMAICA
    AMERICA__LIMA
    AMERICA__NASSAU
    AMERICA__PANAMA
    AMERICA__PORT
    AMERICA__RIO_BRANCO
    AMERICA__HALIFAX
    AMERICA__BARBADOS
    ATLANTIC__BERMUDA
    AMERICA__BOA_VISTA
    AMERICA__CARACAS
    AMERICA__CURACAO
    AMERICA__GRAND_TURK
    AMERICA__GUYANA
    AMERICA__LA_PAZ
    AMERICA__MANAUS
    AMERICA__MARTINIQUE
    AMERICA__PORT_OF_SPAIN
    AMERICA__PORTO_VELHO
    AMERICA__PUERTO_RICO
    AMERICA__SANTO_DOMINGO
    AMERICA__THULE
    AMERICA__ST_JOHNS
    AMERICA__ARAGUAINA
    AMERICA__ASUNCION
    AMERICA__BELEM
    AMERICA__ARGENTINA
    AMERICA__CAMPO_GRANDE
    AMERICA__CAYENNE
    AMERICA__CUIABA
    AMERICA__FORTALEZA
    AMERICA__GODTHAB
    AMERICA__MACEIO
    AMERICA__MIQUELON
    AMERICA__MONTEVIDEO
    ANTARCTICA__PALMER
    AMERICA__PARAMARIBO
    AMERICA__PUNTA_ARENAS
    AMERICA__RECIFE
    ANTARCTICA__ROTHERA
    AMERICA__BAHIA
    AMERICA__SANTIAGO
    ATLANTIC__STANLEY
    AMERICA__NORONHA
    AMERICA__SAO_PAULO
    ATLANTIC__SOUTH_GEORGIA
    ATLANTIC__AZORES
    ATLANTIC__CAPE_VERDE
    AMERICA__SCORESBYSUND
    AFRICA__ABIDJAN
    AFRICA__ACCRA
    AFRICA__BISSAU
    ATLANTIC__CANARY
    AFRICA__CASABLANCA
    AMERICA__DANMARKSHAVN
    EUROPE__DUBLIN
    AFRICA__EL_AAIUN
    ATLANTIC__FAROE
    ETC__GMT
    EUROPE__LISBON
    EUROPE__LONDON
    AFRICA__MONROVIA
    ATLANTIC__REYKJAVIK
    AFRICA__ALGIERS
    EUROPE__AMSTERDAM
    EUROPE__ANDORRA
    EUROPE__BERLIN
    EUROPE__BRUSSELS
    EUROPE__BUDAPEST
    EUROPE__BELGRADE
    EUROPE__PRAGUE
    AFRICA__CEUTA
    EUROPE__COPENHAGEN
    EUROPE__GIBRALTAR
    AFRICA__LAGOS
    EUROPE__LUXEMBOURG
    EUROPE__MADRID
    EUROPE__MALTA
    EUROPE__MONACO
    AFRICA__NDJAMENA
    EUROPE__OSLO
    EUROPE__PARIS
    EUROPE__ROME
    EUROPE__STOCKHOLM
    EUROPE__TIRANE
    AFRICA__TUNIS
    EUROPE__VIENNA
    EUROPE__WARSAW
    EUROPE__ZURICH
    ASIA__AMMAN
    EUROPE__ATHENS
    ASIA__BEIRUT
    EUROPE__BUCHAREST
    AFRICA__CAIRO
    EUROPE__CHISINAU
    ASIA__DAMASCUS
    ASIA__GAZA
    EUROPE__HELSINKI
    ASIA__JERUSALEM
    AFRICA__JOHANNESBURG
    AFRICA__KHARTOUM
    EUROPE__KIEV
    AFRICA__MAPUTO
    EUROPE__KALININGRAD
    ASIA__NICOSIA
    EUROPE__RIGA
    EUROPE__SOFIA
    EUROPE__TALLINN
    AFRICA__TRIPOLI
    EUROPE__VILNIUS
    AFRICA__WINDHOEK
    ASIA__BAGHDAD
    EUROPE__ISTANBUL
    EUROPE__MINSK
    EUROPE__MOSCOW
    AFRICA__NAIROBI
    ASIA__QATAR
    ASIA__RIYADH
    ANTARCTICA__SYOWA
    ASIA__TEHRAN
    ASIA__BAKU
    ASIA__DUBAI
    INDIAN__MAHE
    INDIAN__MAURITIUS
    EUROPE__SAMARA
    INDIAN__REUNION
    ASIA__TBILISI
    ASIA__YEREVAN
    ASIA__KABUL
    ASIA__AQTAU
    ASIA__AQTOBE
    ASIA__ASHGABAT
    ASIA__DUSHANBE
    ASIA__KARACHI
    INDIAN__KERGUELEN
    INDIAN__MALDIVES
    ANTARCTICA__MAWSON
    ASIA__YEKATERINBURG
    ASIA__TASHKENT
    ASIA__COLOMBO
    ASIA__KOLKATA
    ASIA__KATHMANDU
    ASIA__ALMATY
    ASIA__BISHKEK
    INDIAN__CHAGOS
    ASIA__DHAKA
    ASIA__OMSK
    ASIA__THIMPHU
    ANTARCTICA__VOSTOK
    INDIAN__COCOS
    ASIA__YANGON
    ASIA__BANGKOK
    INDIAN__CHRISTMAS
    ANTARCTICA__DAVIS
    ASIA__SAIGON
    ASIA__HOVD
    ASIA__JAKARTA
    ASIA__KRASNOYARSK
    ASIA__BRUNEI
    ASIA__SHANGHAI
    ASIA__CHOIBALSAN
    ASIA__HONG_KONG
    ASIA__KUALA_LUMPUR
    ASIA__MACAU
    ASIA__MAKASSAR
    ASIA__MANILA
    ASIA__IRKUTSK
    ASIA__SINGAPORE
    ASIA__TAIPEI
    ASIA__ULAANBAATAR
    AUSTRALIA__PERTH
    ASIA__PYONGYANG
    ASIA__DILI
    ASIA__JAYAPURA
    ASIA__YAKUTSK
    PACIFIC__PALAU
    ASIA__SEOUL
    ASIA__TOKYO
    AUSTRALIA__DARWIN
    ANTARCTICA__DUMONTDURVILLE
    AUSTRALIA__BRISBANE
    PACIFIC__GUAM
    ASIA__VLADIVOSTOK
    PACIFIC__PORT_MORESBY
    PACIFIC__CHUUK
    AUSTRALIA__ADELAIDE
    ANTARCTICA__CASEY
    AUSTRALIA__HOBART
    AUSTRALIA__SYDNEY
    PACIFIC__EFATE
    PACIFIC__GUADALCANAL
    PACIFIC__KOSRAE
    ASIA__MAGADAN
    PACIFIC__NORFOLK
    PACIFIC__NOUMEA
    PACIFIC__POHNPEI
    PACIFIC__FUNAFUTI
    PACIFIC__KWAJALEIN
    PACIFIC__MAJURO
    ASIA__KAMCHATKA
    PACIFIC__NAURU
    PACIFIC__TARAWA
    PACIFIC__WAKE
    PACIFIC__WALLIS
    PACIFIC__AUCKLAND
    PACIFIC__ENDERBURY
    PACIFIC__FAKAOFO
    PACIFIC__FIJI
    PACIFIC__TONGATAPU
    PACIFIC__APIA
    PACIFIC__KIRITIMATI
  }

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
    GS
    ES
    LK
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

  enum Currency {
    AED
    AFN
    ALL
    AMD
    ANG
    AOA
    ARS
    AUD
    AWG
    AZN
    BAM
    BBD
    BDT
    BGN
    BHD
    BIF
    BMD
    BND
    BOB
    BOV
    BRL
    BSD
    BTN
    BWP
    BYN
    BZD
    CAD
    CDF
    CHE
    CHF
    CHW
    CLF
    CLP
    CNH
    CNY
    COP
    COU
    CRC
    CUC
    CUP
    CVE
    CZK
    DJF
    DKK
    DOP
    DZD
    EGP
    ERN
    ETB
    EUR
    FJD
    FKP
    GBP
    GEL
    GHS
    GIP
    GMD
    GNF
    GTQ
    GYD
    HKD
    HNL
    HRK
    HTG
    HUF
    IDR
    ILS
    INR
    IQD
    IRR
    ISK
    JMD
    JOD
    JPY
    KES
    KGS
    KHR
    KMF
    KPW
    KRW
    KWD
    KYD
    KZT
    LAK
    LBP
    LKR
    LRD
    LSL
    LYD
    MAD
    MDL
    MGA
    MKD
    MMK
    MNT
    MOP
    MRO
    MUR
    MWK
    MXN
    MXV
    MYR
    MZN
    NAD
    NGN
    NIO
    NOK
    NPR
    NZD
    OMR
    PAB
    PEN
    PGK
    PHP
    PKR
    PLN
    PYG
    QAR
    RON
    RSD
    RUB
    RWF
    SAR
    SBD
    SCR
    SDG
    SEK
    SGD
    SHP
    SLL
    SOS
    SRD
    SSP
    STN
    SYP
    SZL
    THB
    TJS
    TND
    TOP
    TRY
    TTD
    TWD
    TZS
    UAH
    UGX
    USD
    USN
    UYI
    UYU
    UZS
    VEF
    VND
    VUV
    WST
    XAF
    XCD
    XOF
    XPF
    YER
    ZAR
    ZMW
  }
`;
