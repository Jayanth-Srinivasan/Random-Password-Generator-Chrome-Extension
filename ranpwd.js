var disp = document.getElementById("place");
var disp2 = document.getElementById("passDisp");

function GenRanPwd() {
    var pass = '';
    var set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
        
    for (i = 1; i <= 10; i++) {
        var char = Math.floor(Math.random()
                    * set.length + 1);
            
        pass += set.charAt(char)
    }
        
    return pass;
}

function displayPass() {
    disp.innerHTML = GenRanPwd();
    disp2.innerHTML="Your Password is:"
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    link.addEventListener('click', function() {
        displayPass();
    });
});
