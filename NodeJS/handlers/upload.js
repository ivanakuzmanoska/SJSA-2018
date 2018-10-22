var uploadFile = (req, res) => {

var f = {
    name: req.files.doc.name,
    type: req.fies.doc.mimetype,
  
    };
    res.send(f);
}



module.exports = {
    uploadFile
} 