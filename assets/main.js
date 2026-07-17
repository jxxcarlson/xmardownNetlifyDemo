(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.2/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (Object.prototype.hasOwnProperty.call(value, key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	var unwrapped = _Json_unwrap(value);
	if (!(key === 'toJSON' && typeof unwrapped === 'function'))
	{
		object[key] = unwrapped;
	}
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'outerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (
		(typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		||
		(Array.isArray(_Json_unwrap(value)) && _VirtualDom_RE_js_html.test(String(_Json_unwrap(value))))
	)
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}




var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\u000A    ',
		A2($elm$core$String$split, '\u000A', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\u000A\u000A(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\u0027' + (f + '\u0027]'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\u000A\u000A',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\u000A\u000A';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\u000A\u000A    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\u000A\u000A' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$Light = {$: 'Light'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$defaultCompilerParameters = {backgroundColor: 'rgba(255, 255, 255, 1.0)', data: $elm$core$Dict$empty, docWidth: 500, editCount: 0, fontSize: 16, highlightColor: 'rgba(200, 200, 255, 0.4)', interBlockSpacing: 0, lineHeight: 1.5, numberToLevel: 0, paddingAboveHeadings: 10, scale: 1, selectedId: '', selectedSlug: $elm$core$Maybe$Nothing, theme: $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$Light, windowWidth: 500};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$API$defaultCompilerParameters = $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$defaultCompilerParameters;
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Ports$setEditorHighlightColor = _Platform_outgoingPort('setEditorHighlightColor', $elm$json$Json$Encode$string);
var $author$project$Data$XMarkdown$text = '\u000A\u000A# Sample Document\u000A\u000AXMarkdown is a version of Markdown which handles mathematical text and other features.  These are described below.\u000A\u000AFeel free to edit this text.  Your changes will not be saved.\u000A\u000A# Math\u000A\u000AXMarkdown handles both inline and displayed mathematical text, e.g., $a^2 + b^2 = c^2$\u000Aand\u000A\u000A$$\u000Acos(x) = sum_{n=0}^infty (-1)^n frac(x^{2n},(2n)!)\u000A$$\u000A\u000AHere is the source text: `$a^2 + b^2 = c^2$` for inline formulas and\u000A\u000A```\u000A$$\u000Acos(x) = sum_{n=0}^infty (-1)^n frac(x^{2n},(2n)!)\u000A$$\u000A```\u000A\u000Afor displayed formulas. The source text looks like TeX but without most of the backslashes and curly braces that are customary.  This is [ETeX](https://package.elm-lang.org/packages/jxxcarlson/etex/latest/), an Elm package which implements this simplified syntax.  You may also use regular TeX:\u000A\u000A```\u000A$$\u000A\u005Ccos{x} = \u005Csum_{n=0}^\u005Cinfty(-1)^n \u005Cfrac{x^{2n}}{(2n)!}\u000A$$\u000A```\u000A\u000AIn ETeX curly braces are used for grouping.\u000A\u000A# Real-time Rendering\u000A\u000AXMarkdown provides for real-time rendering: the rendered text is updated as you type.\u000A\u000A# Synchronization\u000A\u000AXMarkdown can synchronize source and rendered text:\u000A\u000A- Click on a piece of rendered text. The corresponding piece of source text will be highlighted and scrolled into view.\u000A\u000A- Select a piece of of rendered text and type cmd-S. (S for sync). The block of rendered text will be highlighted and scrolled into view.\u000A\u000A# Table of Contents\u000A\u000AXMarkdown provides for an optional real-time active table of contents.  If you create, edit, or remove sections, these changes will be reflected immediately in the table of contents.  Click on an entry in the table of contents and the corresponding source and rendered text will be scrolled into view.\u000A\u000AAlso note the search and replace features of the editor. Type cmd-F to bring up the editor, ESC to dismiss it.\u000A\u000A*You can edit whatever you like in this document.  Your edits will not be saved.*\u000A\u000A\u000A# Images\u000A\u000A![European Robin — click to open in new tab width:400](https://fathersonbirding.com/wp-content/uploads/2020/01/European-Robin-Amsterdam-2019_12_282743-1536x1238.jpg)\u000A\u000AThe element `[...]` holds the caption for the image as well as optional properties such as `width:400`.\u000A\u000A\u000A# Tables\u000A\u000AXMarkdown provides for Github-style tables.  These tables may contain mathematical text.\u000A\u000A**Ages, Occupations, and Favorite Formulas**\u000A\u000A| Name  | Age | Occupation  | F.F.|\u000A|:-------|----:|:-------------|-----:|\u000A| Alice |  28 | *Engineer*    | $n!$ |\u000A| Bob   |  34 | *Musician*    | $3:2$ |\u000A| Carol |  41 | *Mathematician* | $sqrt(2 + \u005Csqrt5)$\u000A\u000A ';
var $author$project$Main$init = function (flags) {
	var params = _Utils_update(
		$jxxcarlson$xmarkdown_compiler$XMarkdown$API$defaultCompilerParameters,
		{numberToLevel: 0});
	return _Utils_Tuple2(
		{compilerParameters: params, count: 0, currentTheme: $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$Light, fileName: 'untitled.md', initialText: $author$project$Data$XMarkdown$text, lrSyncIndex: 0, lrSyncMatches: _List_Nil, lrSyncText: '', selectId: '@InitID', sourceText: $author$project$Data$XMarkdown$text, syncHighlight: $elm$core$Maybe$Nothing, theme: $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$Light, tick: 0, windowHeight: flags.window.windowHeight, windowWidth: flags.window.windowWidth},
		$author$project$Ports$setEditorHighlightColor(params.highlightColor));
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Main$GotNewWindowDimensions = F2(
	function (a, b) {
		return {$: 'GotNewWindowDimensions', a: a, b: b};
	});
var $author$project$Main$LRSync = function (a) {
	return {$: 'LRSync', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Ports$lrSyncRequest = _Platform_incomingPort('lrSyncRequest', $elm$json$Json$Decode$string);
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var event = _v0.event;
		var key = _v0.key;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$Main$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$elm$browser$Browser$Events$onResize($author$project$Main$GotNewWindowDimensions),
				$author$project$Ports$lrSyncRequest($author$project$Main$LRSync)
			]));
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$Dark = {$: 'Dark'};
var $author$project$Main$FileLoaded = function (a) {
	return {$: 'FileLoaded', a: a};
};
var $author$project$Main$FileSelected = function (a) {
	return {$: 'FileSelected', a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$rgba = F4(
	function (r, g, b, a) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, a);
	});
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$blue300 = A4($avh4$elm_color$Color$rgba, 0.54, 0.71, 0.94, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray200 = A4($avh4$elm_color$Color$rgba, 0.89, 0.89, 0.89, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray400 = A4($avh4$elm_color$Color$rgba, 0.65, 0.65, 0.65, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray700 = A4($avh4$elm_color$Color$rgba, 0.33, 0.35, 0.37, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray800 = A4($avh4$elm_color$Color$rgba, 0.26, 0.28, 0.3, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray900 = A4($avh4$elm_color$Color$rgba, 0.19, 0.21, 0.23, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$indigo500 = A4($avh4$elm_color$Color$rgba, 0.35, 0.38, 0.67, 1);
var $avh4$elm_color$Color$lightBlue = A4($avh4$elm_color$Color$RgbaSpace, 114 / 255, 159 / 255, 207 / 255, 1.0);
var $jxxcarlson$xmarkdown_compiler$Render$Theme$darkTheme = {
	background: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray900,
	border: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray700,
	codeBackground: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray800,
	codeText: $avh4$elm_color$Color$lightBlue,
	highlight: $jxxcarlson$xmarkdown_compiler$Render$NewColor$indigo500,
	indentGuide: A4($avh4$elm_color$Color$rgba, 1, 1, 1, 0.15),
	link: $jxxcarlson$xmarkdown_compiler$Render$NewColor$blue300,
	offsetBackground: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray900,
	offsetText: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray400,
	text: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray200
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Sync$fromMsg = F2(
	function (tick, msg) {
		switch (msg.$) {
			case 'SendMeta':
				var m = msg.a;
				return $elm$core$Maybe$Just(
					{end: m.end + 1, mode: 'chars', start: m.begin, tick: tick});
			case 'SendLineNumber':
				var r = msg.a;
				return $elm$core$Maybe$Just(
					{end: r.end - 1, mode: 'lines', start: r.begin, tick: tick});
			default:
				return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$API$fromMsgToSyncHighlight = $jxxcarlson$xmarkdown_compiler$XMarkdown$Sync$fromMsg;
var $author$project$Main$geometry = function (model) {
	var tocW = 200;
	var pad = 24;
	var gap = 16;
	var avail = (model.windowWidth - tocW) - (4 * gap);
	var half = A2($elm$core$Basics$max, 240, (avail / 2) | 0);
	return {docWidth: half - (2 * pad), editorW: half, renderedW: half, tocW: tocW};
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Ports$injectHighlightCSS = _Platform_outgoingPort('injectHighlightCSS', $elm$json$Json$Encode$string);
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Main$NoOp = {$: 'NoOp'};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$core$Task$fail = _Scheduler_fail;
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $elm$browser$Browser$Dom$getViewportOf = _Browser_getViewportOf;
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Editor$renderedTextId = '__RENDERED_TEXT__';
var $jxxcarlson$xmarkdown_compiler$XMarkdown$API$renderedTextId = $jxxcarlson$xmarkdown_compiler$XMarkdown$Editor$renderedTextId;
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Main$performScroll = function (headingElement) {
	return A2(
		$elm$core$Task$andThen,
		function (containerElement) {
			return A2(
				$elm$core$Task$andThen,
				function (containerViewport) {
					var headingAbsY = headingElement.element.y;
					var currentScroll = containerViewport.viewport.y;
					var containerAbsY = containerElement.element.y;
					var headingInContent = (headingAbsY - containerAbsY) + currentScroll;
					var targetScroll = A2($elm$core$Basics$max, 0, headingInContent - 50);
					return A3($elm$browser$Browser$Dom$setViewportOf, $jxxcarlson$xmarkdown_compiler$XMarkdown$API$renderedTextId, 0, targetScroll);
				},
				$elm$browser$Browser$Dom$getViewportOf($jxxcarlson$xmarkdown_compiler$XMarkdown$API$renderedTextId));
		},
		$elm$browser$Browser$Dom$getElement($jxxcarlson$xmarkdown_compiler$XMarkdown$API$renderedTextId));
};
var $author$project$Main$jumpToTopOfWithLineNumber = F2(
	function (elementId, lineNumber) {
		return A2(
			$elm$core$Task$attempt,
			function (_v1) {
				return $author$project$Main$NoOp;
			},
			A2(
				$elm$core$Task$onError,
				function (err) {
					return $elm$core$Task$fail(err);
				},
				A2(
					$elm$core$Task$onError,
					function (_v0) {
						var selector = '[data-line-number=\u0022' + ($elm$core$String$fromInt(lineNumber) + '\u0022]');
						return A2(
							$elm$core$Task$andThen,
							$author$project$Main$performScroll,
							$elm$browser$Browser$Dom$getElement(selector));
					},
					A2(
						$elm$core$Task$andThen,
						$author$project$Main$performScroll,
						$elm$browser$Browser$Dom$getElement(elementId)))));
	});
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$blue700 = A4($avh4$elm_color$Color$rgba, 0.0, 0.2, 1.0, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$blueDark = A4($avh4$elm_color$Color$rgba, 0.0, 0.0, 0.3, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray300 = A4($avh4$elm_color$Color$rgba, 0.82, 0.82, 0.82, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray950 = A4($avh4$elm_color$Color$rgba, 0.09, 0.11, 0.13, 1);
var $jxxcarlson$xmarkdown_compiler$Render$NewColor$indigo200 = A4($avh4$elm_color$Color$rgba, 0.82, 0.84, 0.93, 1);
var $avh4$elm_color$Color$rgb = F3(
	function (r, g, b) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, 1.0);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Theme$lightTheme = {
	background: A4($avh4$elm_color$Color$rgba, 0.9, 0.9, 0.9, 1.0),
	border: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray300,
	codeBackground: A4($avh4$elm_color$Color$rgba, 0.9, 0.9, 0.94, 1),
	codeText: $jxxcarlson$xmarkdown_compiler$Render$NewColor$blueDark,
	highlight: $jxxcarlson$xmarkdown_compiler$Render$NewColor$indigo200,
	indentGuide: A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.15),
	link: $jxxcarlson$xmarkdown_compiler$Render$NewColor$blue700,
	offsetBackground: A3($avh4$elm_color$Color$rgb, 1, 1, 1),
	offsetText: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray950,
	text: $jxxcarlson$xmarkdown_compiler$Render$NewColor$gray950
};
var $elm$core$String$lines = _String_lines;
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$file$File$name = _File_name;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $maca$elm_rose_tree$RoseTree$Tree$children = function (_v0) {
	var ns = _v0.b;
	return $elm$core$Array$toList(ns);
};
var $maca$elm_rose_tree$RoseTree$Tree$value = function (_v0) {
	var a = _v0.a;
	return a;
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$treeToBlockList = function (tree) {
	var root = $maca$elm_rose_tree$RoseTree$Tree$value(tree);
	var children = $maca$elm_rose_tree$RoseTree$Tree$children(tree);
	return A2(
		$elm$core$List$cons,
		root,
		A2($elm$core$List$concatMap, $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$treeToBlockList, children));
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$forestToBlockList = function (forest) {
	return A2($elm$core$List$concatMap, $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$treeToBlockList, forest);
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$idPrefix = 'L';
var $jxxcarlson$xmarkdown_compiler$Library$Tree$initTree = function (input) {
	return {input: input, n: 0, output: $elm$core$Maybe$Nothing, pathToActiveNode: $elm$core$Maybe$Nothing};
};
var $jxxcarlson$xmarkdown_compiler$Library$Tree$loop = F2(
	function (s, f) {
		loop:
		while (true) {
			var _v0 = f(s);
			if (_v0.$ === 'Loop') {
				var s_ = _v0.a;
				var $temp$s = s_,
					$temp$f = f;
				s = $temp$s;
				f = $temp$f;
				continue loop;
			} else {
				var b = _v0.a;
				return b;
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Library$Tree$Done = function (a) {
	return {$: 'Done', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Library$Tree$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $maca$elm_rose_tree$RoseTree$Tree$Tree = F2(
	function (a, b) {
		return {$: 'Tree', a: a, b: b};
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $maca$elm_rose_tree$RoseTree$Tree$branch = F2(
	function (a, ns) {
		return A2(
			$maca$elm_rose_tree$RoseTree$Tree$Tree,
			a,
			$elm$core$Array$fromList(ns));
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $maca$elm_rose_tree$RoseTree$Tree$leaf = function (a) {
	return A2($maca$elm_rose_tree$RoseTree$Tree$Tree, a, $elm$core$Array$empty);
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $maca$elm_rose_tree$RoseTree$Tree$push = F2(
	function (n, _v0) {
		var a = _v0.a;
		var ns = _v0.b;
		return A2(
			$maca$elm_rose_tree$RoseTree$Tree$Tree,
			a,
			A2($elm$core$Array$push, n, ns));
	});
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $elm_community$array_extra$Array$Extra$update = F2(
	function (index, alter) {
		return function (array) {
			var _v0 = A2($elm$core$Array$get, index, array);
			if (_v0.$ === 'Nothing') {
				return array;
			} else {
				var element = _v0.a;
				return A3(
					$elm$core$Array$set,
					index,
					alter(element),
					array);
			}
		};
	});
var $maca$elm_rose_tree$RoseTree$Tree$updateAtHelp = F3(
	function (path, f, _v0) {
		var a = _v0.a;
		var ns = _v0.b;
		if (path.b) {
			if (!path.b.b) {
				var idx = path.a;
				return A2(
					$maca$elm_rose_tree$RoseTree$Tree$Tree,
					a,
					A2(f, idx, ns));
			} else {
				var idx = path.a;
				var rest = path.b;
				return A2(
					$maca$elm_rose_tree$RoseTree$Tree$Tree,
					a,
					A3(
						$elm_community$array_extra$Array$Extra$update,
						idx,
						A2($maca$elm_rose_tree$RoseTree$Tree$updateAtHelp, rest, f),
						ns));
			}
		} else {
			return A2($maca$elm_rose_tree$RoseTree$Tree$Tree, a, ns);
		}
	});
var $maca$elm_rose_tree$RoseTree$Tree$updateAt = F3(
	function (path, f, tree) {
		if (!path.b) {
			return f(tree);
		} else {
			return A3(
				$maca$elm_rose_tree$RoseTree$Tree$updateAtHelp,
				path,
				function (idx) {
					return A2($elm_community$array_extra$Array$Extra$update, idx, f);
				},
				tree);
		}
	});
var $maca$elm_rose_tree$RoseTree$Tree$pushChildFor = F2(
	function (path, child) {
		return A2(
			$maca$elm_rose_tree$RoseTree$Tree$updateAt,
			path,
			$maca$elm_rose_tree$RoseTree$Tree$push(child));
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $jxxcarlson$xmarkdown_compiler$Library$Tree$nextStepTree = F2(
	function (getLevel, state) {
		var _v0 = state.input;
		if (!_v0.b) {
			return $jxxcarlson$xmarkdown_compiler$Library$Tree$Done(state.output);
		} else {
			if (!_v0.b.b) {
				var lastItem = _v0.a;
				var _v1 = state.pathToActiveNode;
				if (_v1.$ === 'Nothing') {
					return $jxxcarlson$xmarkdown_compiler$Library$Tree$Done(
						$elm$core$Maybe$Just(
							A2($maca$elm_rose_tree$RoseTree$Tree$branch, lastItem, _List_Nil)));
				} else {
					var path = _v1.a;
					return $jxxcarlson$xmarkdown_compiler$Library$Tree$Done(
						A2(
							$elm$core$Maybe$map,
							A2(
								$maca$elm_rose_tree$RoseTree$Tree$pushChildFor,
								path,
								$maca$elm_rose_tree$RoseTree$Tree$leaf(lastItem)),
							state.output));
				}
			} else {
				var currentItem = _v0.a;
				var _v2 = _v0.b;
				var nextItem = _v2.a;
				var rest = _v2.b;
				var newOutput = function () {
					var _v5 = state.pathToActiveNode;
					if (_v5.$ === 'Nothing') {
						return $elm$core$Maybe$Just(
							A2($maca$elm_rose_tree$RoseTree$Tree$branch, currentItem, _List_Nil));
					} else {
						var path = _v5.a;
						return A2(
							$elm$core$Maybe$map,
							A2(
								$maca$elm_rose_tree$RoseTree$Tree$pushChildFor,
								path,
								$maca$elm_rose_tree$RoseTree$Tree$leaf(currentItem)),
							state.output);
					}
				}();
				var indexToActiveNode = A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$maca$elm_rose_tree$RoseTree$Tree$children,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$List$length,
							function (i) {
								return i - 1;
							})),
					newOutput);
				var dropLast = function (list) {
					return A2(
						$elm$core$List$take,
						$elm$core$List$length(list) - 1,
						list);
				};
				var append = F2(
					function (k, list) {
						return _Utils_ap(
							list,
							_List_fromArray(
								[k]));
					});
				var getNewPath = F2(
					function (currentItem_, nextItem_) {
						var _v3 = A2(
							$elm$core$Basics$compare,
							getLevel(nextItem_),
							getLevel(currentItem_));
						switch (_v3.$) {
							case 'GT':
								var _v4 = state.pathToActiveNode;
								if (_v4.$ === 'Nothing') {
									return $elm$core$Maybe$Just(_List_Nil);
								} else {
									return A3($elm$core$Maybe$map2, append, indexToActiveNode, state.pathToActiveNode);
								}
							case 'EQ':
								return state.pathToActiveNode;
							default:
								return A2($elm$core$Maybe$map, dropLast, state.pathToActiveNode);
						}
					});
				var newPath = A2(getNewPath, currentItem, nextItem);
				return $jxxcarlson$xmarkdown_compiler$Library$Tree$Loop(
					{
						input: A2($elm$core$List$cons, nextItem, rest),
						n: state.n + 1,
						output: newOutput,
						pathToActiveNode: newPath
					});
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Library$Tree$makeTree = F2(
	function (getLevel, input) {
		var initialState = $jxxcarlson$xmarkdown_compiler$Library$Tree$initTree(input);
		return A2(
			$jxxcarlson$xmarkdown_compiler$Library$Tree$loop,
			initialState,
			$jxxcarlson$xmarkdown_compiler$Library$Tree$nextStepTree(getLevel));
	});
var $jxxcarlson$xmarkdown_compiler$Library$Forest$init = F2(
	function (getLevel, input) {
		var _v0 = $elm$core$List$head(input);
		if (_v0.$ === 'Nothing') {
			return {currentLevel: 0, currentList: _List_Nil, input: _List_Nil, output: _List_Nil, rootLevel: 0};
		} else {
			var item = _v0.a;
			return {
				currentLevel: getLevel(item),
				currentList: _List_Nil,
				input: input,
				output: _List_Nil,
				rootLevel: getLevel(item)
			};
		}
	});
var $jxxcarlson$xmarkdown_compiler$Library$Forest$loop = F2(
	function (s, f) {
		loop:
		while (true) {
			var _v0 = f(s);
			if (_v0.$ === 'Loop') {
				var s_ = _v0.a;
				var $temp$s = s_,
					$temp$f = f;
				s = $temp$s;
				f = $temp$f;
				continue loop;
			} else {
				var b = _v0.a;
				return b;
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Library$Forest$Done = function (a) {
	return {$: 'Done', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Library$Forest$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Library$Forest$nextStep = F2(
	function (getLevel, state) {
		var _v0 = state.input;
		if (!_v0.b) {
			return $jxxcarlson$xmarkdown_compiler$Library$Forest$Done(
				$elm$core$List$reverse(
					A2(
						$elm$core$List$cons,
						$elm$core$List$reverse(state.currentList),
						state.output)));
		} else {
			var x = _v0.a;
			var xs = _v0.b;
			var level = getLevel(x);
			return _Utils_eq(level, state.rootLevel) ? $jxxcarlson$xmarkdown_compiler$Library$Forest$Loop(
				_Utils_update(
					state,
					{
						currentLevel: level,
						currentList: _List_fromArray(
							[x]),
						input: xs,
						output: _Utils_eq(state.currentList, _List_Nil) ? state.output : A2(
							$elm$core$List$cons,
							$elm$core$List$reverse(state.currentList),
							state.output)
					})) : $jxxcarlson$xmarkdown_compiler$Library$Forest$Loop(
				_Utils_update(
					state,
					{
						currentLevel: level,
						currentList: A2($elm$core$List$cons, x, state.currentList),
						input: xs
					}));
		}
	});
var $jxxcarlson$xmarkdown_compiler$Library$Forest$toListList = F2(
	function (getLevel, input) {
		var initialState = A2($jxxcarlson$xmarkdown_compiler$Library$Forest$init, getLevel, input);
		return A2(
			$jxxcarlson$xmarkdown_compiler$Library$Forest$loop,
			initialState,
			$jxxcarlson$xmarkdown_compiler$Library$Forest$nextStep(getLevel));
	});
var $jxxcarlson$xmarkdown_compiler$Library$Forest$makeForest = F2(
	function (getLevel, input) {
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2(
				$elm$core$List$map,
				$jxxcarlson$xmarkdown_compiler$Library$Tree$makeTree(getLevel),
				A2($jxxcarlson$xmarkdown_compiler$Library$Forest$toListList, getLevel, input)));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$ForestTransform$forestFromBlocks = F2(
	function (indentation, blocks) {
		return A2($jxxcarlson$xmarkdown_compiler$Library$Forest$makeForest, indentation, blocks);
	});
var $elm$core$Elm$JsArray$map = _JsArray_map;
var $elm$core$Array$map = F2(
	function (func, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = function (node) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return $elm$core$Array$SubTree(
					A2($elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return $elm$core$Array$Leaf(
					A2($elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2($elm$core$Elm$JsArray$map, helper, tree),
			A2($elm$core$Elm$JsArray$map, func, tail));
	});
var $maca$elm_rose_tree$RoseTree$Tree$mapValues = F2(
	function (f, _v0) {
		var a = _v0.a;
		var ns = _v0.b;
		return A2(
			$maca$elm_rose_tree$RoseTree$Tree$Tree,
			f(a),
			A2(
				$elm$core$Array$map,
				$maca$elm_rose_tree$RoseTree$Tree$mapValues(f),
				ns));
	});
var $jxxcarlson$xmarkdown_compiler$AST$Forest$map = F2(
	function (f, forest) {
		return A2(
			$elm$core$List$map,
			$maca$elm_rose_tree$RoseTree$Tree$mapValues(f),
			forest);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$init = F3(
	function (initialId, outerCount, lines) {
		return {blocks: _List_Nil, blocksCommitted: 0, count: 0, currentBlock: $elm$core$Maybe$Nothing, error: $elm$core$Maybe$Nothing, idPrefix: initialId, inBlock: false, inVerbatim: false, indent: 0, label: '0, START', lineNumber: 0, lines: lines, outerCount: outerCount, position: 0};
	});
var $jxxcarlson$xmarkdown_compiler$Tools$Loop$loop = F2(
	function (s, f) {
		loop:
		while (true) {
			var _v0 = f(s);
			if (_v0.$ === 'Loop') {
				var s_ = _v0.a;
				var $temp$s = s_,
					$temp$f = f;
				s = $temp$s;
				f = $temp$f;
				continue loop;
			} else {
				var b = _v0.a;
				return b;
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done = function (a) {
	return {$: 'Done', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary = function (a) {
	return {$: 'Ordinary', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$addCurrentLine_ = F2(
	function (line, block) {
		var content = line.content;
		var prefix = line.prefix;
		var oldMeta = block.meta;
		var newMeta = _Utils_update(
			oldMeta,
			{sourceText: block.meta.sourceText + ('\u000A' + (prefix + content))});
		return _Utils_update(
			block,
			{
				body: A2($elm$core$List$cons, line.content, block.body),
				meta: newMeta
			});
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$addCurrentLine2 = F2(
	function (state, currentLine) {
		var _v0 = state.currentBlock;
		if (_v0.$ === 'Nothing') {
			return _Utils_update(
				state,
				{
					lines: A2($elm$core$List$drop, 1, state.lines)
				});
		} else {
			var block = _v0.a;
			return _Utils_update(
				state,
				{
					count: state.count + 1,
					currentBlock: $elm$core$Maybe$Just(
						A2($jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$addCurrentLine_, currentLine, block)),
					lineNumber: state.lineNumber + 1,
					lines: A2($elm$core$List$drop, 1, state.lines)
				});
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$advance = F2(
	function (newPosition, state) {
		return _Utils_update(
			state,
			{
				count: state.count + 1,
				lineNumber: state.lineNumber + 1,
				lines: A2($elm$core$List$drop, 1, state.lines),
				position: newPosition
			});
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
	});
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$parser$Parser$Advanced$getSource = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.src, s);
	});
var $elm$parser$Parser$getSource = $elm$parser$Parser$Advanced$getSource;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Line$prefixParser = F2(
	function (position, lineNumber) {
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed(
							F4(
								function (prefixStart, prefixEnd, _v0, content) {
									return {
										content: content,
										indent: prefixEnd - prefixStart,
										lineNumber: lineNumber,
										position: position,
										prefix: A3($elm$core$String$slice, 0, prefixEnd, content)
									};
								})),
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$getOffset,
							$elm$parser$Parser$chompWhile(
								function (c) {
									return _Utils_eq(
										c,
										_Utils_chr(' '));
								}))),
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$getOffset,
						$elm$parser$Parser$chompWhile(
							function (c) {
								return !_Utils_eq(
									c,
									_Utils_chr('\n'));
							}))),
				$elm$parser$Parser$getOffset),
			$elm$parser$Parser$getSource);
	});
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Line$classify = F3(
	function (position, lineNumber, str) {
		var _v0 = A2(
			$elm$parser$Parser$run,
			A2($jxxcarlson$xmarkdown_compiler$Parser$Block$Line$prefixParser, position, lineNumber),
			str);
		if (_v0.$ === 'Err') {
			return {content: '!!ERROR', indent: 0, lineNumber: lineNumber, position: position, prefix: ''};
		} else {
			var result = _v0.a;
			return result;
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$dropLast = function (list) {
	var n = $elm$core$List$length(list);
	return A2($elm$core$List$take, n - 1, list);
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$Paragraph = {$: 'Paragraph'};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$Verbatim = function (a) {
	return {$: 'Verbatim', a: a};
};
var $elm$core$String$trim = _String_trim;
var $elm$core$String$trimLeft = _String_trimLeft;
var $elmcraft$core_extra$List$Extra$unconsLast = function (list) {
	var _v0 = $elm$core$List$reverse(list);
	if (!_v0.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var last_ = _v0.a;
		var rest = _v0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				last_,
				$elm$core$List$reverse(rest)));
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$normalizeMathDelimiters = function (block) {
	return _Utils_eq(
		block.heading,
		$jxxcarlson$xmarkdown_compiler$AST$Language$Verbatim('math')) ? _Utils_update(
		block,
		{
			body: function () {
				var _v0 = $elmcraft$core_extra$List$Extra$unconsLast(block.body);
				if (_v0.$ === 'Just') {
					var _v1 = _v0.a;
					var lastLine = _v1.a;
					var front = _v1.b;
					return ($elm$core$String$trim(lastLine) === '\u005C]') ? _Utils_ap(
						front,
						_List_fromArray(
							['$$'])) : block.body;
				} else {
					return block.body;
				}
			}(),
			firstLine: A2(
				$elm$core$String$startsWith,
				'\u005C[',
				$elm$core$String$trimLeft(block.firstLine)) ? ('$$' + A2(
				$elm$core$String$dropLeft,
				2,
				$elm$core$String$trimLeft(block.firstLine))) : block.firstLine
		}) : block;
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$finalize = function (block) {
	var properties = function () {
		var _v1 = block.heading;
		if ((_v1.$ === 'Verbatim') && (_v1.a === 'settings')) {
			var getPair = function (strings) {
				if ((strings.b && strings.b.b) && (!strings.b.b.b)) {
					var a = strings.a;
					var _v3 = strings.b;
					var b = _v3.a;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(a, b));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			};
			var dict = $elm$core$Dict$fromList(
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					A2(
						$elm$core$List$map,
						getPair,
						A2(
							$elm$core$List$map,
							function (s) {
								return A2($elm$core$String$split, ':', s);
							},
							A2($elm$core$List$map, $elm$core$String$trim, block.body)))));
			return A2($elm$core$Dict$union, dict, block.properties);
		} else {
			return block.properties;
		}
	}();
	var oldMeta = block.meta;
	var content = $elm$core$List$reverse(block.body);
	var sourceText = (!_Utils_eq(block.heading, $jxxcarlson$xmarkdown_compiler$AST$Language$Paragraph)) ? A2(
		$elm$core$String$join,
		'\u000A',
		A2($elm$core$List$cons, block.firstLine, content)) : A2($elm$core$String$join, '\u000A', content);
	var newMeta = _Utils_update(
		oldMeta,
		{sourceText: sourceText});
	var args = function () {
		var _v0 = A2($elm$core$Dict$get, 'label', properties);
		if (_v0.$ === 'Just') {
			return A2($elm$core$List$member, 'numbered', block.args) ? block.args : A2($elm$core$List$cons, 'numbered', block.args);
		} else {
			return block.args;
		}
	}();
	return $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$normalizeMathDelimiters(
		_Utils_update(
			block,
			{args: args, body: content, meta: newMeta, properties: properties}));
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$sectionRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^(#+\u005Cs*|!!\u005Cs*)'));
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$findSectionPrefix = function (string) {
	return A2(
		$elm$core$Maybe$map,
		$elm$core$String$trim,
		$elm$core$List$head(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.match;
				},
				A2($elm$regex$Regex$find, $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$sectionRegex, string))));
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$fixMarkdownTitleBlock = function (block) {
	var _v0 = $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$findSectionPrefix(block.firstLine);
	if (_v0.$ === 'Nothing') {
		return block;
	} else {
		var prefix = _v0.a;
		return (prefix === '!!') ? _Utils_update(
			block,
			{
				body: A2(
					$elm$core$List$cons,
					A3($elm$core$String$replace, prefix, '', block.firstLine),
					block.body),
				heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('title')
			}) : ((A2(
			$elm$core$String$left,
			1,
			$elm$core$String$trim(prefix)) === '#') ? _Utils_update(
			block,
			{
				body: A2(
					$elm$core$List$cons,
					A3($elm$core$String$replace, prefix, '', block.firstLine),
					block.body),
				heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('section')
			}) : ((A2(
			$elm$core$String$left,
			1,
			$elm$core$String$trim(prefix)) === '*') ? _Utils_update(
			block,
			{
				body: A2(
					$elm$core$List$cons,
					A3($elm$core$String$replace, prefix, '', block.firstLine),
					block.body),
				heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('section*')
			}) : _Utils_update(
			block,
			{
				body: A2(
					$elm$core$List$cons,
					A3($elm$core$String$replace, prefix, '', block.firstLine),
					block.body)
			})));
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$isVerbatimLine = function (str) {
	return (A2($elm$core$String$left, 3, str) === '```') || ((A2($elm$core$String$left, 2, str) === '$$') || (A2($elm$core$String$left, 2, str) === '\u005C['));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$acceptBlock = F2(
	function (tag, block) {
		return !_Utils_eq(
			block.heading,
			$jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary(tag));
	});
var $jxxcarlson$xmarkdown_compiler$Tools$Utility$ordinaryTagAtEndRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('.*\u000A| .*$'));
var $jxxcarlson$xmarkdown_compiler$Tools$Utility$findOrdinaryTagAtEnd = function (string) {
	return A2(
		$elm$core$Maybe$map,
		$elm$core$String$trim,
		$elm$core$List$head(
			$elm$core$List$reverse(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.match;
					},
					A2($elm$regex$Regex$find, $jxxcarlson$xmarkdown_compiler$Tools$Utility$ordinaryTagAtEndRegex, string)))));
};
var $elmcraft$core_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$findOrdinaryTagAtEnd = function (primitiveBlock) {
	return $jxxcarlson$xmarkdown_compiler$Tools$Utility$findOrdinaryTagAtEnd(
		A2(
			$elm$core$Maybe$withDefault,
			'',
			$elmcraft$core_extra$List$Extra$last(primitiveBlock.body)));
};
var $elmcraft$core_extra$List$Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return $elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2($elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return $elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var $elmcraft$core_extra$List$Extra$uncons = function (list) {
	if (!list.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var first = list.a;
		var rest = list.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(first, rest));
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$raiseBlockLevelsIfNeeded_ = F2(
	function (lastBlock, blocks) {
		var _v0 = $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$findOrdinaryTagAtEnd(lastBlock);
		if (_v0.$ === 'Nothing') {
			return blocks;
		} else {
			var tag = _v0.a;
			if (!A2(
				$elm$core$List$member,
				tag,
				_List_fromArray(
					['quotation', 'indent', 'theorem']))) {
				return blocks;
			} else {
				var candidateBlocksToRaise = A2(
					$elmcraft$core_extra$List$Extra$takeWhile,
					$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$acceptBlock(tag),
					blocks);
				var raisedBlocks_ = A2(
					$elm$core$List$map,
					function (b) {
						return _Utils_update(
							b,
							{indent: b.indent + 2});
					},
					candidateBlocksToRaise);
				var n = $elm$core$List$length(raisedBlocks_);
				var tail = A2($elm$core$List$drop, n, blocks);
				var raisedBlocks = function () {
					var _v1 = $elmcraft$core_extra$List$Extra$uncons(raisedBlocks_);
					if (_v1.$ === 'Nothing') {
						return raisedBlocks_;
					} else {
						var _v2 = _v1.a;
						var first = _v2.a;
						var rest = _v2.b;
						var m = $elm$core$List$length(first.body);
						return A2(
							$elm$core$List$cons,
							_Utils_update(
								first,
								{
									body: A2($elm$core$List$take, m - 1, first.body)
								}),
							rest);
					}
				}();
				return _Utils_ap(raisedBlocks, tail);
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$getPrimitiveBlockName = function (block) {
	var _v0 = block.heading;
	switch (_v0.$) {
		case 'Paragraph':
			return $elm$core$Maybe$Nothing;
		case 'Ordinary':
			var name = _v0.a;
			return $elm$core$Maybe$Just(name);
		default:
			var name = _v0.a;
			return $elm$core$Maybe$Just(name);
	}
};
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $jxxcarlson$xmarkdown_compiler$Tools$Utility$replaceLeadingDashSpace = function (str) {
	var regex = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString('^- '));
	return A3(
		$elm$regex$Regex$replace,
		regex,
		function (_v0) {
			return '';
		},
		str);
};
var $jxxcarlson$xmarkdown_compiler$Tools$Utility$replaceLeadingDotSpace = function (str) {
	var regex = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString('^\u005C. '));
	return A3(
		$elm$regex$Regex$replace,
		regex,
		function (_v0) {
			return '';
		},
		str);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$transformBlock = function (block) {
	var _v0 = $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$getPrimitiveBlockName(block);
	_v0$6:
	while (true) {
		if (_v0.$ === 'Just') {
			switch (_v0.a) {
				case 'section':
					return _Utils_update(
						block,
						{
							properties: A3(
								$elm$core$Dict$insert,
								'level',
								A2(
									$elm$core$Maybe$withDefault,
									'1',
									$elm$core$List$head(block.args)),
								block.properties)
						});
				case 'section*':
					return _Utils_update(
						block,
						{
							properties: A3(
								$elm$core$Dict$insert,
								'level',
								A2(
									$elm$core$Maybe$withDefault,
									'1',
									$elm$core$List$head(block.args)),
								block.properties)
						});
				case 'subsection':
					return _Utils_update(
						block,
						{
							heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('section'),
							properties: A3($elm$core$Dict$insert, 'level', '2', block.properties)
						});
				case 'subsubsection':
					return _Utils_update(
						block,
						{
							heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('section'),
							properties: A3($elm$core$Dict$insert, 'level', '3', block.properties)
						});
				case 'item':
					return _Utils_update(
						block,
						{
							body: A2(
								$elm$core$List$cons,
								$jxxcarlson$xmarkdown_compiler$Tools$Utility$replaceLeadingDashSpace(
									A3(
										$elm$core$String$replace,
										'| item',
										'',
										$elm$core$String$trim(block.firstLine))),
								block.body)
						});
				case 'numbered':
					return _Utils_update(
						block,
						{
							body: A2(
								$elm$core$List$cons,
								$jxxcarlson$xmarkdown_compiler$Tools$Utility$replaceLeadingDotSpace(
									A3(
										$elm$core$String$replace,
										'| numbered',
										'',
										$elm$core$String$trim(block.firstLine))),
								block.body)
						});
				default:
					break _v0$6;
			}
		} else {
			break _v0$6;
		}
	}
	return block;
};
var $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$updateMeta = F2(
	function (transformMeta, block) {
		var oldMeta = block.meta;
		var newMeta = transformMeta(oldMeta);
		return _Utils_update(
			block,
			{meta: newMeta});
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$commitBlock = F2(
	function (state, currentLine) {
		var _v0 = state.currentBlock;
		if (_v0.$ === 'Nothing') {
			return _Utils_update(
				state,
				{
					indent: currentLine.indent,
					lines: A2($elm$core$List$drop, 1, state.lines)
				});
		} else {
			var block__ = _v0.a;
			var block_ = function () {
				var id = $elm$core$String$fromInt(state.lineNumber) + ('-' + $elm$core$String$fromInt(state.blocksCommitted));
				return function (b) {
					return _Utils_update(
						b,
						{
							properties: A3($elm$core$Dict$insert, 'outerId', id, b.properties)
						});
				}(
					A2(
						$jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$updateMeta,
						function (m) {
							return _Utils_update(
								m,
								{
									numberOfLines: $elm$core$List$length(block__.body)
								});
						},
						A2(
							$jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$updateMeta,
							function (m) {
								return _Utils_update(
									m,
									{id: id});
							},
							block__)));
			}();
			var block = function () {
				var _v1 = block_.heading;
				switch (_v1.$) {
					case 'Paragraph':
						return $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$finalize(block_);
					case 'Ordinary':
						var _v2 = A2($elm$core$Dict$get, 'section-type', block_.properties);
						if ((_v2.$ === 'Just') && (_v2.a === 'markdown')) {
							return $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$fixMarkdownTitleBlock(
								$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$transformBlock(
									$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$finalize(
										_Utils_update(
											block_,
											{
												body: $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$dropLast(block_.body)
											}))));
						} else {
							return $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$transformBlock(
								$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$finalize(
									_Utils_update(
										block_,
										{
											body: $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$dropLast(block_.body)
										})));
						}
					default:
						return _Utils_eq(
							$elm$core$List$head(block_.body),
							$elm$core$Maybe$Just('```')) ? $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$finalize(
							_Utils_update(
								block_,
								{
									body: A2(
										$elm$core$List$filter,
										function (l) {
											return l !== '```';
										},
										block_.body)
								})) : $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$finalize(
							_Utils_update(
								block_,
								{
									body: $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$dropLast(block_.body)
								}));
				}
			}();
			return _Utils_update(
				state,
				{
					blocks: A2(
						$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$raiseBlockLevelsIfNeeded_,
						block,
						A2($elm$core$List$cons, block, state.blocks)),
					blocksCommitted: state.blocksCommitted + 1,
					count: state.count + 1,
					currentBlock: $elm$core$Maybe$Nothing,
					inBlock: false,
					inVerbatim: $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$isVerbatimLine(currentLine.content),
					lineNumber: state.lineNumber + 1,
					lines: A2($elm$core$List$drop, 1, state.lines)
				});
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$emptyBlockMeta = {error: $elm$core$Maybe$Nothing, id: '', lineNumber: 0, messages: _List_Nil, numberOfLines: 0, position: 0, sourceText: ''};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$bogusBlockFromLine = F2(
	function (message_, _v0) {
		var content = _v0.content;
		var position = _v0.position;
		var lineNumber = _v0.lineNumber;
		var indent = _v0.indent;
		var message = '[b [red ' + (content + (']] [blue [i ' + (message_ + ']]')));
		var meta = _Utils_update(
			$jxxcarlson$xmarkdown_compiler$AST$Language$emptyBlockMeta,
			{lineNumber: lineNumber, numberOfLines: 1, position: position, sourceText: message});
		return {
			args: _List_Nil,
			body: _List_fromArray(
				[message]),
			firstLine: '',
			heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Paragraph,
			indent: indent,
			meta: meta,
			properties: $elm$core$Dict$empty
		};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Line$HEMissingName = {$: 'HEMissingName'};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Line$HENoContent = {$: 'HENoContent'};
var $elmcraft$core_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elmcraft$core_extra$List$Extra$findIndex = $elmcraft$core_extra$List$Extra$findIndexHelp(0);
var $jxxcarlson$xmarkdown_compiler$Tools$KV$cleanArgs = function (strs) {
	var _v0 = A2(
		$elmcraft$core_extra$List$Extra$findIndex,
		function (t) {
			return A2($elm$core$String$contains, ':', t);
		},
		strs);
	if (_v0.$ === 'Nothing') {
		return strs;
	} else {
		var k = _v0.a;
		return A2($elm$core$List$take, k, strs);
	}
};
var $jxxcarlson$xmarkdown_compiler$Tools$KV$KVInKey = {$: 'KVInKey'};
var $jxxcarlson$xmarkdown_compiler$Tools$KV$KVInValue = {$: 'KVInValue'};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $jxxcarlson$xmarkdown_compiler$Tools$KV$nextKVStep = function (state) {
	var _v0 = $elmcraft$core_extra$List$Extra$uncons(state.input);
	if (_v0.$ === 'Nothing') {
		var kvList_ = function () {
			var _v2 = state.currentKey;
			if (_v2.$ === 'Nothing') {
				return state.kvList;
			} else {
				var key = _v2.a;
				return A2(
					$elm$core$List$map,
					function (_v3) {
						var k = _v3.a;
						var v = _v3.b;
						return _Utils_Tuple2(
							k,
							$elm$core$List$reverse(v));
					},
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, state.currentValue),
						state.kvList));
			}
		}();
		return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done(
			$elm$core$Dict$fromList(
				A2(
					$elm$core$List$map,
					function (_v1) {
						var k = _v1.a;
						var v = _v1.b;
						return _Utils_Tuple2(
							k,
							A2($elm$core$String$join, ' ', v));
					},
					kvList_)));
	} else {
		var _v4 = _v0.a;
		var item = _v4.a;
		var rest = _v4.b;
		var _v5 = state.kvStatus;
		if (_v5.$ === 'KVInKey') {
			if (A2($elm$core$String$contains, ':', item)) {
				var _v6 = state.currentKey;
				if (_v6.$ === 'Nothing') {
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						_Utils_update(
							state,
							{
								currentKey: $elm$core$Maybe$Just(
									A2($elm$core$String$dropRight, 1, item)),
								input: rest,
								kvStatus: $jxxcarlson$xmarkdown_compiler$Tools$KV$KVInValue
							}));
				} else {
					var key = _v6.a;
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						{
							currentKey: $elm$core$Maybe$Just(
								A2($elm$core$String$dropRight, 1, item)),
							currentValue: _List_Nil,
							input: rest,
							kvList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(key, state.currentValue),
								state.kvList),
							kvStatus: $jxxcarlson$xmarkdown_compiler$Tools$KV$KVInValue
						});
				}
			} else {
				return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
					_Utils_update(
						state,
						{input: rest}));
			}
		} else {
			if (A2($elm$core$String$contains, ':', item)) {
				var _v7 = state.currentKey;
				if (_v7.$ === 'Nothing') {
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						_Utils_update(
							state,
							{
								currentKey: $elm$core$Maybe$Just(
									A2($elm$core$String$dropRight, 1, item)),
								currentValue: _List_Nil,
								input: rest,
								kvStatus: $jxxcarlson$xmarkdown_compiler$Tools$KV$KVInValue
							}));
				} else {
					var key = _v7.a;
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						_Utils_update(
							state,
							{
								currentKey: $elm$core$Maybe$Just(
									A2($elm$core$String$dropRight, 1, item)),
								currentValue: _List_Nil,
								input: rest,
								kvList: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(key, state.currentValue),
									state.kvList),
								kvStatus: $jxxcarlson$xmarkdown_compiler$Tools$KV$KVInValue
							}));
				}
			} else {
				return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
					_Utils_update(
						state,
						{
							currentValue: A2($elm$core$List$cons, item, state.currentValue),
							input: rest
						}));
			}
		}
	}
};
var $jxxcarlson$xmarkdown_compiler$Tools$KV$prepareKVData = function (data_) {
	var initialState = {currentKey: $elm$core$Maybe$Nothing, currentValue: _List_Nil, input: data_, kvList: _List_Nil, kvStatus: $jxxcarlson$xmarkdown_compiler$Tools$KV$KVInKey};
	return A2($jxxcarlson$xmarkdown_compiler$Tools$Loop$loop, initialState, $jxxcarlson$xmarkdown_compiler$Tools$KV$nextKVStep);
};
var $jxxcarlson$xmarkdown_compiler$Tools$KV$explode = function (txt) {
	return A2(
		$elm$core$List$map,
		$elm$core$String$split(':'),
		txt);
};
var $jxxcarlson$xmarkdown_compiler$Tools$KV$fix = function (strs) {
	if (strs.b) {
		if (strs.b.b) {
			var a = strs.a;
			var _v1 = strs.b;
			var b = _v1.a;
			return A2(
				$elm$core$List$cons,
				a + ':',
				A2($elm$core$List$cons, b, _List_Nil));
		} else {
			var a = strs.a;
			return A2($elm$core$List$cons, a, _List_Nil);
		}
	} else {
		return _List_Nil;
	}
};
var $jxxcarlson$xmarkdown_compiler$Tools$KV$prepareList = function (strs) {
	return A2(
		$elm$core$List$filter,
		function (s) {
			return s !== '';
		},
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				$jxxcarlson$xmarkdown_compiler$Tools$KV$fix,
				$jxxcarlson$xmarkdown_compiler$Tools$KV$explode(strs))));
};
var $jxxcarlson$xmarkdown_compiler$Tools$KV$argsAndProperties = function (words) {
	var args = $jxxcarlson$xmarkdown_compiler$Tools$KV$cleanArgs(words);
	var namedArgs = A2(
		$elm$core$List$drop,
		$elm$core$List$length(args),
		words);
	var properties = $jxxcarlson$xmarkdown_compiler$Tools$KV$prepareKVData(
		$jxxcarlson$xmarkdown_compiler$Tools$KV$prepareList(namedArgs));
	return _Utils_Tuple2(args, properties);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$titleRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^!!\u005Cs'));
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$findTitlePrefix = function (string) {
	return A2(
		$elm$core$Maybe$map,
		$elm$core$String$trim,
		$elm$core$List$head(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.match;
				},
				A2($elm$regex$Regex$find, $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$titleRegex, string))));
};
var $jxxcarlson$xmarkdown_compiler$Tools$Utility$replaceLeadingGreaterThanSign = function (str) {
	var regex = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString('^> '));
	return A3(
		$elm$regex$Regex$replace,
		regex,
		function (_v0) {
			return '';
		},
		str);
};
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$String$words = _String_words;
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$getHeadingData = function (line_) {
	var line = $elm$core$String$trim(line_);
	var _v0 = $jxxcarlson$xmarkdown_compiler$Tools$KV$argsAndProperties(
		$elm$core$String$words(line));
	var args1 = _v0.a;
	var properties = _v0.b;
	var _v1 = $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$findSectionPrefix(line);
	if (_v1.$ === 'Just') {
		var prefix = _v1.a;
		return $elm$core$Result$Ok(
			{
				args: _List_fromArray(
					[
						$elm$core$String$fromInt(
						$elm$core$String$length(prefix))
					]),
				heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('section'),
				properties: A2($elm$core$Dict$singleton, 'section-type', 'markdown')
			});
	} else {
		var _v2 = $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$findTitlePrefix(line);
		if (_v2.$ === 'Just') {
			var prefix = _v2.a;
			return $elm$core$Result$Ok(
				{
					args: _List_fromArray(
						[
							$elm$core$String$fromInt(
							$elm$core$String$length(prefix))
						]),
					heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('title'),
					properties: A2($elm$core$Dict$singleton, 'section-type', 'markdown')
				});
		} else {
			if (!args1.b) {
				return $elm$core$Result$Ok(
					{args: _List_Nil, heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Paragraph, properties: $elm$core$Dict$empty});
			} else {
				var prefix = args1.a;
				var args = args1.b;
				switch (prefix) {
					case '>':
						var reducedLine = $jxxcarlson$xmarkdown_compiler$Tools$Utility$replaceLeadingGreaterThanSign(
							$elm$core$String$trim(line));
						return $elm$core$String$isEmpty(reducedLine) ? $elm$core$Result$Err($jxxcarlson$xmarkdown_compiler$Parser$Block$Line$HENoContent) : $elm$core$Result$Ok(
							{
								args: _List_Nil,
								heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('quotation'),
								properties: A2($elm$core$Dict$singleton, 'firstLine', reducedLine)
							});
					case '|':
						if (!args.b) {
							return $elm$core$Result$Err($jxxcarlson$xmarkdown_compiler$Parser$Block$Line$HEMissingName);
						} else {
							var name = args.a;
							var args2 = args.b;
							return $elm$core$Result$Ok(
								{
									args: args2,
									heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary(name),
									properties: properties
								});
						}
					case '!!':
						var reducedLine = A3($elm$core$String$replace, '!! ', '', line);
						return $elm$core$String$isEmpty(reducedLine) ? $elm$core$Result$Err($jxxcarlson$xmarkdown_compiler$Parser$Block$Line$HENoContent) : $elm$core$Result$Ok(
							{
								args: _List_Nil,
								heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('title'),
								properties: $elm$core$Dict$fromList(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'firstLine',
											A3($elm$core$String$replace, '!! ', '', line)),
											_Utils_Tuple2('section-type', 'markdown')
										]))
							});
					case '-':
						var reducedLine = $jxxcarlson$xmarkdown_compiler$Tools$Utility$replaceLeadingDashSpace(
							$elm$core$String$trim(line));
						return $elm$core$String$isEmpty(reducedLine) ? $elm$core$Result$Err($jxxcarlson$xmarkdown_compiler$Parser$Block$Line$HENoContent) : $elm$core$Result$Ok(
							{
								args: _List_Nil,
								heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('item'),
								properties: A2($elm$core$Dict$singleton, 'firstLine', reducedLine)
							});
					case '.':
						var reducedLine = A3($elm$core$String$replace, '. ', '', line);
						return $elm$core$String$isEmpty(reducedLine) ? $elm$core$Result$Err($jxxcarlson$xmarkdown_compiler$Parser$Block$Line$HENoContent) : $elm$core$Result$Ok(
							{
								args: _List_Nil,
								heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('numbered'),
								properties: A2($elm$core$Dict$singleton, 'firstLine', reducedLine)
							});
					case '$$':
						return $elm$core$Result$Ok(
							{
								args: _List_Nil,
								heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Verbatim('math'),
								properties: $elm$core$Dict$empty
							});
					case '\u005C[':
						return $elm$core$Result$Ok(
							{
								args: _List_Nil,
								heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Verbatim('math'),
								properties: $elm$core$Dict$empty
							});
					case '```':
						return $elm$core$Result$Ok(
							{
								args: _List_Nil,
								heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Verbatim('code'),
								properties: $elm$core$Dict$empty
							});
					default:
						return $elm$core$Result$Ok(
							{args: _List_Nil, heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Paragraph, properties: $elm$core$Dict$empty});
				}
			}
		}
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$blockFromLine = function (line) {
	var content = line.content;
	var prefix = line.prefix;
	var position = line.position;
	var lineNumber = line.lineNumber;
	var indent = line.indent;
	var _v0 = $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$getHeadingData(content);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Ok(
			A2($jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$bogusBlockFromLine, '<= something missing', line));
	} else {
		var properties = _v0.a.properties;
		var args = _v0.a.args;
		var heading = _v0.a.heading;
		var meta = _Utils_update(
			$jxxcarlson$xmarkdown_compiler$AST$Language$emptyBlockMeta,
			{lineNumber: lineNumber, numberOfLines: 1, position: position, sourceText: ''});
		return $elm$core$Result$Ok(
			{
				args: args,
				body: _List_fromArray(
					[
						_Utils_ap(prefix, content)
					]),
				firstLine: content,
				heading: heading,
				indent: indent,
				meta: meta,
				properties: properties
			});
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$createBlock = F2(
	function (state, currentLine) {
		var rNewBlock = $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$blockFromLine(currentLine);
		var blocks = function () {
			var _v1 = state.currentBlock;
			if (_v1.$ === 'Nothing') {
				return state.blocks;
			} else {
				var block = _v1.a;
				return _Utils_eq(
					block.body,
					_List_fromArray(
						[''])) ? state.blocks : A2($elm$core$List$cons, block, state.blocks);
			}
		}();
		if (rNewBlock.$ === 'Err') {
			return _Utils_update(
				state,
				{
					blocks: blocks,
					count: state.count + 1,
					currentBlock: $elm$core$Maybe$Just(
						A2($jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$bogusBlockFromLine, 'error', currentLine)),
					inBlock: true,
					indent: currentLine.indent,
					lineNumber: state.lineNumber + 1,
					lines: A2($elm$core$List$drop, 1, state.lines),
					position: state.position
				});
		} else {
			var newBlock = rNewBlock.a;
			return _Utils_update(
				state,
				{
					blocks: blocks,
					count: state.count + 1,
					currentBlock: $elm$core$Maybe$Just(newBlock),
					inBlock: true,
					indent: currentLine.indent,
					lineNumber: state.lineNumber + 1,
					lines: A2($elm$core$List$drop, 1, state.lines),
					position: state.position
				});
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$inspectHeading = function (_v0) {
	var content = _v0.content;
	var _v1 = $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$getHeadingData(content);
	if (_v1.$ === 'Err') {
		return $elm$core$Maybe$Nothing;
	} else {
		var heading = _v1.a.heading;
		return $elm$core$Maybe$Just(heading);
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Line$isEmpty = function (line) {
	return (!line.indent) && (line.content === '');
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Line$isNonEmptyBlank = function (line) {
	return (line.indent > 0) && (line.content === '');
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$nextStep = function (state) {
	var _v0 = $elm$core$List$head(state.lines);
	if (_v0.$ === 'Nothing') {
		var _v1 = state.currentBlock;
		if (_v1.$ === 'Nothing') {
			return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done(
				$elm$core$List$reverse(state.blocks));
		} else {
			var block_ = _v1.a;
			var block = _Utils_update(
				block_,
				{
					body: $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$dropLast(block_.body)
				});
			var blocks = _Utils_eq(
				block.body,
				_List_fromArray(
					[''])) ? $elm$core$List$reverse(state.blocks) : $elm$core$List$reverse(
				A2($elm$core$List$cons, block, state.blocks));
			return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done(blocks);
		}
	} else {
		var rawLine = _v0.a;
		var newPosition = (state.position + $elm$core$String$length(rawLine)) + 1;
		var currentLine = A3($jxxcarlson$xmarkdown_compiler$Parser$Block$Line$classify, state.position, state.lineNumber + 1, rawLine);
		var _v2 = _Utils_Tuple3(
			state.inBlock,
			$jxxcarlson$xmarkdown_compiler$Parser$Block$Line$isEmpty(currentLine),
			$jxxcarlson$xmarkdown_compiler$Parser$Block$Line$isNonEmptyBlank(currentLine));
		if (!_v2.a) {
			if (_v2.b) {
				return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
					A2(
						$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$advance,
						newPosition,
						_Utils_update(
							state,
							{label: '1, EMPTY'})));
			} else {
				if (_v2.c) {
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						A2(
							$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$advance,
							newPosition,
							_Utils_update(
								state,
								{label: '2, PASS'})));
				} else {
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						A2(
							$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$createBlock,
							_Utils_update(
								state,
								{label: '3, NEW', position: newPosition}),
							currentLine));
				}
			}
		} else {
			if (!_v2.b) {
				var match = _Utils_eq(
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.heading;
						},
						state.currentBlock),
					$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$inspectHeading(currentLine));
				var newCurrentBlock = function () {
					if (match && A2(
						$elm$core$List$member,
						A2(
							$elm$core$Maybe$map,
							function ($) {
								return $.heading;
							},
							state.currentBlock),
						_List_fromArray(
							[
								$elm$core$Maybe$Just(
								$jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('item')),
								$elm$core$Maybe$Just(
								$jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('itemList'))
							]))) {
						var _v3 = state.currentBlock;
						if (_v3.$ === 'Nothing') {
							return $elm$core$Maybe$Nothing;
						} else {
							var block = _v3.a;
							return $elm$core$Maybe$Just(
								_Utils_update(
									block,
									{
										heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('itemList')
									}));
						}
					} else {
						if (match && A2(
							$elm$core$List$member,
							A2(
								$elm$core$Maybe$map,
								function ($) {
									return $.heading;
								},
								state.currentBlock),
							_List_fromArray(
								[
									$elm$core$Maybe$Just(
									$jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('numbered')),
									$elm$core$Maybe$Just(
									$jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('numberedList'))
								]))) {
							var _v4 = state.currentBlock;
							if (_v4.$ === 'Nothing') {
								return $elm$core$Maybe$Nothing;
							} else {
								var block = _v4.a;
								return $elm$core$Maybe$Just(
									_Utils_update(
										block,
										{
											heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('numberedList')
										}));
							}
						} else {
							return state.currentBlock;
						}
					}
				}();
				return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
					A2(
						$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$addCurrentLine2,
						_Utils_update(
							state,
							{currentBlock: newCurrentBlock, label: '4, ADD', position: newPosition}),
						currentLine));
			} else {
				return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
					A2(
						$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$commitBlock,
						_Utils_update(
							state,
							{label: '5, COMMIT', position: newPosition}),
						currentLine));
			}
		}
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$parse = F3(
	function (initialId, outerCount, lines) {
		return A2(
			$jxxcarlson$xmarkdown_compiler$Tools$Loop$loop,
			A3(
				$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$init,
				initialId,
				outerCount,
				_Utils_ap(
					lines,
					_List_fromArray(
						['']))),
			$jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$nextStep);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$initWithTokens = F2(
	function (lineNumber, tokens) {
		return {
			committed: _List_Nil,
			lineNumber: lineNumber,
			messages: _List_Nil,
			numberOfTokens: $elm$core$List$length(tokens),
			stack: _List_Nil,
			step: 0,
			tokenIndex: 0,
			tokens: $elm$core$List$reverse(tokens)
		};
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$Fun = F3(
	function (a, b, c) {
		return {$: 'Fun', a: a, b: b, c: c};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LBracket = {$: 'LBracket'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LParen = {$: 'LParen'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RBracket = {$: 'RBracket'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RParen = {$: 'RParen'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SBold = {$: 'SBold'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SItalic = {$: 'SItalic'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$advanceTokenIndex = function (state) {
	return _Utils_update(
		state,
		{tokenIndex: state.tokenIndex + 1});
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$C = {$: 'C'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$M = {$: 'M'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$ML = {$: 'ML'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$MR = {$: 'MR'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SImage = {$: 'SImage'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$toSymbol = function (token) {
	switch (token.$) {
		case 'LB':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LBracket);
		case 'RB':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RBracket);
		case 'LP':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LParen);
		case 'Bold':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SBold);
		case 'Italic':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SItalic);
		case 'Image':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SImage);
		case 'RP':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RParen);
		case 'MathToken':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$M);
		case 'MathTokenLeft':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$ML);
		case 'MathTokenRight':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$MR);
		case 'CodeToken':
			return $elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$C);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elmcraft$core_extra$Maybe$Extra$cons = F2(
	function (item, list) {
		if (item.$ === 'Just') {
			var v = item.a;
			return A2($elm$core$List$cons, v, list);
		} else {
			return list;
		}
	});
var $elmcraft$core_extra$Maybe$Extra$values = A2($elm$core$List$foldr, $elmcraft$core_extra$Maybe$Extra$cons, _List_Nil);
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$convertTokens = function (tokens) {
	return $elmcraft$core_extra$Maybe$Extra$values(
		A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$toSymbol, tokens));
};
var $elmcraft$core_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$getMeta = function (token) {
	switch (token.$) {
		case 'LB':
			var m = token.a;
			return m;
		case 'RB':
			var m = token.a;
			return m;
		case 'LP':
			var m = token.a;
			return m;
		case 'RP':
			var m = token.a;
			return m;
		case 'Bold':
			var m = token.a;
			return m;
		case 'Italic':
			var m = token.a;
			return m;
		case 'Image':
			var m = token.a;
			return m;
		case 'S':
			var m = token.b;
			return m;
		case 'W':
			var m = token.b;
			return m;
		case 'MathToken':
			var m = token.a;
			return m;
		case 'MathTokenLeft':
			var m = token.a;
			return m;
		case 'MathTokenRight':
			var m = token.a;
			return m;
		case 'CodeToken':
			var m = token.a;
			return m;
		default:
			var m = token.b;
			return m;
	}
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$expressionIdPrefix = 'e-';
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$makeId = F2(
	function (lineNumber, tokenIndex) {
		return $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$expressionIdPrefix + ($elm$core$String$fromInt(lineNumber) + ('.' + $elm$core$String$fromInt(tokenIndex)));
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan = function (state) {
	var metas = A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$getMeta, state.stack);
	return {
		begin: A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$minimum(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.begin;
					},
					metas))),
		end: A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$maximum(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.end;
					},
					metas))),
		id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$makeId, state.lineNumber, state.tokenIndex),
		index: state.tokenIndex
	};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$stringValue = function (token) {
	switch (token.$) {
		case 'LB':
			return '[';
		case 'RB':
			return ']';
		case 'LP':
			return '(';
		case 'RP':
			return ')';
		case 'Bold':
			return '**';
		case 'Italic':
			return '*';
		case 'Image':
			return 'image';
		case 'S':
			var str = token.a;
			return str;
		case 'W':
			var str = token.a;
			return str;
		case 'MathToken':
			return '$';
		case 'MathTokenLeft':
			return '\u005C(';
		case 'MathTokenRight':
			return '\u005C)';
		case 'CodeToken':
			return '`';
		default:
			return 'tokenError';
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString = function (tokens) {
	return A2(
		$elm$core$String$join,
		'',
		A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$stringValue, tokens));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleBracketedText = function (state) {
	var str = function () {
		var _v0 = state.stack;
		if ((((((_v0.b && (_v0.a.$ === 'RP')) && _v0.b.b) && (_v0.b.a.$ === 'S')) && _v0.b.b.b) && (_v0.b.b.a.$ === 'LP')) && (!_v0.b.b.b.b)) {
			var _v1 = _v0.b;
			var _v2 = _v1.a;
			var str_ = _v2.a;
			var _v3 = _v1.b;
			return '[' + (str_ + ']');
		} else {
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString(
				$elm$core$List$reverse(state.stack));
		}
	}();
	var meta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state);
	var expr = A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, meta);
	return _Utils_update(
		state,
		{
			committed: A2($elm$core$List$cons, expr, state.committed),
			stack: _List_Nil
		});
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$VFun = F3(
	function (a, b, c) {
		return {$: 'VFun', a: a, b: b, c: c};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$takeMiddleReversed = function (list) {
	return A2(
		$elm$core$List$drop,
		1,
		$elm$core$List$reverse(
			A2($elm$core$List$drop, 1, list)));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$stringValue2 = function (token) {
	switch (token.$) {
		case 'LB':
			return 'LB';
		case 'RB':
			return 'RB';
		case 'LP':
			return 'LP';
		case 'RP':
			return 'RP';
		case 'Bold':
			return 'BOLD';
		case 'Italic':
			return 'ITALIC';
		case 'Image':
			return 'IMAGE';
		case 'S':
			var str = token.a;
			return str;
		case 'W':
			var str = token.a;
			return str;
		case 'MathToken':
			return 'M';
		case 'MathTokenLeft':
			return 'ML';
		case 'MathTokenRight':
			return 'MR';
		case 'CodeToken':
			return 'C';
		default:
			return 'tokenError';
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString2 = function (tokens) {
	return A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$stringValue2, tokens));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleCodeSymbol = F2(
	function (symbols, state) {
		if (_Utils_eq(
			symbols,
			_List_fromArray(
				[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$C, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$C]))) {
			var content = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$takeMiddleReversed(state.stack));
			var expr = A3(
				$jxxcarlson$xmarkdown_compiler$AST$Language$VFun,
				'code',
				content,
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state));
			return _Utils_update(
				state,
				{
					committed: A2($elm$core$List$cons, expr, state.committed),
					stack: _List_Nil
				});
		} else {
			return state;
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleImage = function (state) {
	var meta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state);
	var data = function () {
		var _v0 = state.stack;
		if ((((((((((((((_v0.b && (_v0.a.$ === 'RP')) && _v0.b.b) && (_v0.b.a.$ === 'S')) && _v0.b.b.b) && (_v0.b.b.a.$ === 'LP')) && _v0.b.b.b.b) && (_v0.b.b.b.a.$ === 'RB')) && _v0.b.b.b.b.b) && (_v0.b.b.b.b.a.$ === 'S')) && _v0.b.b.b.b.b.b) && (_v0.b.b.b.b.b.a.$ === 'LB')) && _v0.b.b.b.b.b.b.b) && (_v0.b.b.b.b.b.b.a.$ === 'Image')) && (!_v0.b.b.b.b.b.b.b.b)) {
			var _v1 = _v0.b;
			var _v2 = _v1.a;
			var url = _v2.a;
			var _v3 = _v1.b;
			var _v4 = _v3.b;
			var _v5 = _v4.b;
			var _v6 = _v5.a;
			var label = _v6.a;
			var _v7 = _v5.b;
			var _v8 = _v7.b;
			return {label: label, url: url};
		} else {
			return {label: 'no image label', url: 'no image url'};
		}
	}();
	var expr = A3(
		$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
		'image',
		_List_fromArray(
			[
				A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, data.url + (' ' + data.label), meta)
			]),
		meta);
	return _Utils_update(
		state,
		{
			committed: A2($elm$core$List$cons, expr, state.committed),
			stack: _List_Nil
		});
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleLink = function (state) {
	var meta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state);
	var expr = function () {
		var _v0 = state.stack;
		_v0$3:
		while (true) {
			if (((((_v0.b && (_v0.a.$ === 'RP')) && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
				if (_v0.b.b.b.b.b.b) {
					if ((((((_v0.b.a.$ === 'S') && (_v0.b.b.a.$ === 'LP')) && (_v0.b.b.b.a.$ === 'RB')) && (_v0.b.b.b.b.a.$ === 'S')) && (_v0.b.b.b.b.b.a.$ === 'LB')) && (!_v0.b.b.b.b.b.b.b)) {
						var _v1 = _v0.b;
						var _v2 = _v1.a;
						var url = _v2.a;
						var _v3 = _v1.b;
						var _v4 = _v3.b;
						var _v5 = _v4.b;
						var _v6 = _v5.a;
						var linkText = _v6.a;
						var _v7 = _v5.b;
						return A3(
							$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
							'link',
							_List_fromArray(
								[
									A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, linkText + (' ' + url), meta)
								]),
							meta);
					} else {
						break _v0$3;
					}
				} else {
					if (_v0.b.b.b.b.a.$ === 'LB') {
						switch (_v0.b.a.$) {
							case 'LP':
								if ((_v0.b.b.a.$ === 'RB') && (_v0.b.b.b.a.$ === 'S')) {
									var _v8 = _v0.b;
									var _v9 = _v8.b;
									var _v10 = _v9.b;
									var _v11 = _v10.a;
									var linkText = _v11.a;
									var _v12 = _v10.b;
									return A3(
										$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
										'red',
										_List_fromArray(
											[
												A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '[' + (linkText + '](no label)'), meta)
											]),
										meta);
								} else {
									break _v0$3;
								}
							case 'S':
								if ((_v0.b.b.a.$ === 'LP') && (_v0.b.b.b.a.$ === 'RB')) {
									var _v13 = _v0.b;
									var _v14 = _v13.a;
									var url = _v14.a;
									var _v15 = _v13.b;
									var _v16 = _v15.b;
									var _v17 = _v16.b;
									return A3(
										$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
										'red',
										_List_fromArray(
											[
												A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '[Link: no label](' + (url + ')'), meta)
											]),
										meta);
								} else {
									break _v0$3;
								}
							default:
								break _v0$3;
						}
					} else {
						break _v0$3;
					}
				}
			} else {
				break _v0$3;
			}
		}
		return A3(
			$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
			'red',
			_List_fromArray(
				[
					A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '[Link: no label or url]', meta)
				]),
			meta);
	}();
	return _Utils_update(
		state,
		{
			committed: A2($elm$core$List$cons, expr, state.committed),
			stack: _List_Nil
		});
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleMathSymbol = F2(
	function (symbols, state) {
		if (_Utils_eq(
			symbols,
			_List_fromArray(
				[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$M, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$M]))) {
			var content = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$takeMiddleReversed(state.stack));
			var expr = A3(
				$jxxcarlson$xmarkdown_compiler$AST$Language$VFun,
				'math',
				content,
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state));
			return _Utils_update(
				state,
				{
					committed: A2($elm$core$List$cons, expr, state.committed),
					stack: _List_Nil
				});
		} else {
			return state;
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleMathTokenLeftSymbol = F2(
	function (symbols, state) {
		if (_Utils_eq(
			symbols,
			_List_fromArray(
				[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$ML, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$MR]))) {
			var content = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$takeMiddleReversed(state.stack));
			var expr = A3(
				$jxxcarlson$xmarkdown_compiler$AST$Language$VFun,
				'math',
				content,
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state));
			return _Utils_update(
				state,
				{
					committed: A2($elm$core$List$cons, expr, state.committed),
					stack: _List_Nil
				});
		} else {
			return state;
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleParens = function (state) {
	var str = function () {
		var _v0 = state.stack;
		if ((((((_v0.b && (_v0.a.$ === 'RP')) && _v0.b.b) && (_v0.b.a.$ === 'S')) && _v0.b.b.b) && (_v0.b.b.a.$ === 'LP')) && (!_v0.b.b.b.b)) {
			var _v1 = _v0.b;
			var _v2 = _v1.a;
			var str_ = _v2.a;
			var _v3 = _v1.b;
			return '(' + (str_ + ')');
		} else {
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString(
				$elm$core$List$reverse(state.stack));
		}
	}();
	var meta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state);
	var expr = A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, meta);
	return _Utils_update(
		state,
		{
			committed: A2($elm$core$List$cons, expr, state.committed),
			stack: _List_Nil
		});
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Match$reducibleF = function (symbols) {
	return _Utils_eq(
		symbols,
		_List_fromArray(
			[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LParen, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RParen])) || _Utils_eq(
		symbols,
		_List_fromArray(
			[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LParen, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RParen]));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Match$reducible = function (symbols) {
	var _v0 = $elm$core$List$head(symbols);
	_v0$7:
	while (true) {
		if (_v0.$ === 'Just') {
			switch (_v0.a.$) {
				case 'M':
					var _v1 = _v0.a;
					return _Utils_eq(
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$drop, 1, symbols))),
						$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$M));
				case 'ML':
					var _v2 = _v0.a;
					return _Utils_eq(
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$drop, 1, symbols))),
						$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$MR));
				case 'C':
					var _v3 = _v0.a;
					return _Utils_eq(
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$drop, 1, symbols))),
						$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$C));
				case 'SBold':
					var _v4 = _v0.a;
					return _Utils_eq(
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$drop, 1, symbols))),
						$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SBold));
				case 'SItalic':
					var _v5 = _v0.a;
					return _Utils_eq(
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$drop, 1, symbols))),
						$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SItalic));
				case 'SImage':
					var _v6 = _v0.a;
					return _Utils_eq(
						symbols,
						_List_fromArray(
							[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SImage, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LParen, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RParen]));
				case 'LBracket':
					var _v7 = _v0.a;
					return _Utils_eq(
						symbols,
						_List_fromArray(
							[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LParen, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RParen])) ? true : false;
				default:
					break _v0$7;
			}
		} else {
			break _v0$7;
		}
	}
	return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Match$reducibleF(symbols);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$isReducible = function (tokens) {
	var preliminary = A2(
		$elm$core$List$filter,
		function (_v0) {
			return true;
		},
		$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$convertTokens(
			$elm$core$List$reverse(tokens)));
	return _Utils_eq(preliminary, _List_Nil) ? false : $jxxcarlson$xmarkdown_compiler$Parser$Inline$Match$reducible(preliminary);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Bold = function (a) {
	return {$: 'Bold', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Italic = function (a) {
	return {$: 'Italic', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$push = F2(
	function (token, state) {
		return _Utils_update(
			state,
			{
				stack: A2($elm$core$List$cons, token, state.stack)
			});
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushOnStack = F2(
	function (token, state) {
		return _Utils_update(
			state,
			{
				stack: A2($elm$core$List$cons, token, state.stack)
			});
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$exprOfToken = function (token) {
	switch (token.$) {
		case 'S':
			var str = token.a;
			var loc = token.b;
			return $elm$core$Maybe$Just(
				A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, loc));
		case 'W':
			var str = token.a;
			var loc = token.b;
			return $elm$core$Maybe$Just(
				A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, loc));
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$getMeta = function (expr) {
	switch (expr.$) {
		case 'Fun':
			var meta = expr.c;
			return meta;
		case 'VFun':
			var meta = expr.c;
			return meta;
		case 'Text':
			var meta = expr.b;
			return meta;
		default:
			var meta = expr.c;
			return meta;
	}
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$ExprList = F3(
	function (a, b, c) {
		return {$: 'ExprList', a: a, b: b, c: c};
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$setMeta = F2(
	function (meta, expr) {
		switch (expr.$) {
			case 'Fun':
				var name = expr.a;
				var args = expr.b;
				return A3($jxxcarlson$xmarkdown_compiler$AST$Language$Fun, name, args, meta);
			case 'VFun':
				var name = expr.a;
				var arg = expr.b;
				return A3($jxxcarlson$xmarkdown_compiler$AST$Language$VFun, name, arg, meta);
			case 'Text':
				var text = expr.a;
				return A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, text, meta);
			default:
				var n = expr.a;
				var eList = expr.b;
				return A3($jxxcarlson$xmarkdown_compiler$AST$Language$ExprList, n, eList, meta);
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$updateMeta = F2(
	function (update, expr) {
		return A2(
			$jxxcarlson$xmarkdown_compiler$AST$Language$setMeta,
			update(
				$jxxcarlson$xmarkdown_compiler$AST$Language$getMeta(expr)),
			expr);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$commit = F2(
	function (token, state) {
		var _v0 = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$exprOfToken(token);
		if (_v0.$ === 'Nothing') {
			return state;
		} else {
			var expr = _v0.a;
			return _Utils_update(
				state,
				{
					committed: A2(
						$elm$core$List$cons,
						A2(
							$jxxcarlson$xmarkdown_compiler$AST$Language$updateMeta,
							function (m) {
								return _Utils_update(
									m,
									{
										id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$makeId, state.lineNumber, 0)
									});
							},
							expr),
						state.committed)
				});
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushOrCommit = F2(
	function (token, state) {
		return $elm$core$List$isEmpty(state.stack) ? A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$commit, token, state) : A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$push, token, state);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushToken = F2(
	function (token, state) {
		switch (token.$) {
			case 'S':
				var str = token.a;
				var meta = token.b;
				if (A2($elm$core$String$right, 1, str) === ' ') {
					return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushOrCommit, token, state);
				} else {
					var _v1 = A2($elmcraft$core_extra$List$Extra$getAt, meta.index + 1, state.tokens);
					_v1$2:
					while (true) {
						if (_v1.$ === 'Just') {
							switch (_v1.a.$) {
								case 'Italic':
									var meta_ = _v1.a.a;
									return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$advanceTokenIndex(
										A2(
											$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$push,
											$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Italic(meta_),
											A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$push, token, state)));
								case 'Bold':
									var meta_ = _v1.a.a;
									return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$advanceTokenIndex(
										A2(
											$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$push,
											$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Bold(meta_),
											A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$push, token, state)));
								default:
									break _v1$2;
							}
						} else {
							break _v1$2;
						}
					}
					return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushOrCommit, token, state);
				}
			case 'W':
				return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushOrCommit, token, state);
			default:
				return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushOnStack, token, state);
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S = F2(
	function (a, b) {
		return {$: 'S', a: a, b: b};
	});
var $elmcraft$core_extra$List$Extra$updateAt = F3(
	function (index, fn, list) {
		if (index < 0) {
			return list;
		} else {
			var tail = A2($elm$core$List$drop, index, list);
			if (tail.b) {
				var x = tail.a;
				var xs = tail.b;
				return _Utils_ap(
					A2($elm$core$List$take, index, list),
					A2(
						$elm$core$List$cons,
						fn(x),
						xs));
			} else {
				return list;
			}
		}
	});
var $elmcraft$core_extra$List$Extra$setAt = F2(
	function (index, value) {
		return A2(
			$elmcraft$core_extra$List$Extra$updateAt,
			index,
			$elm$core$Basics$always(value));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$changeTokenContentAt = F3(
	function (k, newContent, tokens) {
		var _v0 = A2($elmcraft$core_extra$List$Extra$getAt, k, tokens);
		if (_v0.$ === 'Nothing') {
			return tokens;
		} else {
			var tok = _v0.a;
			if (tok.$ === 'S') {
				var meta = tok.b;
				return A3(
					$elmcraft$core_extra$List$Extra$setAt,
					k,
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S, newContent, meta),
					tokens);
			} else {
				return tokens;
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$indexOf = function (token) {
	switch (token.$) {
		case 'LB':
			var meta = token.a;
			return meta.index;
		case 'RB':
			var meta = token.a;
			return meta.index;
		case 'S':
			var meta = token.b;
			return meta.index;
		case 'W':
			var meta = token.b;
			return meta.index;
		case 'MathToken':
			var meta = token.a;
			return meta.index;
		case 'MathTokenLeft':
			var meta = token.a;
			return meta.index;
		case 'MathTokenRight':
			var meta = token.a;
			return meta.index;
		case 'CodeToken':
			var meta = token.a;
			return meta.index;
		case 'TokenError':
			var meta = token.b;
			return meta.index;
		case 'LP':
			var meta = token.a;
			return meta.index;
		case 'RP':
			var meta = token.a;
			return meta.index;
		case 'Image':
			var meta = token.a;
			return meta.index;
		case 'Bold':
			var meta = token.a;
			return meta.index;
		default:
			var meta = token.a;
			return meta.index;
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$CodeToken = function (a) {
	return {$: 'CodeToken', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Image = function (a) {
	return {$: 'Image', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$LB = function (a) {
	return {$: 'LB', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$LP = function (a) {
	return {$: 'LP', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathToken = function (a) {
	return {$: 'MathToken', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathTokenLeft = function (a) {
	return {$: 'MathTokenLeft', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathTokenRight = function (a) {
	return {$: 'MathTokenRight', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$RB = function (a) {
	return {$: 'RB', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$RP = function (a) {
	return {$: 'RP', a: a};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TokenError = F2(
	function (a, b) {
		return {$: 'TokenError', a: a, b: b};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$W = F2(
	function (a, b) {
		return {$: 'W', a: a, b: b};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex = F2(
	function (k, token) {
		switch (token.$) {
			case 'LB':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$LB(
					_Utils_update(
						meta,
						{index: k}));
			case 'RB':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$RB(
					_Utils_update(
						meta,
						{index: k}));
			case 'LP':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$LP(
					_Utils_update(
						meta,
						{index: k}));
			case 'RP':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$RP(
					_Utils_update(
						meta,
						{index: k}));
			case 'Bold':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Bold(
					_Utils_update(
						meta,
						{index: k}));
			case 'Italic':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Italic(
					_Utils_update(
						meta,
						{index: k}));
			case 'Image':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Image(
					_Utils_update(
						meta,
						{index: k}));
			case 'S':
				var str = token.a;
				var meta = token.b;
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S,
					str,
					_Utils_update(
						meta,
						{index: k}));
			case 'W':
				var str = token.a;
				var meta = token.b;
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$W,
					str,
					_Utils_update(
						meta,
						{index: k}));
			case 'MathToken':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathToken(
					_Utils_update(
						meta,
						{index: k}));
			case 'MathTokenLeft':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathTokenLeft(
					_Utils_update(
						meta,
						{index: k}));
			case 'MathTokenRight':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathTokenRight(
					_Utils_update(
						meta,
						{index: k}));
			case 'CodeToken':
				var meta = token.a;
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$CodeToken(
					_Utils_update(
						meta,
						{index: k}));
			default:
				var list = token.a;
				var meta = token.b;
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TokenError,
					list,
					_Utils_update(
						meta,
						{index: k}));
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$changeTokenIndicesFrom = F3(
	function (from, delta, tokens) {
		var f = function (token) {
			var k = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$indexOf(token);
			return (_Utils_cmp(k, from) > -1) ? A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex, k + delta, token) : token;
		};
		return A2(
			$elm$core$List$map,
			function (token) {
				return f(token);
			},
			tokens);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Meta$dummy = {begin: 0, end: 0, id: 'dummyId', index: 0};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyTokenIndex = 0;
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId = {begin: 0, end: 0, id: 'dummy (3)', index: $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyTokenIndex};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage = function (message) {
	return A3(
		$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
		'red',
		_List_fromArray(
			[
				A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, message, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
			]),
		$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessageBold = function (message) {
	return A3(
		$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
		'bold',
		_List_fromArray(
			[
				A3(
				$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
				'red',
				_List_fromArray(
					[
						A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, message, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
					]),
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
			]),
		$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId);
};
var $elmcraft$core_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$insertAt = F3(
	function (k, a, list) {
		var _v0 = A2($elmcraft$core_extra$List$Extra$splitAt, k, list);
		var p = _v0.a;
		var q = _v0.b;
		return _Utils_ap(
			p,
			A2($elm$core$List$cons, a, q));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$prependMessage = F3(
	function (lineNumber, message, messages) {
		return A2(
			$elm$core$List$cons,
			message + (' (line ' + ($elm$core$String$fromInt(lineNumber) + ')')),
			A2($elm$core$List$take, 2, messages));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$recoverFromError = function (state) {
	var _v0 = $elm$core$List$reverse(state.stack);
	_v0$15:
	while (true) {
		if (_v0.b) {
			switch (_v0.a.$) {
				case 'S':
					if (_v0.b.b) {
						switch (_v0.b.a.$) {
							case 'Italic':
								var _v1 = _v0.a;
								var content = _v1.a;
								var meta = _v1.b;
								var _v2 = _v0.b;
								return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
									_Utils_update(
										state,
										{
											committed: A2(
												$elm$core$List$cons,
												A3(
													$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
													'pink',
													_List_fromArray(
														[
															A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, ' *', $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
														]),
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
												state.committed),
											stack: _List_Nil,
											tokenIndex: meta.index,
											tokens: A3(
												$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$changeTokenIndicesFrom,
												meta.index + 1,
												1,
												A3(
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$insertAt,
													meta.index,
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Italic(meta),
													A3(
														$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$changeTokenContentAt,
														meta.index,
														$elm$core$String$trim(content),
														state.tokens)))
										}));
							case 'Bold':
								var _v3 = _v0.a;
								var content = _v3.a;
								var meta = _v3.b;
								var _v4 = _v0.b;
								return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
									_Utils_update(
										state,
										{
											committed: A2(
												$elm$core$List$cons,
												A3(
													$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
													'pink',
													_List_fromArray(
														[
															A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, ' **', $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
														]),
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
												state.committed),
											stack: _List_Nil,
											tokenIndex: meta.index,
											tokens: A3(
												$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$changeTokenIndicesFrom,
												meta.index + 1,
												1,
												A3(
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$insertAt,
													meta.index,
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Bold(meta),
													A3(
														$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$changeTokenContentAt,
														meta.index,
														$elm$core$String$trim(content),
														state.tokens)))
										}));
							default:
								break _v0$15;
						}
					} else {
						break _v0$15;
					}
				case 'LB':
					if ((((_v0.b.b && (_v0.b.a.$ === 'S')) && _v0.b.b.b) && (_v0.b.b.a.$ === 'RB')) && (!_v0.b.b.b.b)) {
						var _v5 = _v0.b;
						var _v6 = _v5.a;
						var txt = _v6.a;
						var meta = _v6.b;
						var _v7 = _v5.b;
						return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
							_Utils_update(
								state,
								{
									committed: A2(
										$elm$core$List$cons,
										A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '[' + (txt + ']'), meta),
										_List_Nil),
									stack: _List_Nil
								}));
					} else {
						break _v0$15;
					}
				case 'Italic':
					if (!_v0.b.b) {
						var meta = _v0.a.a;
						if ($elm$core$List$isEmpty(state.committed)) {
							return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
								_Utils_update(
									state,
									{
										committed: A2(
											$elm$core$List$cons,
											$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('*'),
											_List_Nil),
										stack: _List_Nil
									}));
						} else {
							var expr = function () {
								var _v8 = $elm$core$List$head(state.committed);
								if ((_v8.$ === 'Just') && (_v8.a.$ === 'Text')) {
									var _v9 = _v8.a;
									var str1 = _v9.a;
									var meta1 = _v9.b;
									return A3(
										$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
										'italic',
										_List_fromArray(
											[
												A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str1, meta1)
											]),
										meta1);
								} else {
									return A3(
										$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
										'italic',
										_List_fromArray(
											[
												A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '??', meta)
											]),
										meta);
								}
							}();
							return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
								_Utils_update(
									state,
									{
										committed: A2(
											$elm$core$List$cons,
											expr,
											A2(
												$elm$core$List$cons,
												$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('*?1'),
												A2($elm$core$List$drop, 1, state.committed))),
										messages: _List_fromArray(
											['!!']),
										stack: _List_Nil,
										tokenIndex: meta.index + 1
									}));
						}
					} else {
						if (_v0.b.a.$ === 'S') {
							if (!_v0.b.b.b) {
								var _v10 = _v0.b;
								var _v11 = _v10.a;
								var str = _v11.a;
								var meta2 = _v11.b;
								return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
									_Utils_update(
										state,
										{
											committed: A2(
												$elm$core$List$cons,
												A3(
													$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
													'pink',
													_List_fromArray(
														[
															A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '* ', $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
														]),
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
												A2(
													$elm$core$List$cons,
													A3(
														$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
														'italic',
														_List_fromArray(
															[
																A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
															]),
														$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
													state.committed)),
											stack: _List_Nil,
											tokenIndex: meta2.index + 1
										}));
							} else {
								if (_v0.b.b.a.$ === 'Bold') {
									if (!_v0.b.b.b.b) {
										var _v12 = _v0.b;
										var _v13 = _v12.a;
										var str = _v13.a;
										var _v14 = _v12.b;
										var meta3 = _v14.a.a;
										return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
											_Utils_update(
												state,
												{
													committed: A2(
														$elm$core$List$cons,
														A3(
															$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
															'pink',
															_List_fromArray(
																[
																	A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '* << extra? ', $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																]),
															$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
														A2(
															$elm$core$List$cons,
															A3(
																$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
																'italic',
																_List_fromArray(
																	[
																		A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																	]),
																$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
															state.committed)),
													stack: _List_Nil,
													tokenIndex: meta3.index + 1
												}));
									} else {
										var _v15 = _v0.b;
										var _v16 = _v15.a;
										var str = _v16.a;
										var _v17 = _v15.b;
										var meta3 = _v17.a.a;
										return (A2($elm$core$String$right, 1, str) === ' ') ? $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
											_Utils_update(
												state,
												{
													committed: A2(
														$elm$core$List$cons,
														A3(
															$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
															'pink',
															_List_fromArray(
																[
																	A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '* ', $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																]),
															$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
														A2(
															$elm$core$List$cons,
															A3(
																$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
																'italic',
																_List_fromArray(
																	[
																		A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																	]),
																$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
															state.committed)),
													stack: _List_Nil,
													tokenIndex: meta3.index
												})) : $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
											_Utils_update(
												state,
												{
													committed: A2(
														$elm$core$List$cons,
														A3(
															$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
															'pink',
															_List_fromArray(
																[
																	A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '* << extra? ', $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																]),
															$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
														A2(
															$elm$core$List$cons,
															A3(
																$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
																'italic',
																_List_fromArray(
																	[
																		A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																	]),
																$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
															state.committed)),
													stack: _List_Nil,
													tokenIndex: meta3.index + 1
												}));
									}
								} else {
									var _v18 = _v0.b;
									var _v19 = _v18.a;
									var str = _v19.a;
									var meta2 = _v19.b;
									return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
										_Utils_update(
											state,
											{
												committed: A2(
													$elm$core$List$cons,
													A3(
														$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
														'pink',
														_List_fromArray(
															[
																A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '* ', $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
															]),
														$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
													A2(
														$elm$core$List$cons,
														A3(
															$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
															'italic',
															_List_fromArray(
																[
																	A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																]),
															$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
														state.committed)),
												stack: _List_Nil,
												tokenIndex: meta2.index + 1
											}));
								}
							}
						} else {
							var meta1 = _v0.a.a;
							var rest = _v0.b;
							var _v20 = $elmcraft$core_extra$List$Extra$last(rest);
							if (_v20.$ === 'Just') {
								if (_v20.a.$ === 'Bold') {
									var meta2 = _v20.a.a;
									return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
										_Utils_update(
											state,
											{
												stack: _List_Nil,
												tokenIndex: meta2.index + 2,
												tokens: A3(
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$changeTokenIndicesFrom,
													meta2.index + 2,
													1,
													A3(
														$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$insertAt,
														meta2.index,
														A2(
															$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S,
															'* << extra? ',
															_Utils_update(
																meta2,
																{index: meta2.index + 1})),
														A3(
															$elmcraft$core_extra$List$Extra$setAt,
															meta2.index,
															$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Italic(meta2),
															state.tokens)))
											}));
								} else {
									return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
										_Utils_update(
											state,
											{
												committed: _Utils_ap(
													state.committed,
													A2(
														$elm$core$List$cons,
														$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('*??1a'),
														A2($elm$core$List$drop, 1, state.committed))),
												messages: _List_fromArray(
													['!!']),
												stack: _List_Nil,
												tokenIndex: meta1.index + 1
											}));
								}
							} else {
								return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
									_Utils_update(
										state,
										{
											committed: _Utils_ap(
												state.committed,
												A2(
													$elm$core$List$cons,
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('*??1b'),
													A2($elm$core$List$drop, 1, state.committed))),
											messages: _List_fromArray(
												['!!']),
											stack: _List_Nil,
											tokenIndex: meta1.index + 1
										}));
							}
						}
					}
				case 'Bold':
					if (!_v0.b.b) {
						var meta = _v0.a.a;
						if ($elm$core$List$isEmpty(state.committed)) {
							return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
								_Utils_update(
									state,
									{
										committed: A2(
											$elm$core$List$cons,
											$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('**'),
											_List_Nil),
										stack: _List_Nil
									}));
						} else {
							var expr = function () {
								var _v21 = $elm$core$List$head(state.committed);
								if ((_v21.$ === 'Just') && (_v21.a.$ === 'Text')) {
									var _v22 = _v21.a;
									var str1 = _v22.a;
									var meta1 = _v22.b;
									return A3(
										$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
										'bold',
										_List_fromArray(
											[
												A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str1, meta1)
											]),
										meta1);
								} else {
									return A3(
										$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
										'bold',
										_List_fromArray(
											[
												A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, '??', meta)
											]),
										meta);
								}
							}();
							return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
								_Utils_update(
									state,
									{
										committed: A2(
											$elm$core$List$cons,
											expr,
											A2(
												$elm$core$List$cons,
												$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('**?2'),
												A2($elm$core$List$drop, 1, state.committed))),
										messages: _List_fromArray(
											['!!']),
										stack: _List_Nil,
										tokenIndex: meta.index + 1
									}));
						}
					} else {
						if (_v0.b.a.$ === 'S') {
							if (!_v0.b.b.b) {
								var _v23 = _v0.b;
								var _v24 = _v23.a;
								var str = _v24.a;
								var meta = _v24.b;
								return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
									_Utils_update(
										state,
										{
											committed: A2(
												$elm$core$List$cons,
												$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('** '),
												A2(
													$elm$core$List$cons,
													A3(
														$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
														'bold',
														_List_fromArray(
															[
																A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, meta)
															]),
														meta),
													state.committed)),
											messages: _List_fromArray(
												['!!']),
											stack: _List_Nil,
											tokenIndex: meta.index + 1
										}));
							} else {
								if (_v0.b.b.a.$ === 'Italic') {
									var _v25 = _v0.b;
									var _v26 = _v25.a;
									var str = _v26.a;
									var _v27 = _v25.b;
									var meta3 = _v27.a.a;
									return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
										_Utils_update(
											state,
											{
												committed: A2(
													$elm$core$List$cons,
													$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage('* '),
													A2(
														$elm$core$List$cons,
														A3(
															$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
															'bold',
															_List_fromArray(
																[
																	A2($jxxcarlson$xmarkdown_compiler$AST$Language$Text, str, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId)
																]),
															$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$dummyLocWithId),
														state.committed)),
												messages: _List_fromArray(
													['!!']),
												stack: _List_Nil,
												tokenIndex: meta3.index + 1
											}));
								} else {
									break _v0$15;
								}
							}
						} else {
							break _v0$15;
						}
					}
				case 'MathToken':
					var meta = _v0.a.a;
					var rest = _v0.b;
					var content = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString2(rest);
					var message = (content === '') ? '$?$' : '$ ';
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						_Utils_update(
							state,
							{
								committed: A2(
									$elm$core$List$cons,
									$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage(message),
									state.committed),
								messages: A3($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$prependMessage, state.lineNumber, 'opening dollar sign needs to be matched with a closing one', state.messages),
								numberOfTokens: 0,
								stack: _List_Nil,
								tokenIndex: meta.index + 1
							}));
				case 'MathTokenLeft':
					var meta = _v0.a.a;
					var rest = _v0.b;
					var content = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString2(rest);
					var message = (content === '') ? '\u005C(?\u005C)' : '\u005C( ';
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						_Utils_update(
							state,
							{
								committed: A2(
									$elm$core$List$cons,
									$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessage(message),
									state.committed),
								messages: A3($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$prependMessage, state.lineNumber, 'opening \u005C( needs to be matched with a closing \u005C)', state.messages),
								numberOfTokens: 0,
								stack: _List_Nil,
								tokenIndex: meta.index + 1
							}));
				case 'CodeToken':
					var meta = _v0.a.a;
					var rest = _v0.b;
					var content = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString2(rest);
					var message = (content === '') ? '`?`' : '` ';
					return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
						_Utils_update(
							state,
							{
								committed: A2(
									$elm$core$List$cons,
									$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$errorMessageBold(message),
									state.committed),
								messages: A3($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$prependMessage, state.lineNumber, 'opening backtick needs to be matched with a closing one', state.messages),
								numberOfTokens: 0,
								stack: _List_Nil,
								tokenIndex: meta.index + 1
							}));
				default:
					break _v0$15;
			}
		} else {
			break _v0$15;
		}
	}
	return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done(
		_Utils_update(
			state,
			{
				committed: A2(
					$elm$core$List$cons,
					A3(
						$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
						'red',
						_List_fromArray(
							[
								A2(
								$jxxcarlson$xmarkdown_compiler$AST$Language$Text,
								$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$toString(
									$elm$core$List$reverse(state.stack)),
								$jxxcarlson$xmarkdown_compiler$Parser$Inline$Meta$dummy)
							]),
						$jxxcarlson$xmarkdown_compiler$Parser$Inline$Meta$dummy),
					state.committed),
				stack: _List_Nil
			}));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$takeMiddle = function (list) {
	return A2(
		$elm$core$List$drop,
		1,
		A2(
			$elm$core$List$take,
			$elm$core$List$length(list) - 1,
			list));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleBoldItalic = function (state) {
	var n = $elm$core$List$length(state.stack);
	var meta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state);
	var inner = A2(
		$elm$core$List$drop,
		2,
		A2($elm$core$List$take, n - 2, state.stack));
	var exprs = A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$parseTokens, 0, inner);
	var expr = A3(
		$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
		'bold',
		_List_fromArray(
			[
				A3($jxxcarlson$xmarkdown_compiler$AST$Language$Fun, 'italic', exprs, meta)
			]),
		meta);
	return _Utils_update(
		state,
		{
			committed: A2($elm$core$List$cons, expr, state.committed),
			stack: _List_Nil
		});
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleBoldSymbol = F2(
	function (symbols, state) {
		if (_Utils_eq(
			$elm$core$List$head(symbols),
			$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SBold)) && _Utils_eq(
			$elmcraft$core_extra$List$Extra$last(symbols),
			$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SBold))) {
			var meta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state);
			var innerExprs = A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$parseTokens,
				0,
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$takeMiddle(state.stack));
			var expr = A3($jxxcarlson$xmarkdown_compiler$AST$Language$Fun, 'bold', innerExprs, meta);
			return _Utils_update(
				state,
				{
					committed: A2($elm$core$List$cons, expr, state.committed),
					stack: _List_Nil
				});
		} else {
			return state;
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleItalicSymbol = F2(
	function (symbols, state) {
		if (_Utils_eq(
			$elm$core$List$head(symbols),
			$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SItalic)) && _Utils_eq(
			$elmcraft$core_extra$List$Extra$last(symbols),
			$elm$core$Maybe$Just($jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$SItalic))) {
			var meta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$stackSpan(state);
			var innerExprs = A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$parseTokens,
				0,
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$takeMiddle(state.stack));
			var expr = A3($jxxcarlson$xmarkdown_compiler$AST$Language$Fun, 'italic', innerExprs, meta);
			return _Utils_update(
				state,
				{
					committed: A2($elm$core$List$cons, expr, state.committed),
					stack: _List_Nil
				});
		} else {
			return state;
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$nextStep = function (state) {
	var _v17 = A2($elmcraft$core_extra$List$Extra$getAt, state.tokenIndex, state.tokens);
	if (_v17.$ === 'Nothing') {
		return $elm$core$List$isEmpty(state.stack) ? $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done(state) : $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$recoverFromError(state);
	} else {
		var token = _v17.a;
		return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
			function (st) {
				return _Utils_update(
					st,
					{step: st.step + 1});
			}(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$reduceState(
					A2(
						$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$pushToken,
						token,
						$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$advanceTokenIndex(state)))));
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$parseTokens = F2(
	function (lineNumber, tokens) {
		return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$run(
			A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$initWithTokens, lineNumber, tokens)).committed;
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$reduceState = function (state) {
	var reducible1 = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$isReducible(state.stack);
	if ((_Utils_cmp(state.tokenIndex, state.numberOfTokens) > -1) || reducible1) {
		var symbols = $elm$core$List$reverse(
			$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$convertTokens(state.stack));
		var _v0 = $elm$core$List$head(symbols);
		_v0$8:
		while (true) {
			if (_v0.$ === 'Just') {
				switch (_v0.a.$) {
					case 'M':
						var _v1 = _v0.a;
						return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleMathSymbol, symbols, state);
					case 'ML':
						var _v2 = _v0.a;
						return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleMathTokenLeftSymbol, symbols, state);
					case 'C':
						var _v3 = _v0.a;
						return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleCodeSymbol, symbols, state);
					case 'SBold':
						var _v4 = _v0.a;
						if (((symbols.b && (symbols.a.$ === 'SBold')) && symbols.b.b) && (symbols.b.a.$ === 'SItalic')) {
							var _v6 = symbols.a;
							var _v7 = symbols.b;
							var _v8 = _v7.a;
							var _v9 = $elm$core$List$reverse(symbols);
							if (((_v9.b && (_v9.a.$ === 'SBold')) && _v9.b.b) && (_v9.b.a.$ === 'SItalic')) {
								var _v10 = _v9.a;
								var _v11 = _v9.b;
								var _v12 = _v11.a;
								return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleBoldItalic(state);
							} else {
								return state;
							}
						} else {
							return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleBoldSymbol, symbols, state);
						}
					case 'SItalic':
						var _v13 = _v0.a;
						return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleItalicSymbol, symbols, state);
					case 'LBracket':
						var _v14 = _v0.a;
						return _Utils_eq(
							symbols,
							_List_fromArray(
								[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RBracket, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$LParen, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Symbol$RParen])) ? $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleLink(state) : $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleBracketedText(state);
					case 'SImage':
						var _v15 = _v0.a;
						return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleImage(state);
					case 'LParen':
						var _v16 = _v0.a;
						return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$handleParens(state);
					default:
						break _v0$8;
				}
			} else {
				break _v0$8;
			}
		}
		return state;
	} else {
		return state;
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$run = function (state) {
	return function (state_) {
		return _Utils_update(
			state_,
			{
				committed: $elm$core$List$reverse(state_.committed)
			});
	}(
		A2($jxxcarlson$xmarkdown_compiler$Tools$Loop$loop, state, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$nextStep));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Normal = {$: 'Normal'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$init = function (str) {
	return {
		currentToken: $elm$core$Maybe$Nothing,
		mode: $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Normal,
		scanpointer: 0,
		source: str,
		sourceLength: $elm$core$String$length(str),
		tokenIndex: 0,
		tokens: _List_Nil
	};
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TLB = {$: 'TLB'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$finish = function (state) {
	var _v0 = state.currentToken;
	if (_v0.$ === 'Just') {
		var token = _v0.a;
		return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done(
			A2($elm$core$List$cons, token, state.tokens));
	} else {
		return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Done(state.tokens);
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId = F2(
	function (a, b) {
		return $elm$core$String$fromInt(a) + ('.' + $elm$core$String$fromInt(b));
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingPrefix = {$: 'ExpectingPrefix'};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text = F2(
	function (prefix, _continue) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (start, finish, content) {
								return {
									begin: start,
									content: A3($elm$core$String$slice, start, finish, content),
									end: finish
								};
							})),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$getOffset,
							A2(
								$elm$parser$Parser$Advanced$chompIf,
								function (c) {
									return prefix(c);
								},
								$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingPrefix)),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return _continue(c);
							}))),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v1) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$CodeToken(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('`'));
				},
				function (_v0) {
					return false;
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeChars = _List_fromArray(
	[
		_Utils_chr('`')
	]);
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$languageChars = _List_fromArray(
	[
		_Utils_chr('\\'),
		_Utils_chr('['),
		_Utils_chr(']'),
		_Utils_chr('('),
		_Utils_chr(')'),
		_Utils_chr('`'),
		_Utils_chr('*'),
		_Utils_chr('$')
	]);
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeTextParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (data) {
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S,
					data.content,
					{
						begin: start,
						end: ((start + data.end) - data.begin) - 1,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return !A2(
						$elm$core$List$member,
						c,
						A2(
							$elm$core$List$cons,
							_Utils_chr(' '),
							$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeChars));
				},
				function (c) {
					return !A2(
						$elm$core$List$member,
						c,
						A2(
							$elm$core$List$cons,
							_Utils_chr(' '),
							$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$languageChars));
				}));
	});
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$whiteSpaceParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (data) {
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$W,
					data.content,
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr(' '));
				},
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr(' '));
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeParser_ = F2(
	function (start, index) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeTextParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$whiteSpaceParser, start, index)
				]));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParenTextParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (data) {
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S,
					data.content,
					{
						begin: start,
						end: ((start + data.end) - data.begin) - 1,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr(' '));
				},
				function (c) {
					return (!_Utils_eq(
						c,
						_Utils_chr(' '))) && (!_Utils_eq(
						c,
						_Utils_chr('\\')));
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathTokenRightParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathTokenRight(
					{
						begin: start,
						end: start + 1,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'\u005C)',
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingSymbol('\u005C)'))));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParenParser_ = F2(
	function (start, index) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathTokenRightParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParenTextParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$whiteSpaceParser, start, index)
				]));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v1) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathToken(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('$'));
				},
				function (_v0) {
					return false;
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathChars = _List_fromArray(
	[
		_Utils_chr('$')
	]);
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathTextParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (data) {
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S,
					data.content,
					{
						begin: start,
						end: ((start + data.end) - data.begin) - 1,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return !A2(
						$elm$core$List$member,
						c,
						A2(
							$elm$core$List$cons,
							_Utils_chr(' '),
							$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathChars));
				},
				function (c) {
					return !A2(
						$elm$core$List$member,
						c,
						A2(
							$elm$core$List$cons,
							_Utils_chr(' '),
							$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$languageChars));
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParser_ = F2(
	function (start, index) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathTextParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$whiteSpaceParser, start, index)
				]));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$boldParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Bold(
					{
						begin: start,
						end: start + 1,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'**',
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingSymbol('**'))));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingImageStart = {$: 'ExpectingImageStart'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$imageParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Image(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '![', $jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingImageStart)));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$italicParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v1) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Italic(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('*'));
				},
				function (_v0) {
					return false;
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$leftBracketParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v1) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$LB(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('['));
				},
				function (_v0) {
					return false;
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$leftParenParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v1) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$LP(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('('));
				},
				function (_v0) {
					return false;
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathTokenLeftParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$MathTokenLeft(
					{
						begin: start,
						end: start + 1,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'\u005C(',
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$ExpectingSymbol('\u005C('))));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$rightBracketParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v1) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$RB(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr(']'));
				},
				function (_v0) {
					return false;
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$rightParenParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v1) {
				return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$RP(
					{
						begin: start,
						end: start,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr(')'));
				},
				function (_v0) {
					return false;
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$textParser = F2(
	function (start, index) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (data) {
				return A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S,
					data.content,
					{
						begin: start,
						end: ((start + data.end) - data.begin) - 1,
						id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, index),
						index: index
					});
			},
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$ParserTools$text,
				function (c) {
					return !A2(
						$elm$core$List$member,
						c,
						A2(
							$elm$core$List$cons,
							_Utils_chr(' '),
							$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$languageChars));
				},
				function (c) {
					return !A2(
						$elm$core$List$member,
						c,
						A2(
							$elm$core$List$cons,
							_Utils_chr(' '),
							$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$languageChars));
				}));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$tokenParser_ = F2(
	function (start, index) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$imageParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathTokenLeftParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathTokenRightParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$textParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$leftBracketParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$rightBracketParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$leftParenParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$rightParenParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$boldParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$italicParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeParser, start, index),
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$whiteSpaceParser, start, index)
				]));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$tokenParser = F3(
	function (mode, start, index) {
		switch (mode.$) {
			case 'Normal':
				return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$tokenParser_, start, index);
			case 'InMath':
				return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParser_, start, index);
			case 'InMathParen':
				return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mathParenParser_, start, index);
			default:
				return A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$codeParser_, start, index);
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$get = F3(
	function (state, start, input) {
		var _v0 = A2(
			$elm$parser$Parser$Advanced$run,
			A3($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$tokenParser, state.mode, start, state.tokenIndex),
			input);
		if (_v0.$ === 'Ok') {
			var token = _v0.a;
			return token;
		} else {
			var errorList = _v0.a;
			return A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TokenError,
				errorList,
				{
					begin: start,
					end: start + 1,
					id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, start, state.tokenIndex),
					index: state.tokenIndex
				});
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$handleDefault = F2(
	function (state, token) {
		var _v0 = state.currentToken;
		if (_v0.$ === 'Nothing') {
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex, state.tokenIndex, token),
					state.tokens),
				state.tokenIndex + 1,
				$elm$core$Maybe$Nothing);
		} else {
			var textToken = _v0.a;
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex, state.tokenIndex + 1, token),
					A2($elm$core$List$cons, textToken, state.tokens)),
				state.tokenIndex + 2,
				$elm$core$Maybe$Nothing);
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$handleLB = F2(
	function (state, token) {
		var _v0 = state.currentToken;
		if (_v0.$ === 'Nothing') {
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex, state.tokenIndex, token),
					state.tokens),
				state.tokenIndex + 1,
				$elm$core$Maybe$Nothing);
		} else {
			var textToken = _v0.a;
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex, state.tokenIndex + 1, token),
					A2(
						$elm$core$List$cons,
						A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex, state.tokenIndex, textToken),
						state.tokens)),
				state.tokenIndex + 2,
				$elm$core$Maybe$Nothing);
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$boostMeta = F3(
	function (lineNumber, tokenIndex, _v0) {
		var index = _v0.index;
		var end = _v0.end;
		var begin = _v0.begin;
		return {
			begin: begin,
			end: end,
			id: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$makeId, lineNumber, tokenIndex),
			index: index
		};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mergeToken = F2(
	function (lastToken, currentToken) {
		var lastTokenMeta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$getMeta(lastToken);
		var currentTokenMeta = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$getMeta(currentToken);
		var meta = {begin: lastTokenMeta.begin, end: currentTokenMeta.end, index: -1};
		return A2(
			$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$S,
			_Utils_ap(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$stringValue(lastToken),
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$stringValue(currentToken)),
			A3($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$boostMeta, meta.begin, meta.end, meta));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$updateCurrentToken = F3(
	function (index, token, currentToken) {
		if (currentToken.$ === 'Nothing') {
			return $elm$core$Maybe$Just(
				A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex, index, token));
		} else {
			var token_ = currentToken.a;
			return $elm$core$Maybe$Just(
				A2(
					$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$setIndex,
					index,
					A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$mergeToken, token_, token)));
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$handleMerge = F2(
	function (state, token) {
		return _Utils_Tuple3(
			state.tokens,
			state.tokenIndex,
			A3($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$updateCurrentToken, state.tokenIndex, token, state.currentToken));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TS = {$: 'TS'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TW = {$: 'TW'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TBold = {$: 'TBold'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TCode = {$: 'TCode'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TImage = {$: 'TImage'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TItalic = {$: 'TItalic'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TLP = {$: 'TLP'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TMath = {$: 'TMath'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TMathLeft = {$: 'TMathLeft'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TMathRight = {$: 'TMathRight'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TRB = {$: 'TRB'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TRP = {$: 'TRP'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TTokenError = {$: 'TTokenError'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$type_ = function (token) {
	switch (token.$) {
		case 'LB':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TLB;
		case 'RB':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TRB;
		case 'LP':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TLP;
		case 'RP':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TRP;
		case 'Bold':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TBold;
		case 'Italic':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TItalic;
		case 'Image':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TImage;
		case 'S':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TS;
		case 'W':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TW;
		case 'MathToken':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TMath;
		case 'MathTokenLeft':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TMathLeft;
		case 'MathTokenRight':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TMathRight;
		case 'CodeToken':
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TCode;
		default:
			return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TTokenError;
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$isTextToken = function (token) {
	return A2(
		$elm$core$List$member,
		$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$type_(token),
		_List_fromArray(
			[$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TW, $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TS]));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$length = function (token) {
	switch (token.$) {
		case 'LB':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'RB':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'LP':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'RP':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'Bold':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'Italic':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'Image':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'S':
			var meta = token.b;
			return meta.end - meta.begin;
		case 'MathToken':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'MathTokenLeft':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'MathTokenRight':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'CodeToken':
			var meta = token.a;
			return meta.end - meta.begin;
		case 'W':
			var meta = token.b;
			return meta.end - meta.begin;
		default:
			var meta = token.b;
			return meta.end - meta.begin;
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InCode = {$: 'InCode'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InMath = {$: 'InMath'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InMathParen = {$: 'InMathParen'};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$newMode = F2(
	function (token, currentMode) {
		switch (currentMode.$) {
			case 'Normal':
				switch (token.$) {
					case 'MathToken':
						return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InMath;
					case 'MathTokenLeft':
						return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InMathParen;
					case 'CodeToken':
						return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InCode;
					default:
						return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Normal;
				}
			case 'InMath':
				if (token.$ === 'MathToken') {
					return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Normal;
				} else {
					return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InMath;
				}
			case 'InMathParen':
				if (token.$ === 'MathTokenRight') {
					return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Normal;
				} else {
					return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InMathParen;
				}
			default:
				if (token.$ === 'CodeToken') {
					return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$Normal;
				} else {
					return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$InCode;
				}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$nextStep = function (state) {
	if (_Utils_cmp(state.scanpointer, state.sourceLength) > -1) {
		return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$finish(state);
	} else {
		var token = A3(
			$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$get,
			state,
			state.scanpointer,
			A2($elm$core$String$dropLeft, state.scanpointer, state.source));
		var newScanPointer = (state.scanpointer + $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$length(token)) + 1;
		var _v0 = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$isTextToken(token) ? A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$handleMerge, state, token) : (_Utils_eq(
			$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$type_(token),
			$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$TLB) ? A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$handleLB, state, token) : A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$handleDefault, state, token));
		var tokens = _v0.a;
		var tokenIndex = _v0.b;
		var currentToken_ = _v0.c;
		var currentToken = $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$isTextToken(token) ? currentToken_ : $elm$core$Maybe$Nothing;
		return $jxxcarlson$xmarkdown_compiler$Tools$Loop$Loop(
			_Utils_update(
				state,
				{
					currentToken: currentToken,
					mode: A2($jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$newMode, token, state.mode),
					scanpointer: newScanPointer,
					tokenIndex: tokenIndex,
					tokens: tokens
				}));
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$run = function (source) {
	return A2(
		$jxxcarlson$xmarkdown_compiler$Tools$Loop$loop,
		$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$init(source),
		$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$nextStep);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$parse = F2(
	function (lineNumber, str) {
		return $jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$run(
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$initWithTokens,
				lineNumber,
				$jxxcarlson$xmarkdown_compiler$Parser$Inline$Token$run(str))).committed;
	});
var $toastal$either$Either$Left = function (a) {
	return {$: 'Left', a: a};
};
var $toastal$either$Either$Right = function (a) {
	return {$: 'Right', a: a};
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$boost = F2(
	function (position, meta) {
		return _Utils_update(
			meta,
			{begin: meta.begin + position, end: meta.end + position});
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$boostExpr = F2(
	function (updater, expr) {
		var _v0 = A2(
			$jxxcarlson$xmarkdown_compiler$AST$Language$setMeta,
			updater(
				$jxxcarlson$xmarkdown_compiler$AST$Language$getMeta(expr)),
			expr);
		switch (_v0.$) {
			case 'Fun':
				var name = _v0.a;
				var children = _v0.b;
				var meta = _v0.c;
				return A3(
					$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
					name,
					A2(
						$elm$core$List$map,
						$jxxcarlson$xmarkdown_compiler$AST$Language$boostExpr(updater),
						children),
					meta);
			case 'ExprList':
				var indent = _v0.a;
				var children = _v0.b;
				var meta = _v0.c;
				return A3(
					$jxxcarlson$xmarkdown_compiler$AST$Language$ExprList,
					indent,
					A2(
						$elm$core$List$map,
						$jxxcarlson$xmarkdown_compiler$AST$Language$boostExpr(updater),
						children),
					meta);
			default:
				var other = _v0;
				return other;
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$boostBlock = function (block) {
	var updater = $jxxcarlson$xmarkdown_compiler$AST$Language$boost(block.meta.position);
	var _v0 = block.body;
	if (_v0.$ === 'Left') {
		var str = _v0.a;
		return _Utils_update(
			block,
			{
				body: $toastal$either$Either$Left(str)
			});
	} else {
		var exprs = _v0.a;
		return _Utils_update(
			block,
			{
				body: $toastal$either$Either$Right(
					A2(
						$elm$core$List$map,
						$jxxcarlson$xmarkdown_compiler$AST$Language$boostExpr(updater),
						exprs))
			});
	}
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$emptyExprMeta = {begin: 0, end: 0, id: 'id', index: 0};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$fixItemsAux = F2(
	function (acc, input) {
		var folder = F2(
			function (str, list) {
				if (A2(
					$elm$core$String$left,
					1,
					$elm$core$String$trimLeft(str)) === '-') {
					return A2(
						$elm$core$List$cons,
						A2(
							$elm$core$String$dropLeft,
							2,
							$elm$core$String$trimLeft(str)),
						list);
				} else {
					if (!list.b) {
						return _List_Nil;
					} else {
						var first = list.a;
						var rest = list.b;
						return A2($elm$core$List$cons, first + (' ' + str), rest);
					}
				}
			});
		return A3($elm$core$List$foldl, folder, acc, input);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$fixItems = function (list) {
	return $elm$core$List$reverse(
		A2($jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$fixItemsAux, _List_Nil, list));
};
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$isSeparatorCell = function (c) {
	var t = $elm$core$String$trim(c);
	return (!$elm$core$String$isEmpty(t)) && (A2($elm$core$String$contains, '-', t) && A2(
		$elm$core$String$all,
		function (ch) {
			return _Utils_eq(
				ch,
				_Utils_chr('-')) || _Utils_eq(
				ch,
				_Utils_chr(':'));
		},
		t));
};
var $elm$core$String$endsWith = _String_endsWith;
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$splitRow = function (str) {
	var t = $elm$core$String$trim(str);
	var a = A2($elm$core$String$startsWith, '|', t) ? A2($elm$core$String$dropLeft, 1, t) : t;
	var b = A2($elm$core$String$endsWith, '|', a) ? A2($elm$core$String$dropRight, 1, a) : a;
	return A2(
		$elm$core$List$map,
		$elm$core$String$trim,
		A2($elm$core$String$split, '|', b));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$isSeparatorRow = function (str) {
	var cells = $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$splitRow(str);
	return (!$elm$core$List$isEmpty(cells)) && A2($elm$core$List$all, $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$isSeparatorCell, cells);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$rowsInOrder = function (pb) {
	var forward = A2($elm$core$List$cons, pb.firstLine, pb.body);
	if (forward.b && forward.b.b) {
		var _v1 = forward.b;
		var second = _v1.a;
		return $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$isSeparatorRow(second) ? forward : A2(
			$elm$core$List$cons,
			pb.firstLine,
			$elm$core$List$reverse(pb.body));
	} else {
		return forward;
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$isTable = function (pb) {
	var _v0 = $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$rowsInOrder(pb);
	if (_v0.b && _v0.b.b) {
		var first = _v0.a;
		var _v1 = _v0.b;
		var separator = _v1.a;
		return A2(
			$elm$core$String$startsWith,
			'|',
			$elm$core$String$trimLeft(first)) && $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$isSeparatorRow(separator);
	} else {
		return false;
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$shiftExpressionPositions = F2(
	function (delta, expr) {
		return A2(
			$jxxcarlson$xmarkdown_compiler$AST$Language$boostExpr,
			$jxxcarlson$xmarkdown_compiler$AST$Language$boost(delta),
			expr);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$parseListItems = F3(
	function (marker, parse, sourceText) {
		var folder = F2(
			function (line, _v1) {
				var offset = _v1.a;
				var acc = _v1.b;
				var trimmed = $elm$core$String$trimLeft(line);
				var nextOffset = (offset + $elm$core$String$length(line)) + 1;
				var indent = $elm$core$String$length(line) - $elm$core$String$length(trimmed);
				var _v0 = A2($elm$core$String$startsWith, marker, trimmed) ? _Utils_Tuple2(
					$elm$core$String$length(marker),
					A2(
						$elm$core$String$dropLeft,
						$elm$core$String$length(marker),
						trimmed)) : _Utils_Tuple2(0, trimmed);
				var markerLen = _v0.a;
				var content = _v0.b;
				var delta = (offset + indent) + markerLen;
				var exprs = A2(
					$elm$core$List$map,
					$jxxcarlson$xmarkdown_compiler$AST$Language$shiftExpressionPositions(delta),
					parse(content));
				return _Utils_Tuple2(
					nextOffset,
					A2(
						$elm$core$List$cons,
						A3($jxxcarlson$xmarkdown_compiler$AST$Language$ExprList, indent, exprs, $jxxcarlson$xmarkdown_compiler$AST$Language$emptyExprMeta),
						acc));
			});
		return $elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				folder,
				_Utils_Tuple2(0, _List_Nil),
				A2($elm$core$String$split, '\u000A', sourceText)).b);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$alignmentCode = function (a) {
	switch (a.$) {
		case 'AlignLeft':
			return 'l';
		case 'AlignCenter':
			return 'c';
		default:
			return 'r';
	}
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$encodeAlignments = function (aligns) {
	return A2(
		$elm$core$String$join,
		',',
		A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$alignmentCode, aligns));
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$padRow = F2(
	function (n, cells) {
		return (_Utils_cmp(
			$elm$core$List$length(cells),
			n) > -1) ? A2($elm$core$List$take, n, cells) : _Utils_ap(
			cells,
			A2(
				$elm$core$List$repeat,
				n - $elm$core$List$length(cells),
				''));
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$AlignCenter = {$: 'AlignCenter'};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$AlignLeft = {$: 'AlignLeft'};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$AlignRight = {$: 'AlignRight'};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$alignmentOfCell = function (c) {
	var t = $elm$core$String$trim(c);
	var right = A2($elm$core$String$endsWith, ':', t);
	var left = A2($elm$core$String$startsWith, ':', t);
	return (left && right) ? $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$AlignCenter : (right ? $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$AlignRight : $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$AlignLeft);
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$parseAlignments = function (separatorLine) {
	return A2(
		$elm$core$List$map,
		$jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$alignmentOfCell,
		$jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$splitRow(separatorLine));
};
var $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$toExpressionBlock = F2(
	function (parse, pb) {
		var rows = $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$rowsInOrder(pb);
		var separator = A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(
				A2($elm$core$List$drop, 1, rows)));
		var header = A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(rows));
		var ncols = $elm$core$List$length(
			$jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$splitRow(header));
		var toRowExpr = function (rowSrc) {
			var cells = A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$padRow,
				ncols,
				$jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$splitRow(rowSrc));
			return A3(
				$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
				'row',
				A2(
					$elm$core$List$map,
					function (cellText) {
						return A3(
							$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
							'cell',
							parse(cellText),
							$jxxcarlson$xmarkdown_compiler$AST$Language$emptyExprMeta);
					},
					cells),
				$jxxcarlson$xmarkdown_compiler$AST$Language$emptyExprMeta);
		};
		var dataRows = A2($elm$core$List$drop, 2, rows);
		var tableExpr = A3(
			$jxxcarlson$xmarkdown_compiler$AST$Language$Fun,
			'table',
			A2(
				$elm$core$List$map,
				toRowExpr,
				A2($elm$core$List$cons, header, dataRows)),
			$jxxcarlson$xmarkdown_compiler$AST$Language$emptyExprMeta);
		return {
			args: pb.args,
			body: $toastal$either$Either$Right(
				_List_fromArray(
					[tableExpr])),
			firstLine: pb.firstLine,
			heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary('table'),
			indent: pb.indent,
			meta: pb.meta,
			properties: A3(
				$elm$core$Dict$insert,
				'alignments',
				$jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$encodeAlignments(
					$jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$parseAlignments(separator)),
				A3($elm$core$Dict$insert, 'id', pb.meta.id, pb.properties))
		};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$toExpressionBlock_ = F2(
	function (parse, primitiveBlock) {
		return $jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$isTable(primitiveBlock) ? A2($jxxcarlson$xmarkdown_compiler$Parser$Block$GFMTable$toExpressionBlock, parse, primitiveBlock) : {
			args: primitiveBlock.args,
			body: function () {
				var _v0 = primitiveBlock.heading;
				switch (_v0.$) {
					case 'Paragraph':
						return $toastal$either$Either$Right(
							parse(
								A2($elm$core$String$join, '\u000A', primitiveBlock.body)));
					case 'Ordinary':
						switch (_v0.a) {
							case 'itemList_':
								var items = $jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$fixItems(
									A2($elm$core$List$cons, primitiveBlock.firstLine, primitiveBlock.body));
								var content_ = A2($elm$core$List$map, parse, items);
								return $toastal$either$Either$Right(
									A2(
										$elm$core$List$map,
										function (list) {
											return A3($jxxcarlson$xmarkdown_compiler$AST$Language$ExprList, 0, list, $jxxcarlson$xmarkdown_compiler$AST$Language$emptyExprMeta);
										},
										content_));
							case 'itemList':
								return $toastal$either$Either$Right(
									A3($jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$parseListItems, '- ', parse, primitiveBlock.meta.sourceText));
							case 'numberedList':
								var numberOfLeadingSpaces = function (str) {
									return $elm$core$String$length(str) - $elm$core$String$length(
										$elm$core$String$trimLeft(str));
								};
								var extractIndentAndContent = function (str) {
									return _Utils_Tuple2(
										numberOfLeadingSpaces(str),
										A3(
											$elm$core$String$replace,
											'. ',
											'',
											$elm$core$String$trimLeft(str)));
								};
								var items = A2(
									$elm$core$List$map,
									extractIndentAndContent,
									A2($elm$core$String$split, '\u000A', primitiveBlock.meta.sourceText));
								var content_ = A2(
									$elm$core$List$map,
									function (_v2) {
										var indent = _v2.a;
										var str = _v2.b;
										return _Utils_Tuple2(
											indent,
											parse(str));
									},
									items);
								return $toastal$either$Either$Right(
									A2(
										$elm$core$List$map,
										function (_v1) {
											var indent = _v1.a;
											var exprList = _v1.b;
											return A3($jxxcarlson$xmarkdown_compiler$AST$Language$ExprList, indent, exprList, $jxxcarlson$xmarkdown_compiler$AST$Language$emptyExprMeta);
										},
										content_));
							default:
								return $toastal$either$Either$Right(
									parse(
										A2($elm$core$String$join, '\u000A', primitiveBlock.body)));
						}
					default:
						return $toastal$either$Either$Left(
							A2($elm$core$String$join, '\u000A', primitiveBlock.body));
				}
			}(),
			firstLine: primitiveBlock.firstLine,
			heading: primitiveBlock.heading,
			indent: primitiveBlock.indent,
			meta: primitiveBlock.meta,
			properties: A3($elm$core$Dict$insert, 'id', primitiveBlock.meta.id, primitiveBlock.properties)
		};
	});
var $jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$toExpressionBlock = F2(
	function (exprParser, block) {
		return $jxxcarlson$xmarkdown_compiler$AST$Language$boostBlock(
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$toExpressionBlock_,
				exprParser(block.meta.lineNumber),
				block));
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$parse = F3(
	function (idPrefix, outerCount, lines) {
		return A2(
			$jxxcarlson$xmarkdown_compiler$AST$Forest$map,
			$jxxcarlson$xmarkdown_compiler$Parser$Block$Pipeline$toExpressionBlock($jxxcarlson$xmarkdown_compiler$Parser$Inline$Expression$parse),
			A2(
				$jxxcarlson$xmarkdown_compiler$Parser$Block$ForestTransform$forestFromBlocks,
				function ($) {
					return $.indent;
				},
				A3($jxxcarlson$xmarkdown_compiler$Parser$Block$PrimitiveBlock$parse, idPrefix, outerCount, lines)));
	});
var $elm$core$String$toLower = _String_toLower;
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$searchBlocksContainingText = F3(
	function (params, lines, searchQuery) {
		var searchLower = $elm$core$String$toLower(searchQuery);
		var allBlocks = $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$forestToBlockList(
			A3($jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$parse, $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$idPrefix, params.editCount, lines));
		return A2(
			$elm$core$List$map,
			function (block) {
				return {
					id: 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(params.editCount))),
					lineNumber: block.meta.lineNumber,
					numberOfLines: block.meta.numberOfLines,
					sourceText: block.meta.sourceText
				};
			},
			A2(
				$elm$core$List$filter,
				function (block) {
					return A2(
						$elm$core$String$contains,
						searchLower,
						$elm$core$String$toLower(block.meta.sourceText));
				},
				allBlocks));
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$API$searchBlocksContainingText = $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$searchBlocksContainingText;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Ports$setThemeColors = _Platform_outgoingPort(
	'setThemeColors',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'bg',
					$elm$json$Json$Encode$string($.bg)),
					_Utils_Tuple2(
					'fg',
					$elm$json$Json$Encode$string($.fg)),
					_Utils_Tuple2(
					'indentGuide',
					$elm$json$Json$Encode$string($.indentGuide))
				]));
	});
var $elm$file$File$Download$string = F3(
	function (name, mime, content) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$never,
			A3(_File_download, name, mime, content));
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$Basics$round = _Basics_round;
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $elm$file$File$toString = _File_toString;
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'GotNewWindowDimensions':
				var width = msg.a;
				var height = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{windowHeight: height, windowWidth: width}),
					$elm$core$Platform$Cmd$none);
			case 'InputText':
				var str = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{count: model.count + 1, sourceText: str}),
					$elm$core$Platform$Cmd$none);
			case 'OpenFileRequested':
				return _Utils_Tuple2(
					model,
					A2(
						$elm$file$File$Select$file,
						_List_fromArray(
							['text/markdown', 'text/plain', '.md']),
						$author$project$Main$FileSelected));
			case 'FileSelected':
				var file = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							fileName: $elm$file$File$name(file)
						}),
					A2(
						$elm$core$Task$perform,
						$author$project$Main$FileLoaded,
						$elm$file$File$toString(file)));
			case 'FileLoaded':
				var content = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{count: model.count + 1, initialText: content, sourceText: content, syncHighlight: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'SaveFileRequested':
				return _Utils_Tuple2(
					model,
					A3($elm$file$File$Download$string, model.fileName, 'text/markdown', model.sourceText));
			case 'NewFileRequested':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{count: model.count + 1, fileName: 'untitled.md', initialText: '', sourceText: '', syncHighlight: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 'FileNameChanged':
				var newFileName = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{fileName: newFileName}),
					$elm$core$Platform$Cmd$none);
			case 'ToggleTheme':
				var params = model.compilerParameters;
				var newTheme = function () {
					var _v2 = model.theme;
					if (_v2.$ === 'Light') {
						return $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$Dark;
					} else {
						return $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$Light;
					}
				}();
				var newParams = _Utils_update(
					params,
					{theme: newTheme});
				var currentTheme = function () {
					if (newTheme.$ === 'Light') {
						return $jxxcarlson$xmarkdown_compiler$Render$Theme$lightTheme;
					} else {
						return $jxxcarlson$xmarkdown_compiler$Render$Theme$darkTheme;
					}
				}();
				var themeCmd = $author$project$Ports$setThemeColors(
					{
						bg: $avh4$elm_color$Color$toCssString(currentTheme.background),
						fg: $avh4$elm_color$Color$toCssString(currentTheme.text),
						indentGuide: $avh4$elm_color$Color$toCssString(currentTheme.indentGuide)
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{compilerParameters: newParams, theme: newTheme}),
					themeCmd);
			case 'LRSync':
				var searchText = msg.a;
				var params = _Utils_update(
					$jxxcarlson$xmarkdown_compiler$XMarkdown$API$defaultCompilerParameters,
					{
						docWidth: $author$project$Main$geometry(model).docWidth,
						editCount: model.count,
						interBlockSpacing: 0,
						paddingAboveHeadings: 18,
						selectedId: 'selectedId'
					});
				var matches = A3(
					$jxxcarlson$xmarkdown_compiler$XMarkdown$API$searchBlocksContainingText,
					params,
					$elm$core$String$lines(model.sourceText),
					searchText);
				var newIndex = (_Utils_eq(searchText, model.lrSyncText) && (!$elm$core$List$isEmpty(matches))) ? A2(
					$elm$core$Basics$modBy,
					$elm$core$List$length(matches),
					model.lrSyncIndex + 1) : 0;
				var currentMatch = $elm$core$List$head(
					A2($elm$core$List$drop, newIndex, matches));
				if (currentMatch.$ === 'Just') {
					var match = currentMatch.a;
					var lineNumberStr = $elm$core$String$fromInt(match.lineNumber);
					var css = '[data-line-number=\u0022' + (lineNumberStr + ('\u0022] { background-color: ' + (params.highlightColor + (' !important; }\u000A' + ('[data-line-number=\u0022' + (lineNumberStr + ('\u0022] * { background-color: ' + (params.highlightColor + ' !important; }'))))))));
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{lrSyncIndex: newIndex, lrSyncMatches: matches, lrSyncText: searchText, selectId: lineNumberStr}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($author$project$Main$jumpToTopOfWithLineNumber, match.id, match.lineNumber),
									$author$project$Ports$injectHighlightCSS(css)
								])));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{lrSyncIndex: newIndex, lrSyncMatches: matches, lrSyncText: searchText}),
						$elm$core$Platform$Cmd$none);
				}
			default:
				var msg_ = msg.a;
				var _v4 = A2($jxxcarlson$xmarkdown_compiler$XMarkdown$API$fromMsgToSyncHighlight, model.tick + 1, msg_);
				if (_v4.$ === 'Just') {
					var h = _v4.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								syncHighlight: $elm$core$Maybe$Just(h),
								tick: model.tick + 1
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					if (msg_.$ === 'SelectId') {
						var selId = msg_.a;
						var lineNum = A2(
							$elm$core$Maybe$withDefault,
							0,
							$elm$core$String$toInt(
								A2(
									$elm$core$String$dropLeft,
									2,
									A2(
										$elm$core$Maybe$withDefault,
										'0',
										$elm$core$List$head(
											A2($elm$core$String$split, '.', selId))))));
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{selectId: selId}),
							A2($author$project$Main$jumpToTopOfWithLineNumber, selId, lineNum));
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				}
		}
	});
var $author$project$Main$FileNameChanged = function (a) {
	return {$: 'FileNameChanged', a: a};
};
var $author$project$Main$NewFileRequested = {$: 'NewFileRequested'};
var $author$project$Main$OpenFileRequested = {$: 'OpenFileRequested'};
var $author$project$Main$Render = function (a) {
	return {$: 'Render', a: a};
};
var $author$project$Main$SaveFileRequested = {$: 'SaveFileRequested'};
var $author$project$Main$ToggleTheme = {$: 'ToggleTheme'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $jxxcarlson$xmarkdown_compiler$AST$Acc$SNotInList = {$: 'SNotInList'};
var $jxxcarlson$xmarkdown_compiler$AST$Vector$init = function (k) {
	return {
		content: A2($elm$core$List$repeat, k, 0),
		size: k
	};
};
var $jxxcarlson$xmarkdown_compiler$AST$Settings$numberedBlockNames = _List_fromArray(
	['q', 'axiom', 'box', 'theorem', 'definition', 'lemma', 'construction', 'principle', 'proposition', 'corollary', 'note', 'remark', 'exercise', 'question', 'problem', 'example', 'equation', 'aligned', 'quiver', 'image', 'iframe']);
var $jxxcarlson$xmarkdown_compiler$AST$Acc$init = {
	blockCounter: 0,
	counter: $elm$core$Dict$empty,
	deltaLevel: 0,
	headingIndex: $jxxcarlson$xmarkdown_compiler$AST$Vector$init(4),
	inListState: $jxxcarlson$xmarkdown_compiler$AST$Acc$SNotInList,
	itemVector: $jxxcarlson$xmarkdown_compiler$AST$Vector$init(4),
	keyValueDict: $elm$core$Dict$empty,
	numberedBlockNames: $jxxcarlson$xmarkdown_compiler$AST$Settings$numberedBlockNames,
	numberedItemDict: $elm$core$Dict$empty
};
var $jxxcarlson$xmarkdown_compiler$AST$Acc$mapper = F2(
	function (ast_, _v0) {
		var acc_ = _v0.a;
		var tree_ = _v0.b;
		return _Utils_Tuple2(
			acc_,
			A2($elm$core$List$cons, tree_, ast_));
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$reverse = function (list) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (x, xs) {
				return A2($elm$core$List$cons, x, xs);
			}),
		_List_Nil,
		list);
};
var $jxxcarlson$xmarkdown_compiler$AST$Acc$mapAccumulate = F3(
	function (f, s, tree) {
		var _v0 = A2(
			f,
			s,
			$maca$elm_rose_tree$RoseTree$Tree$value(tree));
		var s_ = _v0.a;
		var value_ = _v0.b;
		var _v1 = A3(
			$elm$core$List$foldl,
			F2(
				function (child, _v2) {
					var accState = _v2.a;
					var accChildren = _v2.b;
					var _v3 = A3($jxxcarlson$xmarkdown_compiler$AST$Acc$mapAccumulate, f, accState, child);
					var newState = _v3.a;
					var newChild = _v3.b;
					return _Utils_Tuple2(
						newState,
						A2($elm$core$List$cons, newChild, accChildren));
				}),
			_Utils_Tuple2(s_, _List_Nil),
			$maca$elm_rose_tree$RoseTree$Tree$children(tree));
		var s__ = _v1.a;
		var children_ = _v1.b;
		return _Utils_Tuple2(
			s__,
			A2(
				$maca$elm_rose_tree$RoseTree$Tree$branch,
				value_,
				$jxxcarlson$xmarkdown_compiler$AST$Acc$reverse(children_)));
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$getCounterAsString = F2(
	function (name, dict) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				$elm$core$String$fromInt,
				A2($elm$core$Dict$get, name, dict)));
	});
var $jxxcarlson$xmarkdown_compiler$AST$Vector$toString = function (v) {
	return A2(
		$elm$core$String$join,
		'.',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			A2(
				$elm$core$List$filter,
				function (x) {
					return x > 0;
				},
				v.content)));
};
var $jxxcarlson$xmarkdown_compiler$AST$Acc$equationNumber = function (acc) {
	return ($jxxcarlson$xmarkdown_compiler$AST$Vector$toString(acc.headingIndex) === '') ? A2($jxxcarlson$xmarkdown_compiler$AST$Acc$getCounterAsString, 'equation', acc.counter) : ($jxxcarlson$xmarkdown_compiler$AST$Vector$toString(acc.headingIndex) + ('.' + A2($jxxcarlson$xmarkdown_compiler$AST$Acc$getCounterAsString, 'equation', acc.counter)));
};
var $jxxcarlson$xmarkdown_compiler$AST$Language$getNameFromHeading = function (heading) {
	switch (heading.$) {
		case 'Paragraph':
			return $elm$core$Maybe$Nothing;
		case 'Ordinary':
			var name = heading.a;
			return $elm$core$Maybe$Just(name);
		default:
			var name = heading.a;
			return $elm$core$Maybe$Just(name);
	}
};
var $jxxcarlson$xmarkdown_compiler$Tools$String$userReplace = F3(
	function (userRegex, replacer, string) {
		var _v0 = $elm$regex$Regex$fromString(userRegex);
		if (_v0.$ === 'Nothing') {
			return string;
		} else {
			var regex = _v0.a;
			return A3($elm$regex$Regex$replace, regex, replacer, string);
		}
	});
var $jxxcarlson$xmarkdown_compiler$Tools$String$alphanumOnly = function (string) {
	return A3(
		$jxxcarlson$xmarkdown_compiler$Tools$String$userReplace,
		'[^a-z0-9 ]+',
		function (_v0) {
			return ' ';
		},
		string);
};
var $jxxcarlson$xmarkdown_compiler$Tools$String$compressWhitespace = function (string) {
	return $elm$core$String$trim(
		A3(
			$jxxcarlson$xmarkdown_compiler$Tools$String$userReplace,
			'\u005Cs\u005Cs+',
			function (_v0) {
				return ' ';
			},
			string));
};
var $jxxcarlson$xmarkdown_compiler$Tools$String$makeSlug = function (str) {
	return A3(
		$elm$core$String$replace,
		' ',
		'-',
		$jxxcarlson$xmarkdown_compiler$Tools$String$compressWhitespace(
			$jxxcarlson$xmarkdown_compiler$Tools$String$alphanumOnly(
				$elm$core$String$toLower(str))));
};
var $jxxcarlson$xmarkdown_compiler$AST$Acc$vectorPrefix = function (headingIndex) {
	var prefix = $jxxcarlson$xmarkdown_compiler$AST$Vector$toString(headingIndex);
	return (prefix === '') ? '' : ($jxxcarlson$xmarkdown_compiler$AST$Vector$toString(headingIndex) + '.');
};
var $jxxcarlson$xmarkdown_compiler$AST$Acc$transformBlock = F2(
	function (acc, block) {
		var _v0 = _Utils_Tuple2(block.heading, block.args);
		_v0$4:
		while (true) {
			switch (_v0.a.$) {
				case 'Ordinary':
					switch (_v0.a.a) {
						case 'section':
							return _Utils_update(
								block,
								{
									properties: A3(
										$elm$core$Dict$insert,
										'tag',
										$jxxcarlson$xmarkdown_compiler$Tools$String$makeSlug(block.firstLine),
										A3(
											$elm$core$Dict$insert,
											'label',
											$jxxcarlson$xmarkdown_compiler$AST$Vector$toString(acc.headingIndex),
											block.properties))
								});
						case 'image':
							return _Utils_update(
								block,
								{
									properties: A3(
										$elm$core$Dict$insert,
										'figure',
										A2($jxxcarlson$xmarkdown_compiler$AST$Acc$getCounterAsString, 'figure', acc.counter),
										block.properties)
								});
						default:
							break _v0$4;
					}
				case 'Verbatim':
					switch (_v0.a.a) {
						case 'equation':
							return _Utils_update(
								block,
								{
									properties: A3(
										$elm$core$Dict$insert,
										'equation-number',
										$jxxcarlson$xmarkdown_compiler$AST$Acc$equationNumber(acc),
										block.properties)
								});
						case 'aligned':
							return _Utils_update(
								block,
								{
									properties: A3(
										$elm$core$Dict$insert,
										'equation-number',
										$jxxcarlson$xmarkdown_compiler$AST$Acc$equationNumber(acc),
										block.properties)
								});
						default:
							break _v0$4;
					}
				default:
					break _v0$4;
			}
		}
		var heading = _v0.a;
		var _v1 = $jxxcarlson$xmarkdown_compiler$AST$Language$getNameFromHeading(heading);
		if (_v1.$ === 'Nothing') {
			return block;
		} else {
			var name = _v1.a;
			return A2(
				$elm$core$List$member,
				name,
				_List_fromArray(
					['section'])) ? _Utils_update(
				block,
				{
					properties: A3(
						$elm$core$Dict$insert,
						'label',
						$jxxcarlson$xmarkdown_compiler$AST$Acc$equationNumber(acc),
						block.properties)
				}) : (A2($elm$core$List$member, name, $jxxcarlson$xmarkdown_compiler$AST$Settings$numberedBlockNames) ? _Utils_update(
				block,
				{
					properties: A3(
						$elm$core$Dict$insert,
						'label',
						_Utils_ap(
							$jxxcarlson$xmarkdown_compiler$AST$Acc$vectorPrefix(acc.headingIndex),
							$elm$core$String$fromInt(acc.blockCounter)),
						block.properties)
				}) : block);
		}
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$SInList = {$: 'SInList'};
var $jxxcarlson$xmarkdown_compiler$AST$Acc$nextInListState = F2(
	function (heading, state) {
		var _v0 = _Utils_Tuple2(state, heading);
		if (_v0.a.$ === 'SNotInList') {
			if ((_v0.b.$ === 'Ordinary') && (_v0.b.a === 'numbered')) {
				var _v1 = _v0.a;
				return $jxxcarlson$xmarkdown_compiler$AST$Acc$SInList;
			} else {
				var _v2 = _v0.a;
				return $jxxcarlson$xmarkdown_compiler$AST$Acc$SNotInList;
			}
		} else {
			if ((_v0.b.$ === 'Ordinary') && (_v0.b.a === 'numbered')) {
				var _v3 = _v0.a;
				return $jxxcarlson$xmarkdown_compiler$AST$Acc$SInList;
			} else {
				var _v4 = _v0.a;
				return $jxxcarlson$xmarkdown_compiler$AST$Acc$SNotInList;
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Vector$get = F2(
	function (k, v) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elmcraft$core_extra$List$Extra$getAt, k, v.content));
	});
var $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$getExpressionBlockName = function (block) {
	var _v0 = block.heading;
	switch (_v0.$) {
		case 'Paragraph':
			return $elm$core$Maybe$Nothing;
		case 'Ordinary':
			var name = _v0.a;
			return $elm$core$Maybe$Just(name);
		default:
			var name = _v0.a;
			return $elm$core$Maybe$Just(name);
	}
};
var $jxxcarlson$xmarkdown_compiler$AST$Vector$resetFrom = F2(
	function (k, v) {
		var suffix = A2($elm$core$List$repeat, v.size - k, 0);
		var prefix = A2($elm$core$List$take, k, v.content);
		return {
			content: _Utils_ap(prefix, suffix),
			size: v.size
		};
	});
var $jxxcarlson$xmarkdown_compiler$AST$Vector$set = F3(
	function (k, a, v) {
		return _Utils_update(
			v,
			{
				content: A3($elmcraft$core_extra$List$Extra$setAt, k, a, v.content)
			});
	});
var $jxxcarlson$xmarkdown_compiler$AST$Vector$increment = F2(
	function (k, v) {
		return ((k < 0) || (_Utils_cmp(k, v.size) > -1)) ? v : A2(
			$jxxcarlson$xmarkdown_compiler$AST$Vector$resetFrom,
			k + 1,
			A3(
				$jxxcarlson$xmarkdown_compiler$AST$Vector$set,
				k,
				A2($jxxcarlson$xmarkdown_compiler$AST$Vector$get, k, v) + 1,
				v));
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$indentationQuantum = 2;
var $jxxcarlson$xmarkdown_compiler$AST$Acc$updateWithOrdinaryBlock = F2(
	function (block, accumulator) {
		var _v0 = $jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$getExpressionBlockName(block);
		if (_v0.$ === 'Just') {
			switch (_v0.a) {
				case 'setcounter':
					var _v1 = block.body;
					if (_v1.$ === 'Left') {
						return accumulator;
					} else {
						var exprs = _v1.a;
						var ctr = function () {
							if ((exprs.b && (exprs.a.$ === 'Text')) && (!exprs.b.b)) {
								var _v3 = exprs.a;
								var val = _v3.a;
								return A2(
									$elm$core$Maybe$withDefault,
									1,
									$elm$core$String$toInt(val));
							} else {
								return 1;
							}
						}();
						var headingIndex = A3(
							$jxxcarlson$xmarkdown_compiler$AST$Vector$set,
							0,
							ctr - 1,
							$jxxcarlson$xmarkdown_compiler$AST$Vector$init(accumulator.headingIndex.size));
						return _Utils_update(
							accumulator,
							{headingIndex: headingIndex});
					}
				case 'numbered':
					var level = (block.indent / $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$indentationQuantum) | 0;
					var itemVector = function () {
						var _v4 = accumulator.inListState;
						if (_v4.$ === 'SInList') {
							return A2($jxxcarlson$xmarkdown_compiler$AST$Vector$increment, level, accumulator.itemVector);
						} else {
							return A2(
								$jxxcarlson$xmarkdown_compiler$AST$Vector$increment,
								0,
								$jxxcarlson$xmarkdown_compiler$AST$Vector$init(4));
						}
					}();
					var index = A2($jxxcarlson$xmarkdown_compiler$AST$Vector$get, level, itemVector);
					var numberedItemDict = A3(
						$elm$core$Dict$insert,
						block.meta.id,
						{index: index, level: level},
						accumulator.numberedItemDict);
					return _Utils_update(
						accumulator,
						{
							inListState: A2($jxxcarlson$xmarkdown_compiler$AST$Acc$nextInListState, block.heading, accumulator.inListState),
							itemVector: itemVector,
							numberedItemDict: numberedItemDict
						});
				case 'item':
					return _Utils_update(
						accumulator,
						{
							inListState: A2($jxxcarlson$xmarkdown_compiler$AST$Acc$nextInListState, block.heading, accumulator.inListState)
						});
				default:
					var name_ = _v0.a;
					if (A2(
						$elm$core$List$member,
						name_,
						_List_fromArray(
							['title', 'contents', 'banner', 'a']))) {
						return accumulator;
					} else {
						if (A2($elm$core$List$member, name_, $jxxcarlson$xmarkdown_compiler$AST$Settings$numberedBlockNames)) {
							var level = (block.indent / $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$indentationQuantum) | 0;
							var itemVector = A2($jxxcarlson$xmarkdown_compiler$AST$Vector$increment, level, accumulator.itemVector);
							var numberedItemDict = A3(
								$elm$core$Dict$insert,
								block.meta.id,
								{
									index: A2($jxxcarlson$xmarkdown_compiler$AST$Vector$get, level, itemVector),
									level: level
								},
								accumulator.numberedItemDict);
							return _Utils_update(
								accumulator,
								{
									blockCounter: accumulator.blockCounter + 1,
									inListState: A2($jxxcarlson$xmarkdown_compiler$AST$Acc$nextInListState, block.heading, accumulator.inListState),
									itemVector: itemVector,
									numberedItemDict: numberedItemDict
								});
						} else {
							return _Utils_update(
								accumulator,
								{
									inListState: A2($jxxcarlson$xmarkdown_compiler$AST$Acc$nextInListState, block.heading, accumulator.inListState)
								});
						}
					}
			}
		} else {
			return accumulator;
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$updateWithOrdinarySectionBlock = F2(
	function (accumulator, level) {
		var delta = function () {
			var _v0 = A2($elm$core$Dict$get, 'has-chapters', accumulator.keyValueDict);
			if (_v0.$ === 'Nothing') {
				return 0;
			} else {
				if (_v0.a === 'yes') {
					return 1;
				} else {
					return 0;
				}
			}
		}();
		var headingIndex = A2(
			$jxxcarlson$xmarkdown_compiler$AST$Vector$increment,
			function (x) {
				return ((x - 1) + delta) + accumulator.deltaLevel;
			}(
				A2(
					$elm$core$Maybe$withDefault,
					1,
					$elm$core$String$toInt(level))),
			accumulator.headingIndex);
		return _Utils_update(
			accumulator,
			{
				blockCounter: 0,
				counter: A3($elm$core$Dict$insert, 'equation', 0, accumulator.counter),
				headingIndex: headingIndex
			});
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$getCounter = F2(
	function (name, dict) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Dict$get, name, dict));
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$incrementCounter = F2(
	function (name, dict) {
		return A3(
			$elm$core$Dict$insert,
			name,
			A2($jxxcarlson$xmarkdown_compiler$AST$Acc$getCounter, name, dict) + 1,
			dict);
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$reduceName = function (str) {
	return A2(
		$elm$core$List$member,
		str,
		_List_fromArray(
			['equation', 'aligned'])) ? 'equation' : ((str === 'code') ? 'listing' : (A2(
		$elm$core$List$member,
		str,
		_List_fromArray(
			['quiver', 'image', 'table', 'svg', 'tikz'])) ? 'figure' : str));
};
var $jxxcarlson$xmarkdown_compiler$AST$Acc$updateWithVerbatimBlock = F2(
	function (block, accumulator) {
		var _v0 = block.body;
		if (_v0.$ === 'Right') {
			return accumulator;
		} else {
			var name = A2(
				$elm$core$Maybe$withDefault,
				'',
				$jxxcarlson$xmarkdown_compiler$AST$BlockUtilities$getExpressionBlockName(block));
			var newCounter = (A2($elm$core$List$member, name, accumulator.numberedBlockNames) && A2($elm$core$List$member, 'numbered', block.args)) ? A2(
				$jxxcarlson$xmarkdown_compiler$AST$Acc$incrementCounter,
				$jxxcarlson$xmarkdown_compiler$AST$Acc$reduceName(name),
				accumulator.counter) : accumulator.counter;
			return _Utils_update(
				accumulator,
				{
					counter: newCounter,
					inListState: A2($jxxcarlson$xmarkdown_compiler$AST$Acc$nextInListState, block.heading, accumulator.inListState)
				});
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$updateAccumulator = F2(
	function (block, accumulator) {
		var properties = block.properties;
		var args = block.args;
		var heading = block.heading;
		switch (heading.$) {
			case 'Ordinary':
				switch (heading.a) {
					case 'set-key':
						if (args.b && args.b.b) {
							var key = args.a;
							var _v2 = args.b;
							var value = _v2.a;
							return _Utils_update(
								accumulator,
								{
									keyValueDict: A3($elm$core$Dict$insert, key, value, accumulator.keyValueDict)
								});
						} else {
							return accumulator;
						}
					case 'list':
						return _Utils_update(
							accumulator,
							{
								itemVector: $jxxcarlson$xmarkdown_compiler$AST$Vector$init(4)
							});
					case 'section':
						var level = A2(
							$elm$core$Maybe$withDefault,
							'1',
							A2($elm$core$Dict$get, 'level', properties));
						return A2($jxxcarlson$xmarkdown_compiler$AST$Acc$updateWithOrdinarySectionBlock, accumulator, level);
					case 'title':
						if (accumulator.deltaLevel === 1) {
							return accumulator;
						} else {
							var headingIndex = function () {
								var _v3 = A2($elm$core$Dict$get, 'first-section', block.properties);
								if (_v3.$ === 'Nothing') {
									return {
										content: _List_fromArray(
											[0, 0, 0, 0]),
										size: 4
									};
								} else {
									var firstSection_ = _v3.a;
									var _v4 = $elm$core$String$toInt(firstSection_);
									if (_v4.$ === 'Just') {
										var n = _v4.a;
										return {
											content: _List_fromArray(
												[
													A2($elm$core$Basics$max, n - 1, 0),
													0,
													0,
													0
												]),
											size: 4
										};
									} else {
										return {
											content: _List_fromArray(
												[0, 0, 0, 0]),
											size: 4
										};
									}
								}
							}();
							return _Utils_update(
								accumulator,
								{headingIndex: headingIndex});
						}
					case 'setcounter':
						var n = A2(
							$elm$core$Maybe$withDefault,
							1,
							A2(
								$elm$core$Maybe$andThen,
								$elm$core$String$toInt,
								$elm$core$List$head(args)));
						return _Utils_update(
							accumulator,
							{
								headingIndex: {
									content: _List_fromArray(
										[n, 0, 0, 0]),
									size: 4
								}
							});
					case 'shiftandsetcounter':
						var n = A2(
							$elm$core$Maybe$withDefault,
							1,
							A2(
								$elm$core$Maybe$andThen,
								$elm$core$String$toInt,
								$elm$core$List$head(args)));
						return _Utils_update(
							accumulator,
							{
								deltaLevel: 1,
								headingIndex: {
									content: _List_fromArray(
										[n, 0, 0, 0]),
									size: 4
								}
							});
					default:
						return A2($jxxcarlson$xmarkdown_compiler$AST$Acc$updateWithOrdinaryBlock, block, accumulator);
				}
			case 'Verbatim':
				if (heading.a === 'settings') {
					return _Utils_update(
						accumulator,
						{
							keyValueDict: A2($elm$core$Dict$union, properties, accumulator.keyValueDict)
						});
				} else {
					var _v5 = block.body;
					if (_v5.$ === 'Left') {
						return A2($jxxcarlson$xmarkdown_compiler$AST$Acc$updateWithVerbatimBlock, block, accumulator);
					} else {
						return accumulator;
					}
				}
			default:
				return _Utils_update(
					accumulator,
					{
						inListState: A2($jxxcarlson$xmarkdown_compiler$AST$Acc$nextInListState, block.heading, accumulator.inListState)
					});
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$transformAccumulateBlock = F2(
	function (acc_, block_) {
		var newAcc = A2($jxxcarlson$xmarkdown_compiler$AST$Acc$updateAccumulator, block_, acc_);
		return _Utils_Tuple2(
			newAcc,
			A2($jxxcarlson$xmarkdown_compiler$AST$Acc$transformBlock, newAcc, block_));
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$transformAccumulateTree = F2(
	function (tree, acc) {
		return A3($jxxcarlson$xmarkdown_compiler$AST$Acc$mapAccumulate, $jxxcarlson$xmarkdown_compiler$AST$Acc$transformAccumulateBlock, acc, tree);
	});
var $jxxcarlson$xmarkdown_compiler$AST$Acc$transformAccumulate = function (forest) {
	return function (_v1) {
		var acc_ = _v1.a;
		var ast_ = _v1.b;
		return _Utils_Tuple2(
			acc_,
			$elm$core$List$reverse(ast_));
	}(
		A3(
			$elm$core$List$foldl,
			F2(
				function (tree, _v0) {
					var acc_ = _v0.a;
					var ast_ = _v0.b;
					return A2(
						$jxxcarlson$xmarkdown_compiler$AST$Acc$mapper,
						ast_,
						A2($jxxcarlson$xmarkdown_compiler$AST$Acc$transformAccumulateTree, tree, acc_));
				}),
			_Utils_Tuple2($jxxcarlson$xmarkdown_compiler$AST$Acc$init, _List_Nil),
			forest));
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$parseToForestWithAccumulator = F2(
	function (params, lines) {
		return $jxxcarlson$xmarkdown_compiler$AST$Acc$transformAccumulate(
			A3($jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$parse, $jxxcarlson$xmarkdown_compiler$XMarkdown$Config$idPrefix, params.editCount, lines));
	});
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$changeName = F3(
	function (oldName, newName, block) {
		return _Utils_eq(
			block.heading,
			$jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary(oldName)) ? _Utils_update(
			block,
			{
				heading: $jxxcarlson$xmarkdown_compiler$AST$Language$Ordinary(newName)
			}) : block;
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$getName = function (block) {
	return $jxxcarlson$xmarkdown_compiler$AST$Language$getNameFromHeading(block.heading);
};
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$matchBlockName = F2(
	function (key, block) {
		return _Utils_eq(
			$elm$core$Maybe$Just(key),
			$jxxcarlson$xmarkdown_compiler$AST$Language$getName(block));
	});
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$filterBlocksOnName = F2(
	function (name, blocks) {
		return A2(
			$elm$core$List$filter,
			$jxxcarlson$xmarkdown_compiler$AST$ASTTools$matchBlockName(name),
			blocks);
	});
var $maca$elm_rose_tree$RoseTree$Tree$foldr = F3(
	function (f, acc, _v0) {
		var a = _v0.a;
		var ns = _v0.b;
		return A3(
			$elm$core$Array$foldr,
			F2(
				function (n, acc_) {
					return A3($maca$elm_rose_tree$RoseTree$Tree$foldr, f, acc_, n);
				}),
			A2(
				f,
				A2($maca$elm_rose_tree$RoseTree$Tree$Tree, a, ns),
				acc),
			ns);
	});
var $jxxcarlson$xmarkdown_compiler$Library$Tree$flatten = A2(
	$maca$elm_rose_tree$RoseTree$Tree$foldr,
	F2(
		function (n, acc) {
			return A2(
				$elm$core$List$cons,
				$maca$elm_rose_tree$RoseTree$Tree$value(n),
				acc);
		}),
	_List_Nil);
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$getBlockByName = F2(
	function (name, ast) {
		return $elm$core$List$head(
			A2(
				$jxxcarlson$xmarkdown_compiler$AST$ASTTools$filterBlocksOnName,
				name,
				$elm$core$List$concat(
					A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Library$Tree$flatten, ast))));
	});
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$banner = function (ast) {
	return A2(
		$elm$core$Maybe$map,
		A2($jxxcarlson$xmarkdown_compiler$AST$ASTTools$changeName, 'banner', 'visibleBanner'),
		A2($jxxcarlson$xmarkdown_compiler$AST$ASTTools$getBlockByName, 'banner', ast));
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $jxxcarlson$xmarkdown_compiler$Render$Theme$DefaultDisplay = {$: 'DefaultDisplay'};
var $jxxcarlson$xmarkdown_compiler$Render$Theme$getThemedColor = F2(
	function (keyAccess, theme) {
		return keyAccess(
			function () {
				if (theme.$ === 'Dark') {
					return $jxxcarlson$xmarkdown_compiler$Render$Theme$darkTheme;
				} else {
					return $jxxcarlson$xmarkdown_compiler$Render$Theme$lightTheme;
				}
			}());
	});
var $jxxcarlson$xmarkdown_compiler$Render$Theme$referenceFontSize = 20;
var $elm$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					return $elm$core$Maybe$Just(
						A3(func, a, b, c));
				}
			}
		}
	});
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $elm$core$String$toFloat = _String_toFloat;
var $jxxcarlson$xmarkdown_compiler$Render$Theme$stringToColor = function (colorStr) {
	return A2($elm$core$String$startsWith, 'rgba(', colorStr) ? function (parts) {
		if ((((parts.b && parts.b.b) && parts.b.b.b) && parts.b.b.b.b) && (!parts.b.b.b.b.b)) {
			var r = parts.a;
			var _v1 = parts.b;
			var g = _v1.a;
			var _v2 = _v1.b;
			var b = _v2.a;
			var _v3 = _v2.b;
			var a = _v3.a;
			return A5(
				$elm$core$Maybe$map4,
				$avh4$elm_color$Color$rgba,
				A2(
					$elm$core$Maybe$map,
					function (x) {
						return x / 255;
					},
					$elm$core$String$toFloat(r)),
				A2(
					$elm$core$Maybe$map,
					function (x) {
						return x / 255;
					},
					$elm$core$String$toFloat(g)),
				A2(
					$elm$core$Maybe$map,
					function (x) {
						return x / 255;
					},
					$elm$core$String$toFloat(b)),
				$elm$core$String$toFloat(a));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}(
		A2(
			$elm$core$List$map,
			$elm$core$String$trim,
			A2(
				$elm$core$String$split,
				',',
				A2(
					$elm$core$String$dropRight,
					1,
					A2($elm$core$String$dropLeft, 5, colorStr))))) : (A2($elm$core$String$startsWith, 'rgb(', colorStr) ? function (parts) {
		if (((parts.b && parts.b.b) && parts.b.b.b) && (!parts.b.b.b.b)) {
			var r = parts.a;
			var _v5 = parts.b;
			var g = _v5.a;
			var _v6 = _v5.b;
			var b = _v6.a;
			return A4(
				$elm$core$Maybe$map3,
				$avh4$elm_color$Color$rgb,
				A2(
					$elm$core$Maybe$map,
					function (x) {
						return x / 255;
					},
					$elm$core$String$toFloat(r)),
				A2(
					$elm$core$Maybe$map,
					function (x) {
						return x / 255;
					},
					$elm$core$String$toFloat(g)),
				A2(
					$elm$core$Maybe$map,
					function (x) {
						return x / 255;
					},
					$elm$core$String$toFloat(b)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}(
		A2(
			$elm$core$List$map,
			$elm$core$String$trim,
			A2(
				$elm$core$String$split,
				',',
				A2(
					$elm$core$String$dropRight,
					1,
					A2($elm$core$String$dropLeft, 4, colorStr))))) : $elm$core$Maybe$Nothing);
};
var $jxxcarlson$xmarkdown_compiler$Render$Theme$makeSettings = function (params) {
	var titleSize = $elm$core$Basics$round((params.fontSize * 32) / $jxxcarlson$xmarkdown_compiler$Render$Theme$referenceFontSize);
	var highlightColor = A2(
		$elm$core$Maybe$withDefault,
		A2(
			$jxxcarlson$xmarkdown_compiler$Render$Theme$getThemedColor,
			function ($) {
				return $.highlight;
			},
			params.theme),
		$jxxcarlson$xmarkdown_compiler$Render$Theme$stringToColor(params.highlightColor));
	return {
		backgroundColor: A2(
			$jxxcarlson$xmarkdown_compiler$Render$Theme$getThemedColor,
			function ($) {
				return $.background;
			},
			params.theme),
		codeBackground: A2(
			$jxxcarlson$xmarkdown_compiler$Render$Theme$getThemedColor,
			function ($) {
				return $.codeBackground;
			},
			params.theme),
		codeColor: A2(
			$jxxcarlson$xmarkdown_compiler$Render$Theme$getThemedColor,
			function ($) {
				return $.codeText;
			},
			params.theme),
		display: $jxxcarlson$xmarkdown_compiler$Render$Theme$DefaultDisplay,
		fontSize: params.fontSize,
		highlight: highlightColor,
		interBlockSpacing: params.interBlockSpacing,
		leftIndentation: 18,
		linkColor: A2(
			$jxxcarlson$xmarkdown_compiler$Render$Theme$getThemedColor,
			function ($) {
				return $.link;
			},
			params.theme),
		listSpacing: 14,
		margins: 24,
		numberToLevel: params.numberToLevel,
		redColor: A3($avh4$elm_color$Color$rgb, 0.7, 0, 0),
		selectedId: params.selectedId,
		selectedSlug: params.selectedSlug,
		showErrorMessages: false,
		showTOC: true,
		textColor: A2(
			$jxxcarlson$xmarkdown_compiler$Render$Theme$getThemedColor,
			function ($) {
				return $.text;
			},
			params.theme),
		theme: params.theme,
		titleSize: titleSize,
		width: $elm$core$Basics$round(params.scale * params.windowWidth)
	};
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $jxxcarlson$xmarkdown_compiler$Render$Math$extractExprText = function (expr) {
	switch (expr.$) {
		case 'Text':
			var str = expr.a;
			return str;
		case 'VFun':
			var content = expr.b;
			return content;
		case 'Fun':
			var exprList = expr.b;
			return $elm$core$String$concat(
				A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Render$Math$extractExprText, exprList));
		default:
			var exprList = expr.b;
			return $elm$core$String$concat(
				A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Render$Math$extractExprText, exprList));
	}
};
var $jxxcarlson$xmarkdown_compiler$Render$Math$stripMathDelimiters = function (content) {
	return $elm$core$String$trim(
		function (s) {
			return A2($elm$core$String$endsWith, '$$', s) ? A2($elm$core$String$dropRight, 2, s) : s;
		}(
			$elm$core$String$trim(
				function (s) {
					return A2($elm$core$String$startsWith, '$$', s) ? A2($elm$core$String$dropLeft, 2, s) : s;
				}(
					$elm$core$String$trim(content)))));
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$manyHelp = F2(
	function (p, vs) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (v) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, v, vs));
						}),
					p),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $jxxcarlson$etex$ETeX$Transform$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$jxxcarlson$etex$ETeX$Transform$manyHelp(p));
};
var $jxxcarlson$etex$ETeX$Transform$AlphaNum = function (a) {
	return {$: 'AlphaNum', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$Arg = function (a) {
	return {$: 'Arg', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$DecoM = function (a) {
	return {$: 'DecoM', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$ExpectingBackslash = {$: 'ExpectingBackslash'};
var $jxxcarlson$etex$ETeX$Transform$ExpectingCaret = {$: 'ExpectingCaret'};
var $jxxcarlson$etex$ETeX$Transform$ExpectingLeftBrace = {$: 'ExpectingLeftBrace'};
var $jxxcarlson$etex$ETeX$Transform$ExpectingLeftParen = {$: 'ExpectingLeftParen'};
var $jxxcarlson$etex$ETeX$Transform$ExpectingRightBrace = {$: 'ExpectingRightBrace'};
var $jxxcarlson$etex$ETeX$Transform$ExpectingRightParen = {$: 'ExpectingRightParen'};
var $jxxcarlson$etex$ETeX$Transform$ExpectingUnderscore = {$: 'ExpectingUnderscore'};
var $jxxcarlson$etex$ETeX$Transform$FCall = F2(
	function (a, b) {
		return {$: 'FCall', a: a, b: b};
	});
var $jxxcarlson$etex$ETeX$Transform$Macro = F2(
	function (a, b) {
		return {$: 'Macro', a: a, b: b};
	});
var $jxxcarlson$etex$ETeX$Transform$PArg = function (a) {
	return {$: 'PArg', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$ParenthExpr = function (a) {
	return {$: 'ParenthExpr', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$Sub = function (a) {
	return {$: 'Sub', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$Super = function (a) {
	return {$: 'Super', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$ExpectingAlpha = {$: 'ExpectingAlpha'};
var $jxxcarlson$etex$ETeX$Transform$alphaNumParser_ = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($elm$core$String$slice),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getOffset,
					A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Char$isAlpha, $jxxcarlson$etex$ETeX$Transform$ExpectingAlpha)),
				$elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isAlphaNum))),
		$elm$parser$Parser$Advanced$getOffset),
	$elm$parser$Parser$Advanced$getSource);
var $jxxcarlson$etex$ETeX$KaTeX$accents = _List_fromArray(
	['hat', 'widehat', 'check', 'widecheck', 'tilde', 'widetilde', 'acute', 'grave', 'dot', 'ddot', 'breve', 'bar', 'vec', 'mathring', 'overline', 'underline', 'overleftarrow', 'overrightarrow', 'overleftrightarrow', 'underleftarrow', 'underrightarrow', 'underleftrightarrow', 'overgroup', 'undergroup', 'overbrace', 'underbrace', 'overparen', 'underparen', 'overrightleftharpoons', 'boxed', 'underlinesegment', 'overlinesegment']);
var $jxxcarlson$etex$ETeX$KaTeX$arrows = _List_fromArray(
	['leftarrow', 'gets', 'rightarrow', 'to', 'leftrightarrow', 'Leftarrow', 'Rightarrow', 'Leftrightarrow', 'iff', 'uparrow', 'downarrow', 'updownarrow', 'Uparrow', 'Downarrow', 'Updownarrow', 'mapsto', 'hookleftarrow', 'hookrightarrow', 'leftharpoonup', 'rightharpoonup', 'leftharpoondown', 'rightharpoondown', 'rightleftharpoons', 'longleftarrow', 'longrightarrow', 'longleftrightarrow', 'Longleftarrow', 'impliedby', 'Longrightarrow', 'implies', 'Longleftrightarrow', 'longmapsto', 'nearrow', 'searrow', 'swarrow', 'nwarrow', 'dashleftarrow', 'dashrightarrow', 'leftleftarrows', 'rightrightarrows', 'leftrightarrows', 'rightleftarrows', 'Lleftarrow', 'Rrightarrow', 'twoheadleftarrow', 'twoheadrightarrow', 'leftarrowtail', 'rightarrowtail', 'looparrowleft', 'looparrowright', 'curvearrowleft', 'curvearrowright', 'circlearrowleft', 'circlearrowright', 'multimap', 'leftrightsquigarrow', 'rightsquigarrow', 'leadsto', 'restriction']);
var $jxxcarlson$etex$ETeX$KaTeX$bigOperators = _List_fromArray(
	['sum', 'prod', 'coprod', 'bigcup', 'bigcap', 'bigvee', 'bigwedge', 'bigoplus', 'bigotimes', 'bigodot', 'biguplus', 'bigsqcup', 'int', 'oint', 'iint', 'iiint', 'iiiint', 'intop', 'smallint']);
var $jxxcarlson$etex$ETeX$KaTeX$binaryOperators = _List_fromArray(
	['pm', 'mp', 'times', 'div', 'cdot', 'ast', 'star', 'circ', 'bullet', 'oplus', 'ominus', 'otimes', 'oslash', 'odot', 'dagger', 'ddagger', 'vee', 'lor', 'wedge', 'land', 'cap', 'cup', 'setminus', 'smallsetminus', 'triangleleft', 'triangleright', 'bigtriangleup', 'bigtriangledown', 'lhd', 'rhd', 'unlhd', 'unrhd', 'amalg', 'uplus', 'sqcap', 'sqcup', 'boxplus', 'boxminus', 'boxtimes', 'boxdot', 'leftthreetimes', 'rightthreetimes', 'curlyvee', 'curlywedge', 'dotplus', 'divideontimes', 'doublebarwedge']);
var $jxxcarlson$etex$ETeX$KaTeX$binomials = _List_fromArray(
	['binom', 'dbinom', 'tbinom', 'brace', 'brack']);
var $jxxcarlson$etex$ETeX$KaTeX$delimiters = _List_fromArray(
	['lbrace', 'rbrace', 'lbrack', 'rbrack', 'langle', 'rangle', 'vert', 'Vert', 'lvert', 'rvert', 'lVert', 'rVert', 'lfloor', 'rfloor', 'lceil', 'rceil', 'lgroup', 'rgroup', 'lmoustache', 'rmoustache', 'ulcorner', 'urcorner', 'llcorner', 'lrcorner']);
var $jxxcarlson$etex$ETeX$KaTeX$fonts = _List_fromArray(
	['mathrm', 'mathit', 'mathbf', 'boldsymbol', 'pmb', 'mathbb', 'Bbb', 'mathcal', 'cal', 'mathscr', 'scr', 'mathfrak', 'frak', 'mathsf', 'sf', 'mathtt', 'tt', 'mathnormal', 'text', 'textbf', 'textit', 'textrm', 'textsf', 'texttt', 'textnormal', 'textup', 'operatorname', 'operatorname*']);
var $jxxcarlson$etex$ETeX$KaTeX$fractions = _List_fromArray(
	['frac', 'dfrac', 'tfrac', 'cfrac', 'genfrac', 'over', 'atop', 'choose']);
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $jxxcarlson$etex$ETeX$KaTeX$greekLetters = _List_fromArray(
	['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'varepsilon', 'zeta', 'eta', 'theta', 'vartheta', 'iota', 'kappa', 'varkappa', 'lambda', 'mu', 'nu', 'xi', 'pi', 'varpi', 'rho', 'varrho', 'sigma', 'varsigma', 'tau', 'upsilon', 'phi', 'varphi', 'chi', 'psi', 'omega', 'Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi', 'Sigma', 'Upsilon', 'Phi', 'Psi', 'Omega', 'digamma', 'varGamma', 'varDelta', 'varTheta', 'varLambda', 'varXi', 'varPi', 'varSigma', 'varUpsilon', 'varPhi', 'varPsi', 'varOmega']);
var $jxxcarlson$etex$ETeX$KaTeX$logicAndSetTheory = _List_fromArray(
	['forall', 'exists', 'nexists', 'complement', 'subset', 'supset', 'mid', 'nmid', 'notsubset', 'nsubset', 'nsupset', 'nsupseteq', 'nsubseteq', 'subsetneq', 'supsetneq', 'subsetneqq', 'supsetneqq', 'varsubsetneq', 'varsupsetneq', 'varsubsetneqq', 'varsupsetneqq', 'isin', 'notin', 'notni', 'niton', 'in', 'ni', 'emptyset', 'varnothing', 'setminus', 'smallsetminus', 'complement', 'neg', 'lnot']);
var $jxxcarlson$etex$ETeX$KaTeX$mathFunctions = _List_fromArray(
	['sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'sinh', 'cosh', 'tanh', 'coth', 'sech', 'csch', 'arcsin', 'arccos', 'arctan', 'arctg', 'arcctg', 'ln', 'log', 'lg', 'exp', 'deg', 'det', 'dim', 'hom', 'ker', 'lim', 'liminf', 'limsup', 'max', 'min', 'sup', 'inf', 'Pr', 'gcd', 'lcm', 'arg', 'mod', 'bmod', 'pmod', 'pod']);
var $jxxcarlson$etex$ETeX$KaTeX$miscSymbols = _List_fromArray(
	['infty', 'aleph', 'beth', 'gimel', 'daleth', 'eth', 'hbar', 'hslash', 'Finv', 'Game', 'ell', 'wp', 'Re', 'Im', 'partial', 'nabla', 'Box', 'square', 'blacksquare', 'blacklozenge', 'lozenge', 'Diamond', 'triangle', 'triangledown', 'angle', 'measuredangle', 'sphericalangle', 'prime', 'backprime', 'degree', 'flat', 'natural', 'sharp', 'surd', 'top', 'bot', 'emptyset', 'varnothing', 'clubsuit', 'diamondsuit', 'heartsuit', 'spadesuit', 'blacktriangleright', 'blacktriangleleft', 'blacktriangledown', 'blacktriangle', 'bigstar', 'maltese', 'checkmark', 'diagup', 'diagdown', 'ddag', 'dag', 'copyright', 'circledR', 'pounds', 'yen', 'euro', 'cent', 'maltese']);
var $jxxcarlson$etex$ETeX$KaTeX$relationSymbols = _List_fromArray(
	['leq', 'le', 'geq', 'ge', 'neq', 'ne', 'sim', 'simeq', 'approx', 'cong', 'equiv', 'prec', 'succ', 'preceq', 'succeq', 'll', 'gg', 'subset', 'supset', 'subseteq', 'supseteq', 'nsubseteq', 'nsupseteq', 'sqsubset', 'sqsupset', 'sqsubseteq', 'sqsupseteq', 'in', 'ni', 'notin', 'notni', 'propto', 'varpropto', 'perp', 'parallel', 'nparallel', 'smile', 'frown', 'doteq', 'fallingdotseq', 'risingdotseq', 'coloneq', 'eqcirc', 'circeq', 'triangleq', 'bumpeq', 'Bumpeq', 'doteqdot', 'thicksim', 'thickapprox', 'approxeq', 'backsim', 'backsimeq', 'preccurlyeq', 'succcurlyeq', 'curlyeqprec', 'curlyeqsucc', 'precsim', 'succsim', 'precapprox', 'succapprox', 'vartriangleleft', 'vartriangleright', 'trianglelefteq', 'trianglerighteq', 'between', 'pitchfork', 'shortmid', 'shortparallel', 'therefore', 'because', 'eqcolon', 'simcolon', 'approxcolon', 'colonapprox', 'colonsim', 'Colon', 'ratio']);
var $jxxcarlson$etex$ETeX$KaTeX$roots = _List_fromArray(
	['sqrt', 'sqrtsign']);
var $jxxcarlson$etex$ETeX$KaTeX$spacing = _List_fromArray(
	['quad', 'qquad', 'space', 'thinspace', 'medspace', 'thickspace', 'enspace', 'negspace', 'negmedspace', 'negthickspace', 'negthinspace', 'mkern', 'mskip', 'hskip', 'hspace', 'hspace*', 'kern', 'phantom', 'hphantom', 'vphantom', 'mathstrut', 'strut', '!', ':', ';', ',']);
var $jxxcarlson$etex$ETeX$KaTeX$textOperators = _List_fromArray(
	['not', 'cancel', 'bcancel', 'xcancel', 'cancelto', 'sout', 'overline', 'underline', 'overset', 'underset', 'stackrel', 'atop', 'substack', 'sideset']);
var $jxxcarlson$etex$ETeX$KaTeX$katexCommands = $elm$core$Set$fromList(
	$elm$core$List$concat(
		_List_fromArray(
			[$jxxcarlson$etex$ETeX$KaTeX$greekLetters, $jxxcarlson$etex$ETeX$KaTeX$binaryOperators, $jxxcarlson$etex$ETeX$KaTeX$relationSymbols, $jxxcarlson$etex$ETeX$KaTeX$arrows, $jxxcarlson$etex$ETeX$KaTeX$delimiters, $jxxcarlson$etex$ETeX$KaTeX$bigOperators, $jxxcarlson$etex$ETeX$KaTeX$mathFunctions, $jxxcarlson$etex$ETeX$KaTeX$accents, $jxxcarlson$etex$ETeX$KaTeX$fonts, $jxxcarlson$etex$ETeX$KaTeX$spacing, $jxxcarlson$etex$ETeX$KaTeX$logicAndSetTheory, $jxxcarlson$etex$ETeX$KaTeX$miscSymbols, $jxxcarlson$etex$ETeX$KaTeX$fractions, $jxxcarlson$etex$ETeX$KaTeX$binomials, $jxxcarlson$etex$ETeX$KaTeX$roots, $jxxcarlson$etex$ETeX$KaTeX$textOperators])));
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $jxxcarlson$etex$ETeX$KaTeX$isKaTeX = function (command) {
	return A2($elm$core$Set$member, command, $jxxcarlson$etex$ETeX$KaTeX$katexCommands);
};
var $jxxcarlson$etex$ETeX$Transform$isUserDefinedMacro = F2(
	function (dict, name) {
		return A2($elm$core$Dict$member, name, dict);
	});
var $jxxcarlson$etex$ETeX$Transform$alphaNumOrMacroParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (name) {
			return ($jxxcarlson$etex$ETeX$KaTeX$isKaTeX(name) || A2($jxxcarlson$etex$ETeX$Transform$isUserDefinedMacro, userMacroDict, name)) ? A2($jxxcarlson$etex$ETeX$Transform$Macro, name, _List_Nil) : $jxxcarlson$etex$ETeX$Transform$AlphaNum(name);
		},
		$jxxcarlson$etex$ETeX$Transform$alphaNumParser_);
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $jxxcarlson$etex$ETeX$Transform$Comma = {$: 'Comma'};
var $jxxcarlson$etex$ETeX$Transform$ExpectingComma = {$: 'ExpectingComma'};
var $jxxcarlson$etex$ETeX$Transform$commaParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$Comma),
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, ',', $jxxcarlson$etex$ETeX$Transform$ExpectingComma)));
var $jxxcarlson$etex$ETeX$Transform$F0 = function (a) {
	return {$: 'F0', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$second = F2(
	function (p, q) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (_v0) {
				return q;
			},
			p);
	});
var $jxxcarlson$etex$ETeX$Transform$f0Parser = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$etex$ETeX$Transform$F0,
	A2(
		$jxxcarlson$etex$ETeX$Transform$second,
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\u005C', $jxxcarlson$etex$ETeX$Transform$ExpectingBackslash)),
		$jxxcarlson$etex$ETeX$Transform$alphaNumParser_));
var $jxxcarlson$etex$ETeX$Transform$ExpectingGreekLetter = {$: 'ExpectingGreekLetter'};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $jxxcarlson$etex$ETeX$Transform$greekSymbolParser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (str) {
		return A2($elm$core$List$member, str, $jxxcarlson$etex$ETeX$KaTeX$greekLetters) ? $elm$parser$Parser$Advanced$succeed(
			$jxxcarlson$etex$ETeX$Transform$AlphaNum('\u005C' + str)) : $elm$parser$Parser$Advanced$problem($jxxcarlson$etex$ETeX$Transform$ExpectingGreekLetter);
	},
	A2(
		$elm$parser$Parser$Advanced$keeper,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$jxxcarlson$etex$ETeX$Transform$alphaNumParser_));
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $jxxcarlson$etex$ETeX$Transform$ExpectingLeftMathBrace = {$: 'ExpectingLeftMathBrace'};
var $jxxcarlson$etex$ETeX$Transform$LeftMathBrace = {$: 'LeftMathBrace'};
var $jxxcarlson$etex$ETeX$Transform$leftBraceParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$LeftMathBrace),
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, '\u005C{', $jxxcarlson$etex$ETeX$Transform$ExpectingLeftMathBrace)));
var $jxxcarlson$etex$ETeX$Transform$many1 = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($elm$core$List$cons),
			p),
		$jxxcarlson$etex$ETeX$Transform$many(p));
};
var $jxxcarlson$etex$ETeX$Transform$ExpectingMathMediumSpace = {$: 'ExpectingMathMediumSpace'};
var $jxxcarlson$etex$ETeX$Transform$MathMediumSpace = {$: 'MathMediumSpace'};
var $jxxcarlson$etex$ETeX$Transform$mathMediumSpaceParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$MathMediumSpace),
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, '\u005C;', $jxxcarlson$etex$ETeX$Transform$ExpectingMathMediumSpace)));
var $jxxcarlson$etex$ETeX$Transform$ExpectingMathSmallSpace = {$: 'ExpectingMathSmallSpace'};
var $jxxcarlson$etex$ETeX$Transform$MathSmallSpace = {$: 'MathSmallSpace'};
var $jxxcarlson$etex$ETeX$Transform$mathSmallSpaceParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$MathSmallSpace),
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, '\u005C,', $jxxcarlson$etex$ETeX$Transform$ExpectingMathSmallSpace)));
var $jxxcarlson$etex$ETeX$Transform$ExpectingMathSpace = {$: 'ExpectingMathSpace'};
var $jxxcarlson$etex$ETeX$Transform$MathSpace = {$: 'MathSpace'};
var $jxxcarlson$etex$ETeX$Transform$mathSpaceParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$MathSpace),
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, '\u005C ', $jxxcarlson$etex$ETeX$Transform$ExpectingMathSpace)));
var $jxxcarlson$etex$ETeX$Transform$ExpectingNotAlpha = {$: 'ExpectingNotAlpha'};
var $jxxcarlson$etex$ETeX$Transform$MathSymbols = function (a) {
	return {$: 'MathSymbols', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$mathSymbolsParser = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$etex$ETeX$Transform$MathSymbols,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($elm$core$String$slice),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$getOffset,
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							function (c) {
								return (!$elm$core$Char$isAlpha(c)) && (!A2(
									$elm$core$List$member,
									c,
									_List_fromArray(
										[
											_Utils_chr('_'),
											_Utils_chr('^'),
											_Utils_chr('#'),
											_Utils_chr('\\'),
											_Utils_chr('{'),
											_Utils_chr('}'),
											_Utils_chr('('),
											_Utils_chr(')'),
											_Utils_chr(','),
											_Utils_chr('"')
										])));
							},
							$jxxcarlson$etex$ETeX$Transform$ExpectingNotAlpha)),
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return (!$elm$core$Char$isAlpha(c)) && (!A2(
								$elm$core$List$member,
								c,
								_List_fromArray(
									[
										_Utils_chr('_'),
										_Utils_chr('^'),
										_Utils_chr('#'),
										_Utils_chr('\\'),
										_Utils_chr('{'),
										_Utils_chr('}'),
										_Utils_chr('('),
										_Utils_chr(')'),
										_Utils_chr(','),
										_Utils_chr('"')
									])));
						}))),
			$elm$parser$Parser$Advanced$getOffset),
		$elm$parser$Parser$Advanced$getSource));
var $jxxcarlson$etex$ETeX$Transform$DecoI = function (a) {
	return {$: 'DecoI', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$ExpectingInt = {$: 'ExpectingInt'};
var $jxxcarlson$etex$ETeX$Transform$InvalidNumber = {$: 'InvalidNumber'};
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_v1.$ === 'Nothing') {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				binary: $elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: $elm$core$Result$Err(invalid),
				hex: $elm$core$Result$Err(invalid),
				_int: $elm$core$Result$Ok($elm$core$Basics$identity),
				invalid: invalid,
				octal: $elm$core$Result$Err(invalid)
			});
	});
var $jxxcarlson$etex$ETeX$Transform$numericDecoParser = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$etex$ETeX$Transform$DecoI,
	A2($elm$parser$Parser$Advanced$int, $jxxcarlson$etex$ETeX$Transform$ExpectingInt, $jxxcarlson$etex$ETeX$Transform$InvalidNumber));
var $jxxcarlson$etex$ETeX$Transform$ExpectingHash = {$: 'ExpectingHash'};
var $jxxcarlson$etex$ETeX$Transform$Param = function (a) {
	return {$: 'Param', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$paramParser = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$etex$ETeX$Transform$Param,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '#', $jxxcarlson$etex$ETeX$Transform$ExpectingHash))),
		A2($elm$parser$Parser$Advanced$int, $jxxcarlson$etex$ETeX$Transform$ExpectingInt, $jxxcarlson$etex$ETeX$Transform$InvalidNumber)));
var $jxxcarlson$etex$ETeX$Transform$ExpectingRightMathBrace = {$: 'ExpectingRightMathBrace'};
var $jxxcarlson$etex$ETeX$Transform$RightMathBrace = {$: 'RightMathBrace'};
var $jxxcarlson$etex$ETeX$Transform$rightBraceParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$RightMathBrace),
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, '\u005C}', $jxxcarlson$etex$ETeX$Transform$ExpectingRightMathBrace)));
var $jxxcarlson$etex$ETeX$Transform$sepByCommaHelp = F2(
	function (itemParser, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (item) {
								return $elm$parser$Parser$Advanced$Loop(
									A2(
										$elm$core$List$cons,
										item,
										A2($elm$core$List$cons, $jxxcarlson$etex$ETeX$Transform$Comma, revItems)));
							}),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ',', $jxxcarlson$etex$ETeX$Transform$ExpectingComma))),
					itemParser),
					$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(
						$elm$core$List$reverse(revItems)))
				]));
	});
var $jxxcarlson$etex$ETeX$Transform$sepByComma = function (itemParser) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				function (firstItem) {
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[firstItem]),
						$jxxcarlson$etex$ETeX$Transform$sepByCommaHelp(itemParser));
				},
				itemParser),
				$elm$parser$Parser$Advanced$succeed(_List_Nil)
			]));
};
var $jxxcarlson$etex$ETeX$Transform$ExpectingQuote = {$: 'ExpectingQuote'};
var $jxxcarlson$etex$ETeX$Transform$Text = function (a) {
	return {$: 'Text', a: a};
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $jxxcarlson$etex$ETeX$Transform$textParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$Text),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\u0022', $jxxcarlson$etex$ETeX$Transform$ExpectingQuote))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr('"'));
				})),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\u0022', $jxxcarlson$etex$ETeX$Transform$ExpectingQuote))));
var $jxxcarlson$etex$ETeX$Transform$ExpectingSpace = {$: 'ExpectingSpace'};
var $jxxcarlson$etex$ETeX$Transform$WS = {$: 'WS'};
var $jxxcarlson$etex$ETeX$Transform$whitespaceParser = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $jxxcarlson$etex$ETeX$Transform$WS;
	},
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, ' ', $jxxcarlson$etex$ETeX$Transform$ExpectingSpace)));
var $jxxcarlson$etex$ETeX$Transform$alphaNumWithLookaheadParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (name) {
			return $elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$map,
						function (args) {
							return ($jxxcarlson$etex$ETeX$KaTeX$isKaTeX(name) || A2($jxxcarlson$etex$ETeX$Transform$isUserDefinedMacro, userMacroDict, name)) ? A2($jxxcarlson$etex$ETeX$Transform$Macro, name, args) : A2($jxxcarlson$etex$ETeX$Transform$FCall, name, args);
						},
						$jxxcarlson$etex$ETeX$Transform$functionArgsParser(userMacroDict)),
						$elm$parser$Parser$Advanced$succeed(
						($jxxcarlson$etex$ETeX$KaTeX$isKaTeX(name) || A2($jxxcarlson$etex$ETeX$Transform$isUserDefinedMacro, userMacroDict, name)) ? A2($jxxcarlson$etex$ETeX$Transform$Macro, name, _List_Nil) : $jxxcarlson$etex$ETeX$Transform$AlphaNum(name))
					]));
		},
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jxxcarlson$etex$ETeX$Transform$alphaNumParser_));
};
var $jxxcarlson$etex$ETeX$Transform$argParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$jxxcarlson$etex$ETeX$Transform$Arg,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '{', $jxxcarlson$etex$ETeX$Transform$ExpectingLeftBrace))),
				$elm$parser$Parser$Advanced$lazy(
					function (_v7) {
						return $jxxcarlson$etex$ETeX$Transform$many(
							$jxxcarlson$etex$ETeX$Transform$mathExprParser(userMacroDict));
					})),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '}', $jxxcarlson$etex$ETeX$Transform$ExpectingRightBrace))));
};
var $jxxcarlson$etex$ETeX$Transform$decoParser = function (userMacroDict) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$jxxcarlson$etex$ETeX$Transform$numericDecoParser,
				A2(
				$elm$parser$Parser$Advanced$map,
				$jxxcarlson$etex$ETeX$Transform$DecoM,
				$elm$parser$Parser$Advanced$lazy(
					function (_v6) {
						return $jxxcarlson$etex$ETeX$Transform$mathExprParser(userMacroDict);
					}))
			]));
};
var $jxxcarlson$etex$ETeX$Transform$functionArgListParser = function (userMacroDict) {
	var argContentParser = $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$jxxcarlson$etex$ETeX$Transform$textParser,
				$jxxcarlson$etex$ETeX$Transform$mathMediumSpaceParser,
				$jxxcarlson$etex$ETeX$Transform$mathSmallSpaceParser,
				$jxxcarlson$etex$ETeX$Transform$mathSpaceParser,
				$jxxcarlson$etex$ETeX$Transform$leftBraceParser,
				$jxxcarlson$etex$ETeX$Transform$rightBraceParser,
				$jxxcarlson$etex$ETeX$Transform$macroParser(userMacroDict),
				$jxxcarlson$etex$ETeX$Transform$alphaNumOrMacroParser(userMacroDict),
				$jxxcarlson$etex$ETeX$Transform$mathSymbolsParser,
				$elm$parser$Parser$Advanced$lazy(
				function (_v4) {
					return $jxxcarlson$etex$ETeX$Transform$argParser(userMacroDict);
				}),
				$elm$parser$Parser$Advanced$lazy(
				function (_v5) {
					return $jxxcarlson$etex$ETeX$Transform$standaloneParenthExprParser(userMacroDict);
				}),
				$jxxcarlson$etex$ETeX$Transform$paramParser,
				$jxxcarlson$etex$ETeX$Transform$whitespaceParser,
				$jxxcarlson$etex$ETeX$Transform$f0Parser,
				$jxxcarlson$etex$ETeX$Transform$subscriptParser(userMacroDict),
				$jxxcarlson$etex$ETeX$Transform$superscriptParser(userMacroDict)
			]));
	return $jxxcarlson$etex$ETeX$Transform$sepByComma(
		A2(
			$elm$parser$Parser$Advanced$map,
			$jxxcarlson$etex$ETeX$Transform$PArg,
			$jxxcarlson$etex$ETeX$Transform$many1(argContentParser)));
};
var $jxxcarlson$etex$ETeX$Transform$functionArgsParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '(', $jxxcarlson$etex$ETeX$Transform$ExpectingLeftParen))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$lazy(
				function (_v3) {
					return $jxxcarlson$etex$ETeX$Transform$functionArgListParser(userMacroDict);
				}),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, ')', $jxxcarlson$etex$ETeX$Transform$ExpectingRightParen))));
};
var $jxxcarlson$etex$ETeX$Transform$macroParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($jxxcarlson$etex$ETeX$Transform$Macro),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '\u005C', $jxxcarlson$etex$ETeX$Transform$ExpectingBackslash))),
			$jxxcarlson$etex$ETeX$Transform$alphaNumParser_),
		$jxxcarlson$etex$ETeX$Transform$many(
			$jxxcarlson$etex$ETeX$Transform$argParser(userMacroDict)));
};
var $jxxcarlson$etex$ETeX$Transform$mathExprParser = function (userMacroDict) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$jxxcarlson$etex$ETeX$Transform$textParser,
				$elm$parser$Parser$Advanced$backtrackable($jxxcarlson$etex$ETeX$Transform$greekSymbolParser),
				$jxxcarlson$etex$ETeX$Transform$mathMediumSpaceParser,
				$jxxcarlson$etex$ETeX$Transform$mathSmallSpaceParser,
				$jxxcarlson$etex$ETeX$Transform$mathSpaceParser,
				$jxxcarlson$etex$ETeX$Transform$leftBraceParser,
				$jxxcarlson$etex$ETeX$Transform$rightBraceParser,
				$jxxcarlson$etex$ETeX$Transform$alphaNumWithLookaheadParser(userMacroDict),
				$jxxcarlson$etex$ETeX$Transform$macroParser(userMacroDict),
				$elm$parser$Parser$Advanced$lazy(
				function (_v1) {
					return $jxxcarlson$etex$ETeX$Transform$standaloneParenthExprParser(userMacroDict);
				}),
				$jxxcarlson$etex$ETeX$Transform$commaParser,
				$jxxcarlson$etex$ETeX$Transform$mathSymbolsParser,
				$elm$parser$Parser$Advanced$lazy(
				function (_v2) {
					return $jxxcarlson$etex$ETeX$Transform$argParser(userMacroDict);
				}),
				$jxxcarlson$etex$ETeX$Transform$paramParser,
				$jxxcarlson$etex$ETeX$Transform$whitespaceParser,
				$jxxcarlson$etex$ETeX$Transform$f0Parser,
				$jxxcarlson$etex$ETeX$Transform$subscriptParser(userMacroDict),
				$jxxcarlson$etex$ETeX$Transform$superscriptParser(userMacroDict)
			]));
};
var $jxxcarlson$etex$ETeX$Transform$standaloneParenthExprParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$jxxcarlson$etex$ETeX$Transform$ParenthExpr,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '(', $jxxcarlson$etex$ETeX$Transform$ExpectingLeftParen))),
				$elm$parser$Parser$Advanced$lazy(
					function (_v0) {
						return $jxxcarlson$etex$ETeX$Transform$many(
							$jxxcarlson$etex$ETeX$Transform$mathExprParser(userMacroDict));
					})),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, ')', $jxxcarlson$etex$ETeX$Transform$ExpectingRightParen))));
};
var $jxxcarlson$etex$ETeX$Transform$subscriptParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$jxxcarlson$etex$ETeX$Transform$Sub,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '_', $jxxcarlson$etex$ETeX$Transform$ExpectingUnderscore))),
			$jxxcarlson$etex$ETeX$Transform$decoParser(userMacroDict)));
};
var $jxxcarlson$etex$ETeX$Transform$superscriptParser = function (userMacroDict) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$jxxcarlson$etex$ETeX$Transform$Super,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '^', $jxxcarlson$etex$ETeX$Transform$ExpectingCaret))),
			$jxxcarlson$etex$ETeX$Transform$decoParser(userMacroDict)));
};
var $jxxcarlson$etex$ETeX$Transform$parseWithDict = F2(
	function (userMacroDict, str) {
		return A2(
			$elm$parser$Parser$Advanced$run,
			$jxxcarlson$etex$ETeX$Transform$many(
				$jxxcarlson$etex$ETeX$Transform$mathExprParser(userMacroDict)),
			str);
	});
