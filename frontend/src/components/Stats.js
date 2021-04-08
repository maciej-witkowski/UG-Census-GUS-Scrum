import React, {useEffect,useState} from 'react';
import axios from 'axios';

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
    useEffect(() => {
        axios.get("http://localhost:3000/polls/ileankietwyslano")
            .then(res=> {
                console.log(res.data)
                setankiety(res.data)
            })
        axios.get("http://localhost:3000/polls/ilekobiet")
            .then(res=> {
                console.log(res.data)
                setilekobiet(res.data)
            })
        axios.get("http://localhost:3000/polls/ilemezczyzn")
            .then(res=> {
                console.log(res.data)
                setilemezczyzn(res.data)
            })
        axios.get("http://localhost:3000/polls/ilenieokreslonych")
            .then(res=> {
                console.log(res.data)
                setilenieokreslonych(res.data)
            })
        axios.get("http://localhost:3000/polls/wyksztalceniepodstawowe")
            .then(res=> {
                console.log(res.data)
                setwyksztalceniepodstawowe(res.data)
            })
        axios.get("http://localhost:3000/polls/wyksztalceniesrednie")
            .then(res=> {
                console.log(res.data)
                setwyksztalceniesrednie(res.data)
            })
        axios.get("http://localhost:3000/polls/wyksztalceniesrednie")
            .then(res=> {
                console.log(res.data)
                setwyksztalceniesrednie(res.data)
            })
        axios.get("http://localhost:3000/polls/wyksztalceniewyzsze")
            .then(res=> {
                console.log(res.data)
                setwyksztalceniewyzsze(res.data)
            })
        axios.get("http://localhost:3000/polls/ilemieszkazrodzicami")
            .then(res=> {
                console.log(res.data)
                setilemieszkazrodzicami(res.data)
            })
        axios.get("http://localhost:3000/polls/ilemapartnerke")
            .then(res=> {
                console.log(res.data)
                setilemapartnerke(res.data)
            })
        axios.get("http://localhost:3000/polls/sredniawieku")
            .then(res=> {
                console.log(res.data)
                setsredniawieku(res.data)
            })
    }, []);

    return(
        <div>
            <h1 className="title">Statystyki</h1>
            <div className={"box m-6"}>
                <div className={"has-text-centered m-6"}>
                    <p className={"title has-text-danger is-1"}>{ileankiet} <b className={"subtitle"}>wysłanych ankiet</b></p>
                </div>
                <div className={"has-text-centered m-6"}>
                    <p className={"title has-text-info is-2"}><b className={"subtitle"}>średni wiek - </b>{Math.round(sredniawieku)}<b className={"subtitle"}> lat</b> </p>
                </div>
                <div id="statystyki">
                    <div id="polaankiet">Ile kobiet wypelnilo ankiete? <div id="wartosci">{ilekobiet}</div></div>
                    <div id="polaankiet">Ile mezczyzn wypelnilo ankiete? <div id="wartosci">{ilemezczyzn}</div></div>
                    <div id="polaankiet">Ile nieokreslonych wypelnilo ankiete? <div id="wartosci">{ilenieokreslonych}</div></div>
                    <div id="polaankiet">Ile ma wyksztalcenie podstawowe? <div id="wartosci">{wyksztalceniepodstawowe}</div></div>
                    <div id="polaankiet">Ile ma wyksztalcenie srednie? <div id="wartosci">{wyksztalceniesrednie}</div></div>
                    <div id="polaankiet">Ile ma wyksztalcenie wyzsze? <div id="wartosci">{wyksztalceniewyzsze}</div></div>
                    <div id="polaankiet">Ile mieszka z rodzicami? <div id="wartosci">{ilemieszkazrodzicami}</div></div>
                    <div id="polaankiet">Ilu ma partnera/partenerke? <div id="wartosci">{ilemapartnerke}</div></div>
                </div>
            </div>
        </div>
    )
}

export default Stats;