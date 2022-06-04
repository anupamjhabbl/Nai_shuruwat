console.log("this is okay");

let key="b042499871734997bf112f2a95dd8242";
let source="bbc-news";


//GRAB the news container
let newsaccordian=document.getElementById("newsaccordian");


//create a get request
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`,true);
xhr.onload=function (){
    if (this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
        let newshtml="";
        articles.forEach((element,index) => {
            
            let news=`<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsaccordian">
                    <div class="accordion-body">
                        ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more Here</a>
                    </div>
                </div>
            </div>`;
            newshtml=newshtml+news;
            
        });
        
        newsaccordian.innerHTML=newshtml;
    }
    else{
        console.log("some error occured");
    }
}

xhr.send();


