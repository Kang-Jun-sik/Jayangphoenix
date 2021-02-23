module.exports = function (app, User) {
    //CREATE
    app.post('/sign_in', function (req, res) {
        var user = new User();
        user.userId = req.body.userId;
        user.userPw = req.body.userPw;
        user.coin = req.body.coin;

        user.save(function (err) {
            if (err) {
                console.error(err);
                res.json({message: '생성 실패'});
                return;
            }
            res.json({message: '생성 완료!'});
        });
    });

    //Read
    app.get('/find/:userId', function (req, res) {
        User.findOne({userId: req.params.userId}, function (err, user) {
            if (err) return res.status(500).json({error: err});
            if (!user) return res.status(404).json({error: '해당 아이디가 존재하지 않습니다.'});
            res.json(user);
        })
    });

    //Update
    app.put('/update/:userId', function (req, res) {
        User.findOne({userId: req.params.userId}, function (err, user) {
            if (err) return res.status(500).json({error: 'Database Failure!'});
            if (!user) return res.status(404).json({error: '해당 아이디가 존재하지 않습니다.'});

            user.userPw = req.body.userPw;
            user.coin = req.body.coin;
            user.save(function (err) {
                if (err) res.status(500).json({error: 'Failed to update!'});
                res.json({message: '수정이 완료되었습니다!'});
            });
        });
    });

    //Delete
    app.delete('/delete', function (req, res) {
        User.remove({userId: req.body.userId}, function (err, output) {
            if (err) return res.status(500).json({error: "Database Failure!"});
            res.json({message: "삭제 완료"});
            res.status(204).end();
        })
    });
}