var $jxxcarlson$etex$ETeX$Transform$encloseB = function (str) {
	return '{' + (str + '}');
};
var $jxxcarlson$etex$ETeX$Transform$encloseP = function (str) {
	return '(' + (str + ')');
};
var $jxxcarlson$etex$ETeX$Transform$print = function (expr) {
	switch (expr.$) {
		case 'AlphaNum':
			var str = expr.a;
			return str;
		case 'LeftMathBrace':
			return '\u005C{';
		case 'RightMathBrace':
			return '\u005C}';
		case 'LeftParen':
			return '(';
		case 'RightParen':
			return ')';
		case 'MathSmallSpace':
			return '\u005C,';
		case 'MathMediumSpace':
			return '\u005C;';
		case 'MathSpace':
			return '\u005C ';
		case 'F0':
			var str = expr.a;
			return '\u005C' + str;
		case 'Param':
			var k = expr.a;
			return '#' + $elm$core$String$fromInt(k);
		case 'Arg':
			var exprs = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$encloseB(
				$jxxcarlson$etex$ETeX$Transform$printList(exprs));
		case 'PArg':
			var exprs = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$encloseP(
				$jxxcarlson$etex$ETeX$Transform$printList(exprs));
		case 'Sub':
			var deco = expr.a;
			return '_' + $jxxcarlson$etex$ETeX$Transform$printDeco(deco);
		case 'Super':
			var deco = expr.a;
			return '^' + $jxxcarlson$etex$ETeX$Transform$printDeco(deco);
		case 'MathSymbols':
			var str = expr.a;
			return str;
		case 'WS':
			return ' ';
		case 'Macro':
			var name = expr.a;
			var body = expr.b;
			_v8$2:
			while (true) {
				if (body.b && (!body.b.b)) {
					switch (body.a.$) {
						case 'PArg':
							var exprs = body.a.a;
							return '\u005C' + (name + $jxxcarlson$etex$ETeX$Transform$encloseB(
								$jxxcarlson$etex$ETeX$Transform$printList(exprs)));
						case 'ParenthExpr':
							var exprs = body.a.a;
							return '\u005C' + (name + $jxxcarlson$etex$ETeX$Transform$encloseB(
								$jxxcarlson$etex$ETeX$Transform$printList(exprs)));
						default:
							break _v8$2;
					}
				} else {
					break _v8$2;
				}
			}
			if (body.b && (body.a.$ === 'PArg')) {
				return '\u005C' + (name + $jxxcarlson$etex$ETeX$Transform$printMacroArgs(body));
			} else {
				return '\u005C' + (name + $jxxcarlson$etex$ETeX$Transform$printList(body));
			}
		case 'FCall':
			var name = expr.a;
			var args = expr.b;
			return name + ('(' + ($jxxcarlson$etex$ETeX$Transform$printArgList(args) + ')'));
		case 'Expr':
			var exprs = expr.a;
			return A2(
				$elm$core$String$join,
				'',
				A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$print, exprs));
		case 'Comma':
			return ',';
		case 'ParenthExpr':
			var exprs = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$encloseP(
				$jxxcarlson$etex$ETeX$Transform$printList(exprs));
		default:
			var str = expr.a;
			return '\u005Ctext{' + (str + '}');
	}
};
var $jxxcarlson$etex$ETeX$Transform$printArgList = function (exprs) {
	if (!exprs.b) {
		return '';
	} else {
		if (exprs.a.$ === 'PArg') {
			if (!exprs.b.b) {
				var contents = exprs.a.a;
				return $jxxcarlson$etex$ETeX$Transform$printList(contents);
			} else {
				if (exprs.b.a.$ === 'Comma') {
					var contents = exprs.a.a;
					var _v5 = exprs.b;
					var _v6 = _v5.a;
					var rest = _v5.b;
					return $jxxcarlson$etex$ETeX$Transform$printList(contents) + (',' + $jxxcarlson$etex$ETeX$Transform$printArgList(rest));
				} else {
					var contents = exprs.a.a;
					var rest = exprs.b;
					return _Utils_ap(
						$jxxcarlson$etex$ETeX$Transform$printList(contents),
						$jxxcarlson$etex$ETeX$Transform$printArgList(rest));
				}
			}
		} else {
			var other = exprs.a;
			var rest = exprs.b;
			return _Utils_ap(
				$jxxcarlson$etex$ETeX$Transform$print(other),
				$jxxcarlson$etex$ETeX$Transform$printArgList(rest));
		}
	}
};
var $jxxcarlson$etex$ETeX$Transform$printDeco = function (deco) {
	if (deco.$ === 'DecoM') {
		var expr = deco.a;
		return $jxxcarlson$etex$ETeX$Transform$print(expr);
	} else {
		var k = deco.a;
		return $elm$core$String$fromInt(k);
	}
};
var $jxxcarlson$etex$ETeX$Transform$printList = function (exprs) {
	return A2(
		$elm$core$String$join,
		'',
		A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$print, exprs));
};
var $jxxcarlson$etex$ETeX$Transform$printMacroArgs = function (exprs) {
	if (!exprs.b) {
		return '';
	} else {
		if (exprs.a.$ === 'PArg') {
			if (!exprs.b.b) {
				var contents = exprs.a.a;
				return $jxxcarlson$etex$ETeX$Transform$encloseB(
					$jxxcarlson$etex$ETeX$Transform$printList(contents));
			} else {
				if (exprs.b.a.$ === 'Comma') {
					var contents = exprs.a.a;
					var _v1 = exprs.b;
					var _v2 = _v1.a;
					var rest = _v1.b;
					return _Utils_ap(
						$jxxcarlson$etex$ETeX$Transform$encloseB(
							$jxxcarlson$etex$ETeX$Transform$printList(contents)),
						$jxxcarlson$etex$ETeX$Transform$printMacroArgs(rest));
				} else {
					var contents = exprs.a.a;
					var rest = exprs.b;
					return _Utils_ap(
						$jxxcarlson$etex$ETeX$Transform$encloseB(
							$jxxcarlson$etex$ETeX$Transform$printList(contents)),
						$jxxcarlson$etex$ETeX$Transform$printMacroArgs(rest));
				}
			}
		} else {
			var other = exprs.a;
			var rest = exprs.b;
			return _Utils_ap(
				$jxxcarlson$etex$ETeX$Transform$print(other),
				$jxxcarlson$etex$ETeX$Transform$printMacroArgs(rest));
		}
	}
};
var $jxxcarlson$etex$ETeX$Transform$Expr = function (a) {
	return {$: 'Expr', a: a};
};
var $jxxcarlson$etex$ETeX$Transform$LeftParen = {$: 'LeftParen'};
var $jxxcarlson$etex$ETeX$Transform$RightParen = {$: 'RightParen'};
var $jxxcarlson$etex$ETeX$Dictionary$symbolDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('qquad', '\u005Cqquad'),
			_Utils_Tuple2('alpha', '\u005Calpha'),
			_Utils_Tuple2('beta', '\u005Cbeta'),
			_Utils_Tuple2('gamma', '\u005Cgamma'),
			_Utils_Tuple2('delta', '\u005Cdelta'),
			_Utils_Tuple2('epsilon', '\u005Cepsilon'),
			_Utils_Tuple2('zeta', '\u005Czeta'),
			_Utils_Tuple2('eta', '\u005Ceta'),
			_Utils_Tuple2('theta', '\u005Ctheta'),
			_Utils_Tuple2('iota', '\u005Ciota'),
			_Utils_Tuple2('kappa', '\u005Ckappa'),
			_Utils_Tuple2('lambda', '\u005Clambda'),
			_Utils_Tuple2('mu', '\u005Cmu'),
			_Utils_Tuple2('nu', '\u005Cnu'),
			_Utils_Tuple2('xi', '\u005Cxi'),
			_Utils_Tuple2('omicron', '\u005Comicron'),
			_Utils_Tuple2('pi', '\u005Cpi'),
			_Utils_Tuple2('rho', '\u005Crho'),
			_Utils_Tuple2('sigma', '\u005Csigma'),
			_Utils_Tuple2('tau', '\u005Ctau'),
			_Utils_Tuple2('upsilon', '\u005Cupsilon'),
			_Utils_Tuple2('phi', '\u005Cphi'),
			_Utils_Tuple2('chi', '\u005Cchi'),
			_Utils_Tuple2('psi', '\u005Cpsi'),
			_Utils_Tuple2('omega', '\u005Comega'),
			_Utils_Tuple2('Alpha', '\u005CAlpha'),
			_Utils_Tuple2('Beta', '\u005CBeta'),
			_Utils_Tuple2('Gamma', '\u005CGamma'),
			_Utils_Tuple2('Delta', '\u005CDelta'),
			_Utils_Tuple2('Epsilon', '\u005CEpsilon'),
			_Utils_Tuple2('Zeta', '\u005CZeta'),
			_Utils_Tuple2('Eta', '\u005CEta'),
			_Utils_Tuple2('Theta', '\u005CTheta'),
			_Utils_Tuple2('Iota', '\u005CIota'),
			_Utils_Tuple2('Kappa', '\u005CKappa'),
			_Utils_Tuple2('Lambda', '\u005CLambda'),
			_Utils_Tuple2('Mu', '\u005CMu'),
			_Utils_Tuple2('Nu', '\u005CNu'),
			_Utils_Tuple2('Xi', '\u005CXi'),
			_Utils_Tuple2('Omicron', '\u005COmicron'),
			_Utils_Tuple2('Pi', '\u005CPi'),
			_Utils_Tuple2('Rho', '\u005CRho'),
			_Utils_Tuple2('Sigma', '\u005CSigma'),
			_Utils_Tuple2('Tau', '\u005CTau'),
			_Utils_Tuple2('Upsilon', '\u005CUpsilon'),
			_Utils_Tuple2('Phi', '\u005CPhi'),
			_Utils_Tuple2('Chi', '\u005CChi'),
			_Utils_Tuple2('Psi', '\u005CPsi'),
			_Utils_Tuple2('Omega', '\u005COmega'),
			_Utils_Tuple2('varepsilon', '\u005Cvarepsilon'),
			_Utils_Tuple2('vartheta', '\u005Cvartheta'),
			_Utils_Tuple2('varpi', '\u005Cvarpi'),
			_Utils_Tuple2('varrho', '\u005Cvarrho'),
			_Utils_Tuple2('varsigma', '\u005Cvarsigma'),
			_Utils_Tuple2('varphi', '\u005Cvarphi')
		]));
