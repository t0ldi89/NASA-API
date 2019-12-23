$(function (){

    $.ajax({
        url: "https://api.nasa.gov/EPIC/api/natural/date/2015-10-31?api_key=DEMO_KEY&api_key=z6k10kOVjx84xrw2O95EKkR2ucwKH2lmMqL7PM4d",
        dataType: "json"
    }).done(function(response){
        $('header').css('background-image', 'url("https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/' + response[4].image+'.png');
    });
    $.ajax({
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=z6k10kOVjx84xrw2O95EKkR2ucwKH2lmMqL7PM4d",
        dataType: "json"
    }).done(function(response){

        let elementId = [];
        for (let i = 0; i < response.photos.length; i++) {
            elementId.push(response.photos[i].img_src);
        }
        let randomPhoto = e => {
            let los = Math.ceil(Math.random()*(elementId.length-1));
            return elementId[los];
        };

        $('.gallery li').each((i, el) => {
            $(el).css('background-image','url('+ randomPhoto(elementId) +  '');
        });
        $('.load__Btn').on('click', e =>{
            for(let i =0; i <6; i++){
                newli = $('<li>').addClass('gallery__li');
                $(newli).css('background-image','url('+ randomPhoto(elementId) +  '');
                $('.gallery').append(newli);
            }
        });
    });
});