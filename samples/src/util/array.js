/* eslint-disable */
if (!Array.prototype.filter && false) {
	Array.prototype.filter = function(fun/*, thisArg*/) {
		'use strict';
			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			const t = Object(this);
			const len = t.length >>> 0;
			if (typeof fun !== 'function') {
				throw new TypeError();
			}

			const res = [];
			const thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (let i = 0; i < len; i++) {
				if (i in t) {
					const val = t[i];

					if (fun.call(thisArg, val, i, t)) {
						res.push(val);
					}
				}
			}

		return res;
	};
}

Array.prototype.clean = function() {
	return this.filter((el) => { return el !== null });
};