var $jxxcarlson$etex$ETeX$Transform$resolveSymbolName = function (expr) {
	switch (expr.$) {
		case 'AlphaNum':
			var str = expr.a;
			var _v2 = A2($elm$core$Dict$get, str, $jxxcarlson$etex$ETeX$Dictionary$symbolDict);
			if (_v2.$ === 'Just') {
				return $jxxcarlson$etex$ETeX$Transform$AlphaNum('\u005C' + str);
			} else {
				return $jxxcarlson$etex$ETeX$Transform$AlphaNum(str);
			}
		case 'PArg':
			var exprs = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$PArg(
				A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$resolveSymbolName, exprs));
		case 'ParenthExpr':
			var exprs = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$ParenthExpr(
				A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$resolveSymbolName, exprs));
		case 'Macro':
			var name = expr.a;
			var args = expr.b;
			return A2(
				$jxxcarlson$etex$ETeX$Transform$Macro,
				name,
				A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$resolveSymbolName, args));
		case 'F0':
			var str = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$F0(str);
		case 'Arg':
			var exprs = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$Arg(
				A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$resolveSymbolName, exprs));
		case 'Sub':
			var deco = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$Sub(
				$jxxcarlson$etex$ETeX$Transform$resolveSymbolNameInDeco(deco));
		case 'Super':
			var deco = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$Super(
				$jxxcarlson$etex$ETeX$Transform$resolveSymbolNameInDeco(deco));
		case 'Param':
			var n = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$Param(n);
		case 'WS':
			return $jxxcarlson$etex$ETeX$Transform$WS;
		case 'MathSpace':
			return $jxxcarlson$etex$ETeX$Transform$MathSpace;
		case 'MathSmallSpace':
			return $jxxcarlson$etex$ETeX$Transform$MathSmallSpace;
		case 'MathMediumSpace':
			return $jxxcarlson$etex$ETeX$Transform$MathMediumSpace;
		case 'LeftMathBrace':
			return $jxxcarlson$etex$ETeX$Transform$LeftMathBrace;
		case 'RightMathBrace':
			return $jxxcarlson$etex$ETeX$Transform$RightMathBrace;
		case 'LeftParen':
			return $jxxcarlson$etex$ETeX$Transform$LeftParen;
		case 'RightParen':
			return $jxxcarlson$etex$ETeX$Transform$RightParen;
		case 'Comma':
			return $jxxcarlson$etex$ETeX$Transform$Comma;
		case 'MathSymbols':
			var str = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$MathSymbols(str);
		case 'FCall':
			var name = expr.a;
			var args = expr.b;
			return A2(
				$jxxcarlson$etex$ETeX$Transform$FCall,
				name,
				A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$resolveSymbolName, args));
		case 'Expr':
			var exprs = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$Expr(
				A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$resolveSymbolName, exprs));
		default:
			var str = expr.a;
			return $jxxcarlson$etex$ETeX$Transform$Text(str);
	}
};
var $jxxcarlson$etex$ETeX$Transform$resolveSymbolNameInDeco = function (deco) {
	if (deco.$ === 'DecoM') {
		var expr = deco.a;
		return $jxxcarlson$etex$ETeX$Transform$DecoM(
			$jxxcarlson$etex$ETeX$Transform$resolveSymbolName(expr));
	} else {
		var n = deco.a;
		return $jxxcarlson$etex$ETeX$Transform$DecoI(n);
	}
};
var $jxxcarlson$etex$ETeX$Transform$transformETeX = F2(
	function (dict, input) {
		if (A2($elm$core$String$contains, '\u005C', input)) {
			var _v0 = A2(
				$jxxcarlson$etex$ETeX$Transform$parseWithDict,
				$elm$core$Dict$empty,
				$elm$core$String$trim(input));
			if (_v0.$ === 'Ok') {
				var exprs = _v0.a;
				return $jxxcarlson$etex$ETeX$Transform$printList(exprs);
			} else {
				return '[ETeX error]' + input;
			}
		} else {
			var _v1 = A2(
				$jxxcarlson$etex$ETeX$Transform$parseWithDict,
				dict,
				$elm$core$String$trim(input));
			if (_v1.$ === 'Ok') {
				var exprs = _v1.a;
				return $jxxcarlson$etex$ETeX$Transform$printList(
					A2($elm$core$List$map, $jxxcarlson$etex$ETeX$Transform$resolveSymbolName, exprs));
			} else {
				return '[ETeX error]' + input;
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$Math$getMathContent = function (block) {
	var rawContent = function () {
		var _v0 = block.body;
		if (_v0.$ === 'Left') {
			var str = _v0.a;
			return str;
		} else {
			var exprs = _v0.a;
			return $elm$core$String$concat(
				A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Render$Math$extractExprText, exprs));
		}
	}();
	var stripped = $jxxcarlson$xmarkdown_compiler$Render$Math$stripMathDelimiters(
		$elm$core$String$trim(rawContent));
	return A2($jxxcarlson$etex$ETeX$Transform$transformETeX, $elm$core$Dict$empty, stripped);
};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $jxxcarlson$xmarkdown_compiler$Render$Math$renderMath = F3(
	function (content, isDisplay, attrs) {
		return A3(
			$elm$html$Html$node,
			'math-text',
			_Utils_ap(
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$attribute, 'data-content', content),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-display',
						isDisplay ? 'true' : 'false')
					]),
				attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $jxxcarlson$xmarkdown_compiler$Render$Math$aligned = F5(
	function (count, _v0, _v1, attrs, block) {
		var content = $jxxcarlson$xmarkdown_compiler$Render$Math$getMathContent(block);
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A3(
			$jxxcarlson$xmarkdown_compiler$Render$Math$renderMath,
			content,
			true,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber)),
						A2($elm$html$Html$Attributes$style, 'padding', '8px')
					]),
				attrs));
	});
