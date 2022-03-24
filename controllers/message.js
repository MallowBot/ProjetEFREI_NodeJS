module.exports = (app) => {
    const Message = app.models.Message;

    function addMessage(req, res) {
        let newMessage = new Message ({
            id_user1: req.body.id_user1,
            id_user2: req.body.id_user2,
            id_annonce: req.body.id_annonce,
            text: req.body.text
        })

        res.send(newMessage)
        newMessage.save()
    };
    
    function getTextById(req, res){ // Rechercher un message grace à son ID
        let gettextid = req.body._id;
        Message.findById(gettextid, function (err, docs) {res.send(docs)})
    }

return {addMessage,getTextById}
};
