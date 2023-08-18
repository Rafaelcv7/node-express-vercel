"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorize = exports.RequestLogger = exports.ErrorHandler = void 0;
function ErrorHandler(err, req, res, next) {
    console.log(err.message);
    res.send(err.message);
}
exports.ErrorHandler = ErrorHandler;
async function RequestLogger(req, res, next) {
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    console.log(`[${req.method}] ${req.url} - ${convertMilliseconds(delta)}`);
}
exports.RequestLogger = RequestLogger;
function convertMilliseconds(ms) {
    let returnable = ms + 'ms';
    if (ms > 1000) {
        const toSeconds = Math.floor(ms / 1000);
        returnable = toSeconds + 's';
        if (toSeconds > 60) {
            const toMinutes = Math.floor(toSeconds / 60);
            returnable = toMinutes + 'm';
        }
    }
    return returnable;
}
function Authorize(req, res, next) {
    const pass = 1234;
    if (pass === 12345) {
        next();
    }
    else {
        res.status(403);
        throw new Error('User not authorized');
    }
}
exports.Authorize = Authorize;
