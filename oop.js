class Movie{
    constructor(Name,Character,Production,Language,Year,IMDb){
        this.Name = Name;
        this.Character = Character;
        this.Production = Production;
        this.Language = Language;
        this.Year = Year;
        this.IMDb = IMDb;
    }
    getDetails(){
        let data =
        Name = $(this.Name);
        Character = $(this.Character);
        Production = $(this.Production);
        Language = $(this.Language);
        Year = $(this.Year);
        IMDb = $(this.IMDb);
        return data;
    }
}
let movie1 = new Movie("Major","Shesh","Mahesh Babu Production", "Hindi", 2022, 8.3/10);
console.log(movie1.getDetails());

