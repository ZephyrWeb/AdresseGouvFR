var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as Axios from "axios";
import { Commune, Departement, Region } from "./Model";
import { Search } from "./Parameter";
var Geo = /** @class */ (function () {
    function Geo() {
        this.axios = Axios.default.create({
            baseURL: 'https://geo.api.gouv.fr',
            timeout: 5000,
        });
    }
    Geo.prototype.Search = function () {
        return Search;
    };
    Geo.prototype.communes = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/communes', { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    Geo.prototype.communeParCode = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/communes/' + terms.code, { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, new Commune];
                }
            });
        });
    };
    Geo.prototype.communesParDepartement = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/departements/' + terms.code + '/communes', { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    Geo.prototype.departements = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/departements', { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    Geo.prototype.departementByCode = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/departements/' + terms.code, { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, new Departement];
                }
            });
        });
    };
    Geo.prototype.departementsByRegion = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/regions/' + terms.code + '/departements', { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_6 = _a.sent();
                        console.error(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    Geo.prototype.regions = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/regions', { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_7 = _a.sent();
                        console.error(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    Geo.prototype.regionByCode = function (terms) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios.get('/regions/' + terms.code, { params: terms.query })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_8 = _a.sent();
                        console.error(error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, new Region];
                }
            });
        });
    };
    return Geo;
}());
export { Geo };
