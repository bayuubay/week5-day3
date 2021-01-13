class articleController {
    home(req, res) {
        switch (req.params.path) {
            case 'all':
               return res.send('ini all dari page article');
            case 'find':
                return res.send('ini find dari page article');
            case 'search':
                const id = (req.params.id) ? req.params.id : '';
                return res.send('ini page artikel search ' + id);
            default:
                return res.send('default article');
                break;
        }
    }
}
module.exports = Object.freeze(new articleController())