var $jxxcarlson$xmarkdown_compiler$Render$Math$array = F5(
	function (count, _v0, _v1, attrs, block) {
		var content = $jxxcarlson$xmarkdown_compiler$Render$Math$getMathContent(block);
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A3(
			$jxxcarlson$xmarkdown_compiler$Render$Math$renderMath,
			content,
			true,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber)),
						A2($elm$html$Html$Attributes$style, 'padding', '8px')
					]),
				attrs));
	});
var $jxxcarlson$xmarkdown_compiler$Render$Math$chem = F5(
	function (count, _v0, _v1, attrs, block) {
		var content = $jxxcarlson$xmarkdown_compiler$Render$Math$getMathContent(block);
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A3(
			$jxxcarlson$xmarkdown_compiler$Render$Math$renderMath,
			content,
			false,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber)),
						A2($elm$html$Html$Attributes$style, 'padding', '8px')
					]),
				attrs));
	});
var $elm$html$Html$dd = _VirtualDom_node('dd');
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $jxxcarlson$xmarkdown_compiler$Render$Expression$buildImageAttributes = function (props) {
	var widthAttr = A2(
		$elm$core$Maybe$map,
		function (w) {
			return A2($elm$html$Html$Attributes$style, 'width', w + 'px');
		},
		A2($elm$core$Dict$get, 'width', props));
	var heightAttr = A2(
		$elm$core$Maybe$map,
		function (h) {
			return A2($elm$html$Html$Attributes$style, 'height', h + 'px');
		},
		A2($elm$core$Dict$get, 'height', props));
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		_List_fromArray(
			[widthAttr, heightAttr]));
};
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$html$Html$em = _VirtualDom_node('em');
var $jxxcarlson$xmarkdown_compiler$Render$Expression$extractImageData = function (exprs) {
	var combined = $elm$core$String$trim(
		$elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (expr) {
					if (expr.$ === 'Text') {
						var str = expr.a;
						return str;
					} else {
						return '';
					}
				},
				exprs)));
	var _v0 = A2($elm$core$String$split, ' ', combined);
	if (!_v0.b) {
		return _Utils_Tuple2('', 'Image');
	} else {
		var url = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			url,
			A2($elm$core$String$join, ' ', rest));
	}
};
var $jxxcarlson$xmarkdown_compiler$Render$Expression$extractLinkData = function (exprs) {
	var combined = $elm$core$String$trim(
		$elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (expr) {
					if (expr.$ === 'Text') {
						var str = expr.a;
						return str;
					} else {
						return '';
					}
				},
				exprs)));
	var _v0 = $elm$core$List$reverse(
		A2($elm$core$String$split, ' ', combined));
	if (!_v0.b) {
		return _Utils_Tuple2('Link', '#');
	} else {
		var url = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			A2(
				$elm$core$String$join,
				' ',
				$elm$core$List$reverse(rest)),
			url);
	}
};
var $jxxcarlson$xmarkdown_compiler$Render$Expression$extractMathContent = function (exprs) {
	return $elm$core$String$trim(
		$elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (expr) {
					if (expr.$ === 'Text') {
						var str = expr.a;
						return str;
					} else {
						return '';
					}
				},
				exprs)));
};
var $elm$html$Html$figcaption = _VirtualDom_node('figcaption');
var $elm$html$Html$figure = _VirtualDom_node('figure');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Expression$parseImageProperties = function (altText) {
	var tokens = A2($elm$core$String$split, ' ', altText);
	var _v0 = A2(
		$elm$core$List$partition,
		function (token) {
			return A2($elm$core$String$contains, ':', token);
		},
		tokens);
	var propTokens = _v0.a;
	var captionTokens = _v0.b;
	var caption = $elm$core$String$trim(
		A2($elm$core$String$join, ' ', captionTokens));
	var props = $elm$core$Dict$fromList(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2(
				$elm$core$List$map,
				function (token) {
					var _v1 = A2($elm$core$String$split, ':', token);
					if ((_v1.b && _v1.b.b) && (!_v1.b.b.b)) {
						var key = _v1.a;
						var _v2 = _v1.b;
						var value = _v2.a;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(key, value));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				},
				propTokens)));
	return _Utils_Tuple2(caption, props);
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $avh4$elm_color$Color$toRgba = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	return {alpha: a, blue: b, green: g, red: r};
};
var $jxxcarlson$xmarkdown_compiler$Render$Theme$colorToRgbString = function (color) {
	var _v0 = $avh4$elm_color$Color$toRgba(color);
	var alpha = _v0.alpha;
	var blue = _v0.blue;
	var green = _v0.green;
	var red = _v0.red;
	return (alpha < 1.0) ? ('rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + (', ' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255)) + (', ' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255)) + (', ' + ($elm$core$String$fromFloat(alpha) + ')')))))))) : ('rgb(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + (', ' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255)) + (', ' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255)) + ')'))))));
};
var $jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor = F2(
	function (keyAccess, theme) {
		var color = keyAccess(
			function () {
				if (theme.$ === 'Dark') {
					return $jxxcarlson$xmarkdown_compiler$Render$Theme$darkTheme;
				} else {
					return $jxxcarlson$xmarkdown_compiler$Render$Theme$lightTheme;
				}
			}());
		return $jxxcarlson$xmarkdown_compiler$Render$Theme$colorToRgbString(color);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Expression$render = F3(
	function (theme, attrs, expr) {
		switch (expr.$) {
			case 'Text':
				var string = expr.a;
				return A2(
					$elm$html$Html$span,
					attrs,
					_List_fromArray(
						[
							$elm$html$Html$text(string + ' ')
						]));
			case 'VFun':
				var name = expr.a;
				var content = expr.b;
				if (A2(
					$elm$core$List$member,
					name,
					_List_fromArray(
						['math', 'm', 'chem']))) {
					var mathContent = A2($jxxcarlson$etex$ETeX$Transform$transformETeX, $elm$core$Dict$empty, content);
					return A3(
						$elm$html$Html$node,
						'math-text',
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$attribute, 'data-content', mathContent),
								A2($elm$html$Html$Attributes$attribute, 'data-display', 'false')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(mathContent)
							]));
				} else {
					if (name === 'code') {
						return A2(
							$elm$html$Html$code,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(content)
								]));
					} else {
						return A2(
							$elm$html$Html$span,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(content)
								]));
					}
				}
			case 'Fun':
				var name = expr.a;
				var exprList = expr.b;
				if (A2(
					$elm$core$List$member,
					name,
					_List_fromArray(
						['chem', 'math', 'm']))) {
					var mathContent = A2(
						$jxxcarlson$etex$ETeX$Transform$transformETeX,
						$elm$core$Dict$empty,
						$jxxcarlson$xmarkdown_compiler$Render$Expression$extractMathContent(exprList));
					return A3(
						$elm$html$Html$node,
						'math-text',
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$attribute, 'data-content', mathContent),
								A2($elm$html$Html$Attributes$attribute, 'data-display', 'false')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(mathContent)
							]));
				} else {
					if (name === 'code') {
						return A2(
							$elm$html$Html$code,
							_List_Nil,
							A2(
								$elm$core$List$map,
								A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, theme, attrs),
								exprList));
					} else {
						if (A2(
							$elm$core$List$member,
							name,
							_List_fromArray(
								['anchor', 'mark']))) {
							return A2(
								$elm$html$Html$span,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('(' + (name + ' content)'))
									]));
						} else {
							if (A2(
								$elm$core$List$member,
								name,
								_List_fromArray(
									['b', 'strong', 'bold']))) {
								return A2(
									$elm$html$Html$strong,
									_List_Nil,
									A2(
										$elm$core$List$map,
										A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, theme, attrs),
										exprList));
							} else {
								if (A2(
									$elm$core$List$member,
									name,
									_List_fromArray(
										['i', 'em', 'italic']))) {
									return A2(
										$elm$html$Html$em,
										_List_Nil,
										A2(
											$elm$core$List$map,
											A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, theme, attrs),
											exprList));
								} else {
									if (A2(
										$elm$core$List$member,
										name,
										_List_fromArray(
											['strike', 'strikethrough']))) {
										return A2(
											$elm$html$Html$span,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'text-decoration', 'line-through')
												]),
											A2(
												$elm$core$List$map,
												A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, theme, attrs),
												exprList));
									} else {
										if ((name === 'a') || (name === 'link')) {
											var _v1 = $jxxcarlson$xmarkdown_compiler$Render$Expression$extractLinkData(exprList);
											var linkText = _v1.a;
											var url = _v1.b;
											return A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$href(url),
														A2(
														$elm$html$Html$Attributes$style,
														'color',
														A2(
															$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
															function ($) {
																return $.link;
															},
															theme))
													]),
												_List_fromArray(
													[
														$elm$html$Html$text(linkText)
													]));
										} else {
											if ((name === 'image') || (name === 'img')) {
												var _v2 = $jxxcarlson$xmarkdown_compiler$Render$Expression$extractImageData(exprList);
												var url = _v2.a;
												var altText = _v2.b;
												var _v3 = $jxxcarlson$xmarkdown_compiler$Render$Expression$parseImageProperties(altText);
												var caption = _v3.a;
												var props = _v3.b;
												var imgAttrs = $jxxcarlson$xmarkdown_compiler$Render$Expression$buildImageAttributes(props);
												return A2(
													$elm$html$Html$figure,
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
															A2($elm$html$Html$Attributes$style, 'margin', '1em 0')
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$a,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$href(url),
																	$elm$html$Html$Attributes$target('_blank'),
																	$elm$html$Html$Attributes$rel('noopener noreferrer')
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$img,
																	_Utils_ap(
																		_List_fromArray(
																			[
																				$elm$html$Html$Attributes$src(url),
																				$elm$html$Html$Attributes$alt(caption),
																				A2($elm$html$Html$Attributes$style, 'max-width', '100%'),
																				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
																			]),
																		imgAttrs),
																	_List_Nil)
																])),
															$elm$core$String$isEmpty(caption) ? $elm$html$Html$text('') : A2(
															$elm$html$Html$figcaption,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'font-size', '0.9em'),
																	A2(
																	$elm$html$Html$Attributes$style,
																	'color',
																	A2(
																		$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
																		function ($) {
																			return $.offsetText;
																		},
																		theme)),
																	A2($elm$html$Html$Attributes$style, 'margin-top', '0.5em')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text(caption)
																]))
														]));
											} else {
												return A2(
													$elm$html$Html$span,
													_List_Nil,
													A2(
														$elm$core$List$map,
														A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, theme, attrs),
														exprList));
											}
										}
									}
								}
							}
						}
					}
				}
			default:
				var exprList = expr.b;
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					A2(
						$elm$core$List$map,
						A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, theme, attrs),
						exprList));
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$List$desc = F5(
	function (count, _v0, settings, attr, block) {
		var content = function () {
			var _v1 = block.body;
			if (_v1.$ === 'Right') {
				var exprs = _v1.a;
				return A2(
					$elm$core$List$map,
					A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attr),
					exprs);
			} else {
				return _List_fromArray(
					[
						$elm$html$Html$text('')
					]);
			}
		}();
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A2(
			$elm$html$Html$dd,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber))
					]),
				attr),
			content);
	});
