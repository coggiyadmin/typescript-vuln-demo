function public_read(path: str) -> str:
    return open("/data/" + path).read()

module.exports = { public_run: public_run };
