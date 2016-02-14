var Singleton = require('stupid-singleton');

function Cookie(){
    var self = {};

    function setCookie(cname,cvalue,exdays,path) {
        var d = new Date();
        var path = path || "/";
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires+"; "+"path="+path;
    }

    function setCookieByTime(cname,cvalue,time,path) {
        var d = new Date();
        var path = path || "/";
        d.setTime(d.getTime() + (time));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires+"; "+"path="+path;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    }

    function deleteCookie(cname){
        setCookie(cname,'',0);
    }

    self.setCookie = setCookie;
    self.setCookieByTime = setCookieByTime;
    self.getCookie = getCookie;
    self.deleteCookie = deleteCookie;

    return self;
}

module.exports = Singleton(Cookie);