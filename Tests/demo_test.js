const mongoose=require('mongoose');
mongoose.plugin(require('mongoose-ref-validator'));
const mocha=require('mocha');
const User=require('../app/models/user');
const PlayMove =require('../app/models/PlayMoves');
const Board=require('../app/models/boardCollection');
const assert=require('assert');

describe('saving records to a database',function () {
    var board;
    it('should save a record in Board collection', function () {
         board=new Board({
            board_id: new mongoose.Types.ObjectId,
            board_name:'Pad',
            starttime:Date,
            endtime:Date,
            winner:'Srinivas'
        });
        board.save().then(function (done) {
            assert(board.isNew===false);
            done();

        });
    });

    it('should save a record in playmoves collection', function () {
        var char=new PlayMove({
            board_id:  new mongoose.Types.ObjectId,
            //username: Board.ObjectId,
            move_seq:1211,
            move_val:'Gone123'

        });
        char.save().then(function (done) {
            assert(char.isNew===false);
            done();
        });

    });
});
