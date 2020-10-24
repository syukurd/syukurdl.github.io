fetch("https://api.kawalcorona.com/")
  .then((response) => {
    return response.json()}) 
    .then((data) => {
      for(i = 0; i < data.length; i++){
      
        let select = document.getElementById("select")
      
        let negara = data[i].attributes.Country_Region
        if(negara === "Indonesia"){
          console.log(data[i].attributes)
          let country = document.getElementById("country")
          let last_update = document.getElementById("last_update")
          let Active = document.getElementById("Active")
          let death = document.getElementById("death")
          let confirmed = document.getElementById("confirmed")
          let recovered = document.getElementById("recovered")
          let result = data[i].attributes
          last_update.innerHTML = result.Last_Update
          country.innerHTML = result.Country_Region
          Active.innerHTML = result.Active
          death.innerHTML = result.Deaths
          confirmed.innerHTML = result.Confirmed
          recovered.innerHTML = result.Recovered
        }

        
         let arr = []
         arr.push(data[i].attributes.Country_Region)
         for(let j = 0; j < arr.length; j++){
           let asli = (arr[j])
           let tambah = document.createElement("OPTION")
           txt = document.createTextNode(asli)
           tambah.appendChild(txt)
           select.insertBefore(tambah, select.lastChild)
          } 
        }
      })