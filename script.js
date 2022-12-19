async function callSystemTrappist1 () {
    try {
        const response = await fetch(``);
        let data = await response.json();
        let promise = data.records
        console.log("photographies from UNSPLASH", promise)
        return promise;
    }
    catch (error){
        console.log ("Message d'erreur: ", error.message);
    }
}
