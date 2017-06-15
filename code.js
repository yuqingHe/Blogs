/* EditInPlaceField类 */
/* 扩展函数 */ 
function extend(subClass, superClass) {
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superclass = superClass.prototype;
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

/* EditInPlaceField对象*/
/* 克隆函数 */
function clone(object) {
    function F() {}
    F.prototype = object;
    return new F;
}

/* 混合类 */
/* 混合函数 */
function augment(receivingClass, givingClass) {
  for(methodName in givingClass.prototype) { 
    if(!receivingClass.prototype[methodName]) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}

/* 改进的增加函数 */

function augment(receivingClass, givingClass) {
  if(arguments[2]) { // Only give certain methods.
    for(var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } 
  else { // Give all methods.
    for(methodName in givingClass.prototype) { 
      if(!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