var $jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$empty = $elm$core$Dict$empty;
var $jxxcarlson$xmarkdown_compiler$Render$Math$equation = F5(
	function (count, _v0, _v1, attrs, block) {
		var content = $jxxcarlson$xmarkdown_compiler$Render$Math$getMathContent(block);
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A3(
			$jxxcarlson$xmarkdown_compiler$Render$Math$renderMath,
			content,
			true,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber)),
						A2($elm$html$Html$Attributes$style, 'padding', '8px')
					]),
				attrs));
	});
var $jxxcarlson$xmarkdown_compiler$Render$List$bulletSymbol = F2(
	function (theme, level) {
		switch (level) {
			case 0:
				return A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Attributes$style,
							'color',
							A2(
								$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
								function ($) {
									return $.offsetText;
								},
								theme)),
							A2($elm$html$Html$Attributes$style, 'font-weight', 'bold'),
							A2($elm$html$Html$Attributes$style, 'font-size', '0.5em')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('●')
						]));
			case 1:
				return A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Attributes$style,
							'color',
							A2(
								$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
								function ($) {
									return $.offsetText;
								},
								theme)),
							A2($elm$html$Html$Attributes$style, 'font-size', '0.5em')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('□')
						]));
			default:
				return A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Attributes$style,
							'color',
							A2(
								$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
								function ($) {
									return $.offsetText;
								},
								theme)),
							A2($elm$html$Html$Attributes$style, 'font-size', '0.84em')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('◇')
						]));
		}
	});
