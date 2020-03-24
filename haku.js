Vue.component('Loading',{
  template:'<div>Olemme pahoillamme, mutta informaatio ei ole tällä hetkellä saatavilla, yritä myöhemmin uudelleen.</div>'
})
var app = new Vue({
  el: '#app',
  data () {
    return {
      info: [],
      current:0,
      today:'', 
      recovery:[],
      areas: ['Etelä-Karjala', 'Etelä-Pohjanmaa', 'Etelä-Savo', 'HUS', 'Itä-Savo', 'Kainuu', 'Kanta-Häme', 'Keski-Pohjanmaa', 'Keski-Suomi',
      'Kymenlaakso', 'Lappi', 'Länsi-Pohja', 'Pirkanmaa', 'Pohjois-Karjala', 'Pohjois-Pohjanmaa', 'Pohjois-Savo', 'Päijät-Häme', 
      'Satakunta', 'Vaasa', 'Varsinais-Suomi', 'Ahvenanmaa', 'Muu'],
      counts: [                                          
        {
          id:0,
          name:'', 
          amount:'' 
        }
      ],
      summa: 0,
      limit: 100,
      loading: true,
      errored: false,
      nextId:1,
    }
  },
  computed:{
    //rajoitetaan rivimäärää limitin ilmoittama määrä, aluksi 100
    limitedInfo(){
      return this.limit ? this.info.slice(0,this.limit) : this.info
    },
    //järjestetään sairaanhoitopiirit tapausten määrän mukaan
    sortCounts(){
      return this.counts.sort((a, b) => (a.amount > b.amount) ? -1 : 1)
     }
    },
    
  filters: {
    //muotoillaan päivämäärä
    dateform: function(str) {
        if (!str) { return '(n/a)'; }
        str = new Date(str);                 //kuukaudet alkavat indeksista 0 
        return str.getFullYear() + '-' + ((str.getMonth() < 9) ? '0' : '') + (str.getMonth() + 1) + '-' +
          ((str.getDate() < 10) ? '0' : '') + str.getDate();
      }
  },
  
  
  mounted () {
    //haetaan data ja tallennetaan info ja recovery tauluihin
    axios
      .get('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData')
      .then(response => {
        this.info = response.data.confirmed.slice().reverse()  //haetaan data ja käännetään uusimmat ensin
        this.recovery = response.data.recovered                 //toipuneet

       //lasketaan tartuntojen lukumäärä sairaahoitopiireittäin ja tallennetaan counts-taulukkoon
        j=0
       while(j<this.areas.length){
           lkm=0;
           this.info.forEach(element => {
              if (!element.healthCareDistrict){
                 element.healthCareDistrict = 'Muu';
              }
              if (element.healthCareDistrict === this.areas[j]){
              lkm = lkm + 1;
              }
           })
          
          this.summa = this.summa + lkm;     //lasketaan yhteen kaikki tapaukset
          this.counts.push({id:this.nextId, name:this.areas[j], amount:lkm}); //tallennetaan listaan 
          this.nextId++;
          j++;        
        } 
        //lasketaan kuluvan päivän aikana tulleet tartunnat
        var date = new Date();
        this.today= date.toISOString().slice(0,10);    //ISO 8601 muotoon, otetaan alkuosa
        this.info.forEach(item => {
           if(item.date.slice(0,10)===this.today){
             this.current++
            }
        });
      })
                                 
      //jos dataa ei saada ladattua
      .catch(error => {
          console.log(error)
          this.errored = true
      })
      .finally(() => this.loading = false)
  },
   
})

