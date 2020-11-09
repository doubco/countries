import gql from "graphql-tag";

export default {
  typeDefs: gql`
    enum PhoneCode {
      AF93
      AX358
      AL355
      DZ213
      AS1684
      AD376
      AO244
      AI1264
      AQ672
      AG1268
      AR54
      AM374
      AW297
      AU61
      AT43
      AZ994
      BS1242
      BH973
      BD880
      BB1246
      BY375
      BE32
      BZ501
      BJ229
      BM1441
      BT975
      BO591
      BA387
      BW267
      BV47
      BR55
      IO246
      BN673
      BG359
      BF226
      BI257
      KH855
      CM237
      CA1
      CV238
      KY345
      CF236
      TD235
      CL56
      CN86
      CX61
      CC61
      CO57
      KM269
      CG242
      CD243
      CK682
      CR506
      CI225
      HR385
      CU53
      CY357
      CZ420
      DK45
      DJ253
      DM1767
      DO1849
      EC593
      EG20
      SV503
      GQ240
      ER291
      EE372
      ET251
      FK500
      FO298
      FJ679
      FI358
      FR33
      GF594
      PF689
      TF262
      GA241
      GM220
      GE995
      DE49
      GH233
      GI350
      GR30
      GL299
      GD1473
      GP590
      GU1671
      GT502
      GG44
      GN224
      GW245
      GY592
      HT509
      HM0
      VA379
      HN504
      HK852
      HU36
      IS354
      IN91
      ID62
      IR98
      IQ964
      IE353
      IM44
      IL972
      IT39
      JM1876
      JP81
      JE44
      JO962
      KZ7
      KE254
      KI686
      KP850
      KR82
      XK383
      KW965
      KG996
      LA856
      LV371
      LB961
      LS266
      LR231
      LY218
      LI423
      LT370
      LU352
      MO853
      MK389
      MG261
      MW265
      MY60
      MV960
      ML223
      MT356
      MH692
      MQ596
      MR222
      MU230
      YT262
      MX52
      FM691
      MD373
      MC377
      MN976
      ME382
      MS1664
      MA212
      MZ258
      MM95
      NA264
      NR674
      NP977
      NL31
      AN599
      NC687
      NZ64
      NI505
      NE227
      NG234
      NU683
      NF672
      MP1670
      NO47
      OM968
      PK92
      PW680
      PS970
      PA507
      PG675
      PY595
      PE51
      PH63
      PN64
      PL48
      PT351
      PR1939
      QA974
      RO40
      RU7
      RW250
      RE262
      BL590
      SH290
      KN1869
      LC1758
      MF590
      PM508
      VC1784
      WS685
      SM378
      ST239
      SA966
      SN221
      RS381
      SC248
      SL232
      SG65
      SK421
      SI386
      SB677
      SO252
      ZA27
      SS211
      GS500
      ES34
      LK94
      SD249
      SR597
      SJ47
      SZ268
      SE46
      CH41
      SY963
      TW886
      TJ992
      TZ255
      TH66
      TL670
      TG228
      TK690
      TO676
      TT1868
      TN216
      TR90
      TM993
      TC1649
      TV688
      UG256
      UA380
      AE971
      GB44
      US1
      UY598
      UZ998
      VU678
      VE58
      VN84
      VG1284
      VI1340
      WF681
      YE967
      ZM260
      ZW263
    }
  `,
  resolvers: {
    PhoneCode: {
      AF93: "AF+93",
      AX358: "AX+358",
      AL355: "AL+355",
      DZ213: "DZ+213",
      AS1684: "AS+1684",
      AD376: "AD+376",
      AO244: "AO+244",
      AI1264: "AI+1264",
      AQ672: "AQ+672",
      AG1268: "AG+1268",
      AR54: "AR+54",
      AM374: "AM+374",
      AW297: "AW+297",
      AU61: "AU+61",
      AT43: "AT+43",
      AZ994: "AZ+994",
      BS1242: "BS+1242",
      BH973: "BH+973",
      BD880: "BD+880",
      BB1246: "BB+1246",
      BY375: "BY+375",
      BE32: "BE+32",
      BZ501: "BZ+501",
      BJ229: "BJ+229",
      BM1441: "BM+1441",
      BT975: "BT+975",
      BO591: "BO+591",
      BA387: "BA+387",
      BW267: "BW+267",
      BV47: "BV+47",
      BR55: "BR+55",
      IO246: "IO+246",
      BN673: "BN+673",
      BG359: "BG+359",
      BF226: "BF+226",
      BI257: "BI+257",
      KH855: "KH+855",
      CM237: "CM+237",
      CA1: "CA+1",
      CV238: "CV+238",
      345: "34+5",
      CF236: "CF+236",
      TD235: "TD+235",
      CL56: "CL+56",
      CN86: "CN+86",
      CX61: "CX+61",
      CC61: "CC+61",
      CO57: "CO+57",
      KM269: "KM+269",
      CG242: "CG+242",
      CD243: "CD+243",
      CK682: "CK+682",
      CR506: "CR+506",
      CI225: "CI+225",
      HR385: "HR+385",
      CU53: "CU+53",
      CY357: "CY+357",
      CZ420: "CZ+420",
      DK45: "DK+45",
      DJ253: "DJ+253",
      DM1767: "DM+1767",
      DO1849: "DO+1849",
      EC593: "EC+593",
      EG20: "EG+20",
      SV503: "SV+503",
      GQ240: "GQ+240",
      ER291: "ER+291",
      EE372: "EE+372",
      ET251: "ET+251",
      FK500: "FK+500",
      FO298: "FO+298",
      FJ679: "FJ+679",
      FI358: "FI+358",
      FR33: "FR+33",
      GF594: "GF+594",
      PF689: "PF+689",
      TF262: "TF+262",
      GA241: "GA+241",
      GM220: "GM+220",
      GE995: "GE+995",
      DE49: "DE+49",
      GH233: "GH+233",
      GI350: "GI+350",
      GR30: "GR+30",
      GL299: "GL+299",
      GD1473: "GD+1473",
      GP590: "GP+590",
      GU1671: "GU+1671",
      GT502: "GT+502",
      GG44: "GG+44",
      GN224: "GN+224",
      GW245: "GW+245",
      GY592: "GY+592",
      HT509: "HT+509",
      HM0: "HM+0",
      VA379: "VA+379",
      HN504: "HN+504",
      HK852: "HK+852",
      HU36: "HU+36",
      IS354: "IS+354",
      IN91: "IN+91",
      ID62: "ID+62",
      IR98: "IR+98",
      IQ964: "IQ+964",
      IE353: "IE+353",
      IM44: "IM+44",
      IL972: "IL+972",
      IT39: "IT+39",
      JM1876: "JM+1876",
      JP81: "JP+81",
      JE44: "JE+44",
      JO962: "JO+962",
      KZ7: "KZ+7",
      KE254: "KE+254",
      KI686: "KI+686",
      KP850: "KP+850",
      KR82: "KR+82",
      XK383: "XK+383",
      KW965: "KW+965",
      KG996: "KG+996",
      LA856: "LA+856",
      LV371: "LV+371",
      LB961: "LB+961",
      LS266: "LS+266",
      LR231: "LR+231",
      LY218: "LY+218",
      LI423: "LI+423",
      LT370: "LT+370",
      LU352: "LU+352",
      MO853: "MO+853",
      MK389: "MK+389",
      MG261: "MG+261",
      MW265: "MW+265",
      MY60: "MY+60",
      MV960: "MV+960",
      ML223: "ML+223",
      MT356: "MT+356",
      MH692: "MH+692",
      MQ596: "MQ+596",
      MR222: "MR+222",
      MU230: "MU+230",
      YT262: "YT+262",
      MX52: "MX+52",
      FM691: "FM+691",
      MD373: "MD+373",
      MC377: "MC+377",
      MN976: "MN+976",
      ME382: "ME+382",
      MS1664: "MS+1664",
      MA212: "MA+212",
      MZ258: "MZ+258",
      MM95: "MM+95",
      NA264: "NA+264",
      NR674: "NR+674",
      NP977: "NP+977",
      NL31: "NL+31",
      AN599: "AN+599",
      NC687: "NC+687",
      NZ64: "NZ+64",
      NI505: "NI+505",
      NE227: "NE+227",
      NG234: "NG+234",
      NU683: "NU+683",
      NF672: "NF+672",
      MP1670: "MP+1670",
      NO47: "NO+47",
      OM968: "OM+968",
      PK92: "PK+92",
      PW680: "PW+680",
      PS970: "PS+970",
      PA507: "PA+507",
      PG675: "PG+675",
      PY595: "PY+595",
      PE51: "PE+51",
      PH63: "PH+63",
      PN64: "PN+64",
      PL48: "PL+48",
      PT351: "PT+351",
      PR1939: "PR+1939",
      QA974: "QA+974",
      RO40: "RO+40",
      RU7: "RU+7",
      RW250: "RW+250",
      RE262: "RE+262",
      BL590: "BL+590",
      SH290: "SH+290",
      KN1869: "KN+1869",
      LC1758: "LC+1758",
      MF590: "MF+590",
      PM508: "PM+508",
      VC1784: "VC+1784",
      WS685: "WS+685",
      SM378: "SM+378",
      ST239: "ST+239",
      SA966: "SA+966",
      SN221: "SN+221",
      RS381: "RS+381",
      SC248: "SC+248",
      SL232: "SL+232",
      SG65: "SG+65",
      SK421: "SK+421",
      SI386: "SI+386",
      SB677: "SB+677",
      SO252: "SO+252",
      ZA27: "ZA+27",
      SS211: "SS+211",
      GS500: "GS+500",
      ES34: "ES+34",
      LK94: "LK+94",
      SD249: "SD+249",
      SR597: "SR+597",
      SJ47: "SJ+47",
      SZ268: "SZ+268",
      SE46: "SE+46",
      CH41: "CH+41",
      SY963: "SY+963",
      TW886: "TW+886",
      TJ992: "TJ+992",
      TZ255: "TZ+255",
      TH66: "TH+66",
      TL670: "TL+670",
      TG228: "TG+228",
      TK690: "TK+690",
      TO676: "TO+676",
      TT1868: "TT+1868",
      TN216: "TN+216",
      TR90: "TR+90",
      TM993: "TM+993",
      TC1649: "TC+1649",
      TV688: "TV+688",
      UG256: "UG+256",
      UA380: "UA+380",
      AE971: "AE+971",
      GB44: "GB+44",
      US1: "US+1",
      UY598: "UY+598",
      UZ998: "UZ+998",
      VU678: "VU+678",
      VE58: "VE+58",
      VN84: "VN+84",
      VG1284: "VG+1284",
      VI1340: "VI+1340",
      WF681: "WF+681",
      YE967: "YE+967",
      ZM260: "ZM+260",
      ZW263: "ZW+263",
    },
  },
};
