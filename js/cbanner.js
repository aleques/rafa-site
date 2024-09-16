// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
// Put into a namespace and by Bjørn Rosell
//   Also changed behaviour so you have to click accept to make the banner stay away.
//   To make it behave like the original, set "createCookieWhenBannerIsShown" to true.

var CookieBanner = (function() {
    return {
        'createCookieWhenBannerIsShown': false,
        'createCookieWhenAcceptIsClicked': true,
        'cookieDuration': 14,                   // Number of days before the cookie expires, and the banner reappears
        'cookieDurationWhenRejected': 14,
        'cookieName': 'atelier-cookie',          // Name of our cookie
        'cookieValueAccepted': 'accepted',              // Value of cookie accepted
        'cookieValueRejected': 'rejected',              // Value of cookie rejected

        '_createCookie': function(name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            }
            else {
                expires = "";
            }

            document.cookie = name+"="+value+expires+"; path=/";
        },

        '_checkCookie': function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        },

        '_eraseCookie': function() {
            CookieBanner._createCookie(CookieBanner.cookieName, "", -1);
        },

        '_isCookiePresent': function() {
            let cookieValue = CookieBanner._checkCookie(CookieBanner.cookieName);
            return cookieValue == CookieBanner.cookieValueAccepted || cookieValue == CookieBanner.cookieValueRejected;
        },

        'closeBanner': function() {
            document.getElementById("cookie-banner").style.display = "none";
        },

        'accept': function() {
            CookieBanner._createCookie(CookieBanner.cookieName, CookieBanner.cookieValueAccepted, CookieBanner.cookieDuration); // Create the cookie
            CookieBanner.closeBanner();
        },

        'reject': function() {
            CookieBanner._createCookie(CookieBanner.cookieName, "rejected", 1); // Create the cookie
            CookieBanner.closeBanner();
        },

        'showUnlessSetted': function() {
            if(CookieBanner._isCookiePresent()){
                document.getElementById("cookie-banner").style.display = "none";
            } else {
                document.getElementById("cookie-banner").style.display = "block";
            }
        }

    }

})();

window.onload = function(){
    CookieBanner.showUnlessSetted();
}
