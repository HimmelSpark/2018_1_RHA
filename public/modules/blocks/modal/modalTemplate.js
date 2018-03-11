function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function generateModal(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modalDialog fadeIn-Out hidden\" id=\"openModal\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"mainModPart\" id=\"mainModPart\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Cul class=\"tab-group\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Cli class=\"tab active\" id=\"signin-li\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Ca href=\"#\" data-section=\"signin\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "Sign In\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Cli class=\"tab\" id=\"signup-li\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Ca href=\"#\" data-section=\"signup\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "Sign Up\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "\u003Ca class=\"close\" id=\"close\" title=\"close\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fmodal\u002Fmodal.pug";
pug_html = pug_html + "X\u003C\u002Fa\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Csection id=\"signin\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "Sign In\u003C\u002Fh1\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Cform class=\"form js-signin-group\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug_attr("required", true, true, false)+" type=\"text\" name=\"nickname-in\" id=\"nickname-in\" placeholder=\"nickname\"") + "\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug_attr("required", true, true, false)+" type=\"password\" name=\"password-in\" id=\"password-in\" placeholder=\"password\"") + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Flogin\u002Flogin.pug";
pug_html = pug_html + "\u003Cinput class=\"input button button-block btn-in\" type=\"submit\" value=\"Sign In\"\u002F\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Csection id=\"signup\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "Sign Up\u003C\u002Fh1\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Cform class=\"form js-signup-group\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug_attr("required", true, true, false)+" type=\"text\" name=\"nickname-up\" id=\"nickname-up\" placeholder=\"nickname\"") + "\u002F\u003E";
<<<<<<< HEAD
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug_attr("required", true, true, false)+" type=\"email\" name=\"email-up\" id=\"email-up\" placeholder=\"email\"") + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
=======
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDesktop\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug_attr("required", true, true, false)+" type=\"text\" name=\"email-up\" id=\"email-up\" placeholder=\"email\"") + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDesktop\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
>>>>>>> origin/landing/petros
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug_attr("required", true, true, false)+" type=\"password\" name=\"password-up\" id=\"password-up\" placeholder=\"password\"") + "\u002F\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug_attr("required", true, true, false)+" type=\"password\" name=\"password-up-repeat\" id=\"password-up-repeat\" placeholder=\"confirm password\"") + "\u002F\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002Fhome\u002Fchapay\u002FTechPark\u002Fsem2\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fmodules\u002Fblocks\u002Fforms\u002Fregister\u002Fregister.pug";
pug_html = pug_html + "\u003Cinput class=\"input button button-block btn-up\" type=\"submit\" value=\"Sign Up\"\u002F\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}