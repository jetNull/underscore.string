(function(){function h(b){if(b)return _s.escapeRegExp(b);return"\\s"}var i=String.prototype.trim;this._s={capitalize:function(b){return b.charAt(0).toUpperCase()+b.substring(1).toLowerCase()},escapeRegExp:function(b){return b.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},contains:function(b,a){return b.indexOf(a)!==-1},clean:function(b){return _s.strip(b.replace(/\s+/g," "))},trim:function(b,a){if(!a&&i)return i.call(b);a=h(a);return b.replace(new RegExp("^["+a+"]+|["+a+"]+$","g"),"")},ltrim:function(b,
a){a=h(a);return b.replace(new RegExp("^["+a+"]+","g"),"")},rtrim:function(b,a){a=h(a);return b.replace(new RegExp("["+a+"]+$","g"),"")},startsWith:function(b,a){return b.length>=a.length&&b.substring(0,a.length)===a},endsWith:function(b,a){return b.length>=a.length&&b.substring(a.length)===a},sprintf:function(){for(var b=0,a,e=arguments[b++],g=[],c,d,f;e;){if(c=/^[^\x25]+/.exec(e))g.push(c[0]);else if(c=/^\x25{2}/.exec(e))g.push("%");else if(c=/^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e)){if((a=
arguments[c[1]||b++])==null||a==undefined)throw"Too few arguments.";if(/[^s]/.test(c[7])&&typeof a!="number")throw"Expecting number but found "+typeof a;switch(c[7]){case "b":a=a.toString(2);break;case "c":a=String.fromCharCode(a);break;case "d":a=parseInt(a);break;case "e":a=c[6]?a.toExponential(c[6]):a.toExponential();break;case "f":a=c[6]?parseFloat(a).toFixed(c[6]):parseFloat(a);break;case "o":a=a.toString(8);break;case "s":a=(a=String(a))&&c[6]?a.substring(0,c[6]):a;break;case "u":a=Math.abs(a);
break;case "x":a=a.toString(16);break;case "X":a=a.toString(16).toUpperCase();break}a=/[def]/.test(c[7])&&c[2]&&a>=0?"+"+a:a;d=c[3]?c[3]=="0"?"0":c[3].charAt(1):" ";f=c[5]-String(a).length-0;if(c[5]){f=f;for(var j=[];f>0;j[--f]=d);d=j.join("")}else d="";d=d;g.push(""+(c[4]?a+d:d+a))}else throw"Huh ?!";e=e.substring(c[0].length)}return g.join("")}};this._s.strip=_s.trim;this._s.lstrip=_s.ltrim;this._s.rstrip=_s.rtrim;_&&_.mixin(this._s)})();
