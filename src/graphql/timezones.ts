import gql from "graphql-tag";

export default {
  typeDefs: gql`
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
  `,
  resolvers: {
    Timezone: {
      PACIFIC__NIUE: "Pacific/Niue",
      PACIFIC__PAGO_PAGO: "Pacific/Pago_Pago",
      PACIFIC__HONOLULU: "Pacific/Honolulu",
      PACIFIC__RAROTONGA: "Pacific/Rarotonga",
      PACIFIC__TAHITI: "Pacific/Tahiti",
      PACIFIC__MARQUESAS: "Pacific/Marquesas",
      AMERICA__ANCHORAGE: "America/Anchorage",
      PACIFIC__GAMBIER: "Pacific/Gambier",
      AMERICA__LOS_ANGELES: "America/Los_Angeles",
      AMERICA__TIJUANA: "America/Tijuana",
      AMERICA__VANCOUVER: "America/Vancouver",
      AMERICA__WHITEHORSE: "America/Whitehorse",
      PACIFIC__PITCAIRN: "Pacific/Pitcairn",
      AMERICA__DENVER: "America/Denver",
      AMERICA__PHOENIX: "America/Phoenix",
      AMERICA__MAZATLAN: "America/Mazatlan",
      AMERICA__DAWSON_CREEK: "America/Dawson_Creek",
      AMERICA__EDMONTON: "America/Edmonton",
      AMERICA__HERMOSILLO: "America/Hermosillo",
      AMERICA__YELLOWKNIFE: "America/Yellowknife",
      AMERICA__BELIZE: "America/Belize",
      AMERICA__CHICAGO: "America/Chicago",
      AMERICA__MEXICO_CITY: "America/Mexico_City",
      AMERICA__REGINA: "America/Regina",
      AMERICA__TEGUCIGALPA: "America/Tegucigalpa",
      AMERICA__WINNIPEG: "America/Winnipeg",
      AMERICA__COSTA_RICA: "America/Costa_Rica",
      AMERICA__EL_SALVADOR: "America/El_Salvador",
      PACIFIC__GALAPAGOS: "Pacific/Galapagos",
      AMERICA__GUATEMALA: "America/Guatemala",
      AMERICA__MANAGUA: "America/Managua",
      AMERICA__CANCUN: "America/Cancun",
      AMERICA__BOGOTA: "America/Bogota",
      PACIFIC__EASTER: "Pacific/Easter",
      AMERICA__NEW_YORK: "America/New_York",
      AMERICA__IQALUIT: "America/Iqaluit",
      AMERICA__TORONTO: "America/Toronto",
      AMERICA__GUAYAQUIL: "America/Guayaquil",
      AMERICA__HAVANA: "America/Havana",
      AMERICA__JAMAICA: "America/Jamaica",
      AMERICA__LIMA: "America/Lima",
      AMERICA__NASSAU: "America/Nassau",
      AMERICA__PANAMA: "America/Panama",
      AMERICA__PORT: "America/Port",
      AMERICA__RIO_BRANCO: "America/Rio_Branco",
      AMERICA__HALIFAX: "America/Halifax",
      AMERICA__BARBADOS: "America/Barbados",
      ATLANTIC__BERMUDA: "Atlantic/Bermuda",
      AMERICA__BOA_VISTA: "America/Boa_Vista",
      AMERICA__CARACAS: "America/Caracas",
      AMERICA__CURACAO: "America/Curacao",
      AMERICA__GRAND_TURK: "America/Grand_Turk",
      AMERICA__GUYANA: "America/Guyana",
      AMERICA__LA_PAZ: "America/La_Paz",
      AMERICA__MANAUS: "America/Manaus",
      AMERICA__MARTINIQUE: "America/Martinique",
      AMERICA__PORT_OF_SPAIN: "America/Port_of_Spain",
      AMERICA__PORTO_VELHO: "America/Porto_Velho",
      AMERICA__PUERTO_RICO: "America/Puerto_Rico",
      AMERICA__SANTO_DOMINGO: "America/Santo_Domingo",
      AMERICA__THULE: "America/Thule",
      AMERICA__ST_JOHNS: "America/St_Johns",
      AMERICA__ARAGUAINA: "America/Araguaina",
      AMERICA__ASUNCION: "America/Asuncion",
      AMERICA__BELEM: "America/Belem",
      AMERICA__ARGENTINA: "America/Argentina",
      AMERICA__CAMPO_GRANDE: "America/Campo_Grande",
      AMERICA__CAYENNE: "America/Cayenne",
      AMERICA__CUIABA: "America/Cuiaba",
      AMERICA__FORTALEZA: "America/Fortaleza",
      AMERICA__GODTHAB: "America/Godthab",
      AMERICA__MACEIO: "America/Maceio",
      AMERICA__MIQUELON: "America/Miquelon",
      AMERICA__MONTEVIDEO: "America/Montevideo",
      ANTARCTICA__PALMER: "Antarctica/Palmer",
      AMERICA__PARAMARIBO: "America/Paramaribo",
      AMERICA__PUNTA_ARENAS: "America/Punta_Arenas",
      AMERICA__RECIFE: "America/Recife",
      ANTARCTICA__ROTHERA: "Antarctica/Rothera",
      AMERICA__BAHIA: "America/Bahia",
      AMERICA__SANTIAGO: "America/Santiago",
      ATLANTIC__STANLEY: "Atlantic/Stanley",
      AMERICA__NORONHA: "America/Noronha",
      AMERICA__SAO_PAULO: "America/Sao_Paulo",
      ATLANTIC__SOUTH_GEORGIA: "Atlantic/South_Georgia",
      ATLANTIC__AZORES: "Atlantic/Azores",
      ATLANTIC__CAPE_VERDE: "Atlantic/Cape_Verde",
      AMERICA__SCORESBYSUND: "America/Scoresbysund",
      AFRICA__ABIDJAN: "Africa/Abidjan",
      AFRICA__ACCRA: "Africa/Accra",
      AFRICA__BISSAU: "Africa/Bissau",
      ATLANTIC__CANARY: "Atlantic/Canary",
      AFRICA__CASABLANCA: "Africa/Casablanca",
      AMERICA__DANMARKSHAVN: "America/Danmarkshavn",
      EUROPE__DUBLIN: "Europe/Dublin",
      AFRICA__EL_AAIUN: "Africa/El_Aaiun",
      ATLANTIC__FAROE: "Atlantic/Faroe",
      ETC__GMT: "Etc/GMT",
      EUROPE__LISBON: "Europe/Lisbon",
      EUROPE__LONDON: "Europe/London",
      AFRICA__MONROVIA: "Africa/Monrovia",
      ATLANTIC__REYKJAVIK: "Atlantic/Reykjavik",
      AFRICA__ALGIERS: "Africa/Algiers",
      EUROPE__AMSTERDAM: "Europe/Amsterdam",
      EUROPE__ANDORRA: "Europe/Andorra",
      EUROPE__BERLIN: "Europe/Berlin",
      EUROPE__BRUSSELS: "Europe/Brussels",
      EUROPE__BUDAPEST: "Europe/Budapest",
      EUROPE__BELGRADE: "Europe/Belgrade",
      EUROPE__PRAGUE: "Europe/Prague",
      AFRICA__CEUTA: "Africa/Ceuta",
      EUROPE__COPENHAGEN: "Europe/Copenhagen",
      EUROPE__GIBRALTAR: "Europe/Gibraltar",
      AFRICA__LAGOS: "Africa/Lagos",
      EUROPE__LUXEMBOURG: "Europe/Luxembourg",
      EUROPE__MADRID: "Europe/Madrid",
      EUROPE__MALTA: "Europe/Malta",
      EUROPE__MONACO: "Europe/Monaco",
      AFRICA__NDJAMENA: "Africa/Ndjamena",
      EUROPE__OSLO: "Europe/Oslo",
      EUROPE__PARIS: "Europe/Paris",
      EUROPE__ROME: "Europe/Rome",
      EUROPE__STOCKHOLM: "Europe/Stockholm",
      EUROPE__TIRANE: "Europe/Tirane",
      AFRICA__TUNIS: "Africa/Tunis",
      EUROPE__VIENNA: "Europe/Vienna",
      EUROPE__WARSAW: "Europe/Warsaw",
      EUROPE__ZURICH: "Europe/Zurich",
      ASIA__AMMAN: "Asia/Amman",
      EUROPE__ATHENS: "Europe/Athens",
      ASIA__BEIRUT: "Asia/Beirut",
      EUROPE__BUCHAREST: "Europe/Bucharest",
      AFRICA__CAIRO: "Africa/Cairo",
      EUROPE__CHISINAU: "Europe/Chisinau",
      ASIA__DAMASCUS: "Asia/Damascus",
      ASIA__GAZA: "Asia/Gaza",
      EUROPE__HELSINKI: "Europe/Helsinki",
      ASIA__JERUSALEM: "Asia/Jerusalem",
      AFRICA__JOHANNESBURG: "Africa/Johannesburg",
      AFRICA__KHARTOUM: "Africa/Khartoum",
      EUROPE__KIEV: "Europe/Kiev",
      AFRICA__MAPUTO: "Africa/Maputo",
      EUROPE__KALININGRAD: "Europe/Kaliningrad",
      ASIA__NICOSIA: "Asia/Nicosia",
      EUROPE__RIGA: "Europe/Riga",
      EUROPE__SOFIA: "Europe/Sofia",
      EUROPE__TALLINN: "Europe/Tallinn",
      AFRICA__TRIPOLI: "Africa/Tripoli",
      EUROPE__VILNIUS: "Europe/Vilnius",
      AFRICA__WINDHOEK: "Africa/Windhoek",
      ASIA__BAGHDAD: "Asia/Baghdad",
      EUROPE__ISTANBUL: "Europe/Istanbul",
      EUROPE__MINSK: "Europe/Minsk",
      EUROPE__MOSCOW: "Europe/Moscow",
      AFRICA__NAIROBI: "Africa/Nairobi",
      ASIA__QATAR: "Asia/Qatar",
      ASIA__RIYADH: "Asia/Riyadh",
      ANTARCTICA__SYOWA: "Antarctica/Syowa",
      ASIA__TEHRAN: "Asia/Tehran",
      ASIA__BAKU: "Asia/Baku",
      ASIA__DUBAI: "Asia/Dubai",
      INDIAN__MAHE: "Indian/Mahe",
      INDIAN__MAURITIUS: "Indian/Mauritius",
      EUROPE__SAMARA: "Europe/Samara",
      INDIAN__REUNION: "Indian/Reunion",
      ASIA__TBILISI: "Asia/Tbilisi",
      ASIA__YEREVAN: "Asia/Yerevan",
      ASIA__KABUL: "Asia/Kabul",
      ASIA__AQTAU: "Asia/Aqtau",
      ASIA__AQTOBE: "Asia/Aqtobe",
      ASIA__ASHGABAT: "Asia/Ashgabat",
      ASIA__DUSHANBE: "Asia/Dushanbe",
      ASIA__KARACHI: "Asia/Karachi",
      INDIAN__KERGUELEN: "Indian/Kerguelen",
      INDIAN__MALDIVES: "Indian/Maldives",
      ANTARCTICA__MAWSON: "Antarctica/Mawson",
      ASIA__YEKATERINBURG: "Asia/Yekaterinburg",
      ASIA__TASHKENT: "Asia/Tashkent",
      ASIA__COLOMBO: "Asia/Colombo",
      ASIA__KOLKATA: "Asia/Kolkata",
      ASIA__KATHMANDU: "Asia/Kathmandu",
      ASIA__ALMATY: "Asia/Almaty",
      ASIA__BISHKEK: "Asia/Bishkek",
      INDIAN__CHAGOS: "Indian/Chagos",
      ASIA__DHAKA: "Asia/Dhaka",
      ASIA__OMSK: "Asia/Omsk",
      ASIA__THIMPHU: "Asia/Thimphu",
      ANTARCTICA__VOSTOK: "Antarctica/Vostok",
      INDIAN__COCOS: "Indian/Cocos",
      ASIA__YANGON: "Asia/Yangon",
      ASIA__BANGKOK: "Asia/Bangkok",
      INDIAN__CHRISTMAS: "Indian/Christmas",
      ANTARCTICA__DAVIS: "Antarctica/Davis",
      ASIA__SAIGON: "Asia/Saigon",
      ASIA__HOVD: "Asia/Hovd",
      ASIA__JAKARTA: "Asia/Jakarta",
      ASIA__KRASNOYARSK: "Asia/Krasnoyarsk",
      ASIA__BRUNEI: "Asia/Brunei",
      ASIA__SHANGHAI: "Asia/Shanghai",
      ASIA__CHOIBALSAN: "Asia/Choibalsan",
      ASIA__HONG_KONG: "Asia/Hong_Kong",
      ASIA__KUALA_LUMPUR: "Asia/Kuala_Lumpur",
      ASIA__MACAU: "Asia/Macau",
      ASIA__MAKASSAR: "Asia/Makassar",
      ASIA__MANILA: "Asia/Manila",
      ASIA__IRKUTSK: "Asia/Irkutsk",
      ASIA__SINGAPORE: "Asia/Singapore",
      ASIA__TAIPEI: "Asia/Taipei",
      ASIA__ULAANBAATAR: "Asia/Ulaanbaatar",
      AUSTRALIA__PERTH: "Australia/Perth",
      ASIA__PYONGYANG: "Asia/Pyongyang",
      ASIA__DILI: "Asia/Dili",
      ASIA__JAYAPURA: "Asia/Jayapura",
      ASIA__YAKUTSK: "Asia/Yakutsk",
      PACIFIC__PALAU: "Pacific/Palau",
      ASIA__SEOUL: "Asia/Seoul",
      ASIA__TOKYO: "Asia/Tokyo",
      AUSTRALIA__DARWIN: "Australia/Darwin",
      ANTARCTICA__DUMONTDURVILLE: "Antarctica/DumontDUrville",
      AUSTRALIA__BRISBANE: "Australia/Brisbane",
      PACIFIC__GUAM: "Pacific/Guam",
      ASIA__VLADIVOSTOK: "Asia/Vladivostok",
      PACIFIC__PORT_MORESBY: "Pacific/Port_Moresby",
      PACIFIC__CHUUK: "Pacific/Chuuk",
      AUSTRALIA__ADELAIDE: "Australia/Adelaide",
      ANTARCTICA__CASEY: "Antarctica/Casey",
      AUSTRALIA__HOBART: "Australia/Hobart",
      AUSTRALIA__SYDNEY: "Australia/Sydney",
      PACIFIC__EFATE: "Pacific/Efate",
      PACIFIC__GUADALCANAL: "Pacific/Guadalcanal",
      PACIFIC__KOSRAE: "Pacific/Kosrae",
      ASIA__MAGADAN: "Asia/Magadan",
      PACIFIC__NORFOLK: "Pacific/Norfolk",
      PACIFIC__NOUMEA: "Pacific/Noumea",
      PACIFIC__POHNPEI: "Pacific/Pohnpei",
      PACIFIC__FUNAFUTI: "Pacific/Funafuti",
      PACIFIC__KWAJALEIN: "Pacific/Kwajalein",
      PACIFIC__MAJURO: "Pacific/Majuro",
      ASIA__KAMCHATKA: "Asia/Kamchatka",
      PACIFIC__NAURU: "Pacific/Nauru",
      PACIFIC__TARAWA: "Pacific/Tarawa",
      PACIFIC__WAKE: "Pacific/Wake",
      PACIFIC__WALLIS: "Pacific/Wallis",
      PACIFIC__AUCKLAND: "Pacific/Auckland",
      PACIFIC__ENDERBURY: "Pacific/Enderbury",
      PACIFIC__FAKAOFO: "Pacific/Fakaofo",
      PACIFIC__FIJI: "Pacific/Fiji",
      PACIFIC__TONGATAPU: "Pacific/Tongatapu",
      PACIFIC__APIA: "Pacific/Apia",
      PACIFIC__KIRITIMATI: "Pacific/Kiritimati",
    },
  },
};
