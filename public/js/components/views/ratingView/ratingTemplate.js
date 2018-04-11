function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function generateRating(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Object, data, page, pages, user) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctable class=\"scorboard_table\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "Leaderboard\u003C\u002Fh1\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "Nickname\u003C\u002Ftd\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "Score\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var fuck = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctr class=\"scorboard_row\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Object.keys(fuck)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Object.values(fuck)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var fuck = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctr class=\"scorboard_row\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Object.keys(fuck)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Object.values(fuck)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctr class=\"scorboard_row\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "⋮\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctr class=\"scorboard_row\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Object.keys(user)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Object.values(user)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + "Страница ";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = page) ? "" : pug_interp));
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + " из ";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Fpetrosadaman\u002FDocuments\u002FТехнопарк\u002F2 sem\u002FJS\u002Ffront\u002F2018_1_RHA\u002Fpublic\u002Fjs\u002Fcomponents\u002Fviews\u002FratingView\u002Frating.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = Object.values(pages)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftable\u003E";}.call(this,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined,"pages" in locals_for_with?locals_for_with.pages:typeof pages!=="undefined"?pages:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}