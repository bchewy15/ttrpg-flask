function updateHeaderText() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth < 550 || (screenWidth < 1595 && screenWidth > 1200) || (screenWidth < 1060 && screenWidth > 768) ) {
        $(".acHead").text('AC');
        $(".perHead").text('PER');
        $(".invHead").text('INV');
        $(".insHead").text('INS');
    } else {
        $(".acHead").text('Armour');
        $(".perHead").text('Perception');
        $(".invHead").text('Investigation');
        $(".insHead").text('Insight');
    }
}

updateHeaderText();


// Call the function on page load and when the window is resized
window.addEventListener('load', updateHeaderText);
window.addEventListener('resize', updateHeaderText);
