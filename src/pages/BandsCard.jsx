const BandsCard = ({name, image, years, text}) => {
    return (
        <>
        <div style={{position: "relative", width: "400px", height: "500px", alignItems:"center", justifyContent: "center", border: "solid 1px", 
        padding: "10px", margin: "10px", backgroundColor: "gray" }}>
                <h3>{name}</h3>
                <img style={{height: "200px"}}src={image}
                alt="Bands of music"/>
                <p>Years: {years}</p>
                <br></br>
                <h4>{text}</h4>

            </div>

        </>
    );
};

export default BandsCard;