var $elm$html$Html$li = _VirtualDom_node('li');
var $jxxcarlson$xmarkdown_compiler$Render$List$item = F5(
	function (count, _v0, settings, attr, block) {
		var level = (block.indent / 2) | 0;
		var indentation = $elm$core$Basics$round(2.2 * settings.leftIndentation) + (settings.leftIndentation * (level - 1));
		var content = function () {
			var _v1 = block.body;
			if (_v1.$ === 'Right') {
				var exprs = _v1.a;
				return A2(
					$elm$core$List$map,
					A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attr),
					exprs);
			} else {
				return _List_fromArray(
					[
						$elm$html$Html$text('')
					]);
			}
		}();
		var hangingIndentContent = _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'gap', '8px')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'flex-shrink', '0'),
								A2($elm$html$Html$Attributes$style, 'white-space', 'nowrap')
							]),
						_List_fromArray(
							[
								A2($jxxcarlson$xmarkdown_compiler$Render$List$bulletSymbol, settings.theme, level)
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'flex-grow', '1')
							]),
						content)
					]))
			]);
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A2(
			$elm$html$Html$li,
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$Attributes$style,
						'margin-left',
						$elm$core$String$fromInt(indentation) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'margin-bottom',
						$elm$core$String$fromInt(settings.listSpacing) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'width',
						$elm$core$String$fromInt(settings.width - indentation) + 'px'),
						A2($elm$html$Html$Attributes$style, 'list-style', 'none'),
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber))
					]),
				attr),
			hangingIndentContent);
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $jxxcarlson$xmarkdown_compiler$Render$List$numberToLetter = function (n) {
	return ((n > 0) && (n <= 26)) ? $elm$core$String$fromChar(
		$elm$core$Char$fromCode(96 + n)) : $elm$core$String$fromInt(n);
};
var $jxxcarlson$xmarkdown_compiler$Render$List$numberToRoman = function (n) {
	var toRoman = F2(
		function (num, pairs) {
			toRoman:
			while (true) {
				if (!pairs.b) {
					return '';
				} else {
					var _v1 = pairs.a;
					var value = _v1.a;
					var numeral = _v1.b;
					var rest = pairs.b;
					if (_Utils_cmp(num, value) > -1) {
						return _Utils_ap(
							numeral,
							A2(toRoman, num - value, pairs));
					} else {
						var $temp$num = num,
							$temp$pairs = rest;
						num = $temp$num;
						pairs = $temp$pairs;
						continue toRoman;
					}
				}
			}
		});
	var romanPairs = _List_fromArray(
		[
			_Utils_Tuple2(1000, 'm'),
			_Utils_Tuple2(900, 'cm'),
			_Utils_Tuple2(500, 'd'),
			_Utils_Tuple2(400, 'cd'),
			_Utils_Tuple2(100, 'c'),
			_Utils_Tuple2(90, 'xc'),
			_Utils_Tuple2(50, 'l'),
			_Utils_Tuple2(40, 'xl'),
			_Utils_Tuple2(10, 'x'),
			_Utils_Tuple2(9, 'ix'),
			_Utils_Tuple2(5, 'v'),
			_Utils_Tuple2(4, 'iv'),
			_Utils_Tuple2(1, 'i')
		]);
	return A2(toRoman, n, romanPairs);
};
var $jxxcarlson$xmarkdown_compiler$Render$List$formatListNumber = F2(
	function (level, number) {
		switch (level) {
			case 0:
				return $elm$core$String$fromInt(number);
			case 1:
				return $jxxcarlson$xmarkdown_compiler$Render$List$numberToLetter(number);
			default:
				return $jxxcarlson$xmarkdown_compiler$Render$List$numberToRoman(number);
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$List$numbered = F5(
	function (count, acc, settings, attr, block) {
		var level = (block.indent / 2) | 0;
		var itemNumber = A2(
			$elm$core$Maybe$withDefault,
			1,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.index;
				},
				A2($elm$core$Dict$get, block.meta.id, acc.numberedItemDict)));
		var indentation = $elm$core$Basics$round(2.1 * settings.leftIndentation) + (settings.leftIndentation * (level - 1));
		var formattedNumber = A2($jxxcarlson$xmarkdown_compiler$Render$List$formatListNumber, level, itemNumber);
		var content = function () {
			var _v0 = block.body;
			if (_v0.$ === 'Right') {
				var exprs = _v0.a;
				return A2(
					$elm$core$List$map,
					A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attr),
					exprs);
			} else {
				return _List_fromArray(
					[
						$elm$html$Html$text('')
					]);
			}
		}();
		var hangingIndentContent = _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'gap', '8px')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'flex-shrink', '0'),
								A2($elm$html$Html$Attributes$style, 'white-space', 'nowrap')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(formattedNumber + '.')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'flex-grow', '1')
							]),
						content)
					]))
			]);
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A2(
			$elm$html$Html$li,
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$Attributes$style,
						'margin-left',
						$elm$core$String$fromInt(indentation) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'margin-bottom',
						$elm$core$String$fromInt(settings.listSpacing) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'width',
						$elm$core$String$fromInt(settings.width - (6 + indentation)) + 'px'),
						A2($elm$html$Html$Attributes$style, 'list-style', 'none'),
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber))
					]),
				attr),
			hangingIndentContent);
	});
