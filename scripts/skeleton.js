//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
// function loadSkeleton(){
//     console.log($('#navbarPlaceholder').load('./text/nav.html'));
//     console.log($('#footerPlaceholder').load('./text/footer.html'));
// }
// loadSkeleton();  //invoke the function

//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $('#navbarPlaceholder').load('./text/nal.html', function (response, status, xhr) {
                if (status == "error") {
                    console.log("Error loading nal.html: ", xhr.status, xhr.statusText);
                } else {
                    console.log("nal.html loaded successfully");
                }
            });
        } else {
            $('#navbarPlaceholder').load('./text/nbl.html', function (response, status, xhr) {
                if (status == "error") {
                    console.log("Error loading nbl.html: ", xhr.status, xhr.statusText);
                } else {
                    console.log("nbl.html loaded successfully");
                }
            });
        }
        $('#footerPlaceholder').load('./text/footer.html', function (response, status, xhr) {
            if (status == "error") {
                console.log("Error loading footer.html: ", xhr.status, xhr.statusText);
            } else {
                console.log("footer.html loaded successfully");
            }
        });
    });
}
loadSkeleton(); //invoke the function