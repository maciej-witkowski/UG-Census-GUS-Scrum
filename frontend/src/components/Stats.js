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
} from "recharts";


const Stats = () => {

    const [ileankiet,setankiety] = useState([]);
    const [ilekobiet,setilekobiet]= useState([]);
    const [ilemezczyzn,setilemezczyzn]= useState([]);
    const [ilenieokreslonych,setilenieokreslonych]= useState([]);
    const [wyksztalceniepodstawowe,setwyksztalceniepodstawowe]= useState([]);
    const [wyksztalceniesrednie,setwyksztalceniesrednie]= useState([]);
    const [wyksztalceniewyzsze,setwyksztalceniewyzsze]= useState([]);
    const [ilemieszkazrodzicami,setilemieszkazrodzicami]= useState([]);
    const [ilemapartnerke,setilemapartnerke]= useState([]);
    const [sredniawieku,setsredniawieku]= useState([]);

    const plec = [
        { name: "Kobiety", users: ilekobiet },
        { name: "Mężczyźni", users: ilemezczyzn },
        { name: "Nieokreśleni", users: ilenieokreslonych },

    ];

    const wyksztalcenie = [
        { name: "Podstawowe", users: wyksztalceniepodstawowe },
        { name: "Średnie", users: wyksztalceniesrednie },
        { name: "Wyższe", users:wyksztalceniewyzsze }
    ];

    useEffect(() => {
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
    }, []);

    return(
        <div>
            <h1 className="title">Statystyki</h1>
            <div className={"m-3"}>
                <div className={"box has-text-centered m-3"}>
                    <p className={"title has-text-danger is-1"}>{ileankiet} <b className={"subtitle"}>wysłanych ankiet</b></p>
                </div>

                <div className={"box has-text-centered m-3"}>
                    <p className={"title has-text-info is-2"}><b className={"subtitle"}>średni wiek - </b>{Math.round(sredniawieku)}<b className={"subtitle"}> lat</b> </p>
                </div>

                <div style={{ textAlign: "center" }} className={"box m-3"}>
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

                <div style={{ textAlign: "center" }} className={"box m-3"}>
                    <h1 className={"subtitle"}>Wyksztalcenie ankietowanych</h1>
                    <div className="App columns is-centered mr-5 is-flex-mobile">
                        <BarChart
                            width={350}
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

                <div className={"box has-text-centered m-3"}>
                    <p className={"title has-text-link is-2"}>{ilemieszkazrodzicami}<b className={"subtitle"}> osób mieszka z rodzicami</b> </p>
                </div>

                <div className={"box has-text-centered m-3"}>
                    <p className={"title has-text-primary is-2"}>{ilemapartnerke}<b className={"subtitle"}> osób ma partnera/partnerkę</b> </p>
                </div>
            </div>
        </div>
    )
}

export default Stats;
