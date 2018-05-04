function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function generateAttack(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (height, id, width) {;pug_debug_line = 1;pug_debug_filename = "\u002Fhome\u002Fegor\u002FProjects\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fmodules\u002Fgame\u002Fanimation\u002Fattack\u002FattackAnimation.pug";
pug_html = pug_html + "\u003Cdiv class=\"info-menu\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002Fhome\u002Fegor\u002FProjects\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fmodules\u002Fgame\u002Fanimation\u002Fattack\u002FattackAnimation.pug";
pug_html = pug_html + "\u003Cdiv class=\"about-region\" id=\"about-region\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002Fhome\u002Fegor\u002FProjects\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fmodules\u002Fgame\u002Fanimation\u002Fattack\u002FattackAnimation.pug";
pug_html = pug_html + "\u003Cdiv class=\"canvas-wrap\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002Fhome\u002Fegor\u002FProjects\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fmodules\u002Fgame\u002Fanimation\u002Fattack\u002FattackAnimation.pug";
pug_html = pug_html + "\u003Ccanvas" + (" class=\"canvas\""+pug_attr("width", width, true, false)+pug_attr("height", height, true, false)+pug_attr("id", id, true, false)) + "\u003E\u003C\u002Fcanvas\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002Fhome\u002Fegor\u002FProjects\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fmodules\u002Fgame\u002Fanimation\u002Fattack\u002FattackAnimation.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002Fhome\u002Fegor\u002FProjects\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fmodules\u002Fgame\u002Fanimation\u002Fattack\u002FattackAnimation.pug";
pug_html = pug_html + "\u003Cdiv class=\"control-interface\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002Fhome\u002Fegor\u002FProjects\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fmodules\u002Fgame\u002Fanimation\u002Fattack\u002FattackAnimation.pug";
pug_html = pug_html + "\u003Cdiv class=\"change\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"height" in locals_for_with?locals_for_with.height:typeof height!=="undefined"?height:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"width" in locals_for_with?locals_for_with.width:typeof width!=="undefined"?width:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}