import { Format } from "./Format";
import { Geometry } from "./Geometry";
var Search = /** @class */ (function () {
    function Search() {
        this.fields = ['nom', 'centre'];
        this.format = Format.json;
        this.geometry = Geometry.centre;
        // Nombre d'éléments à retourner
        this.limit = 5;
    }
    Search.create = function (params) {
        var search = new this;
        for (var _i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            search[key] = value;
        }
        return search;
    };
    Object.defineProperty(Search.prototype, "query", {
        get: function () {
            var query = {};
            for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (key === 'fields') {
                    query[key] = value.join(',');
                }
                else if (value) {
                    query[key] = value;
                }
            }
            return query;
        },
        enumerable: true,
        configurable: true
    });
    return Search;
}());
export { Search };
