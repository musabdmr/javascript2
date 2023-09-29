fetch('.veri.json')
        .then(cevap => cevap.json())
        .then(veri => console.log(veri));
        const btnCek=document.querySelector("#veri-oku");
        btnCek.addEventListener("click",function(){
            fetch('./veri.json')
                .then(cevap => cevap.json())
                .then(veri => console.log(veri));
        });

        const btnCek=document.querySelector("#veri-oku");
        btnCek.addEventListener("click",function(){
            fetch('./veri.json')
                .then(cevap => cevap.json())
                .then(veri => console.log(veri));
        });