import BandsCard from "./BandsCard";

function Bands() {

    const bands = [{
        name: "Jefferson Airplane",
        image: "https://i1.sndcdn.com/artworks-ql0YsdEPPSxDGXXD-7LgLmQ-t500x500.jpg",
        years: "70's",
        text: "Feed your head!"
    },
    {
        name: "Nina Simone",
        image: "https://s2.ppllstatics.com/diariovasco/www/multimedia/202004/30/media/cortadas/54957938--1248x1366.jpg",
        years: "70's",
        text: "Freedom is no fear"

    },
    {
        name: "Jimi Hendrix",
        image: "https://img.ilgcdn.com/sites/default/files/foto/2014/09/13/1410590999-hendrix.jpeg",
        years: "70's",
        text: "Knowledge speaks, but wisdom listens"

    }];


    return (
      <>  
      <BandsCard {...bands[0]}/>

      <BandsCard {...bands[1]}/>

      <BandsCard {...bands[2]}/>

      </> 

    )
}

export default Bands;