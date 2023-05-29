import Bands from "./Bands";


export default function Layout() {

  return (
    <>
      <h1 style={{ color: "navy", margin: "50px"}}>Welcome!</h1>
    <hr/>
      <div style={{ padding: "20px", backgroundColor: "#F0FFFF" }}>
        <h2>Trying React?</h2>
        <h3>Go here when you're feeling lost:</h3>
        <a href="https://react.dev/blog/2023/03/16/introducing-react-dev">
          react.dev
        </a>
        <hr /> <br />
        <div style={{position: "relative", display: "flex"}}>

          <Bands />
        </div>
        <div style={{position: "relative", display: "flex"}}>
              <div style={{position: "relative", width: "400px", height: "600px", 
              alignItems:"center", justifyContent: "center", border: "solid 1px", padding: "10px", margin: "10px" }}>
                  <h3>Some Lyrics of Jefferson Airplane!</h3>
                  <img style={{height: "200px"}}src="https://i1.sndcdn.com/artworks-ql0YsdEPPSxDGXXD-7LgLmQ-t500x500.jpg"
                  alt="Jefferson Airplane"/>
                  <p>One pill makes you larger and one pill makes you small</p>
                  <h5>And the ones that mother gives you </h5>
                  <h4>don't do anything at all</h4>
                  <p>Go ask Alice...</p>
                  <h5>When she's ten feet tall!!</h5>
                  <p>And if you go chasing rabbits...</p>
              </div>
              <div style={{position: "relative", width: "400px", boxSizing:"border-box", border: "solid 1px", 
              padding: "10px", margin: "10px", color: "yellow", backgroundColor: "purple" }}>
                  <h3>Some Lyrics of Jimi Hendrix!</h3>
                  <img style={{height: "200px"}}src="https://img.ilgcdn.com/sites/default/files/foto/2014/09/13/1410590999-hendrix.jpeg "
                  alt="Jimi Hendrix"/>
                  <p>Purple haze all in my brain</p>
                  <h5>Lately things don't seem the same </h5>
                  <h4>Acting funny but I don't know why</h4>
                  <h4>'Scuse me</h4>
                  <h3>while I kiss the sky!!</h3>
              </div>
              <div style={{position: "relative", width: "400px", boxSizing:"border-box", border: "solid 1px", 
              padding: "10px", margin: "10px", color: "white", backgroundColor: "gray" }}>
                  <h3>Some Lyrics of Nina Simone</h3>
                  <img style={{height: "200px"}}src="https://s2.ppllstatics.com/diariovasco/www/multimedia/202004/30/media/cortadas/54957938--1248x1366.jpg"
                  alt="Jimi Hendrix"/>
                  <p>River running free, you know how I feel</p>
                  <p>Blossom on the tree, you know how I feel</p>
                  <p>It's a new dawn</p>
                  <p>It's a new day</p>
                  <p>It's a new life for me</p>
                  <h4>And I'm feeling good</h4>
              </div>
        </div>
        <br />

      </div>
    </>
  );
};

