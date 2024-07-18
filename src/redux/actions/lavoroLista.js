export const GET_LAVORO = "GET_LAVORO"


export const fetchLavoro = () => {
    return async(dispatch)=>
   { try {
        const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs",
            {
                headers: {
                    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjAxMDI1NGU4ODAwMTgzZjE4YTQiLCJpYXQiOjE3MjExMTkyODQsImV4cCI6MTcyMjMyODg4NH0.YZBDRl2AhUU1wa_bH7Ulw5I8y7CttiaOcBEXKE7rRnA",
                  },
            }
        )
        
        if (response.ok){
            const lavoro = await response.json()
            dispatch({
                type: GET_LAVORO,
                playload : lavoro.data
            })

        }
        else{
            throw new Error ("Errore nel reperimento dei dati")
        }
        
        }catch(error){
            console.log("Error", error)
    }}
}