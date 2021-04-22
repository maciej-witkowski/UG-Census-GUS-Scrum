import React, {useEffect,useState} from 'react';
import axios from 'axios';
import loading from '../loading.gif'
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    PieChart,
    Pie
} from "recharts";


const Stats = () => {
    const [stats, setStats] = useState([
        {
            name:"Informacje ogólne",
            locally:false,
            required: false,
            needs: 7,
            has: []
        },
        {
            name:"Wykształcenie ankietowanych",
            locally:false,
            required: false,
            needs: 6,
            has: []
        },
        {   
            name:"Statystyki pracy",
            locally:false,
            required: false,
            needs: 2,
            has: []
        },
        {   
            name:"Zarobki i praca w IT",
            locally:false,
            required: false,
            needs: 2,
            has: []
        },
        {   
            name:"Statystyki ludności dla województw",
            locally:false,
            required: false,
            needs: 1,
            has: []
        },
        {   
            name:"Statystyka gmin",
            locally:false,
            required: false,
            needs: 2,
            has: []
        },
        {   
            name:"Statystyka powiatów",
            locally:false,
            required: false,
            needs: 2,
            has: []
        },
        {   
            name:"Zbiór danych o lokalizacji ankieterów",
            locally:false,
            required: false,
            needs: 1,
            has: []
        },
        {
            name: "Wybierz konkretne województwo",
            locally: false,
            required: false,
            needs: 1,
            has: []
        }
    ])
    const [ileankiet,setankiety] = useState([]);
    const [ilekobiet,setilekobiet]= useState([]);
    const [ilemezczyzn,setilemezczyzn]= useState([]);
    const [ilenieokreslonych,setilenieokreslonych]= useState([]);
    const [wyksztalceniepodstawowe,setwyksztalceniepodstawowe]= useState([]);
    const [wyksztalceniesrednie,setwyksztalceniesrednie]= useState([]);
    const [wyksztalceniewyzsze,setwyksztalceniewyzsze]= useState([]);
    const [wyksztalceniezawodowe,setwyksztalceniezawodowe]= useState([]);
    const [wyksztalceniegimnazjalne,setwyksztalceniegimnazjalne]= useState([]);
    const [ilemieszkazrodzicami,setilemieszkazrodzicami]= useState([]);
    const [ilemapartnerke,setilemapartnerke]= useState([]);
    const [sredniawieku,setsredniawieku]= useState([]);
    const [wojewodztwo,setwojewodztwo]= useState({});
    const [czydostalem,setczydostalem]= useState(false)
    const [workplace_type, setWorkplace_type] = useState([]);
    const [ITfield,setITfield]= useState([]);
    const [monthlyearnings,setmonthlyearnings]= useState([]);
    const [contract, setContract] = useState([]);
    const [contractOnly, setContractOnly] = useState([]);
    const [selfEmp, setSelfEmp] = useState(0);
    const [mandate, setMandate] = useState(0);
    const [wojewodztwa, setWojewodztwa] = useState([]);
    const [communesTop, setCommunesTop] = useState([]);
    const [communesTopOthers, setCommunesTopOthers] = useState([]);
    const [districtsTop, setDistrictsTop] = useState([]); 
    const [districtsTopOthers, setDistrictsTopOthers] = useState([]);

    const plec = [
        { name: "Kobiety", "ilość osób": ilekobiet },
        { name: "Mężczyźni", "ilość osób": ilemezczyzn },
        { name: "Nieokreśleni", "ilość osób": ilenieokreslonych },

    ];

    const wyksztalcenie = [
        { name: "Podstawowe", "ilość osób": wyksztalceniepodstawowe },
        { name: "Srednie", "ilość osób": wyksztalceniesrednie },
        { name: "Wyzsze", "ilość osób":wyksztalceniewyzsze },
        { name: "Zawodowe", "ilość osób": wyksztalceniezawodowe },
        { name: "Gimnazjalne", "ilość osób":wyksztalceniegimnazjalne }
    ];

    const procentwyksztalcenia = [
        { name: 'Podstawowe', value: wyksztalceniepodstawowe },
        { name: 'Gimnazjalne', value: wyksztalceniegimnazjalne },
        { name: 'Srednie', value: wyksztalceniesrednie },
        { name: 'Zawodowe', value: wyksztalceniezawodowe },
        { name: 'Wyzsze', value: wyksztalceniewyzsze }
      ];


    useEffect(() => {
        axios.get("http://localhost:3000/polls/communes")
        .then(res=> {
            setwojewodztwo(res.data.data.voivodeships)
            setczydostalem(true)
            handleChangeLocallyState("Zbiór danych o lokalizacji ankieterów")
        });

        axios.get("http://localhost:3000/polls/ileankietwyslano")
            .then(res=> {
                setankiety(res.data);
                handleChangeLocallyState("Informacje ogólne")
            });
        axios.get("http://localhost:3000/polls/ilekobiet")
            .then(res=> {
                setilekobiet(res.data);
                handleChangeLocallyState("Informacje ogólne")
            });
        axios.get("http://localhost:3000/polls/ilemezczyzn")
            .then(res=> {
                setilemezczyzn(res.data);
                handleChangeLocallyState("Informacje ogólne")
            });
        axios.get("http://localhost:3000/polls/ilenieokreslonych")
            .then(res=> {
                setilenieokreslonych(res.data);
                handleChangeLocallyState("Informacje ogólne")
            });
        axios.get("http://localhost:3000/polls/wyksztalceniepodstawowe")
            .then(res=> {
                setwyksztalceniepodstawowe(res.data);
                handleChangeLocallyState("Wykształcenie ankietowanych")
            });
        axios.get("http://localhost:3000/polls/wyksztalceniesrednie")
            .then(res=> {
                setwyksztalceniesrednie(res.data);
                handleChangeLocallyState("Wykształcenie ankietowanych")
            });
        axios.get("http://localhost:3000/polls/wyksztalceniesrednie")
            .then(res=> {
                setwyksztalceniesrednie(res.data);
                handleChangeLocallyState("Wykształcenie ankietowanych")
            });
        axios.get("http://localhost:3000/polls/wyksztalceniewyzsze")
            .then(res=> {
                setwyksztalceniewyzsze(res.data);
                handleChangeLocallyState("Wykształcenie ankietowanych")
            });
        axios.get("http://localhost:3000/polls/ilemieszkazrodzicami")
            .then(res=> {
                setilemieszkazrodzicami(res.data);
                handleChangeLocallyState("Informacje ogólne")
            });
        axios.get("http://localhost:3000/polls/ilemapartnerke")
            .then(res=> {
                setilemapartnerke(res.data);
                handleChangeLocallyState("Informacje ogólne")
            });
        axios.get("http://localhost:3000/polls/sredniawieku")
            .then(res=> {
                setsredniawieku(res.data);
                handleChangeLocallyState("Informacje ogólne")
            });
            
            axios.get("http://localhost:3000/polls/ITfield")
            .then(res=> {
                let sum_IT = 0;
                for (const [key, value] of Object.entries(res.data.data)) {
                    sum_IT = sum_IT + value;
                }
                setITfield(sum_IT);
                handleChangeLocallyState("Zarobki i praca w IT")
            });

        axios.get("http://localhost:3000/polls/workplace_type")
            .then(res=> {
                let workplace = [];
                let type = {};
                
                for (const [key, value] of Object.entries(res.data.data)) {
                    type = {name: key, Polacy: value.polish, "Inne narodowości": value.other}
                    workplace.push(type);
                }
                setWorkplace_type(workplace);
                handleChangeLocallyState("Statystyki pracy")
            });

            axios.get("http://localhost:3000/polls/monthly_earnings")
            .then(res=> {
                setmonthlyearnings(res.data);
                handleChangeLocallyState("Zarobki i praca w IT")
            });

            axios.get("http://localhost:3000/polls/wyksztalceniezawodowe")
            .then(res=> {
                setwyksztalceniezawodowe(res.data);
                handleChangeLocallyState("Wykształcenie ankietowanych")
            });

            axios.get("http://localhost:3000/polls/wyksztalceniegimnazjalne")
            .then(res=> {
                setwyksztalceniegimnazjalne(res.data);
                handleChangeLocallyState("Wykształcenie ankietowanych")
            });
            axios.get("http://localhost:3000/polls/contract_type")
                .then(res=> {
                    let typeOfContract = [];
                    let typeOfContractOnly = [];
                    let type1 = {};
                    let type2 = {};
                    let sum = 0;
                    let self_sum = 0;
                    let sum_mandate = 0;
                    for (const [key, value] of Object.entries(res.data.data)) {
                        if(key !== "Samozatrudnienie"){
                            sum = sum + value;
                            if(key === "Umowa zlecenie"){
                                sum_mandate = value;
                            }
                        }
                        else {
                            self_sum = value;
                        }
                    }

                    for (const [key, value] of Object.entries(res.data.data)) {
                        if(key !== "Samozatrudnienie"){
                            type1 = {name: key, ilość: Math.round((value/sum*100) + Number.EPSILON)*100 / 100}
                            type2 = {name: key, ilość: value}
                            typeOfContract.push(type2);
                            typeOfContractOnly.push(type1);
                        }
                        else {
                            type2 = {name: key, ilość: value}
                            typeOfContract.push(type2);
                        }

                    }
                    setContract(typeOfContract);
                    setContractOnly(typeOfContractOnly);
                    setSelfEmp(Math.round((self_sum/(sum+self_sum)*100) + Number.EPSILON)*100 / 100);
                    setMandate(sum_mandate);
                    handleChangeLocallyState("Statystyki pracy")
            });
            
            axios.get("http://localhost:3000/polls/nationality_voivodeships")
            .then(res=> {
                let list = [];
                let type = {};
                
                for (const [key, value] of Object.entries(res.data)) {
                    type = {name: value.name, Polacy: value.polish, "Inne narodowości": value.others}
                    list.push(type);
                }
                setWojewodztwa(list);
                handleChangeLocallyState("Statystyki ludności dla województw")
                handleChangeLocallyState("Wybierz konkretne województwo")
            });

            axios.get("http://localhost:3000/polls/nationality_communes")
            .then(res=> {
                let list = [];
                let type = {};
                
                for (const [key, value] of Object.entries(res.data)) {
                    type = {name: value.name, Polacy: value.polish, "Inne narodowości": value.others}
                    list.push(type);
                }
                list.sort(function(first, second) {
                    return second.Polacy - first.Polacy;
                   });
                setCommunesTop(list.slice(0, 5));
                handleChangeLocallyState("Statystyka gmin")
            });

            axios.get("http://localhost:3000/polls/nationality_communes")
            .then(res=> {
                let list = [];
                let type = {};
                
                for (const [key, value] of Object.entries(res.data)) {
                    type = {name: value.name, Polacy: value.polish, "Inne narodowości": value.others}
                    list.push(type);
                }
                list.sort(function(first, second) {
                    return second["Inne narodowości"] - first["Inne narodowości"];
                   });
                
                setCommunesTopOthers(list.slice(0, 5));
                handleChangeLocallyState("Statystyka gmin")
            });

            axios.get("http://localhost:3000/polls/nationality_districts")
            .then(res=> {
                let list = [];
                let type = {};
                
                for (const [key, value] of Object.entries(res.data)) {
                    type = {name: value.name, Polacy: value.polish, "Inne narodowości": value.others}
                    list.push(type);
                }
                list.sort(function(first, second) {
                    return second.Polacy - first.Polacy;
                   });
                setDistrictsTop(list.slice(0, 5));
                handleChangeLocallyState("Statystyka powiatów")
            });
            
            axios.get("http://localhost:3000/polls/nationality_districts")
            .then(res=> {
                let list = [];
                let type = {};
                
                for (const [key, value] of Object.entries(res.data)) {
                    type = {name: value.name, Polacy: value.polish, "Inne narodowości": value.others}
                    list.push(type);
                }
                list.sort(function(first, second) {
                    return second["Inne narodowości"] - first["Inne narodowości"];
                   });
                
                setDistrictsTopOthers(list.slice(0, 5));
                handleChangeLocallyState("Statystyka powiatów")
            });

        
    }, []);

    const [cosiek, setCosiek] = useState(false)
    const [dataRequired, setDataRequired] = useState([])
    const [displayStats, setDisplayStats] = useState([])
    const [showStats, setShowStats] = useState(false)
    const [buttonText, setButtonText] = useState("Pokaż statystyki z zaznaczonych dziedzin")
    const handleAddToRequired = (name) => {
        console.log(name)
        if (name == "Wybierz konkretne województwo") {
            setCosiek(!stats.filter(stat => stat.name === name)[0].required)
            setReqWoj2([])
            // setReqWoj3([])
        }
        // let x = stats
        stats.filter(stat => stat.name === name)[0].required = !stats.filter(stat => stat.name === name)[0].required
        // stats.forEach(stat => {console.log(stat.name, ": ", stat.required);})
    }
    const handleChangeLocallyState = (name) => {
        console.log(stats)
        let stat = stats.filter(stat => stat.name === name)[0]
        stat.has.push(true)
        if (stat.needs == stat.has.length) {
            stat.locally = true;
        } else {
            stat.locally = false;
        }

        // stats.forEach(stat => {
        //     stat.needs == stat.has.length ? stats.filter(stat => stat.name === name)[0].locally = true : stats.filter(stat => stat.name === name)[0].locally = false
        // })
        
    }
    const handleRefreshStats = () => {
        setDisplayStats(stats.filter(stat=>stat.required))
        setReqWoj3(reqWoj2)
        setShowStats(true)
    }
    const [wojewodztwa2, setWojewodztwa2] = useState(["dolnośląskie",
    "kujawsko-pomorskie",
    "lubelskie",
    "lubuskie",
    "mazowieckie",
    "małopolskie",
    "opolskie",
    "podkarpackie",
    "podlaskie",
    "pomorskie",
    "warmińsko-mazurskie",
    "wielkopolskie",
    "zachodniopomorskie",
    "łódzkie",
    "śląskie",
    "świętokrzyskie"])
    const sortWoj = () => {
        let x = [...wojewodztwa2]
        x.sort((a,b)=> a < b ? 1 : -1)
    }
    sortWoj()
    const [reqWoj2, setReqWoj2] = useState([])
    const [reqWoj3, setReqWoj3] = useState([])
    const handleAddWoj2 = (name) => {
        if (cosiek) {
            if (!reqWoj2.includes(name)) {
                let x = [...reqWoj2]
                x.push(name)
                setReqWoj2([...x])
            } else {
                let x = [...reqWoj2]
                x = x.filter(woj => woj !== name)
                setReqWoj2([...x])
            }
            
        }
        console.log(reqWoj2);     
    }
    return(
        <div>
            <h1 className="title">Statystyki</h1>
            <div className={"columns"}>
                <div className={"column is-half is-offset-one-quarter"}>
                    <article className="panel is-warning is-centered has-text-centered">
                        <p className="panel-heading has-text-centered ">
                            Zaznacz interesujące Cię statystyki
                        </p>
                        <form id="myForm">
                        {stats.map(stat =>
                            <div className="panel-block ml-6 mr-6">
                                <input type="checkbox" className={"is-medium"} onClick={()=>handleAddToRequired(stat.name)}/>
                                <a className={"subtitle"}>{stat.name}</a>

                            </div>)}
                    </form>
                            <div className="panel-block ml-6 mr-6">
                                {cosiek ? <div className={"select is-multiple is-medium"}>
                                    <select multiple size={16}>
                                        {wojewodztwa2.map(woj=>
                                            <option onClick={()=>{handleAddWoj2(woj)}}>
                                                {woj}
                                            </option>)}
                                    </select>
                                </div> : null}
                            </div>
                        <div className="panel-block mr-6 ml-6">
                            <button onClick={()=>{
                                handleRefreshStats();
                                setButtonText("Odśwież pokazywane statystyki");
                            }}
                                    className="button is-link is-outlined is-fullwidth"
                            >
                                {buttonText}
                            </button>
                        </div>
                        <div className="panel-block mr-6 ml-6">
                            <button onClick={()=>{
                                document.getElementById("myForm").reset();

                                setStats([...stats.map(stat=> {return {...stat, required: false} })]);
                                setButtonText("Pokaż statystyki z zaznaczonych dziedzin");

                                setCosiek(false);
                                setDisplayStats([]);
                                setShowStats(false)

                                setReqWoj2([])
                                setReqWoj3([])
                            }}
                                    className="button is-danger is-outlined is-fullwidth"
                            >
                                Reset
                            </button>
                        </div>
                    </article>
                </div>
            </div>
            
            {/*<div style={{*/}
            {/*    display: "flex",*/}
            {/*    flexDirection: "column",*/}
            {/*    justifyContent: "center",*/}
            {/*    alignItems: "center",*/}
            {/*}}>*/}
            {/*    <div style={{*/}
            {/*        width: "20%"*/}
            {/*    }}>*/}
            {/*        <form id="myForm">*/}
            {/*        {stats.map(stat =>*/}
            {/*            <div style={{*/}
            {/*                display: "flex",*/}
            {/*                justifyContent: "space-between",*/}
            {/*                alignItems: "center",*/}
            {/*                width: "100%",*/}
            {/*                borderBottom: "solid gray 1px"*/}
            {/*            }}>*/}
            {/*                <input type="checkbox" style={{marginRight: "10px"}} onClick={()=>handleAddToRequired(stat.name)}/>*/}
            {/*                <p style={{margin: "0"}}>{stat.name}</p>*/}
            {/*                {cosiek ? <ul style={{*/}
            {/*                    display: "flex",*/}
            {/*                    flexDirection: "column",*/}
            {/*                    justifyContent: "space-between",*/}
            {/*                    alignItems: "center",*/}
            {/*                    width: "100%",*/}
            {/*                    borderBottom: "solid gray 1px",*/}
            {/*                    height: "100px",*/}
            {/*                    overflowY: "scroll"*/}
            {/*                }}>*/}
            {/*                    <div className="select">*/}
            {/*                        <select>*/}
            {/*                            <option>Select dropdown</option>*/}
            {/*                            <option>With options</option>*/}
            {/*                        </select>*/}
            {/*                    </div>*/}
            {/*                    {wojewodztwa2.map(woj=>*/}
            {/*                        <li onClick={()=>{handleAddWoj2(woj)}} style={{width: "70%", display: "flex", justifyContent: "space-between", alignItems: "center", color: "black"}}*/}
            {/*                        >*/}
            {/*                            <input type="checkbox"/>*/}
            {/*                            {woj}*/}
            {/*                        </li>)}*/}
            {/*                </ul> : null}*/}
            {/*            </div>*/}

            {/*        )}*/}
            {/*        </form>*/}
            {/*        {cosiek ? <ul style={{*/}
            {/*                display: "flex",*/}
            {/*                flexDirection: "column",*/}
            {/*                justifyContent: "space-between",*/}
            {/*                alignItems: "center",*/}
            {/*                width: "100%",*/}
            {/*                borderBottom: "solid gray 1px",*/}
            {/*                height: "100px",*/}
            {/*                overflowY: "scroll"*/}
            {/*            }}>*/}
            {/*                    {wojewodztwa2.map(woj=><li onClick={()=>{handleAddWoj2(woj)}} style={{width: "70%", display: "flex", justifyContent: "space-between", alignItems: "center", color: "black"}}><input type="checkbox"/>{woj}</li>)}*/}
            {/*                </ul> : null}*/}
            {/*        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>*/}
            {/*            <button onClick={()=>{*/}
            {/*                handleRefreshStats();*/}
            {/*                // setShowStats(true);*/}
            {/*                setButtonText("Odśwież pokazywane statystyki")*/}

            {/*            }} style={{*/}
            {/*                backgroundColor: "black",*/}
            {/*                margin: "20px 0",*/}
            {/*                padding: "5px"*/}
            {/*            }}>{buttonText}</button>*/}
            {/*            <button style={{*/}
            {/*                backgroundColor: "black",*/}
            {/*                margin: "20px 0",*/}
            {/*                padding: "5px",*/}
            {/*            }} onClick={()=>{*/}
            {/*                document.getElementById("myForm").reset();*/}

            {/*                setStats([...stats.map(stat=> {return {...stat, required: false} })]);*/}
            {/*                setButtonText("Pokaż statystyki z zaznaczonych dziedzin");*/}


            {/*                setCosiek(false);*/}
            {/*                setDisplayStats([]);*/}
            {/*                setShowStats(false)*/}

            {/*                setReqWoj2([])*/}
            {/*                setReqWoj3([])*/}
            {/*            }}>Reset</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}


            {/*</div>*/}



            {/* dataRequired */}
            {showStats ? stats.reduce((acc, curr) => {
                // console.log(curr)
                if (curr.required) {
                    return acc && curr.locally
                } else {
                    return acc
                }
                
            }, true) ? 
            (
                <div>
                    {displayStats.filter(stat=>stat.name === "Informacje ogólne").length ?
            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-danger is-1"}>{ileankiet} <b className={"subtitle"}>wysłanych ankiet</b></p>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-info is-1"}><b className={"subtitle"}>średni wiek - </b>{Math.round(sredniawieku)}<b className={"subtitle"}> lat</b> </p>
                </div>
            </div> : null}

            <div className={"columns m-3"}>
                {displayStats.filter(stat=>stat.name === "Informacje ogólne").length ? 
                    <div style={{ textAlign: "center" }} className={"column box m-3"}>
                    <h1 className={"subtitle"}>Płeć ankietowanych</h1>
                    <div className="App columns is-centered is-flex-mobile mr-5">
                        <BarChart
                            width={350}
                            height={250}
                            data={plec}
                            barSize={20}
                        >
                            <XAxis
                                dataKey="name"
                                scale="point"
                                padding={{ left: 10, right: 10 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="ilość osób" fill="#808000" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div> : null}
                {displayStats.filter(stat=>stat.name === "Wykształcenie ankietowanych").length ? 
                <div style={{ textAlign: "center" }} className={"column box m-3"}>
                    <h1 className={"subtitle"}>Wykształcenie ankietowanych</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile">
                        <BarChart
                            width={400}
                            height={250}
                            data={wyksztalcenie}
                            barSize={20}
                        >
                            <XAxis
                                dataKey="name"
                                scale="point"
                                padding={{ left: 10, right: 10 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="ilość osób" fill="#8884d8" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div> : null }
            </div>
            
            {displayStats.filter(stat=>stat.name === "Informacje ogólne").length ?
            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{ilemieszkazrodzicami}<b className={"subtitle"}> osób mieszka z rodzicami</b> </p>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-primary is-2"}>{ilemapartnerke}<b className={"subtitle"}> osób ma partnera/partnerkę</b> </p>
                </div>
            </div> : null }
            
            {displayStats.filter(stat=>stat.name === "Statystyki pracy").length ?
            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Procent zatrudnionych osób ze względu na branżę</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile mt-6">
                    <BarChart
                        width={500}
                        height={300}
                        data={workplace_type}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className={"mt-4"}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Polacy" stackId="a" fill="#8884d8" />
                            <Bar dataKey="Inne narodowości" stackId="a" fill="#48D1CC" />
                    </BarChart>
                    </div>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Wykształcenie</h1>
                    <div className="App columns is-centered is-flex-mobile mr-5">
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={procentwyksztalcenia}
                                cx={200}
                                cy={200}
                                outerRadius={80}
                                fill="#8B4513"
                                label={(entry) => entry.name}
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div> : null }
            
            {displayStats.filter(stat=>stat.name === "Statystyki pracy").length ? 
            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Typy umów dot. zatrudnienia - %</h1>
                        <div className="App columns is-centered mr-5 is-flex-mobile">
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="ilość"
                                    isAnimationActive={false}
                                    data={contractOnly}
                                    cx={200}
                                    cy={200}
                                    outerRadius={80}
                                    fill="#DC143C"
                                    label={(entry) => entry.name}
                                />
                                <Tooltip />
                            </PieChart>
                        </div>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Typy umów dot. zatrudnienia z samozatrudnieniem</h1>
                        <div className="App columns is-centered is-flex-mobile mr-5 mt-6">
                            <BarChart
                                width={350}
                                height={250}
                                data={contract}
                                barSize={20}
                                className={"mt-6"}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="ilość" fill="#808000" background={{ fill: "#eee" }} />
                            </BarChart>
                        </div>
                </div>
            </div> : null }
            
            {displayStats.filter(stat=>stat.name === "Zarobki i praca w IT").length ?
            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{Math.round(monthlyearnings.brutto_avg)}<b className={"subtitle"}> Średnie zarobki brutto</b> </p>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{Math.round(monthlyearnings.netto_avg)}<b className={"subtitle"}> Średnie zarobki netto</b> </p>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{Math.round(ITfield)}<b className={"subtitle"}> Ilosc osob pracujacych w IT</b> </p>
                </div>
            </div> : null }
            
            {displayStats.filter(stat=>stat.name === "Statystyki pracy").length ?
            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-primary is-2"}>{selfEmp + "%"} <b className={"subtitle"}>osób samozatrudnionych</b></p>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-primary is-2"}>{mandate}<b className={"subtitle"}> osób na umowie zleceniu</b> </p>
                </div>
            </div> : null }
            
            {displayStats.filter(stat=>stat.name === "Statystyki ludności dla województw").length ?
            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Ilość osób zamieszkujących dane województwo</h1>
                        <div className="App columns is-centered mr-5 is-flex-mobile">
                        <BarChart
                            width={900}
                            height={400}
                            data={wojewodztwa}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Polacy" fill="#8884d8" />
                            <Bar dataKey="Inne narodowości" fill="#82ca9d" />
                        </BarChart>
                        </div>
                </div>
            </div> : null }

            {displayStats.filter(stat=>stat.name === "Statystyka gmin").length ?        
            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Gminy, w których jest najwięcej zatrudnionych Polaków</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile mt-6">
                    <BarChart
                        width={350}
                        height={250}
                        data={communesTop}
                        barSize={20}
                        className={"mt-6"}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Polacy" name="ilość osób"  fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                    </div>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Gminy, w których jest najwięcej zatrudnionych osób innej narodowości</h1>
                        <div className="App columns is-centered is-flex-mobile mr-5 mt-6">
                            <BarChart
                                width={350}
                                height={250}
                                data={communesTopOthers}
                                barSize={20}
                                className={"mt-6"}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="Inne narodowości" name="ilość osób" fill="#82ca9d" background={{ fill: "#eee" }} />
                            </BarChart>
                        </div>
                </div>
            </div> : null }
            
            {displayStats.filter(stat=>stat.name === "Statystyka powiatów").length ? 
            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Powiaty, w których jest najwięcej zatrudnionych Polaków</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile mt-6">
                    <BarChart
                        width={350}
                        height={250}
                        data={districtsTop}
                        barSize={20}
                        className={"mt-6"}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Polacy" name="ilość osób" fill="#82ca9d" background={{ fill: "#eee" }} />
                    </BarChart>
                    </div>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Powiaty, w których jest najwięcej zatrudnionych osób innej narodowości</h1>
                        <div className="App columns is-centered is-flex-mobile mr-5 mt-6">
                            <BarChart
                                width={350}
                                height={250}
                                data={districtsTopOthers}
                                barSize={20}
                                className={"mt-6"}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="Inne narodowości" name="ilość osób" fill="#8884d8" background={{ fill: "#eee" }} />
                            </BarChart>
                        </div>
                </div>
            </div> : null }

            {displayStats.filter(stat=>stat.name === "Zbiór danych o lokalizacji ankieterów").length ? 
            czydostalem ?
                <div>
                    {Object.keys(wojewodztwo).map(function(key, index) {
                        return (
                            <div key={index}  className={"panel m-4"}>
                                <div className={"column box m-3"}>
                                    <p className={"title has-text-danger is-2 has-text-centered"}><b className={"subtitle"}>Województwo:  </b> {key}</p>
                                    <div className={"subtitle has-text-centered has-text-success is-3"}>{wojewodztwo[key].working} <b className={"subtitle"}>osób  </b></div>
                                    <div  className={"rows"}>
                                        {Object.keys(wojewodztwo[key].districts).map(function(key2, index2) {
                                            return <div key={index2} className={"columns box m-1"}>
                                                <div className={"column has-text-warning-dark has-text-weight-bold is-capitalized"}><b className={"has-text-warning-dark"}>Powiat: {key2}</b>-{wojewodztwo[key].districts[key2].working}</div>

                                                {Object.keys(wojewodztwo[key].districts[key2].communes).map(function(key3, index3) {
                                                    return <div key={index3}>
                                                        <div className={"column box m-1 has-text-success-dark is-capitalized"}><b className={"has-text-info-dark"}>{key3}:</b> {wojewodztwo[key].districts[key2].communes[key3].working} osoba</div>
                                                    </div>
                                                })}
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
                : null : null }
                {displayStats.filter(stat=>stat.name === "Wybierz konkretne województwo").length ? 
                <div>
                    {Object.keys(wojewodztwo).map(function(key, index) {
                        if (reqWoj3.includes(key)) {
                        return (
                            <div key={index}  className={"panel m-4"}>
                                <div className={"column box m-3"}>
                                    <p className={"title has-text-danger is-2 has-text-centered"}><b className={"subtitle"}>Województwo:  </b> {key}</p>
                                    <div className={"subtitle has-text-centered has-text-success is-3"}>{wojewodztwo[key].working} <b className={"subtitle"}>osób  </b></div>
                                    <div  className={"rows"}>
                                        {Object.keys(wojewodztwo[key].districts).map(function(key2, index2) {
                                            return <div key={index2} className={"columns box m-1"}>
                                                <div className={"column has-text-warning-dark has-text-weight-bold is-capitalized"}><b className={"has-text-warning-dark"}>Powiat: {key2}</b>-{wojewodztwo[key].districts[key2].working}</div>

                                                {Object.keys(wojewodztwo[key].districts[key2].communes).map(function(key3, index3) {
                                                    return <div key={index3}>
                                                        <div className={"column box m-1 has-text-success-dark is-capitalized"}><b className={"has-text-info-dark"}>{key3}:</b> {wojewodztwo[key].districts[key2].communes[key3].working} osoba</div>
                                                    </div>
                                                })}
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>)}
                    })}
                </div>
                : null}
                </div>
                ) : <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "50px"
                // width: "10vw",
                // height: "10vh"
            }}><img src={loading} style={{width: "100px", height: "100px"}} alt="loading..." /></div> : null}
            {/* {dataRequired.reduce((acc, curr) => {
                console.log(curr)
                return acc && curr.locally
            }, true) ? <div><p>WSZYSTKO JEST</p></div> : <div><p>MAMY BRAKI</p></div>} */}








            {/* <h1 className="title">Statystyki</h1>
            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-danger is-1"}>{ileankiet} <b className={"subtitle"}>wysłanych ankiet</b></p>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-info is-1"}><b className={"subtitle"}>średni wiek - </b>{Math.round(sredniawieku)}<b className={"subtitle"}> lat</b> </p>
                </div>
            </div>

            <div className={"columns m-3"}>
                <div style={{ textAlign: "center" }} className={"column box m-3"}>
                    <h1 className={"subtitle"}>Płeć ankietowanych</h1>
                    <div className="App columns is-centered is-flex-mobile mr-5">
                        <BarChart
                            width={350}
                            height={250}
                            data={plec}
                            barSize={20}
                        >
                            <XAxis
                                dataKey="name"
                                scale="point"
                                padding={{ left: 10, right: 10 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="ilość osób" fill="#808000" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div>

                <div style={{ textAlign: "center" }} className={"column box m-3"}>
                    <h1 className={"subtitle"}>Wykształcenie ankietowanych</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile">
                        <BarChart
                            width={400}
                            height={250}
                            data={wyksztalcenie}
                            barSize={20}
                        >
                            <XAxis
                                dataKey="name"
                                scale="point"
                                padding={{ left: 10, right: 10 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="ilość osób" fill="#8884d8" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div>
            </div>

            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{ilemieszkazrodzicami}<b className={"subtitle"}> osób mieszka z rodzicami</b> </p>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-primary is-2"}>{ilemapartnerke}<b className={"subtitle"}> osób ma partnera/partnerkę</b> </p>
                </div>
            </div>

            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Procent zatrudnionych osób ze względu na branżę</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile mt-6">
                    <BarChart
                        width={500}
                        height={300}
                        data={workplace_type}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className={"mt-4"}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Polacy" stackId="a" fill="#8884d8" />
                            <Bar dataKey="Inne narodowości" stackId="a" fill="#48D1CC" />
                    </BarChart>
                    </div>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Wykształcenie</h1>
                    <div className="App columns is-centered is-flex-mobile mr-5">
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={procentwyksztalcenia}
                                cx={200}
                                cy={200}
                                outerRadius={80}
                                fill="#8B4513"
                                label={(entry) => entry.name}
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Typy umów dot. zatrudnienia - %</h1>
                        <div className="App columns is-centered mr-5 is-flex-mobile">
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="ilość"
                                    isAnimationActive={false}
                                    data={contractOnly}
                                    cx={200}
                                    cy={200}
                                    outerRadius={80}
                                    fill="#DC143C"
                                    label={(entry) => entry.name}
                                />
                                <Tooltip />
                            </PieChart>
                        </div>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Typy umów dot. zatrudnienia z samozatrudnieniem</h1>
                        <div className="App columns is-centered is-flex-mobile mr-5 mt-6">
                            <BarChart
                                width={350}
                                height={250}
                                data={contract}
                                barSize={20}
                                className={"mt-6"}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="ilość" fill="#808000" background={{ fill: "#eee" }} />
                            </BarChart>
                        </div>
                </div>
            </div>

            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{Math.round(monthlyearnings.brutto_avg)}<b className={"subtitle"}> Średnie zarobki brutto</b> </p>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{Math.round(monthlyearnings.netto_avg)}<b className={"subtitle"}> Średnie zarobki netto</b> </p>
                </div>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{Math.round(ITfield)}<b className={"subtitle"}> Ilosc osob pracujacych w IT</b> </p>
                </div>
            </div>

            <div className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-primary is-2"}>{selfEmp + "%"} <b className={"subtitle"}>osób samozatrudnionych</b></p>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <p className={"title has-text-primary is-2"}>{mandate}<b className={"subtitle"}> osób na umowie zleceniu</b> </p>
                </div>
            </div>

            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Ilość osób zamieszkujących dane województwo</h1>
                        <div className="App columns is-centered mr-5 is-flex-mobile">
                        <BarChart
                            width={900}
                            height={400}
                            data={wojewodztwa}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Polacy" fill="#8884d8" />
                            <Bar dataKey="Inne narodowości" fill="#82ca9d" />
                        </BarChart>
                        </div>
                </div>
            </div>

            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Gminy, w których jest najwięcej zatrudnionych Polaków</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile mt-6">
                    <BarChart
                        width={350}
                        height={250}
                        data={communesTop}
                        barSize={20}
                        className={"mt-6"}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Polacy" name="ilość osób"  fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                    </div>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Gminy, w których jest najwięcej zatrudnionych osób innej narodowości</h1>
                        <div className="App columns is-centered is-flex-mobile mr-5 mt-6">
                            <BarChart
                                width={350}
                                height={250}
                                data={communesTopOthers}
                                barSize={20}
                                className={"mt-6"}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="Inne narodowości" name="ilość osób" fill="#82ca9d" background={{ fill: "#eee" }} />
                            </BarChart>
                        </div>
                </div>
            </div>

            <div style={{ textAlign: "center" }} className={"columns m-3"}>
                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Powiaty, w których jest najwięcej zatrudnionych Polaków</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile mt-6">
                    <BarChart
                        width={350}
                        height={250}
                        data={districtsTop}
                        barSize={20}
                        className={"mt-6"}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Polacy" name="ilość osób" fill="#82ca9d" background={{ fill: "#eee" }} />
                    </BarChart>
                    </div>
                </div>

                <div className={"column box has-text-centered m-3"}>
                    <h1 className={"subtitle"}>Powiaty, w których jest najwięcej zatrudnionych osób innej narodowości</h1>
                        <div className="App columns is-centered is-flex-mobile mr-5 mt-6">
                            <BarChart
                                width={350}
                                height={250}
                                data={districtsTopOthers}
                                barSize={20}
                                className={"mt-6"}
                            >
                                <XAxis
                                    dataKey="name"
                                    scale="point"
                                    padding={{ left: 10, right: 10 }}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="Inne narodowości" name="ilość osób" fill="#8884d8" background={{ fill: "#eee" }} />
                            </BarChart>
                        </div>
                </div>
            </div>


            {czydostalem ?
                <div>
                    {Object.keys(wojewodztwo).map(function(key, index) {
                        return (
                            <div key={index}  className={"panel m-4"}>
                                <div className={"column box m-3"}>
                                    <p className={"title has-text-danger is-2 has-text-centered"}><b className={"subtitle"}>Województwo:  </b> {key}</p>
                                    <div className={"subtitle has-text-centered has-text-success is-3"}>{wojewodztwo[key].working} <b className={"subtitle"}>osób  </b></div>
                                    <div  className={"rows"}>
                                        {Object.keys(wojewodztwo[key].districts).map(function(key2, index2) {
                                            return <div key={index2} className={"columns box m-1"}>
                                                <div className={"column has-text-warning-dark has-text-weight-bold is-capitalized"}><b className={"has-text-warning-dark"}>Powiat: {key2}</b>-{wojewodztwo[key].districts[key2].working}</div>

                                                {Object.keys(wojewodztwo[key].districts[key2].communes).map(function(key3, index3) {
                                                    return <div key={index3}>
                                                        <div className={"column box m-1 has-text-success-dark is-capitalized"}><b className={"has-text-info-dark"}>{key3}:</b> {wojewodztwo[key].districts[key2].communes[key3].working} osoba</div>
                                                    </div>
                                                })}
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
                : null } */}
        </div>
    )
}

export default Stats;
