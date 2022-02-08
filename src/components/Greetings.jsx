function Greetings({lang, children}){
    const languages={
        "de":"Hallo",
        "en":"Hello",
        "es":"Hola",
        "fr":"Bonjour"
    };
    const greeting= languages[lang];
    return(
        <p>
            {greeting} {children}
        </p>
    )
}
export default Greetings