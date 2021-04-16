import React, {useEffect,useState} from 'react';
import axios from 'axios';
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

    const plec = [
        { name: "Kobiety", users: ilekobiet },
        { name: "Mężczyźni", users: ilemezczyzn },
        { name: "Nieokreśleni", users: ilenieokreslonych },

    ];

    const wyksztalcenie = [
        { name: "Podstawowe", users: wyksztalceniepodstawowe },
        { name: "Srednie", users: wyksztalceniesrednie },
        { name: "Wyzsze", users:wyksztalceniewyzsze },
        { name: "Zawodowe", users: wyksztalceniezawodowe },
        { name: "Gimnazjalne", users:wyksztalceniegimnazjalne }
    ];

    const procentwyksztalcenia = [
        { name: 'Podstawowe', value: wyksztalceniepodstawowe },
        { name: 'Gimnazjalne', value: wyksztalceniegimnazjalne },
        { name: 'Srednie', value: wyksztalceniesrednie },
        { name: 'Zawodowe', value: wyksztalceniezawodowe },
        { name: 'Wyzsze', value: wyksztalceniewyzsze }
      ];


      const wojewodztwa = [
        {name: "pomorskie", polish: 72, others: 28},
        {name: "dolnośląskie", polish: 88, others: 12},
        {name: "łódzkie", polish: 66, others: 34},
        {name: "mazowieckie", polish: 46, others: 54},
        {name: "podkarpackie", polish: 70, others: 30},
        {name: "lubelskie", polish: 68, others: 32},
        {name: "lubuskie", polish: 91, others: 9},
        {name: "kujawsko-pomorskie", polish: 74, others: 26},
        {name: "opolskie", polish: 55, others: 45},
        {name: "małopolskie", polish: 68, others: 32},
        {name: "wielkopolskie", polish: 23, others: 77},
        {name: "warmińsko-mazurskie", polish: 35, others: 65},
        {name: "śląskie", polish: 85, others: 15},
        {name: "podlaskie", polish: 88, others: 12},
        {name: "zachodniopomorskie", polish: 43, others: 57},
        {name: "świętokrzyskie", polish: 60, others: 40}
    ];

    useEffect(() => {
        axios.get("http://localhost:3000/polls/communes")
        .then(res=> {
            setwojewodztwo(res.data.data.voivodeships)
            setczydostalem(true)
        });

        axios.get("http://localhost:3000/polls/ileankietwyslano")
            .then(res=> {
                setankiety(res.data);
            });
        axios.get("http://localhost:3000/polls/ilekobiet")
            .then(res=> {
                setilekobiet(res.data);
            });
        axios.get("http://localhost:3000/polls/ilemezczyzn")
            .then(res=> {
                setilemezczyzn(res.data);
            });
        axios.get("http://localhost:3000/polls/ilenieokreslonych")
            .then(res=> {
                setilenieokreslonych(res.data);
            });
        axios.get("http://localhost:3000/polls/wyksztalceniepodstawowe")
            .then(res=> {
                setwyksztalceniepodstawowe(res.data);
            });
        axios.get("http://localhost:3000/polls/wyksztalceniesrednie")
            .then(res=> {
                setwyksztalceniesrednie(res.data);
            });
        axios.get("http://localhost:3000/polls/wyksztalceniesrednie")
            .then(res=> {
                setwyksztalceniesrednie(res.data);
            });
        axios.get("http://localhost:3000/polls/wyksztalceniewyzsze")
            .then(res=> {
                setwyksztalceniewyzsze(res.data);
            });
        axios.get("http://localhost:3000/polls/ilemieszkazrodzicami")
            .then(res=> {
                setilemieszkazrodzicami(res.data);
            });
        axios.get("http://localhost:3000/polls/ilemapartnerke")
            .then(res=> {
                setilemapartnerke(res.data);
            });
        axios.get("http://localhost:3000/polls/sredniawieku")
            .then(res=> {
                setsredniawieku(res.data);
            });
            
            axios.get("http://localhost:3000/polls/ITfield")
            .then(res=> {
                let sum_IT = 0;
                for (const [key, value] of Object.entries(res.data.data)) {
                    sum_IT = sum_IT + value;
                }
                setITfield(sum_IT);
            });

        axios.get("http://localhost:3000/polls/workplace_type")
            .then(res=> {
                let workplace = [];
                let type = {};
                
                for (const [key, value] of Object.entries(res.data.data)) {
                    type = {name: key, polish: value.polish, others: value.other}
                    workplace.push(type);
                }
                setWorkplace_type(workplace);
            });

            axios.get("http://localhost:3000/polls/monthly_earnings")
            .then(res=> {
                setmonthlyearnings(res.data);
            });

            axios.get("http://localhost:3000/polls/wyksztalceniezawodowe")
            .then(res=> {
                setwyksztalceniezawodowe(res.data);
            });

            axios.get("http://localhost:3000/polls/wyksztalceniegimnazjalne")
            .then(res=> {
                setwyksztalceniegimnazjalne(res.data);
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
                            type1 = {name: key, umowa: Math.round((value/sum*100) + Number.EPSILON)*100 / 100}
                            type2 = {name: key, umowa: value}
                            typeOfContract.push(type2);
                            typeOfContractOnly.push(type1);
                        }
                        else {
                            type2 = {name: key, umowa: value}
                            typeOfContract.push(type2);
                        }

                    }
                    setContract(typeOfContract);
                    setContractOnly(typeOfContractOnly);
                    setSelfEmp(Math.round((self_sum/(sum+self_sum)*100) + Number.EPSILON)*100 / 100);
                    setMandate(sum_mandate);
            });
            

        
    }, []);

    return(
        <div>
            <h1 className="title">Statystyki</h1>
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
                            <Bar dataKey="users" fill="#808000" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div>

                <div style={{ textAlign: "center" }} className={"column box m-3"}>
                    <h1 className={"subtitle"}>Wyksztalcenie ankietowanych</h1>
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
                            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
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
                            <Bar dataKey="polish" stackId="a" fill="#8884d8" />
                            <Bar dataKey="others" stackId="a" fill="#48D1CC" />
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
                                    dataKey="umowa"
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
                                <Bar dataKey="umowa" fill="#808000" background={{ fill: "#eee" }} />
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
                    <h1 className={"subtitle"}>Procent osób zamieszkujących dane województwo</h1>
                        <div className="App columns is-centered mr-5 is-flex-mobile">
                        <BarChart
                            width={1500}
                            height={600}
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
                            <Bar dataKey="polish" fill="#8884d8" />
                            <Bar dataKey="others" fill="#82ca9d" />
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
            : null }
        </div>
    )
}

export default Stats;
