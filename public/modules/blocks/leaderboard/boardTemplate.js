<<<<<<< HEAD
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function generateBoard(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
pug_html = pug_html + "\u003Csection id=\"scoreboard\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
=======
function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function generateBoard(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDesktop\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
pug_html = pug_html + "\u003Csection" + (" id=\"scoreboard\""+pug_attr("hidden", true, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDesktop\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
>>>>>>> origin/landing/petros
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
pug_html = pug_html + " Leaderboard\u003C\u002Fh1\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
pug_html = pug_html + "\u003Cdiv class=\"js-scoreboard-table\"\u003E\u003C\u002Fdiv\u003E";
<<<<<<< HEAD
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
pug_html = pug_html + "\u003Cbutton\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
=======
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDesktop\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
pug_html = pug_html + "\u003Cbutton class=\"backToMenu menu__button btn-up\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDesktop\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fleaderboard\u002Fleaderboard.pug";
>>>>>>> origin/landing/petros
pug_html = pug_html + "Menu\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}