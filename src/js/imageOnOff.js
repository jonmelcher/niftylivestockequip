image1on = new Image();
image1on.src = 'images/about2.gif';
image1off = new Image();
image1off.src = 'images/about1.gif';

image2on = new Image();
image2on.src = 'images/feed2.gif';
image2off = new Image();
image2off.src = 'images/feed1.gif';

image3on = new Image();
image3on.src = 'images/id2.gif';
image3off = new Image();
image3off.src = 'images/id1.gif';

image4on = new Image();
image4on.src = 'images/hand2.gif';
image4off = new Image();
image4off.src = 'images/hand1.gif';

image5on = new Image();
image5on.src = 'images/deal2.gif';
image5off = new Image();
image5off.src = 'images/deal1.gif';

image6on = new Image();
image6on.src = 'images/cont2.gif';
image6off = new Image();
image6off.src = 'images/cont1.gif';

function turnOn(imageName) {
    document[imageName].src = eval(imageName + 'on.src');
}

function turnOff(imageName) {
    document[imageName].src = eval(imageName + 'off.src');
}
