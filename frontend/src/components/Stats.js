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

    useEffect(() => {
        axios.get("http://localhost:3000/polls/communes")
        .then(res=> {
            console.log(res.data.data.voivodeships)
            setwojewodztwo(res.data.data.voivodeships)
            console.log(res.data.data.voivodeships)
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
                setITfield(res.data);
                console.log(res.data.data)
            });

        axios.get("http://localhost:3000/polls/workplace_type")
            .then(res=> {
                let workplace = [];
                let type = {};
                let sum =0;
                for (const [key, value] of Object.entries(res.data.data)) {
                    sum = sum + value;
                }
                for (const [key, value] of Object.entries(res.data.data)) {
                    type = {name: key, percent: Math.round(((value/sum*100) + Number.EPSILON) * 100) / 100}
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
                            width={500}
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

            <div style={{ textAlign: "center" }} className={"column box m-3"}>
                <h1 className={"subtitle"}>Procent zatrudnionych osób ze względu na branżę.</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile">
                        <BarChart
                            width={600}
                            height={350}
                            data={workplace_type}
                            barSize={20}
                        >
                            <XAxis
                                dataKey="name"
                                scale="point"
                                padding={{ left: 15, right: 15 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="percent" fill="#48D1CC" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
            </div>

            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={procentwyksztalcenia}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label={(entry) => entry.name}
          />
          <Tooltip />
        </PieChart>


        {czydostalem ? 
            <div>
                {Object.keys(wojewodztwo).map(function(key, index) {
         return <div id="wojewodztwo">
             <div>{key}</div> <div>{wojewodztwo[key].working}</div>
             <div id="powiat">
             {Object.keys(wojewodztwo[key].districts).map(function(key2, index2) {
                return <div>
                <div>{key2}</div> <div>{wojewodztwo[key].districts[key2].working}</div>

                {Object.keys(wojewodztwo[key].districts[key2].communes).map(function(key3, index3) {
                return <div>
                    <div>{key3}</div> <div>{wojewodztwo[key].districts[key2].communes[key3].working}</div>
                </div>

                })}
                </div>
             })}
             </div>

             </div>
          })}

            </div>
            
            : null }
        <div className={"columns m-5"}>
            <div className={"column box has-text-centered m-5"}>
                    <p className={"title has-text-link is-2"}>{Math.round(monthlyearnings.brutto_avg)}<b className={"subtitle"}> Średnie zarobki brutto</b> </p>
                </div>
                <div className={"column box has-text-centered m-5"}>
                    <p className={"title has-text-link is-2"}>{Math.round(monthlyearnings.netto_avg)}<b className={"subtitle"}> Średnie zarobki netto</b> </p>
                </div>
            </div>

            <div className={"columns m-6"}>
            <div className={"column box has-text-centered m-6"}>
                    <p className={"title has-text-link is-1"}>{Math.round(ITfield)}<b className={"subtitle"}> Ilosc osob pracujacych w IT</b> </p>
                </div>

            </div>

        </div>
    )
}

export default Stats;
