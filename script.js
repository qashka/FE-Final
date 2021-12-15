// SLIDER REFERENCES: https://kenwheeler.github.io/slick/ AND https://jsfiddle.net/glebkema/b6c2ayeg/

// TOP SLIDER
$('.slider-titleTop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    asNavFor: '.slider-descTop,.slider-picTop,.slider-arrowTop',
});
$('.slider-picTop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    asNavFor: '.slider-titleTop,.slider-descTop,.slider-arrowTop',
});
$('.slider-descTop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleTop,.slider-picTop,.slider-arrowTop',
    fade: true,
    arrows: false,
    focusOnSelect: true
});

$('.slider-arrowTop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleTop,.slider-picTop,.slider-descTop',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: "<img class='slick-prev' src='assets/arrows/arrowleft1.png'>",
    nextArrow: "<img class='slick-next' src='assets/arrows/arrowright1.png'>"
});

// PANTS SLIDER
$('.slider-titlePant').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    asNavFor: '.slider-descPant,.slider-picPant,.slider-arrowPant',
});
$('.slider-picPant').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    asNavFor: '.slider-titlePant,.slider-descPant,.slider-arrowPant',
});
$('.slider-descPant').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titlePant,.slider-picPant,.slider-arrowPant',
    fade: true,
    arrows: false,
    focusOnSelect: true
});

$('.slider-arrowPant').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titlePant,.slider-picPant,.slider-descPant',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: "<img class='slick-prev' src='assets/arrows/arrowleft2.png'>",
    nextArrow: "<img class='slick-next' src='assets/arrows/arrowright3.png'>"
});

// SHOES SLIDER
$('.slider-titleShoe').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    asNavFor: '.slider-descShoe,.slider-picShoe,.slider-arrowShoe',
});
$('.slider-picShoe').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    asNavFor: '.slider-titleShoe,.slider-descShoe,.slider-arrowShoe',
});
$('.slider-descShoe').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleShoe,.slider-picShoe,.slider-arrowShoe',
    fade: true,
    arrows: false,
    focusOnSelect: true
});

$('.slider-arrowShoe').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleShoe,.slider-picShoe,.slider-descShoe',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: "<img class='slick-prev' src='assets/arrows/arrowleft3.png'>",
    nextArrow: "<img class='slick-next' src='assets/arrows/arrowright2.png'>"
});

// ACCESORIES SLIDER
$('.slider-titleAcc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    asNavFor: '.slider-descAcc,.slider-picAcc,.slider-arrowAcc',
});
$('.slider-picAcc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    asNavFor: '.slider-titleAcc,.slider-descAcc,.slider-arrowAcc',
});
$('.slider-descAcc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleAcc,.slider-picAcc,.slider-arrowAcc',
    fade: true,
    arrows: false,
    focusOnSelect: true
});

$('.slider-arrowAcc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleAcc,.slider-picAcc,.slider-descAcc',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: "<img class='slick-prev' src='assets/arrows/arrowleft5.png'>",
    nextArrow: "<img class='slick-next' src='assets/arrows/arrowright5.png'>"
});

// SHOES SLIDER
$('.slider-titleRing').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    asNavFor: '.slider-descRing,.slider-picRing,.slider-arrowRing',
});
$('.slider-picRing').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    asNavFor: '.slider-titleRing,.slider-descRing,.slider-arrowRing',
});
$('.slider-descRing').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleRing,.slider-picRing,.slider-arrowRing',
    fade: true,
    arrows: false,
    focusOnSelect: true
});

$('.slider-arrowRing').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-titleRing,.slider-picRing,.slider-descRing',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: "<img class='slick-prev' src='assets/arrows/arrowleft3.png'>",
    nextArrow: "<img class='slick-next' src='assets/arrows/arrowright2.png'>"
});



const app = {
    initialize: () => {
        app.client = contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: "kvljtdho6i1p",
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: "BN-lrOqjhxgBUaDoBAGTQZhRtJgeVXZ-L_2li95PWyo"
        });
    },



    getAllEntries: async() => {
        // first make sure we have our template loaded
        // i can use the word await along with async to pause the program until this function is finished
        // fetch all entries
        app.client.getEntries().then(response => {
            // go through each one
            console.log(response);

            document.getElementById("bluejeans").src = "http:" + response.includes.Asset[1].fields.file.url;
            document.getElementById("pinkpants").src = "http:" + response.includes.Asset[9].fields.file.url;
            document.getElementById("bluebiker").src = "http:" + response.includes.Asset[2].fields.file.url;
            document.getElementById("greenjacket").src = "http:" + response.includes.Asset[3].fields.file.url;
            document.getElementById("properpants").src = "http:" + response.includes.Asset[4].fields.file.url;
            document.getElementById("dowrongring").src = "http:" + response.includes.Asset[5].fields.file.url;

            document.getElementById("otherStuff").src = response.items.forEach(Asset => {
                // pull out the data you're interested in
                const projectData = {
                    title: Asset.fields.clothingTitle,
                    imageUrl: "http:" + Asset.fields.clothingImage.fields.file.url,
                };

            });
        });
    },
};