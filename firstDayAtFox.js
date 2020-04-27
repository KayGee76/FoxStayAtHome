$('#fox-1').text('Macrotis');
$('#fox-2').css('border-color','purple');
$('p').css('background','yellow');
$('.Lorem').css('background','none');

let color = 'purple';
let number = 10;
let word = 'cool';
if (color==="purple") {
    $('.north').css('background','purple')
};
if (number>100) {
    $('.east').text("whoah, that's a big number")
    $('.east').css('font-size',20)
} else {
    $('.east').text("just a regular number, please")
    $('.east').css('font-size',20)
};
if (word==='cool') {
    $('.south').text('Power of DOM ')
} else {
    $('.west').text('Power of DOM')
};
let nameList = ['Angela','Monika','Rita', 'Gábor','Jessica'];
nameList.forEach((nms) => {
    if (nms==='Gábor') {
        $('ul').append(`<li><b>${nms}</b></li>`)
    } else {
        $('ul').append(`<li>${nms}</li>`)
    }
    
});
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  $('body').append('div');
  $('div').append('<h2>${additionalBlock.title}</h2>');
  $('div').append('<p class=Lorem>${additionalBlock.text}</p>');
  
  