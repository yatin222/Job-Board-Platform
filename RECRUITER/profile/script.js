
let flag=1;
function dropdownmenu(){
    let ele=document.getElementById("hide");
    if(flag==1){
        ele.setAttribute("style","display:flex");
        flag=0
    }
    else{
        ele.setAttribute("style","display:none");
        flag=1;
    }



    
}



const names = [
    "Kinsley Vargas", "Ryker Palacios", "Bria Cline", "Cullen Dean", "Julianna Foster",
    "Kayden Bonilla", "Romina Best", "Harlem Le", "Myla Chase", "Otis Ho", "Calliope Floyd",
    "Pierce Cantu", "Galilea McBride", "Denver Simpson", "Anastasia Rangel", "Saint Moran",
    "Celeste Hale", "Ezequiel Todd", "Zariah Sanford", "Truett Bishop", "Brooklynn Gonzalez",
    "Ethan Decker", "Aleena Stark", "Kristopher Kemp", "Anika Glass", "Allan Correa", "Valery Daniel",
    "Grady Hensley", "Malaya Blackburn", "Zahir Corona", "Marianna Manning", "Seth Atkinson",
    "Jazmin Chung", "Ira Stephenson", "Khaleesi Fletcher", "Jay Pearson", "Kiara Contreras",
    "Emilio Bates", "Madilyn McLean", "Crosby Barry", "Waverly Hess", "Lawrence Doyle",
    "Annalise Esparza", "Carl Day", "Hayden Cannon", "Archie Barron", "Anya Wu", "Kyson McCarty",
    "Halo Valdez", "Kyler White", "Layla Quintana", "Kelvin Walls", "Lilianna Herring",
    "Henrik Zuniga", "Leslie Velazquez", "Drew Pratt", "Ailani Sherman", "Adan Quintana", "Kenia Moss",
    "Porter Meza", "Rosa Freeman", "Jayce Wolfe", "Hallie Salas", "Zaiden Gonzalez", "Abigail Collins",
    "Miles Franklin", "Angela Evans", "Elias Wong", "Adelaide Le", "Damien Phan", "Elsa Chen",
    "Emmanuel Nicholson", "Justice Callahan", "Quinton Cherry", "Nyomi Mullen", "Shepard Ho",
    "Calliope Sexton", "Mylo Barr", "Noemi Weiss", "Koa Stanley", "Gracelyn Huerta", "Douglas Macdonald",
    "Rosalia Dean", "Ronan Villarreal", "Jazlyn McCullough", "Briar Bonilla", "Romina McGuire",
    "Casey Gill", "Jordan Greene", "Griffin Gonzalez", "Abigail Payne", "Edward Montoya", "Kamryn Marks",
    "Amos Brewer", "Thea Stein", "Creed Ingram", "Katie McKay", "Joey Andrade", "Emmy Hess",
    "Lawrence Russell"
];

const ul = document.getElementById('names-list');
names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
});