"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatadorData = void 0;
var FormatadorData = /** @class */ (function () {
    function FormatadorData() {
    }
    FormatadorData.formatarPTBR = function (data) {
        var opcoesFormato = { timeZone: "America/Sao_Paulo" };
        return data.toLocaleString("pt-BR", opcoesFormato);
    };
    return FormatadorData;
}());
exports.FormatadorData = FormatadorData;
