  if(!Object.prototype.byString){
      //NEW byString which can update values
    Object.prototype.byString = function(s, v, o) {
      var _o = o || this;
          s = s.replace(/\[(\w+)\]/g, '.$1'); // CONVERT INDEXES TO PROPERTIES
          s = s.replace(/^\./, ''); // STRIP A LEADING DOT
          var a = s.split('.'); //ARRAY OF STRINGS SPLIT BY '.'
          for (var i = 0; i < a.length; ++i) {//LOOP OVER ARRAY OF STRINGS
              var k = a[i];
              if (k in _o) {//LOOP THROUGH OBJECT KEYS
                  if(_o.hasOwnProperty(k)){//USE ONLY KEYS WE CREATED
                    if(v !== undefined){//IF WE HAVE A NEW VALUE PARAM
                      if(i === a.length -1){//IF IT'S THE LAST IN THE ARRAY
                        _o[k] = v;
                      }
                    }
                    _o = _o[k];//NO NEW VALUE SO JUST RETURN THE CURRENT VALUE
                  }
              } else {
                  return;
              }
          }
          return _o;
      };
   }