var $jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$register = F3(
	function (name, renderer, registry) {
		return A3($elm$core$Dict$insert, name, renderer, registry);
	});
var $jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$registerBatch = F2(
	function (renderers, registry) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, acc) {
					var name = _v0.a;
					var renderer = _v0.b;
					return A3($jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$register, name, renderer, acc);
				}),
			registry,
			renderers);
	});
var $elm$html$Html$dl = _VirtualDom_node('dl');
var $elm$html$Html$dt = _VirtualDom_node('dt');
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$descriptionList = F5(
	function (_v0, _v1, settings, attrs, block) {
		var content = function () {
			var _v2 = block.body;
			if (_v2.$ === 'Right') {
				var exprs = _v2.a;
				return A2(
					$elm$core$List$map,
					A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attrs),
					exprs);
			} else {
				return _List_fromArray(
					[
						$elm$html$Html$text('')
					]);
			}
		}();
		return A2(
			$elm$html$Html$dl,
			attrs,
			_List_fromArray(
				[
					A2($elm$html$Html$dt, _List_Nil, content)
				]));
	});
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$makeItem = function (x) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin-bottom', '4px')
			]),
		_List_fromArray(
			[x]));
};
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$itemList = F5(
	function (_v0, _v1, settings, attrs, block) {
		var content = function () {
			var _v2 = block.body;
			if (_v2.$ === 'Right') {
				var exprs = _v2.a;
				return A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeR,
						A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attrs),
						$jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$makeItem),
					exprs);
			} else {
				return _List_fromArray(
					[
						$elm$html$Html$text('')
					]);
			}
		}();
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', '36px'),
					A2($elm$html$Html$Attributes$style, 'margin-bottom', '24px')
				]),
			content);
	});
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$numberedList = F5(
	function (_v0, _v1, settings, attrs, block) {
		var content = function () {
			var _v2 = block.body;
			if (_v2.$ === 'Right') {
				var exprs = _v2.a;
				return A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeR,
						A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attrs),
						$jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$makeItem),
					exprs);
			} else {
				return _List_fromArray(
					[
						$elm$html$Html$text('')
					]);
			}
		}();
		return A2($elm$html$Html$ol, attrs, content);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$registerRenderers = function (registry) {
	return A2(
		$jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$registerBatch,
		_List_fromArray(
			[
				_Utils_Tuple2('itemList', $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$itemList),
				_Utils_Tuple2('numberedList', $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$numberedList),
				_Utils_Tuple2('descriptionList', $jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$descriptionList)
			]),
		registry);
};
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $elm$html$Html$h5 = _VirtualDom_node('h5');
var $elm$html$Html$h6 = _VirtualDom_node('h6');
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Document$section = F5(
	function (count, _v0, settings, attr, block) {
		var level = A2(
			$elm$core$Maybe$withDefault,
			2,
			A2(
				$elm$core$Maybe$andThen,
				$elm$core$String$toInt,
				A2($elm$core$Dict$get, 'level', block.properties)));
		var sectionNumber = ((settings.numberToLevel > 0) && (_Utils_cmp(level, settings.numberToLevel) < 1)) ? A2($elm$core$Dict$get, 'label', block.properties) : $elm$core$Maybe$Nothing;
		var headingElement = function () {
			switch (level) {
				case 1:
					return $elm$html$Html$h1;
				case 2:
					return $elm$html$Html$h2;
				case 3:
					return $elm$html$Html$h3;
				case 4:
					return $elm$html$Html$h4;
				case 5:
					return $elm$html$Html$h5;
				default:
					return $elm$html$Html$h6;
			}
		}();
		var contentExprs = function () {
			var _v2 = block.body;
			if (_v2.$ === 'Right') {
				var exprs = _v2.a;
				return A2(
					$elm$core$List$map,
					A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attr),
					exprs);
			} else {
				return _List_fromArray(
					[
						$elm$html$Html$text('')
					]);
			}
		}();
		var content = function () {
			if (sectionNumber.$ === 'Just') {
				var num = sectionNumber.a;
				return A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'margin-right', '8px')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(num + ' ')
							])),
					contentExprs);
			} else {
				return contentExprs;
			}
		}();
		return A2(
			headingElement,
			_Utils_ap(
				attr,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(
						'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)))),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber)),
						A2($elm$html$Html$Attributes$style, 'margin-top', '16px'),
						A2($elm$html$Html$Attributes$style, 'margin-bottom', '12px'),
						A2($elm$html$Html$Attributes$style, 'font-weight', '400')
					])),
			content);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Document$unnumberedSection = F5(
	function (count, acc, settings, attr, block) {
		return A5($jxxcarlson$xmarkdown_compiler$Render$Blocks$Document$section, count, acc, settings, attr, block);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Document$registerRenderers = function (registry) {
	return A2(
		$jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$registerBatch,
		_List_fromArray(
			[
				_Utils_Tuple2('section', $jxxcarlson$xmarkdown_compiler$Render$Blocks$Document$section),
				_Utils_Tuple2('section*', $jxxcarlson$xmarkdown_compiler$Render$Blocks$Document$unnumberedSection)
			]),
		registry);
};
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Text$quotation = F5(
	function (count, _v0, settings, _v1, block) {
		var indentWidth = $elm$core$String$fromInt(settings.leftIndentation) + 'px';
		var content = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function (text) {
					return _List_fromArray(
						[
							$elm$html$Html$text(text)
						]);
				},
				A2($elm$core$Dict$get, 'firstLine', block.properties)));
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					$elm$html$Html$Attributes$id(blockId),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-line-number',
					$elm$core$String$fromInt(block.meta.lineNumber))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', indentWidth)
						]),
					_List_Nil),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'font-style', 'italic')
						]),
					content)
				]));
	});
