import {GET_VOIVODESHIPS} from "../actions/actionTypes";

const initialState = {
    voivodeships: [
        {
            voivodeship: "Dolnośląskie",
            districts: [
                {
                    district: "bolesławiecki",
                    // communities: ["Bolesławiec", "Gromadka", "Osiecznica", "Warta Bolesławiecka", "Nowogrodziec"]
                }, 
                {
                    district: "dzierżoniowski",
                    // communities: ["Bolesławiec", "Gromadka", "Osiecznica", "Warta Bolesławiecka", "Nowogrodziec"]
                },
                {
                    district: "głogowski"
                },
                {
                    district: "górowski"
                },
                {
                    district: "jaworski"
                },
                {
                    district: "jeleniogórski"
                },
                {
                    district: "kamiennogórski"
                },
                {
                    district: "kłodzki"
                },
                {
                    district: "legnicki"
                },
                {
                    district: "lubański"
                },
                {
                    district: "lwówecki"
                },
                {
                    district: "milicki"
                },
                {
                    district: "oleśnicki"
                },
                {
                    district: "oławski"
                },
                {
                    district: "polkowicki"
                },
                {
                    district: "strzeliński"
                },
                {
                    district: "średzki"
                },
                {
                    district: "świdnicki"
                },
                {
                    district: "trzebnicki"
                },
                {
                    district: "wałbrzyski"
                },
                {
                    district: "wołowski"
                },
                {
                    district: "wrocławski"
                },
                {
                    district: "ząbkowicki"
                },
                {
                    district: "zgorzelecki"
                },
                {
                    district: "złotoryjski"
                }
            ]
        },
   
        {
            voivodeship: "Kujawsko-pomorskie",
            districts: [
                {
                    district: "aleksandrowski"
                }, 
                {
                    district: "brodnicki"
                }, 
                {
                    district: "bydgoski"
                }, 
                {
                    district: "chełmiński"
                }, 
                {
                    district: "golubsko-dobrzyński"
                }, 
                {
                    district: "grudziądzki"
                }, 
                {
                    district: "inowrocławski"
                }, 
                {
                    district: "lipnowski"
                }, 
                {
                    district: "mogileński"
                }, 
                {
                    district: "nakielski"
                }, 
                {
                    district: "radziejowski"
                }, 
                {
                    district: "rypiński"
                }, 
                {
                    district: "sępoleński"
                }, 
                {
                    district: "świecki"
                }, 
                {
                    district: "toruński"
                }, 

                {
                    district: "tucholski"
                }, 
                {
                    district: "wąbrzeski"
                }, 
                {
                    district: "włocławski"
                }, 
                {
                    district: "żniński"
                }, 
                
            ]
        },
        {
            voivodeship: "Lubelskie",
            districts: [
                {
                    district: "bialski"
                }, 
                {
                    district: "biłgorajski"
                }, 
                {
                    district: "chełmski"
                }, 
                {
                    district: "hrubieszowski"
                }, 
                {
                    district: "janowski"
                }, 
                {
                    district: "krasnostawski"
                }, 
                {
                    district: "kraśnicki"
                }, 
                {
                    district: "lubartowski"
                }, 
                {
                    district: "lubelski"
                }, 
                {
                    district: "łęczyński"
                }, 
                {
                    district: "łukowski"
                }, 
                {
                    district: "opolski"
                }, 
                {
                    district: "parczewski"
                }, 
                {
                    district: "puławski"
                }, 
                {
                    district: "radzyński"
                }, 
                {
                    district: "rycki"
                }, 
                {
                    district: "świdnicki"
                }, 
                {
                    district: "tomaszowski"
                }, 
                {
                    district: "włodawski"
                }, 
                {
                    district: "zamojski"
                }
            ]
        },
        {
            voivodeship: "Lubuskie",
            districts: [
                {
                    district: "gorzowski"
                }, 
                {
                    district: "krośnieński"
                }, 
                {
                    district: "międzyrzecki"
                }, 
                {
                    district: "nowosolski"
                }, 
                {
                    district: "słubicki"
                }, 
                {
                    district: "strzelecko-drezdenecki"
                }, 
                {
                    district: "sulęciński"
                }, 
                {
                    district: "świebodziński"
                }, 
                {
                    district: "wschowski"
                }, 
                {
                    district: "zielonogórski"
                }, 

                {
                    district: "żagański"
                }, 
                {
                    district: "żarski"
                }, 
            ]

        },

        {
            voivodeship: "Łódzkie",
            districts: [
                {
                    district: "bełchatowski"
                }, 
                {
                    district: "brzeziński"
                }, 
                {
                    district: "kutnowski"
                }, 
                {
                    district: "łaski"
                }, 
                {
                    district: "łęczycki"
                }, 
                {
                    district: "łowicki"
                }, 
                {
                    district: "łódzki wschodni"
                }, 
                {
                    district: "opoczyński"
                }, 
                {
                    district: "pabianicki"
                }, 

                {
                    district: "pajęczański"
                }, 

                {
                    district: "piotrkowski"
                }, 

                {
                    district: "poddębicki"
                }, 
                {
                    district: "radomszczański"
                }, 
                {
                    district: "rawski"
                }, 
                {
                    district: "sieradzki"
                }, 
                {
                    district: "skierniewicki"
                }, 
                {
                    district: "tomaszowski"
                }, 
                {
                    district: "wieluński"
                }, 
                {
                    district: "wieruszowski"
                }, 
                {
                    district: "zduńskowolski"
                }, 
                {
                    district: "zgierski"
                }, 
            ]

        },
    
   
        {
            voivodeship: "Małopolskie",
            districts: [
                {
                    district: "bocheński"
                }, 
                {
                    district: "brzeski"
                }, 
                {
                    district: "chrzanowski"
                }, 
                {
                    district: "dąbrowski"
                }, 
                {
                    district: "gorlicki"
                }, 
                {
                    district: "krakowski"
                }, 
                {
                    district: "limanowski"
                }, 
                {
                    district: "miechowski"
                }, 
                {
                    district: "myślenicki"
                }, 

                {
                    district: "nowosądecki"
                }, 

                {
                    district: "nowotarski"
                }, 

                {
                    district: "olkuski"
                }, 
                {
                    district: "oświęcimski"
                }, 
                {
                    district: "proszowicki"
                }, 
                {
                    district: "suski"
                }, 
                {
                    district: "tarnowski"
                }, 
                {
                    district: "tatrzański"
                }, 
                {
                    district: "wadowicki"
                }, 
                {
                    district: "wielicki"
                }, 
            ]
        },
        {
            voivodeship: "Mazowieckie",
            districts: [
                {
                    district: "białobrzeski"
                }, 
                {
                    district: "ciechanowski"
                }, 
                {
                    district: "garwoliński"
                }, 
                {
                    district: "gostyniński"
                }, 
                {
                    district: "grodziski"
                }, 
                {
                    district: "grójecki"
                }, 
                {
                    district: "kozienicki"
                }, 
                {
                    district: "legionowski"
                }, 
                {
                    district: "lipski"
                }, 
                {
                    district: "łosicki"
                }, 
                {
                    district: "makowski"
                }, 
                {
                    district: "miński"
                }, 
                {
                    district: "mławski"
                }, 
                {
                    district: "nowodworski"
                }, 
                
                {
                    district: "ostrołęcki"
                }, 
                {
                    district: "ostrowski"
                }, 
                {
                    district: "otwocki"
                }, 
                {
                    district: "piaseczyński"
                }, 
                {
                    district: "płocki"
                }, 
                {
                    district: "płoński"
                }, 
                {
                    district: "pruszkowski"
                }, 
                {
                    district: "przasnyski"
                }, 
                {
                    district: "przysuski"
                }, 
                {
                    district: "pułtuski"
                }, 
                
                {
                    district: "radomski"
                }, 
                
                {
                    district: "siedlecki"
                }, 
                {
                    district: "sierpecki"
                }, 
                {
                    district: "sochaczewski"
                }, 
                {
                    district: "sokołowski"
                }, 
                
                {
                    district: "szydłowiecki"
                }, 
                {
                    district: "warszawski zachodni"
                }, 
                {
                    district: "węgrowski"
                }, 
                {
                    district: "wołomiński"
                }, 
                
                {
                    district: "wyszkowski"
                }, 
                {
                    district: "zwoleński"
                }, 
                {
                    district: "żuromiński"
                }, 
                
                {
                    district: "żyrardowski"
                }, 
            ]
                

        },
    
   
        {
            voivodeship: "Opolskie",
            districts: [
                {
                    district: "brzeski"
                }, 
                {
                    district: "głubczycki"
                }, 
                {
                    district: "kędzierzyńsko-kozielski"
                }, 
                {
                    district: "kluczborski"
                }, 
                {
                    district: "krapkowicki"
                }, 
                {
                    district: "namysłowski"
                }, 
                {
                    district: "nyski"
                }, 
                {
                    district: "oleski"
                }, 
                {
                    district: "opolski"
                }, 
                {
                    district: "prudnicki"
                }, 
                {
                    district: "strzelecki"
                },
            ]

        },

   
        {
            voivodeship: "Podkarpackie",
            districts: [
                {
                    district: "bieszczadzki"
                }, 
                {
                    district: "brzozowski"
                }, 
                {
                    district: "dębicki"
                }, 
                {
                    district: "jarosławski"
                }, 
                {
                    district: "jasielski"
                }, 
                {
                    district: "kolbuszowski"
                }, 
                {
                    district: "krośnieński"
                }, 
                {
                    district: "leski"
                }, 

                {
                    district: "leżajski"
                }, 
                {
                    district: "lubaczowski"
                }, 
                {
                    district: "łańcucki"
                }, 
                {
                    district: "mielecki"
                }, 
                {
                    district: "niżański"
                }, 
                {
                    district: "przemyski"
                }, 
                {
                    district: "przeworski"
                }, 
                {
                    district: "ropczycko-sędziszowski"
                }, 
                {
                    district: "rzeszowski"
                }, 
                {
                    district: "sanocki"
                }, 
                {
                    district: "stalowowolski"
                }, 
                {
                    district: "strzyżowski"
                }, 
                {
                    district: "tarnobrzeski"
                }, 
            ]

        },
   
        {
            voivodeship: "Podlaskie",
            districts: [
                {
                    district: "augustowski"
                }, 
                {
                    district: "białostocki"
                }, 
                {
                    district: "bielski"
                }, 
                {
                    district: "grajewski"
                }, 
                {
                    district: "hajnowski"
                }, 
                {
                    district: "kolneński"
                }, 
                {
                    district: "łomżyński"
                }, 
                {
                    district: "moniecki"
                }, 
                {
                    district: "sejneński"
                }, 
                {
                    district: "siemiatycki"
                }, 
                {
                    district: "sokólski"
                }, 
                {
                    district: "suwalski"
                }, 
                {
                    district: "wysokomazowiecki"
                }, 
                {
                    district: "zambrowski"
                },
            ]

        },

   
        {
            voivodeship: "Pomorskie",
            districts: [
                {
                    district: "bytowski"
                }, 
                {
                    district: "chojnicki"
                }, 
                {
                    district: "człuchowski"
                }, 
                {
                    district: "gdański"
                }, 
                {
                    district: "kartuski"
                }, 
                {
                    district: "kościerski"
                }, 
                {
                    district: "kwidzyński"
                }, 
                {
                    district: "lęborski"
                }, 
                {
                    district: "malborski"
                }, 
                {
                    district: "nowodworski"
                }, 
                {
                    district: "pucki"
                }, 
                {
                    district: "słupski"
                }, 
                {
                    district: "starogardzki"
                }, 
                {
                    district: "sztumski"
                }, 
                {
                    district: "wejherowski"
                }, 
            ]

        },
    
   
        {
            voivodeship: "Śląskie",
            districts: [
                {
                    district: "będziński"
                }, 
                {
                    district: "bielski"
                }, 
                {
                    district: "bieruńsko-lędziński"
                }, 
                {
                    district: "cieszyński"
                }, 
                {
                    district: "gliwicki"
                }, 
                {
                    district: "kłobucki"
                }, 
                {
                    district: "lubliniecki"
                }, 
                {
                    district: "mikołowski"
                }, 
                {
                    district: "myszkowski"
                }, 
                {
                    district: "pszczyński"
                }, 
                {
                    district: "raciborski"
                }, 

                {
                    district: "rybnicki"
                }, 

                {
                    district: "tarnogórski"
                }, 
                {
                    district: "wodzisławski"
                }, 

                {
                    district: "zawierciański"
                }, 

                {
                    district: "żywiecki"
                }, 
            ]
        },

        {
            voivodeship: "Świętokrzyskie",
            districts: [
                {
                    district: "buski"
                }, 
                {
                    district: "jędrzejowski"
                }, 
                {
                    district: "kazimierski"
                }, 
                {
                    district: "kielecki"
                }, 
                {
                    district: "konecki"
                }, 
                {
                    district: "opatowski"
                }, 
                {
                    district: "ostrowiecki"
                }, 
                {
                    district: "pińczowski"
                },  
                {
                    district: "sandomierski"
                }, 
                {
                    district: "skarżyski"
                }, 
                {
                    district: "starachowicki"
                }, 
                {
                    district: "staszowski"
                }, 
                {
                    district: "włoszczowski"
                }, 
            ]

        },

        {
            voivodeship: "Warmińsko-mazurskie",
            districts: [
                {
                    district: "bartoszycki"
                }, 
                {
                    district: "braniewski"
                }, 
                {
                    district: "działdowski"
                }, 
                {
                    district: "elbląski"
                }, 
                {
                    district: "ełcki"
                }, 
                {
                    district: "giżycki"
                }, 
                {
                    district: "gołdapski"
                }, 
                {
                    district: "iławski"
                }, 
                {
                    district: "kętrzyński"
                }, 
                {
                    district: "lidzbarski"
                }, 
                {
                    district: "mrągowski"
                }, 
                {
                    district: "nidzicki"
                }, 
                {
                    district: "nowomiejski"
                }, 
                {
                    district: "olecki"
                }, 
                {
                    district: "olsztyński"
                }, 
                {
                    district: "ostródzki"
                }, 
                {
                    district: "piski"
                }, 
                {
                    district: "szczycieński"
                }, 
                {
                    district: "węgorzewski"
                }, 
            ]

        },
   
        {
            voivodeship: "Wielkopolskie",
            districts: [
                {
                    district: "chodzieski"
                }, 
                {
                    district: "czarnkowsko-trzcianecki"
                }, 
                {
                    district: "gnieźnieński"
                }, 
                {
                    district: "gostyński"
                }, 
                {
                    district: "grodziski"
                }, 
                {
                    district: "jarociński"
                }, 
                {
                    district: "kaliski"
                }, 
                {
                    district: "kępiński"
                }, 
                {
                    district: "kolski"
                }, 
                {
                    district: "koniński"
                }, 
                {
                    district: "kościański"
                }, 
                {
                    district: "krotoszyński"
                }, 
                {
                    district: "leszczyński"
                }, 
                {
                    district: "międzychodzki"
                }, 
                {
                    district: "nowotomyski"
                }, 
                {
                    district: "obornicki"
                },
                {
                    district: "ostrowski"
                },
                {
                    district: "ostrzeszowski"
                },
                {
                    district: "pilski"
                },
                {
                    district: "pleszewski"
                },
                {
                    district: "poznański"
                },
                {
                    district: "rawicki"
                },
                {
                    district: "słupecki"
                },
                {
                    district: "szamotulski"
                },
                {
                    district: "średzki"
                },
                {
                    district: "turecki"
                },
                {
                    district: "śremski"
                },

                {
                    district: "wągrowiecki"
                },
                
                {
                    district: "wolsztyński"
                },
                {
                    district: "wrzesiński"
                },
                {
                    district: "złotowski"
                },
            ]
        },
        {
            voivodeship: "Zachodniopomorskie",
            districts: [
                {
                    district: "białogardzki"
                }, 
                {
                    district: "choszczeński"
                }, 
                {
                    district: "drawski"
                }, 
                {
                    district: "goleniowski"
                }, 
                {
                    district: "gryficki"
                }, 
                {
                    district: "gryfiński"
                }, 
                {
                    district: "kamieński"
                }, 
                {
                    district: "kołobrzeski"
                }, 
                {
                    district: "koszaliński"
                }, 
                {
                    district: "łobeski"
                }, 
                {
                    district: "myśliborski"
                }, 
                {
                    district: "policki"
                }, 
                {
                    district: "pyrzycki"
                }, 
                {
                    district: "sławieński"
                }, 
                {
                    district: "stargardzki"
                }, 
                {
                    district: "szczecinecki"
                }, 
                {
                    district: "świdwiński"
                }, 
                {
                    district: "świdwiński"
                }, 
            ]

        }
    
    ]
};


const users = (state= initialState, action) => {
    switch(action.type) {
        case GET_VOIVODESHIPS:
            return state;
        default:
            return state;
    }
}

export default users;
