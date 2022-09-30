// data for the slide show 1 hard-coded here

const SlideShowData = [   
    {
        img : 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-26Sep2022.gif',
    },
    {
        img : 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-26Sep2022.gif',
    },
    {
        img : 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-2-26Sep2022.jpg',
    },
    {
        img : 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-4-26Sep2022.jpg',
    },
    {
        img : 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-26Sep2022.jpg',
    },
    {
        img : 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Women-22Sep2022.jpg',
    },
];
// console.log(SlideShowData);


// code for slide show 1 with the delay of 3 seconds starts here

let aslideshow1 = document.getElementById('aslideshow1');
aslideshow1.innerHTML = null;

let i=0;
let image = document.createElement('img');
image.src = SlideShowData[0].img;
aslideshow1.append(image);
i++;

setInterval(function(){
    if(i === SlideShowData.length){
        i=0;
    }
    image.src = SlideShowData[i].img;
    aslideshow1.append(image);
    i++;
},3000);

// code for slide show 1 with the delay of 3 seconds ends here