var $jxxcarlson$xmarkdown_compiler$Render$Blocks$Text$registerRenderers = function (registry) {
	return A2(
		$jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$registerBatch,
		_List_fromArray(
			[
				_Utils_Tuple2('quotation', $jxxcarlson$xmarkdown_compiler$Render$Blocks$Text$quotation)
			]),
		registry);
};
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$th = _VirtualDom_node('th');
var $jxxcarlson$xmarkdown_compiler$Render$GHTable$renderTableCell = F5(
	function (theme, alignments, isHeader, colIndex, expr) {
		if ((expr.$ === 'Fun') && (expr.a === 'cell')) {
			var content = expr.b;
			var renderedContent = A2(
				$elm$core$List$map,
				A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, theme, _List_Nil),
				content);
			var element = isHeader ? $elm$html$Html$th : $elm$html$Html$td;
			var alignment = A2(
				$elm$core$Maybe$withDefault,
				'l',
				$elm$core$List$head(
					A2($elm$core$List$drop, colIndex, alignments)));
			var textAlign = function () {
				switch (alignment) {
					case 'c':
						return 'center';
					case 'r':
						return 'right';
					default:
						return 'left';
				}
			}();
			return A2(
				element,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'border', '1px solid #ddd'),
						A2($elm$html$Html$Attributes$style, 'padding', '8px'),
						A2($elm$html$Html$Attributes$style, 'text-align', textAlign)
					]),
				renderedContent);
		} else {
			return A2($elm$html$Html$td, _List_Nil, _List_Nil);
		}
	});
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $jxxcarlson$xmarkdown_compiler$Render$GHTable$renderTableRow = F4(
	function (theme, alignments, rowIndex, expr) {
		if ((expr.$ === 'Fun') && (expr.a === 'row')) {
			var cells = expr.b;
			var isHeader = !rowIndex;
			var element = isHeader ? $elm$html$Html$thead : $elm$html$Html$tbody;
			var cellElements = A2(
				$elm$core$List$indexedMap,
				A3($jxxcarlson$xmarkdown_compiler$Render$GHTable$renderTableCell, theme, alignments, isHeader),
				cells);
			return A2(
				element,
				_List_Nil,
				_List_fromArray(
					[
						A2($elm$html$Html$tr, _List_Nil, cellElements)
					]));
		} else {
			return A2($elm$html$Html$tr, _List_Nil, _List_Nil);
		}
	});
var $elm$html$Html$table = _VirtualDom_node('table');
var $jxxcarlson$xmarkdown_compiler$Render$GHTable$render = F5(
	function (count, _v0, settings, _v1, block) {
		var _v2 = block.body;
		if (((((_v2.$ === 'Right') && _v2.a.b) && (_v2.a.a.$ === 'Fun')) && (_v2.a.a.a === 'table')) && (!_v2.a.b.b)) {
			var _v3 = _v2.a;
			var _v4 = _v3.a;
			var rows = _v4.b;
			var tableWidth = $elm$core$String$fromInt(settings.width - settings.leftIndentation) + 'px';
			var indentPx = $elm$core$String$fromInt(settings.leftIndentation) + 'px';
			var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
			var alignments = A2(
				$elm$core$List$map,
				$elm$core$String$trim,
				A2(
					$elm$core$String$split,
					',',
					A2(
						$elm$core$Maybe$withDefault,
						'',
						A2($elm$core$Dict$get, 'alignments', block.properties))));
			var rowElements = A2(
				$elm$core$List$indexedMap,
				A2($jxxcarlson$xmarkdown_compiler$Render$GHTable$renderTableRow, settings.theme, alignments),
				rows);
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-left', indentPx)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$table,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id(blockId),
								A2(
								$elm$html$Html$Attributes$attribute,
								'data-line-number',
								$elm$core$String$fromInt(block.meta.lineNumber)),
								A2($elm$html$Html$Attributes$style, 'border-collapse', 'collapse'),
								A2($elm$html$Html$Attributes$style, 'width', tableWidth),
								A2($elm$html$Html$Attributes$style, 'border', '1px solid #ddd')
							]),
						rowElements)
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('(table)')
					]));
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$OrdinaryBlock$initRegistry = A2(
	$jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$registerBatch,
	_List_fromArray(
		[
			_Utils_Tuple2('table', $jxxcarlson$xmarkdown_compiler$Render$GHTable$render),
			_Utils_Tuple2('item', $jxxcarlson$xmarkdown_compiler$Render$List$item),
			_Utils_Tuple2('desc', $jxxcarlson$xmarkdown_compiler$Render$List$desc),
			_Utils_Tuple2('numbered', $jxxcarlson$xmarkdown_compiler$Render$List$numbered),
			_Utils_Tuple2('equation', $jxxcarlson$xmarkdown_compiler$Render$Math$equation),
			_Utils_Tuple2('aligned', $jxxcarlson$xmarkdown_compiler$Render$Math$aligned),
			_Utils_Tuple2('array', $jxxcarlson$xmarkdown_compiler$Render$Math$array),
			_Utils_Tuple2('chem', $jxxcarlson$xmarkdown_compiler$Render$Math$chem)
		]),
	$jxxcarlson$xmarkdown_compiler$Render$Blocks$Document$registerRenderers(
		$jxxcarlson$xmarkdown_compiler$Render$Blocks$Container$registerRenderers(
			$jxxcarlson$xmarkdown_compiler$Render$Blocks$Text$registerRenderers($jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$empty))));
var $jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$lookup = $elm$core$Dict$get;
var $jxxcarlson$xmarkdown_compiler$Render$OrdinaryBlock$render = F5(
	function (count, acc, settings, attr, block) {
		var registry = $jxxcarlson$xmarkdown_compiler$Render$OrdinaryBlock$initRegistry;
		var _v0 = block.body;
		if (_v0.$ === 'Left') {
			return $elm$html$Html$text('');
		} else {
			var _v1 = block.heading;
			if (_v1.$ === 'Ordinary') {
				var functionName = _v1.a;
				var renderedBlock = function () {
					var _v2 = A2($jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$lookup, functionName, registry);
					if (_v2.$ === 'Nothing') {
						var envRenderer = A2(
							$elm$core$Maybe$withDefault,
							F5(
								function (_v3, _v4, _v5, _v6, _v7) {
									return $elm$html$Html$text('');
								}),
							A2($jxxcarlson$xmarkdown_compiler$Render$BlockRegistry$lookup, 'env', registry));
						return A5(envRenderer, count, acc, settings, attr, block);
					} else {
						var renderer = _v2.a;
						return A5(renderer, count, acc, settings, attr, block);
					}
				}();
				return renderedBlock;
			} else {
				return $elm$html$Html$text('');
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$Math$displayedMath = F3(
	function (count, attrs, block) {
		var content = $jxxcarlson$xmarkdown_compiler$Render$Math$getMathContent(block);
		var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
		return A3(
			$jxxcarlson$xmarkdown_compiler$Render$Math$renderMath,
			content,
			true,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(blockId),
						A2(
						$elm$html$Html$Attributes$attribute,
						'data-line-number',
						$elm$core$String$fromInt(block.meta.lineNumber)),
						A2($elm$html$Html$Attributes$style, 'padding', '8px')
					]),
				attrs));
	});
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $jxxcarlson$xmarkdown_compiler$Render$Theme$scaleFont = F2(
	function (settings, designSize) {
		return $elm$core$Basics$round((settings.fontSize * designSize) / $jxxcarlson$xmarkdown_compiler$Render$Theme$referenceFontSize);
	});
var $jxxcarlson$xmarkdown_compiler$Render$VerbatimBlock$render = F4(
	function (count, settings, attrs, block) {
		var _v0 = block.body;
		if (_v0.$ === 'Right') {
			return $elm$html$Html$text('');
		} else {
			var str = _v0.a;
			var _v1 = block.heading;
			if (_v1.$ === 'Verbatim') {
				var functionName = _v1.a;
				if (functionName === 'math') {
					return A3(
						$jxxcarlson$xmarkdown_compiler$Render$Math$displayedMath,
						count,
						attrs,
						_Utils_update(
							block,
							{
								body: $toastal$either$Either$Left(str)
							}));
				} else {
					var indentPx = $elm$core$String$fromInt(settings.leftIndentation) + 'px';
					var blockId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)));
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'margin-left', indentPx)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$pre,
								_Utils_ap(
									_List_fromArray(
										[
											$elm$html$Html$Attributes$id(blockId),
											A2(
											$elm$html$Html$Attributes$attribute,
											'data-line-number',
											$elm$core$String$fromInt(block.meta.lineNumber)),
											A2($elm$html$Html$Attributes$style, 'padding-left', '0'),
											A2($elm$html$Html$Attributes$style, 'overflow-x', 'auto'),
											A2(
											$elm$html$Html$Attributes$style,
											'font-size',
											$elm$core$String$fromInt(
												A2($jxxcarlson$xmarkdown_compiler$Render$Theme$scaleFont, settings, 16)) + 'px')
										]),
									attrs),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$code,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(str)
											]))
									]))
							]));
				}
			} else {
				return $elm$html$Html$text('');
			}
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$Block$renderParagraphBody = F4(
	function (count, settings, attrs, block) {
		var _v0 = block.body;
		if (_v0.$ === 'Right') {
			var exprs = _v0.a;
			return A2(
				$elm$html$Html$p,
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$id(
						'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(count)))),
					A2(
						$elm$core$List$cons,
						A2(
							$elm$html$Html$Attributes$attribute,
							'data-line-number',
							$elm$core$String$fromInt(block.meta.lineNumber)),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$Attributes$style,
								'width',
								$elm$core$String$fromInt(settings.width) + 'px'),
							A2(
								$elm$core$List$cons,
								A2($elm$html$Html$Attributes$style, 'margin', '0'),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$Attributes$style, 'margin-bottom', '18px'),
									A2(
										$elm$core$List$cons,
										A2($elm$html$Html$Attributes$style, 'line-height', '1.4'),
										attrs)))))),
				A2(
					$elm$core$List$map,
					A2($jxxcarlson$xmarkdown_compiler$Render$Expression$render, settings.theme, attrs),
					exprs));
		} else {
			return $elm$html$Html$text('');
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$Helper$showError = F3(
	function (theme, maybeError, x) {
		if (maybeError.$ === 'Nothing') {
			return x;
		} else {
			var error = maybeError.a;
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						x,
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$Attributes$style,
								'color',
								A2(
									$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
									function ($) {
										return $.text;
									},
									theme))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(error)
							]))
					]));
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$Block$renderBody = F5(
	function (count, acc, settings, attrs, block) {
		var _v0 = block.heading;
		switch (_v0.$) {
			case 'Paragraph':
				return _List_fromArray(
					[
						A4($jxxcarlson$xmarkdown_compiler$Render$Block$renderParagraphBody, count, settings, attrs, block)
					]);
			case 'Ordinary':
				return _List_fromArray(
					[
						A5($jxxcarlson$xmarkdown_compiler$Render$OrdinaryBlock$render, count, acc, settings, attrs, block)
					]);
			default:
				return _List_fromArray(
					[
						A3(
						$jxxcarlson$xmarkdown_compiler$Render$Helper$showError,
						settings.theme,
						block.meta.error,
						A4($jxxcarlson$xmarkdown_compiler$Render$VerbatimBlock$render, count, settings, attrs, block))
					]);
		}
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$SendLineNumber = function (a) {
	return {$: 'SendLineNumber', a: a};
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $jxxcarlson$xmarkdown_compiler$Render$Sync$rightToLeftSyncHelper = F2(
	function (firstLineNumber, numberOfLines) {
		return $elm$html$Html$Events$onClick(
			$jxxcarlson$xmarkdown_compiler$XMarkdown$Types$SendLineNumber(
				{begin: firstLineNumber, end: firstLineNumber + numberOfLines}));
	});
var $jxxcarlson$xmarkdown_compiler$Render$Sync$highlightIfIdIsSelected = F3(
	function (firstLineNumber, numberOfLines, settings) {
		return _Utils_eq(
			$elm$core$String$fromInt(firstLineNumber),
			settings.selectedId) ? _List_fromArray(
			[
				A2($jxxcarlson$xmarkdown_compiler$Render$Sync$rightToLeftSyncHelper, firstLineNumber, firstLineNumber + numberOfLines),
				A2(
				$elm$html$Html$Attributes$style,
				'background-color',
				$avh4$elm_color$Color$toCssString(settings.highlight))
			]) : _List_Nil;
	});
var $jxxcarlson$xmarkdown_compiler$Render$Sync$attributes = F2(
	function (settings, block) {
		return _Utils_ap(
			_List_fromArray(
				[
					A2($jxxcarlson$xmarkdown_compiler$Render$Sync$rightToLeftSyncHelper, block.meta.lineNumber, block.meta.numberOfLines)
				]),
			A3($jxxcarlson$xmarkdown_compiler$Render$Sync$highlightIfIdIsSelected, block.meta.lineNumber, block.meta.numberOfLines, settings));
	});
var $jxxcarlson$xmarkdown_compiler$Render$TreeSupport$syncAttributes = F2(
	function (settings, block) {
		return _Utils_ap(
			A2($jxxcarlson$xmarkdown_compiler$Render$Sync$attributes, settings, block),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-line-number',
					$elm$core$String$fromInt(block.meta.lineNumber))
				]));
	});
var $jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderAttributes = F2(
	function (settings, block) {
		return A2($jxxcarlson$xmarkdown_compiler$Render$TreeSupport$syncAttributes, settings, block);
	});
var $jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderBodyWithAttrs = F5(
	function (params, settings, acc, attrs, block) {
		var isHeading = A2($elm$core$Dict$member, 'level', block.properties);
		var spacer = isHeading ? _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$Attributes$style,
						'height',
						$elm$core$String$fromInt(
							$elm$core$Basics$round(params.paddingAboveHeadings)) + 'px')
					]),
				_List_Nil)
			]) : _List_Nil;
		return _Utils_ap(
			spacer,
			A5($jxxcarlson$xmarkdown_compiler$Render$Block$renderBody, params.editCount, acc, settings, attrs, block));
	});
var $jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderBody = F4(
	function (params, settings, acc, block) {
		return A5(
			$jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderBodyWithAttrs,
			params,
			settings,
			acc,
			A2($jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderAttributes, settings, block),
			block);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Tree$renderLeafNode = F4(
	function (params, settings, accumulator, root) {
		var attrs = A2($jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderAttributes, settings, root);
		return A2(
			$elm$html$Html$div,
			attrs,
			A4($jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderBody, params, settings, accumulator, root));
	});
var $jxxcarlson$xmarkdown_compiler$Render$Tree$renderBranchNode = F5(
	function (params, settings, accumulator, root, children) {
		return A5($jxxcarlson$xmarkdown_compiler$Render$Tree$renderStandardBranch, params, settings, accumulator, root, children);
	});
var $jxxcarlson$xmarkdown_compiler$Render$Tree$renderStandardBranch = F5(
	function (params, settings, accumulator, root, children) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				A2($jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderAttributes, settings, root),
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
						A2($elm$html$Html$Attributes$style, 'width', '100%'),
						A2(
						$elm$html$Html$Attributes$style,
						'gap',
						$elm$core$String$fromFloat(settings.interBlockSpacing) + 'px')
					])),
			_Utils_ap(
				A4($jxxcarlson$xmarkdown_compiler$Render$TreeSupport$renderBody, params, settings, accumulator, root),
				A2(
					$elm$core$List$map,
					A3($jxxcarlson$xmarkdown_compiler$Render$Tree$renderTree_, params, settings, accumulator),
					children)));
	});
var $jxxcarlson$xmarkdown_compiler$Render$Tree$renderTree_ = F4(
	function (params, settings, accumulator, tree) {
		var root = $maca$elm_rose_tree$RoseTree$Tree$value(tree);
		var _v0 = $maca$elm_rose_tree$RoseTree$Tree$children(tree);
		if (!_v0.b) {
			return A4($jxxcarlson$xmarkdown_compiler$Render$Tree$renderLeafNode, params, settings, accumulator, root);
		} else {
			var children = _v0;
			return A5($jxxcarlson$xmarkdown_compiler$Render$Tree$renderBranchNode, params, settings, accumulator, root, children);
		}
	});
var $jxxcarlson$xmarkdown_compiler$Render$Tree$renderTree = F4(
	function (params, settings, accumulator, tree) {
		var root = $maca$elm_rose_tree$RoseTree$Tree$value(tree);
		var isBoxLike = function (block) {
			var _v2 = $jxxcarlson$xmarkdown_compiler$AST$Language$getName(block);
			if (_v2.$ === 'Nothing') {
				return false;
			} else {
				var name = _v2.a;
				return name === 'box';
			}
		};
		var fontStyle = function () {
			var _v1 = A2($elm$core$Dict$get, 'style', root.properties);
			if ((_v1.$ === 'Just') && (_v1.a === 'italic')) {
				return 'italic';
			} else {
				return 'normal';
			}
		}();
		var borderColor = function () {
			var _v0 = params.theme;
			if (_v0.$ === 'Light') {
				return 'rgba(179, 204, 230, 1)';
			} else {
				return 'rgba(153, 153, 153, 0.5)';
			}
		}();
		var blockAttrs = _List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'width',
				$elm$core$String$fromInt(settings.width) + 'px'),
				A2(
				$elm$html$Html$Attributes$style,
				'font-size',
				$elm$core$String$fromInt(settings.fontSize) + 'px'),
				A2($elm$html$Html$Attributes$style, 'font-style', fontStyle)
			]);
		return isBoxLike(root) ? A2(
			$elm$html$Html$div,
			blockAttrs,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-bottom', '0px'),
							A2($elm$html$Html$Attributes$style, 'border', '4px solid ' + borderColor),
							A2($elm$html$Html$Attributes$style, 'margin-left', 'auto'),
							A2($elm$html$Html$Attributes$style, 'margin-right', 'auto'),
							A2(
							$elm$html$Html$Attributes$style,
							'width',
							$elm$core$String$fromInt(settings.width - 60) + 'px')
						]),
					_List_fromArray(
						[
							A4($jxxcarlson$xmarkdown_compiler$Render$Tree$renderTree_, params, settings, accumulator, tree)
						]))
				])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'font-style', fontStyle),
					A2(
					$elm$html$Html$Attributes$style,
					'font-size',
					$elm$core$String$fromInt(settings.fontSize) + 'px')
				]),
			_List_fromArray(
				[
					A4($jxxcarlson$xmarkdown_compiler$Render$Tree$renderTree_, params, settings, accumulator, tree)
				]));
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$renderForest = F4(
	function (params, settings, accumulator, forest) {
		return A2(
			$elm$core$List$map,
			A3($jxxcarlson$xmarkdown_compiler$Render$Tree$renderTree, params, settings, accumulator),
			forest);
	});
var $jxxcarlson$xmarkdown_compiler$AST$Language$getExpressionContent = function (block) {
	var _v0 = block.body;
	if (_v0.$ === 'Left') {
		return _List_Nil;
	} else {
		var exprs = _v0.a;
		return exprs;
	}
};
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$getText = function (expression) {
	switch (expression.$) {
		case 'Text':
			var str = expression.a;
			return $elm$core$Maybe$Just(str);
		case 'VFun':
			var str = expression.b;
			return $elm$core$Maybe$Just(
				A3($elm$core$String$replace, '`', '', str));
		case 'Fun':
			var expressions = expression.b;
			return $elm$core$Maybe$Just(
				A2(
					$elm$core$String$join,
					' ',
					$elmcraft$core_extra$Maybe$Extra$values(
						A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$AST$ASTTools$getText, expressions))));
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$getValue = F2(
	function (key, ast) {
		var _v0 = A2($jxxcarlson$xmarkdown_compiler$AST$ASTTools$getBlockByName, key, ast);
		if (_v0.$ === 'Nothing') {
			return '(' + (key + ')');
		} else {
			var block = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				$elmcraft$core_extra$Maybe$Extra$values(
					A2(
						$elm$core$List$map,
						$jxxcarlson$xmarkdown_compiler$AST$ASTTools$getText,
						$jxxcarlson$xmarkdown_compiler$AST$Language$getExpressionContent(block))));
		}
	});
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$title = function (ast) {
	return A2($jxxcarlson$xmarkdown_compiler$AST$ASTTools$getValue, 'title', ast);
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Types$SelectId = function (a) {
	return {$: 'SelectId', a: a};
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $jxxcarlson$xmarkdown_compiler$Render$TOCTree$renderTocItem = F4(
	function (theme, editCount, numberToLevel, block) {
		var level = A2(
			$elm$core$Maybe$withDefault,
			1,
			A2(
				$elm$core$Maybe$andThen,
				$elm$core$String$toInt,
				A2($elm$core$Dict$get, 'level', block.properties)));
		var sectionNumber = ((numberToLevel > 0) && (_Utils_cmp(level, numberToLevel) < 1)) ? A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm$core$Dict$get, 'label', block.properties)) : '';
		var indent = 16 + ((level - 1) * 14);
		var liStyle = _List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'margin-left',
				$elm$core$String$fromInt(indent) + 'px'),
				A2($elm$html$Html$Attributes$style, 'margin-bottom', '8px'),
				A2($elm$html$Html$Attributes$style, 'list-style-type', 'none')
			]);
		var extractText = function (expr) {
			if (expr.$ === 'Text') {
				var text = expr.a;
				return text;
			} else {
				return '';
			}
		};
		var headingText = function () {
			var _v0 = block.body;
			if (_v0.$ === 'Right') {
				var exprs = _v0.a;
				return $elm$core$String$concat(
					A2($elm$core$List$map, extractText, exprs));
			} else {
				return '';
			}
		}();
		var displayText = $elm$core$String$isEmpty(sectionNumber) ? ($elm$core$String$isEmpty(headingText) ? 'Untitled' : headingText) : (sectionNumber + (' ' + headingText));
		var elementId = 'e-' + ($elm$core$String$fromInt(block.meta.lineNumber) + ('.' + $elm$core$String$fromInt(editCount)));
		return A2(
			$elm$html$Html$li,
			liStyle,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#' + elementId),
							A2(
							$elm$html$Html$Attributes$style,
							'color',
							A2(
								$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
								function ($) {
									return $.link;
								},
								theme)),
							A2(
							$elm$html$Html$Events$preventDefaultOn,
							'click',
							$elm$json$Json$Decode$succeed(
								_Utils_Tuple2(
									$jxxcarlson$xmarkdown_compiler$XMarkdown$Types$SelectId(elementId),
									true)))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(displayText)
						]))
				]));
	});
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$matchBlockName2 = F3(
	function (key, key2, block) {
		return _Utils_eq(
			$elm$core$Maybe$Just(key),
			$jxxcarlson$xmarkdown_compiler$AST$Language$getName(block)) || _Utils_eq(
			$elm$core$Maybe$Just(key2),
			$jxxcarlson$xmarkdown_compiler$AST$Language$getName(block));
	});
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$filterBlocksOnName2 = F3(
	function (name, name2, blocks) {
		return A2(
			$elm$core$List$filter,
			A2($jxxcarlson$xmarkdown_compiler$AST$ASTTools$matchBlockName2, name, name2),
			blocks);
	});
var $jxxcarlson$xmarkdown_compiler$AST$ASTTools$tableOfContents = function (ast) {
	return A3(
		$jxxcarlson$xmarkdown_compiler$AST$ASTTools$filterBlocksOnName2,
		'section',
		'chapter',
		$elm$core$List$concat(
			A2($elm$core$List$map, $jxxcarlson$xmarkdown_compiler$Library$Tree$flatten, ast)));
};
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $jxxcarlson$xmarkdown_compiler$Render$TOCTree$view = F3(
	function (theme, viewParameters, documentAst) {
		var tocAST = $jxxcarlson$xmarkdown_compiler$AST$ASTTools$tableOfContents(documentAst);
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$ul,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'padding-left', '0'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '0')
					]),
				A2(
					$elm$core$List$map,
					A3($jxxcarlson$xmarkdown_compiler$Render$TOCTree$renderTocItem, theme, viewParameters.counter, viewParameters.settings.numberToLevel),
					tocAST))
			]);
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$render = F2(
	function (params, _v0) {
		var accumulator_ = _v0.a;
		var forest_ = _v0.b;
		var renderSettings = $jxxcarlson$xmarkdown_compiler$Render$Theme$makeSettings(params);
		var title = A2(
			$elm$html$Html$p,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Attributes$style,
					'font-size',
					$elm$core$String$fromInt(renderSettings.titleSize) + 'px')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$jxxcarlson$xmarkdown_compiler$AST$ASTTools$title(forest_))
				]));
		var viewParameters = {attr: _List_Nil, counter: params.editCount, selectedId: params.selectedId, settings: renderSettings};
		var toc = A3($jxxcarlson$xmarkdown_compiler$Render$TOCTree$view, params.theme, viewParameters, forest_);
		var banner = A2(
			$elm$core$Maybe$map,
			function (elem) {
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'height', '40px')
						]),
					_List_fromArray(
						[elem]));
			},
			A2(
				$elm$core$Maybe$andThen,
				$elm$core$List$head,
				A2(
					$elm$core$Maybe$map,
					A4($jxxcarlson$xmarkdown_compiler$Render$Block$renderBody, params.editCount, accumulator_, renderSettings, _List_Nil),
					$jxxcarlson$xmarkdown_compiler$AST$ASTTools$banner(forest_))));
		return {
			banner: banner,
			body: A4($jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$renderForest, params, renderSettings, accumulator_, forest_),
			interBlockSpacing: renderSettings.interBlockSpacing,
			title: title,
			toc: toc
		};
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$compile = F2(
	function (params, sourceText) {
		return A2(
			$jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$render,
			params,
			A2(
				$jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$parseToForestWithAccumulator,
				params,
				$elm$core$String$lines(sourceText)));
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$API$compileOutput = $jxxcarlson$xmarkdown_compiler$XMarkdown$Compiler$compile;
var $author$project$Main$InputText = function (a) {
	return {$: 'InputText', a: a};
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Sync$encode = function (h) {
	return A2(
		$elm$json$Json$Encode$encode,
		0,
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'mode',
					$elm$json$Json$Encode$string(h.mode)),
					_Utils_Tuple2(
					'start',
					$elm$json$Json$Encode$int(h.start)),
					_Utils_Tuple2(
					'end',
					$elm$json$Json$Encode$int(h.end)),
					_Utils_Tuple2(
					'tick',
					$elm$json$Json$Encode$int(h.tick))
				])));
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Sync$highlightAttribute = function (mh) {
	if (mh.$ === 'Just') {
		var h = mh.a;
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$attribute,
				'highlight',
				$jxxcarlson$xmarkdown_compiler$XMarkdown$Sync$encode(h))
			]);
	} else {
		return _List_Nil;
	}
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Editor$textChangeDecoder = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['detail', 'source']),
	$elm$json$Json$Decode$string);
var $jxxcarlson$xmarkdown_compiler$XMarkdown$Editor$view = function (config) {
	return A3(
		$elm$html$Html$node,
		'codemirror-editor',
		A2(
			$elm$core$List$cons,
			A2($elm$html$Html$Attributes$attribute, 'load', config.source),
			A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$Events$on,
					'text-change',
					A2($elm$json$Json$Decode$map, config.onInput, $jxxcarlson$xmarkdown_compiler$XMarkdown$Editor$textChangeDecoder)),
				_Utils_ap(
					$jxxcarlson$xmarkdown_compiler$XMarkdown$Sync$highlightAttribute(config.highlight),
					config.attrs))),
		_List_Nil);
};
var $jxxcarlson$xmarkdown_compiler$XMarkdown$API$viewEditor = $jxxcarlson$xmarkdown_compiler$XMarkdown$Editor$view;
var $author$project$Main$editorView = function (model) {
	return $jxxcarlson$xmarkdown_compiler$XMarkdown$API$viewEditor(
		{attrs: _List_Nil, highlight: model.syncHighlight, onInput: $author$project$Main$InputText, source: model.initialText});
};
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $author$project$Main$px = function (n) {
	return $elm$core$String$fromInt(n) + 'px';
};
var $author$project$Main$renderPanel = F2(
	function (params, elements) {
		var settings = $jxxcarlson$xmarkdown_compiler$Render$Theme$makeSettings(params);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
					A2(
					$elm$html$Html$Attributes$style,
					'gap',
					$elm$core$String$fromInt(
						$elm$core$Basics$round(settings.interBlockSpacing)) + 'px'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2(
					$elm$html$Html$Attributes$style,
					'background-color',
					A2(
						$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
						function ($) {
							return $.background;
						},
						settings.theme)),
					A2(
					$elm$html$Html$Attributes$style,
					'color',
					A2(
						$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
						function ($) {
							return $.text;
						},
						settings.theme))
				]),
			elements);
	});
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Main$view = function (model) {
	var g = $author$project$Main$geometry(model);
	var params = _Utils_update(
		$jxxcarlson$xmarkdown_compiler$XMarkdown$API$defaultCompilerParameters,
		{docWidth: g.docWidth, editCount: model.count, numberToLevel: 3, selectedId: model.selectId, theme: model.theme});
	var compilerOutput = A2($jxxcarlson$xmarkdown_compiler$XMarkdown$API$compileOutput, params, model.sourceText);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('app')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('app-header')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('toolbar')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('toolbar-button'),
										$elm$html$Html$Events$onClick($author$project$Main$OpenFileRequested)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Open File')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('toolbar-button'),
										$elm$html$Html$Events$onClick($author$project$Main$SaveFileRequested)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Save File')
									])),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('toolbar-button'),
										$elm$html$Html$Events$onClick($author$project$Main$NewFileRequested)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('New File')
									])),
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$id('fileName'),
										A2($elm$html$Html$Attributes$style, 'margin-left', '8px'),
										A2($elm$html$Html$Attributes$style, 'padding', '6px'),
										A2($elm$html$Html$Attributes$style, 'border', '1px solid #ccc'),
										A2($elm$html$Html$Attributes$style, 'border-radius', '4px'),
										A2($elm$html$Html$Attributes$style, 'font-size', '14px'),
										$elm$html$Html$Attributes$value(model.fileName),
										$elm$html$Html$Events$onInput($author$project$Main$FileNameChanged),
										$elm$html$Html$Attributes$placeholder('File name...')
									]),
								_List_Nil),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('toolbar-button theme-toggle'),
										$elm$html$Html$Events$onClick($author$project$Main$ToggleTheme),
										$elm$html$Html$Attributes$title(
										function () {
											var _v0 = model.theme;
											if (_v0.$ === 'Light') {
												return 'Switch to Dark Mode';
											} else {
												return 'Switch to Light Mode';
											}
										}()),
										A2($elm$html$Html$Attributes$style, 'background-color', 'black'),
										A2($elm$html$Html$Attributes$style, 'margin-left', 'auto')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										function () {
											var _v1 = model.theme;
											if (_v1.$ === 'Light') {
												return '🌙';
											} else {
												return '☀️';
											}
										}())
									]))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('app-title')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('XMarkdown TOC+Sync Demo')
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('panels')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('panel editor-panel'),
								A2(
								$elm$html$Html$Attributes$style,
								'width',
								$author$project$Main$px(g.editorW))
							]),
						_List_fromArray(
							[
								$author$project$Main$editorView(model)
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('panel rendered-panel'),
								$elm$html$Html$Attributes$id($jxxcarlson$xmarkdown_compiler$XMarkdown$API$renderedTextId),
								A2(
								$elm$html$Html$Attributes$style,
								'width',
								$author$project$Main$px(g.renderedW)),
								A2(
								$elm$html$Html$Attributes$style,
								'background-color',
								A2(
									$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
									function ($) {
										return $.background;
									},
									model.theme))
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$map,
								$author$project$Main$Render,
								A2($author$project$Main$renderPanel, model.compilerParameters, compilerOutput.body))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$Attributes$style,
								'width',
								$author$project$Main$px(g.tocW)),
								A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
								A2($elm$html$Html$Attributes$style, 'overscroll-behavior', 'contain'),
								A2($elm$html$Html$Attributes$style, 'min-height', '0'),
								A2(
								$elm$html$Html$Attributes$style,
								'background',
								A2(
									$jxxcarlson$xmarkdown_compiler$Render$Theme$themedColor,
									function ($) {
										return $.background;
									},
									model.theme))
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$map,
								$author$project$Main$Render,
								A2($author$project$Main$renderPanel, model.compilerParameters, compilerOutput.toc))
							]))
					]))
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (window) {
			return $elm$json$Json$Decode$succeed(
				{window: window});
		},
		A2(
			$elm$json$Json$Decode$field,
			'window',
			A2(
				$elm$json$Json$Decode$andThen,
				function (windowWidth) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (windowHeight) {
							return $elm$json$Json$Decode$succeed(
								{windowHeight: windowHeight, windowWidth: windowWidth});
						},
						A2($elm$json$Json$Decode$field, 'windowHeight', $elm$json$Json$Decode$int));
				},
				A2($elm$json$Json$Decode$field, 'windowWidth', $elm$json$Json$Decode$int)))))(0)}});}(this));